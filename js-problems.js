// Find longest word in the string
let str = "i love programming";
let words = str.split(" ");
let longest = " ";
for (let word of words) {
  if (word.length > longest.length) {
    longest = word;
  }
}
console.log(longest);

// Remove vowels from the string
let str = "programming";
let cons = [];
for (let s of str) {
  if (s != "a" && s != "e" && s != "i" && s != "o" && s != "u") {
    cons.push(s);
  }
}
console.log(cons.join(""));

let str = "Javascript";
let vow = "aeiouAEIOU";
let final = "";
for (let letter of str) {
  if (!vow.includes(letter)) {
    final += letter;
  }
}
console.log(final);

// Remove vowels from the sentence
let str = "i love programming";
let vow = "AEIOUaeiou";
let res = "";
for(let ltr of str){
    if(!vow.includes(ltr)){
        res+=ltr;
    }
}
console.log(res)

// Missing number from array
let arr = [21, 22, 23, 25, 27, 29, 31];
let min = Math.min(...arr);
let max = Math.max(...arr);

for (let i = min; i <= max; i++) {
  if (!arr.includes(i)) {
    console.log(i);
  }
}

// palindrome
let arr = [1, 2, 3, 5, 1];
isPalin = true;
let n = arr.length;
for (let i = 0; i < n / 2; i++) {
  if (arr[i] != arr[n - i - 1]) {
    isPalin = false;
    break;
  }
}
if (isPalin) {
  console.log("Palindrome");
} else {
  console.log("not Palindrome");
}

// Remove duplicate/ unique numbers
let arr = [1, 2, 1, 4, 3, 2, 5, 4];
let unique = [];
for (let num of arr) {
  if (!unique.includes(num)) {
    unique.push(num);
  }
}
console.log(unique);

// ⁠To print 1 to 10 numbers using settimeout
let count = 1;
console.log("hello");
setTimeout(() => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}, 5000);

// print 1 to 10 with 1 sec gap
let count = 1;
console.log("hello");
const timer = setInterval(() => {
  console.log(count);
  count++;

  if (count > 10) {
    clearInterval(timer);
  }
}, 1000);

// Count the Duplicate elements  without using any Condition and Methods
let arr = [1, 1, 0, 1, 1, 0];
let dup = {};
for (let num of arr) {
  if (dup[num]) {
    dup[num]++;
  } else {
    dup[num] = 1;
  }
}
console.log(dup);

//add only truthy values in array
let arr = [0, 1, '', 'hema', false, true, null, undefined, NaN, '0', [], {}, ' ', 42, -5]
let numbers = arr.filter((val) => typeof val === 'number' && !isNaN(val) )
let res = numbers.reduce((acc,curr) => acc+curr)
console.log(res)

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
}).catch((err) => {
  console.log("Promise rejected with:", err);
});

//promise.all,allSettled,race,any
const p1 = new Promise((res,rej) => {
    setTimeout(() => {
        res("promise 1")
    },2000)
})
const p2 = new Promise((res,rej) => {
    setTimeout(() => {
        rej("promise 2")
    },3000)
})
const p3 = new Promise((res,rej) => {
    setTimeout(() => {
        res("promise 3")
    },5000)
})
Promise.race([p1,p2,p3])
.then((result) => console.log(result))
.catch((err) => console.log(err))

// implementation of apply(call,apply,bind)
const details = {
    name: "Hema",
    age: 30
}
function display(hobby1,hobby2){
    console.log(`my name is ${this.name}, and ${this.age} years old and my hobbies are ${hobby1} and ${hobby2}`)
}
display.call(details,"singing","dancing")
display.apply(details,["singing","dancing"])
const later = display.bind(details,"singing","dancing")
later()

// generate odd numbers in between 1 and 10 in reverse order
function* generatorOdd() {
  for (let i = 10; i >= 1; i--) {
    if (i % 2 != 0) {
      yield i;
    }
  }
}
const oddNumber = generatorOdd();
for (let num of oddNumber) {
  console.log(num);
}

// implementaion of callback function, using sum
function sum(a, b) {
  sum = a + b;
  console.log("the sum is " + sum);
}
function print(callback) {
  callback(2, 3);
}
print(sum);

// previous sum – arr- [1,2,3,4,5] =>output => [1,3,6,10,15]
const arr = [1, 2, 3, 4, 5, 6, 7];
const res = [];
for (let i = 0; i < arr.length; i++) {
  if (i === 0) {
    res.push(arr[i]);
  } else {
    res.push(arr[i] + arr[i - 1]);
  }
}
console.log(res);

// Array of objects
const invoices = [
  {
    id: 201,
    customerId: 10,
    total: 1500,
    status: "paid",
    items: ["monitor", "cable"],
  },
  { id: 202, customerId: 11, total: 2300, status: "unpaid", items: ["laptop"] },
  {
    id: 203,
    customerId: 10,
    total: 600,
    status: "paid",
    items: ["keyboard", "mouse"],
  },
  {
    id: 204,
    customerId: 12,
    total: 800,
    status: "cancelled",
    items: ["webcam"],
  },
  { id: 205, customerId: 15, total: 800, status: "cancelled", items: null },
];
function getInvoices(invoices, id) {
  const invoice = invoices.find((inv) => inv.id === id);
  if (invoice) {
    console.log(invoice.items.join(","));
  }
}
getInvoices(invoices, 203);

//find the length of array without using .length
let arr = [1, 2, 3, 4, 5, 6];
let count = 0;
for (let num of arr) {
  count++;
}
console.log(count);

//  Add an element to an array without .push or .unshift
let arr = [1, 2, 3, 4, 5, 6];
let element = 7;
let n = arr.length;
arr[n] = element;
console.log(arr);

//  Remove the last element of an array without .pop.
// Reverse an array without using built-in methods.
let arr = [1, 2, 3, 4, 5, 6];
let temp;
let n = arr.length;
for (let i = 0; i < n / 2; i++) {
  temp = arr[i];
  arr[i] = arr[n - i - 1];
  arr[n - i - 1] = temp;
}
console.log(arr);

// Merge two arrays manually
let a = [1, 2, 3];
let b = [4, 5, 6];
let n = a.length + b.length;
let j = 0;
for (let i = a.length; i < n; i++) {
  a[i] = b[j];
  j++;
}
console.log(a);

//  Find if a given element exists in an array (no .includes)
let arr = [1, 2, 3, 8, 6, 9, 10];

function findElement(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return `${num} is found at the index ${i}`;
    }
  }
  return `${num} is not found`;
}
const res = findElement(9, arr);
console.log(res);

let arr = [1, 2, 3, 8, 3, 9, 10];

//First occurance of the target
function findElement(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return `${num} is found at the index ${i}`;
      break;
    }
  }
  return `${num} is not found`;
}
const res = findElement(3, arr);
console.log(res);

//  Sum all the elements in an array.
let arr = [1,2,3,8,3,9,10];
let sum = 0;
for(let i=0;i<arr.length;i++){
  sum+=arr[i];  
}
console.log(sum);

//  Find the average of numbers in an array.
let arr = [1,2,3,8,3,9,10];
let sum = 0;
let avg = 0;
for(let i=0;i<arr.length;i++){
  sum+=arr[i]; 
  avg = sum/arr.length
}
console.log(avg);

// Count the number of even and odd numbers in an array.
let arr = [1,2,3,8,3,9,10];

let oddNum = 0;
let evenNum = 0;
for(let num of arr){
    if(num%2 === 0){
        evenNum++;
    }else{
        oddNum++;
    }
}
console.log(`odd num:${oddNum},even num: ${evenNum}`)

//  Count how many times each element appears.
let arr=[11,2,2,3,1,1,9];
let freq = {};

for(let num of arr){
    if(freq[num]){
        freq[num]++;
    }else{
        freq[num]=1;
    }
}
console.log(freq);

//  Find the second largest number.
let a=100;
let b=17;
let c=20;

if((a>b) && (a>c)){
    console.log("a is greater");
}else if((b>c) && (b>a)){
    console.log("b is greater");
}else{
    console.log("c is greater")
}

//second largest num in array.
let arr=[2,5,8,6,4,9,7];
let max = arr[0];
let secMax = arr[1];

for(let num of arr){
    if(num>max){
        secMax = max;
        max = num;
    }else if(num>secMax && num<max){
       secMax = num; 
    }
}
console.log(secMax);

//Check if a number is prime or not.
function checkPrime(num){
    let isPrime = true;
if(num<=1){
    isPrime = false;
}
for(let i=2;i<Math.sqrt(num);i++){
    if(num%i === 0){
        isPrime = false;
        break;
    }
}
if(isPrime){
    console.log("Prime")
}else{
    console.log("not Prime")
}
}

checkPrime(10)


//display prime numbers in array
let arr = [1,2,3,4,5,6,7,8,9];
let prime = [];
for(let num of arr){
    let isPrime = true;
    if(num<=1){
        isPrime = false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        prime.push(num);
    }
}
console.log(prime)

//OR

let arr = [1,2,3,4,5,6,7,8,9];
let prime = arr.filter((num) => {
    if(num <= 1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i === 0){
            return false;
        }
    }
    return true;
})
console.log(prime)

//delete prime num from array
let arr = [1,2,3,4,5,6,7,8,9];
for(let i=0;i<arr.length;i++){
    let isPrime = true;
    if(arr[i]<=1){
        isPrime = false;
    }
    for(let j=2;j<=arr[i]/2;j++){
        if(arr[i]%j === 0){
            isPrime = false;
            break;
        }
    }
  if(isPrime){
      for(let k=i;k<arr.length-1;k++){
          arr[k]=arr[k+1];
      }
      arr.length--;
      i--;
  }
}
console.log(arr)


//sum using reduce
let arr = [1,2,3,4,5,6,7,8,9];

let sum = arr.reduce((acc,curr) => {
    return acc+curr;
})
console.log(sum)

//Reverse the string
let str='programming';
let rev = "";
for(let i=str.length-1;i>=0;i--){
  rev+=str[i];   
}
console.log(rev)

//Reverse the sentence
let str='i love programming';
let rev = "";
let words = str.split("");
for(let i=words.length-1;i>=0;i--){
  rev+=words[i];   
}
console.log(rev)

//just Reverse the words in sentence
let str='i love programming';
let rev = "";
let words = str.split(" ");
for(let i=words.length-1;i>=0;i--){
  rev+=words[i] + " ";   
}
console.log(rev)

//reverse words in sentence=> HELLO WORLD=> OLLEH DLROW 
let str = "HELLO WORLD";
let res = "";
let words = str.split(" ");
for(let word of words){
 for(let i=word.length-1;i>=0;i--){
    res+=word[i];
}
res+=" ";
}
console.log(res);

//reverse words in sentence=> HELLO => OLLEH
let str = "HELLO";
let res = "";
let words = str.split("");
for(let i=words.length-1;i>=0;i--){
    res+=words[i];
}
console.log(res);

//multiples of 3 using while loop
let num = 0;
do{
   if(num%3 === 0){
       console.log(num)
   } 
   num++;
}while(num<100)

//OR

let num = 1;
while(num<100){
    if(num%3 ===0){
        console.log(num)
    }
    num++;
}

//Sort an array manually (no .sort)
let arr = [2,5,9,3,4,8,7];
let temp =0;
for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
          temp = arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
        }
    }
}
console.log(arr)

//Find all occurrences of a target value in an array
let arr = [5,1,4,2,1,2,8,1];
let target = 1;
for(let i=0;i<arr.length;i++){
    if(arr[i] === target){
        console.log(arr[i]);
    }
}

// Find max and min values without Math.max or Math.min
let arr = [5,1,4,2,8,9,11];
let min = Infinity;
let max = -Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
    if(arr[i]<min){
        min = arr[i];
    }
}
console.log("min: " + min);
console.log("max: " + max)

//Remove duplicates from an array without built-in methods
let arr=[1,1,2,2,3,4,5,5,6,6];
let temp =0;
for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] == arr[j]){
            for(let k=j;k<arr.length-1;k++){
              temp=arr[k];
              arr[k]=arr[k+1];
              arr[k+1]=temp;
            }
            arr.length--;
             j--; 
        }
      
    }
}
console.log(arr)

//Check if two arrays are equal
let a = [1,2,3,4,5];
let b = [1,2,3,4,6];
let equal = true;
if(a.length != b.length){
    equal = false;
}
for(let i=0;i<a.length;i++){
    if(a[i] != b[i]){
        equal = false;
        break;
    }
}
if(equal){
    console.log("arrays equal")
}else{
    console.log("arrays not equal")
}

// Find common elements between two arrays
let a = [7,2,3,4,5];
let b = [1,2,8,4,6,4];

for(let i=0;i<a.length;i++){
    for(let j=0;j<b.length;j++){
        if(a[i] == b[j]){
            console.log(a[i])
            break;
        }
    }
}


//check whether the number is palindrome
let num = 52175;
let str = num.toString();
let arr = str.split("");
isPalin = true;
for(let i=0;i<arr.length/2;i++){
    if(arr[i] != arr[arr.length-1-i]){
        isPalin = false;
        break;
    }
}
if(isPalin){
    console.log("Palin number")
}else{
    console.log("not a Palin number")
}

//Find the longest string in an array.
let arr = ["asus","apple","samsung","dell"];
let longest = "";

for(let word of arr){
    if(word.length>longest.length){
        longest = word;
    }
}
console.log(longest)

//  Replace prime numbers with 0.
let arr=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<arr.length;i++){
    let isPrime = true;
    if(arr[i]<=1){
        isPrime = false;
    }
    for(let j=2;j<=arr[i]/2;j++){
        if(arr[i]%j === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
       arr[i]=0;
    }
}
console.log(arr)

//Remove multiples of 2 from an array.
let arr=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2 === 0){
        for(let k=i;k<=arr.length-1;k++){
            arr[k]=arr[k+1]
        }
        arr.length--;
            i--;

    }
}
console.log(arr)

//Elements that appear only once in an array.
let arr=[1,2,2,3,4,4,5];
let freq = {};
let res = [];
for(let num of arr){
    if(freq[num]){
        freq[num]++;
    }else{
        freq[num]=1;
    }
}
for(let [num,count] of Object.entries(freq)){
    if(count === 1){
        res.push(Number(num))
    }
}
console.log(res)

//OR

let arr = [1,2,3,4,1,2,4,5];
let freq = {};
for(let num of arr){
    freq[num]? freq[num]++ : freq[num]=1;
}
for(let count in freq){
    if(freq[count] === 1){
        console.log(count)
    }
}

//adding n numbers using arrow
let sum = (...nums)=> {
    return nums.reduce((acc,curr) => acc+curr,0)
}
console.log(sum(1,2,3,4,5))
console.log(sum(1,2,3))

//callback
function sum(a,b,callback){
    const sum = a+b;
    callback(sum)
}
function display(sum){
    console.log(`the sum is ${sum} `);
}
sum(2,3,display)




