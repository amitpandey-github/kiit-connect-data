const { default: axios } = require("axios");
const cheerio = require("cheerio");
// const { data } = require("cheerio/lib/api/attributes");
const express = require("express");


const fs = require("fs");

const app = express();

app.use(express.json());







app.get("/get",async(req,res)=>{

   

    const test =[];

    const url = req.body.url;

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const subject = $('.subject');
    
   

    const finaldata =[]
    for (let index = 0; index < subject.length; index++) {
      const datas = [];
      const element = subject[index];
      const title = $(element).find("div").first().text();

      const paper = $(element).find(".paper");

      for (let pap = 0; pap < paper.length; pap++) {
        const pp = paper[pap];

        const year = $(pp).find('td')[0];

        const name = $(pp).find('td')[1];

const link = $(pp).find('td')[2];
const solution = $(pp).find('td')[3];
const sol = $(solution).find('a');
const lin = $(link).find('a');



const data = {
            "mimeType": "application/pdf",
            "year":year.children[0].data,
            "type":name.children[0].data,
            "name":lin.text(),
            "id":lin.attr().href.replace("/app/view/",""),
            "solution":sol.attr()==null?null:sol.attr().href.replace("/app/view/",""), 
        }


datas.push(data);

        
      }

finaldata.push({
    "name":title.trim(),
    "pyqs":datas
     
    
})








      
    }



    res.json(finaldata);















const section=[]


section.push({
  "First":finaldata
})
// res.json(test);





// console.log(finaldata[0]['data']);

// const firstPaper = paper.first();

  const jsonData = JSON.stringify(section, null, 2);
  
  // Replace 'papers.json' with the desired file name and path
  fs.writeFile(req.body.sem, jsonData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
    } else {
      console.log('JSON file has been saved successfully!');
    }
  });






// console.log(subject.first());


        // console.log(data);

// const name = $(firstPaper).find('td')[1];

// console.log(firsttd.children[0].data);

// console.log(firsttd);

//  const url = $(element).find('a');


// $(firstPaper).find('td').each((index,element)=>{
  
//     if(index==2){
//         const url = $(element).find('a');
//         console.log(url.attr().href);
//     }else{
//         console.log(element.children[0].data);
//     }



//    

   
// })

// console.log();

    // console.log($('.subject').each((index,element)=>{

    //     const firstItem = element.firstChild;

    //     const getPaper = $(firstItem).find(".paper").each((index,pap)=>{
    //     const firstpaper = 
    //     });
    //     console.log(getPaper);


    // }));
    
})


app.listen(5000,()=>{
    console.log("App is listening on port 5000");
})
