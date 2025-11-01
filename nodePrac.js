//read file synchronously
// const fs = require("fs");
// try{
// const data = fs.readFileSync("file.txt", "utf-8");
// console.log(data)
// }catch(err){
//     console.log(err)
// }

//read file Async
// const fs = require("fs");
// fs.readFile("file.txt" ,"utf-8", (err,data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// });

//write file sync
// const fs = require('fs');
// const data = "hello from node practice";
// try{
// fs.writeFileSync("new.txt",data,"utf-8")
// console.log("written successfully")
// }catch(err) {
// console.log("error in writing")
// }

//write file async
// const fs = require('fs');
// const data = "hello from node writefile async";
// fs.writeFile("new1.txt",data,"utf-8",(err) => {
//     if(err){
//         console.log("error occured")
//     }else{
//         console.log("data written")
//     }
// })

//append file
// const fs = require('fs');
// const data = "adding some text";
// fs.appendFile("new1.txt",data,"utf-8",(err) => {
//     if(err){
//         console.log("error occured")
//     }else{
//         console.log("data written")
//     }
// })

//readFile using streams
// const fs = require("fs");
// const readable = fs.createReadStream("bigFile.txt","utf-8");
// readable.on("data" , (chunk) => {
//     console.log("received chunk",chunk)
// })
// readable.on("err", (err) => {
//     console.log("error" , err)
// })
// readable.on("end", () => {
//     console.log("ended")
// })

//write stream
// const fs = require('fs');
// const writable = fs.createWriteStream("output.txt")
// writable.write("Hello..! \n");
// writable.write("Hi..! \n");
// writable.write("Greet..! \n");
// writable.end();
// writable.on("finish",() => {
//     console.log("Writing finished")
// })

//stream using pipe
// const fs = require("fs")
// const readStream = fs.createReadStream("file.txt","utf-8")
// const writeStream = fs.createWriteStream("new.txt","utf-8")
// readStream.pipe(writeStream);
// writeStream.on("finish" ,() => {
//     console.log("finished writing")
// })
