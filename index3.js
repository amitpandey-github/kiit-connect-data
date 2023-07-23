const { default: axios } = require("axios");
const cheerio = require("cheerio");
// const { data } = require("cheerio/lib/api/attributes");
const express = require("express");


const fs = require("fs");

const app = express();

app.use(express.json());







app.get("/get",async(req,res)=>{

    const url = req.body.url;

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const subject = $('.subject');

    const subjectList = [];


    for (let index = 0; index < subject.length; index++) {
        const element = subject[index];

    const title = $(element).find("div").first().text();
    const heading = $(element).find(".card-title");
    const link = $(element).find("a");
    const finalLink = link.attr().href.replace("/app/view/","");

    const data = {
        
        "mimeType": "application/pdf",
        "year":null,
        "type":null,
        "name":heading.text(),
        "id":link.attr().href.replace("/app/view/",""),
        "solution":null, 
          
    }


    subjectList.push({subject:title,data});        
    }




  res.json(subjectList);



  const jsonData = JSON.stringify(subjectList, null, 2);
  
  // Replace 'papers.json' with the desired file name and path
  fs.writeFile(req.body.sem, jsonData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
    } else {
      console.log('JSON file has been saved successfully!');
    }
  });


    // res.json(heading);




    // for (let i = 0; i < subject.length; i++) {
    //     const element = subject[i];
    //     console.log(first)
        
    // }

    // fs.writeFile("./video/html.txt",$.html().toString(),(err)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log("Written");
    // })

    // console.log($.html());



})


app.listen(4000,()=>{
    console.log("App is listening on port 5000");
})
