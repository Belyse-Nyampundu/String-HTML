let a = "beautiful";
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);
//2
const food = "I was feeling hungry today";
let k = "eat";
var paragraph = food.slice(0, 4) + "eat" + food.slice(4);
console.log(paragraph);
//3
const story= "The quick brown fox jumps over the lazy dog";
 var story1 = (story.match(/the/g) || [] ).length;
 console.log(story1);
 var story2 = (story.match(/brown/g) || []). length;
 console.log(story2);
 //4
 //let str = "Example String!";
//let ourSubstring = "Example";

//str.indexOf(ourSubstring, 7);
const string1 = "We are now going to school";
let ourSubstring = "now"
string1.indexOf(ourSubstring,7);
console.log(ourSubstring);
//5
let txt1 = "wonderful";
let txt2 = txt1.toUpperCase();
console.log(txt2);

let txt3 = "amazing";
let txt4 = txt3.toLowerCase();
console.log(txt4);

let txt5 = "BEneath";
let txt6 = txt5.toLowerCase();
console.log(txt6);
//const str = "foo bar baz";
//const newStr .= str.split(' ')
//.map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
//.join(' ');
//console.log(newStr)
let txt7 = "A beautiful weeding"
let txt8 = txt7.split(' ')
.map(w => w[0]. toUpperCase()+ w.substring(1).toLowerCase());

console.log(txt8);



