const ob1 = {a:1,b:2,c:3,d:4};
const ob2 = {b:2,d:4,e:9,f:2};

let input = [1,2,3,4]
// input.shift()
//  function secondLargest(input) {
//     let num = [...input].sort();

//     for (let i =num.length-1; i>=0; i--) {
//         if(num[i]==num[i-1]){
//             continue;
//         }

//         return num[i-1];

        
//     }
//  }




function rotateArrayBy2(input){
    for (let i = 0; i < 2; i++) {
      input.shift();

    //    console.log(p)  
    }

    return input;
}





// function findMissingOdd(){
//     const arr = [3,3,7,9,13];
    
//     const p = [...new Set(arr)];


//     // console.log(arr.length)

//     for (let i = 0; i < p.length-1; i++) {
//         if((arr[i]+2)!=arr[i+1]){
//            return arr[i]+2;
//             // continue;
        
//         }
        
        
//     }
// }





const  str = "hello";
const p = new String(str);
p[0]= 9;

console.log(p);

const reverseStr =()=>{
    const str = "How are you?";

    const arr = str.split(" ");
    
  const p =  arr.map(val=>val.split('').reverse().join('')).join(' ');

    return p;


}
console.log(reverseStr())