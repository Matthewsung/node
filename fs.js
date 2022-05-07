// const fs = require('fs');
// fs.readFile('./readme.txt',(err,data) => {
//   if(err){
//     throw err;
//   }
//   console.log(data) //2진법으로 데이터를 출력
//   console.log(data.toString())
// })

//promise 사용
const fs = require('fs').promises;
fs.readFile('./readme.txt').then((data) => {
  
  console.log(data) //2진법으로 데이터를 출력
  console.log(data.toString())
}).catch((err)=>{
    throw err;
})