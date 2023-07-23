const fs = require('fs');
const path = require("path");
const { rimraf } = require('rimraf');
const shedular = require("node-schedule");




const dir = __dirname+"/video";


// fs.readdir(dir,(err,files)=>{
//  files.length>0 && files.forEach((file,index)=>{

//     fs.stat(path.join(dir,file),(err,stat)=>{
//         var now,endtime;
//         now = new Date().getTime();
//         endtime = new Date(stat.ctime).getTime()+15000;
        

//         if(now>endtime){
//           return rimraf(path.join(dir,file)).then(()=>console.log("deleted"))
//         }


//     })
    
// })
// //    console.log(p);
// })



shedular.scheduleJob("abc",'*/2 * * * * *',()=>{
    console.log("hello World")
})







// console.log(dir);