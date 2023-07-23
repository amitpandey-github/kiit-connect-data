const express = require("express");
const app = express();
const cors = require("cors");
const cheerio = require('cheerio');
const { default: axios } = require("axios");
const fs = require("fs");

app.use(express.json());
app.use(cors());


app.get("/",async(req,res)=>{
    // const rp =await callFun();

    // const $ = cheerio.load(rp.data);
    // $('#downloadhere > a').each(function (a,b) {
    //     const url = $(b).attr('href');
    //     console.log(url);
    //     // if (url) {
    //     //     console.log(url);
    //     // }
    // })
   
    // // console.log($.html());

    // fs.writeFileSync("test2.html",$.html());

//    var rp =await Insta("https://www.instagram.com/p/Cq2zegUpkiQ/?igshid=YmMyMTA2M2Y=");
//    console.log(rp);
// filePersuit("https://www.youtube.com/watch?v=tb8gHvYlCFs");
const v = await aiovideodl("https://www.youtube.com/watch?v=tb8gHvYlCFs");
console.log(v);
    res.json({data:true});
})



async function Insta(match) {
    const result = []
                    const form = {
                        url: match,
                        submit: '',
                    }
                    const { data } = await axios(`https://downloadgram.org/`, {
                        method: 'POST',
                        data: form
                    })
                    const $ = cheerio.load(data)
                    $('#downloadhere > a').each(function (a,b) {
                    const url = $(b).attr('href')
                    if (url) result.push(url)
                })
                return result
    }






function aiovideodl(link) {	
	return new Promise((resolve, reject) => {	
		axios({	
			url: 'https://aiovideodl.ml/',	
			method: 'GET',	
			headers: {	
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",	
				"cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"	
			}	
		}).then((src) => {	
			let a = cheerio.load(src.data)	
			let token = a('#token').attr('value')	
			axios({	
				url: 'https://aiovideodl.ml/wp-json/aio-dl/video-data/',	
				method: 'POST',	
				headers: {	
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",	
					"cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"	
				},	
				data: new URLSearchParams(Object.entries({	
					'url': link,	
					'token': token	
				}))	
			}).then(({	
				data	
			}) => {	
				resolve(data)	
			})	
		})	
	})	
}

async function filePersuit(match) {
    const result = []
                    const form = {
                        q: match,
                        submit: '',
                    }
                    const { data } = await axios(`https://x2download.app/en70`, {
                        method: 'GET',
                        data: form
                    })
                    const $ = cheerio.load(data)



                    
                //     $('#downloadhere > a').each(function (a,b) {
                //     const url = $(b).attr('href')
                //     if (url) result.push(url)
                // })
                // return result
                // $(".badge-wrap > a").each((a,b)=>{
                //     // const url = $(b).attr('href')
                //     console.log(b.children);

                // })
                // console.log(first)
                fs.writeFileSync("test3.html",$.html());

                // console.log($.html());
    }



const callFun=async()=>{
    return await axios.post("https://downloadgram.org/",{
     
    data:{     
    url:"https://www.instagram.com/p/Cq2zegUpkiQ/?igshid=YmMyMTA2M2Y=",submit:""}});
    // console.log(res);
}






app.listen(5000,()=>{
    console.log("Server is listening on port : 5000");
})