// Find longest word in the string
let str = "i love programming";
let words = str.split(" ");
let longest = " ";
for(let word of words){
    if(word.length>longest.length){
        longest = word;
    }
}
console.log(longest)

// Remove vowels from the string
let str = "programming";
let cons = [];
for(let s of str){
    if(s!="a" && s!="e" && s!="i" && s!="o" && s!="u"){
        cons.push(s);
    }
}
console.log(cons.join(""));

let str = "Javascript";
let vow = "aeiouAEIOU";
let final = "";
for(let letter of str){
    if(!vow.includes(letter)){
        final+=letter;
    }
}
console.log(final)

// Remove vowels from the sentence
let str = "i love programming";
let vow = "aeiouAEIOU";
let words = str.split(" ");
let res = "";
for(word of words){
    let newWord = "";
    for(letter of word){
    if(!vow.includes(letter)){
        newWord+=letter;
    }
}
res+= newWord+ " ";
}
console.log(res)

// Missing number from array
let arr = [21,22,23,25,27,29,31]
let min = Math.min(...arr);
let max = Math.max(...arr);

for(let i=min;i<=max;i++){
    if(!arr.includes(i)){
        console.log(i)
    }
}

// palindrome
let arr = [1,2,3,5,1];
isPalin = true;
let n = arr.length;
for(let i=0;i<n/2;i++){
    if(arr[i] != arr[n-i-1]){
        isPalin = false;
        break;
    }
}
if(isPalin){
    console.log("Palindrome")
}else{
    console.log("not Palindrome")
}

// Remove duplicate/ unique numbers
let arr = [1,2,1,4,3,2,5,4];
let unique = [];
      for(let num of arr){
    if(!unique.includes(num)){
        unique.push(num);
    }
}
console.log(unique)

// ⁠To print 1 to 10 numbers using settimeout
let count = 1;
console.log("hello")
setTimeout(() => {
     for(let i=1;i<=10;i++){
         console.log(i);
     } 
},5000)

// print 1 to 10 with 1 sec gap
let count = 1;
console.log("hello");
 const timer = setInterval(() => {
    console.log(count);
    count++;
   
if(count>10){
    clearInterval(timer)
}
},1000)

// Count the Duplicate elements  without using any Condition and Methods
let arr = [1,1,0,1,1,0];
let dup = {};
for(let num of arr){
    if(dup[num]){
        dup[num]++;
    }else{
        dup[num]=1;
    }
}
console.log(dup)

// create a promise and resolve, true, when checking an array with some. else reject. and write true to a file if the promise is resolved else show error
const fs = require("fs");
      const p = new Promise((res, rej) => {
  let arr = [1, 2, 3, 4, 5, 6];
  if (arr.some((val) => val % 2 === 0)) {
    res(true);
  } else {
    rej(false);
  }
});
        p.then((result) => {
  fs.writeFile("output.txt", result.toString(), (err) => {
    if (err) {
      console.log("Error writing file:", err);
    } else {
      console.log("File written successfully!");
    }
  });
})
.catch((err) => {
  console.log("Promise rejected with:", err);
});

// implementation of apply(call,apply,bind)
let details = {
    name: "hema",
    place : "salem"
}
function intro(hobby1,hobby2,){
    console.log(`hey im ${this.name} from ${this.place}, i love ${hobby1} and ${hobby2}`)
}
      intro.apply(details,["painting","hearing music"])

// generate odd numbers in between 1 and 10 in reverse order
function* generatorOdd(){
    for(let i=10;i>=1;i--){
        if(i%2!=0){
            yield i;
        }
    }
}
    const oddNumber = generatorOdd()

for(let num of oddNumber){
    console.log(num)
}

// implementaion of callback function, using sum
function sum(a,b){
    sum= a+b;
    console.log("the sum is " + sum);
}
      function print(callback){
    callback(2,3)
}
print(sum)

// previous sum – arr- [1,2,3,4,5] =>output => [1,3,6,10,15]
const arr = [1,2,3,4,5,6,7];
const res = [];
for(let i=0;i<arr.length;i++){
    if(i===0){
        res.push(arr[i])
    }else{
    res.push(arr[i]+arr[i-1])
}
}
console.log(res)

// Array of objects
const invoices = [ 
    { id: 201, 
    customerId: 10, 
    total: 1500, 
    status: 'paid', 
    items: ['monitor', 'cable'], }, 
    { id: 202, 
    customerId: 11, 
    total: 2300, 
    status: 'unpaid', 
    items: ['laptop'], }, 
    { id: 203, 
    customerId: 10, 
    total: 600,
    status: 'paid', 
    items: ['keyboard', 'mouse'], }, 
    { id: 204, 
    customerId: 12, 
    total: 800, 
    status: 'cancelled', 
    items: ['webcam'], }, 
    { id: 205, 
    customerId: 15, 
    total: 800, 
    status: 'cancelled', 
    items: null, }, 
    ];
    function getInvoices(invoices,id){
        const invoice = invoices.find((inv) => inv.id === id)
      if(invoice){
          console.log(invoice.items.join(","))
      }
    }
    getInvoices( invoices, 203)

    















