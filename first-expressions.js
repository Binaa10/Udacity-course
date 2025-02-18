console.log("i am biniyam");
console.log(3 + 2);
var c=12;
var f=c*1.8+32;
console.log(f);
let string = "She said, \"Hello!\"";
console.log(string);
let stringg="abyalew \"hello\"";
console.log(stringg);
const x='a'
const ascii=x.charCodeAt(0);
console.log(ascii);
const mystring="udacity";
for (let i=0; i<=mystring.length; i++){
    console.log(mystring.charCodeAt(i));
}
let first="tibs";
console.log(first.toUpperCase(0));
const answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);
const check="Why couldn't the shoes go out and play?\nThey were all \"tied\" up!";
console.log(check)
const ale="Blowing from the west"+"\nFallen leaves gather"+"\nIn the east.";
console.log(ale);
console.log(Math.sqrt(-10));//return NAN
console.log("string"/5);
var y;
console.log(y);
var q=null;
console.log(q);
console.log('1'==1);
let thing1="red";
let thing2="blue";
console.log(thing1+" "+thing2);
var fullname="biniyam biyadge";
console.log(fullname);
let bill=10.25 + 3.99 + 7.15;
let tip=bill*15/100;
let total=bill+tip;
console.log("$"+total.toFixed(2));
const adjective1 = "amazing";
const adjective2 = "fun";
const adjective3 = "entertaining";
const madLib="The Intro to JavaScript course is "+adjective1+". James and Julia are so "+adjective2+". I cannot wait to work through the rest of this "+adjective3+" content!";
console.log(madLib);
const firstNamee = "Jbin";
const interest = "cats";
const hobby = "play video games";
const awesomeMessage = "Hi, my name is " + firstNamee + ". I love " + interest + ". In my spare time, I like to " + hobby + ".";
console.log(awesomeMessage);
let h=10;
if (h%2==0){
    console.log("even");
}
else{
    console.log("odd");
}

const checkBalance=true;
const isActive=true;
const balance=-325;
if (checkBalance==true){
    if (isActive==true && balance>0){
        console.log("your balance is $"+balance+".");
    }
    else{
        if ( isActive==false ){
            console.log("your account is no longer active.");
        }
        else {
            if (balance==0){
                console.log("your account is empty.");
            }
            else{
                console.log("your account is negative pls contact bank");
            }
        }
    }
}
else{
    console.log("Thank you. Have nice day!");

}
const shirtWidth = 21;
const shirtLength = 99;
const shirtSleeve = 8.40;

let size;

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    size = "S";
}
else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    size = "M";
}
else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    size = "L";
}
else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    size = "XL";
}
else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    size = "2XL";
}
else if ((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)) {
    size = "3XL";
}
else {
    size = "NA"; // Size not available
}

console.log(size);
const education="high school diploma";
let salary;
switch (education) {
    case "no high school diploma":
        salary = 25636;
        break;
    case "high school diploma":
        salary = 35256;
        break;
    case "Associate's degree":
        salary = 41496;
        break;
    case "Bachelor's degree":
        salary = 59124;
        break;
    case "Master's degree":
        salary = 69732;
        break;
    case "Professional degree":
        salary = 89960;
        break;
    case "Doctoral degree":
        salary = 84396;
        break;
}
console.log("In 2015, a person with "+education+" earned an average of $"+salary.toLocaleString("en-US")+"/year.");
let g=1;
while(g<=100){
    if(g%3==0 && g%5==0){
        console.log("FizzBuzz");
    }
    if(g%3==0){
        console.log("Fizz");
    }
    else if(g%5==0){
        console.log("Buzz");

    }
    else{
        console.log(g)
    }
    g=g+1;
}
/*
let fe=60;
while(fe<=60){
    if (fe>=0){

    if (fe==50){
        console.log("Orbiter transfers from ground to internal power");

    }
    else if(fe==31){
        console.log("Ground launch sequencer is go for auto sequence start");
       
    }
    else if(fe==16){
        console.log("Activate launch pad sound suppression system");
      
    }
    else if(fe==10){
        console.log("Activate main engine hydrogen burnoff system");
      
    }
    else if(fe==6){
        console.log("Main engine start ");
        
    }
    else if(fe==0){
        console.log("Solid rocket booster ignition and liftoff!");
        
    }
    else{
        console.log("T-"+fe+" seconds");

    }
}
else{
    break;
}
    fe=fe-1;
}*/
let qw=4;
let factorial=1;
for (let sd=1; sd<=qw; sd++){
    factorial=factorial*sd;
}
console.log(factorial);
/*
for(let yw=0; yw<26; yw++){
    for(let xw=0; xw<100; xw++){
        console.log(yw+"-"+xw);
    }
}
*/
function reversedstring(me){
    var reversed="";
    for (var i=me.length-1; i>=0; i--){
        reversed+=me[i];
    }
    return reversed;
}
console.log(reversedstring("biniyam"))

function laugh(){
    return "hahahahahahahahahaha!";
}
console.log(laugh());

function laughh(num){
    var rv="";
    for (let xc=0; xc<num; xc++){
        rv+="ha";
    }
    return rv+"!";
}
console.log(laughh(3));

function isThisWorking(input) {
    console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
    return "Returning: I am returning this string!";
  }
  
  console.log(isThisWorking(3));

  function makeLine(length) {
    var line = "";
    for (let df = 1; df <= length; df++) {
        for (let j = 1; j <= df; j++) {
            line += "* ";
        }
        line += "\n";
    }
    return line;
}

console.log(makeLine(10));
// function expression catSays
const catSays = function(max) {
    let catMessage = "";
    for (let i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };
  
  // function declaration helloCat accepting a callback
  function helloCat(callbackFunc) {
    return "Hello " + callbackFunc(3);
  }
  
  // pass in catSays as a callback function
  console.log(helloCat(catSays));

  const laughhh= function(numm){
    stringggg="";
    for (let inn=1; inn<=numm; inn++){
        stringggg+="ha";

    }
    return stringggg+"!";
  }
  function emotions(fg,fj){
    let combine="";
    combine+="i am ";
    return combine+fg+", "+fj(0);

  }
console.log(emotions("happy",laughhh ));

const cry=function mycry(){
    console.log("boohoo!");
}
cry();
const udaciFamily=["Julia", "James","bi"];
console.log(udaciFamily[0]);
console.log(udaciFamily[1]);
console.log(udaciFamily[2]);
const captain = "Mal";
const second = "Zoe";
const pilot = "Wash";
const companion = "Inara";
const mercenary = "Jayne";
const mechanic = "Kaylee";
const crew=[captain,second,pilot,companion,mercenary,mechanic];
const creww=new Array(captain,second,pilot,companion,mercenary,mechanic);
console.log(creww);
const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
for (let xc=0; xc<prices.length; xc++){
    if (xc%2==1){
        prices[xc]=2*prices[xc]
    }

}
console.log(prices);
const donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1
console.log(donuts);
function hasEnoughPlayers(alexis){
    if (alexis.length==7){
        return true;
        
    }
    else{
        return false;
    }
}
const team1 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
const team2 = ["George Weasley", "Fred Weasley", "Harry Potter"];
const team3 = [];
const team4 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter", "Hermione Granger", "Ron Weasley", "Neville Longbottom"];
console.log(hasEnoughPlayers(team1));
console.log(hasEnoughPlayers(team2));
console.log(hasEnoughPlayers(team3));
console.log(hasEnoughPlayers(team4));
team1.shift();
console.log(team1);
const turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];
let asd =turnMeIntoAString.join('');
console.log(asd);

const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
function addhu(nu){
    if (nu%3==0){
        nu=nu+100;
    }
    console.log(nu);
}
test.forEach(addhu);

const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
const newbills=bills.map(function(elm){
    elm=elm+0.15*elm;
    elm=elm.toFixed(2);
    elm=Number(elm);
    return elm;
});
console.log(newbills);
var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];
const newgrid=numbers.map(function checking(ele, nune, bushra){
    for(var ere=0; ere<bushra.length; ere++){
        for(var eru=0; eru<bushra[ere].length; eru++){

            if ((bushra[ere][eru])%2==0){

                bushra[ere][eru]="even";
                
            }
            else{
                bushra[ere][eru]="odd";

            }
        
        }
    }
    
    return ele;
});
console.log(newgrid);
typeof "hello" // returns "string"  
typeof true // returns "boolean"  
typeof [1, 2, 3] // returns "object" (Arrays are a type of object)  
typeof function hello() { } // returns "function"  
const umbrella = {
    color: "pink",
    isOpen: false,
    open: function() {
      if(umbrella.isOpen === true) {
        return "The umbrella is already opened!";
      } else {
        umbrella.isOpen = true;
        return "Julia opens the umbrella!";
      }
    }
  }
umbrella.isOpen; // returns false
umbrella.open(); // returns 'Julia opens the umbrella!'
console.log(umbrella.isOpen); // returns true
const breakfast={
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"],
    price: "$9.95",
    name: "The Lumberjack"
    
}
var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
      if (amount > 0) {
        savingsAccount.balance += amount;
      }
    },
    withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
        savingsAccount.balance -= amount;
      }
    },
    printAccountSummary: function(){
        return "Welcome!\n"+"your balance is currently $"+savingsAccount.balance+" and your interest rate is "+savingsAccount.interestRatePercent+"%";
    }
  };
  console.log(savingsAccount.printAccountSummary());

  const facebookprofile={
    name: "Biniyam",
    friends: 3,
    meessages: ["ante","aleh","aydel"],
    postMessage: function checkn(alefa){
        var isfull=false;
        if (isfull==false){
            var aleja=facebookprofile.meessages;
            aleja.push(alefa);

        }
        return facebookprofile.meessages;

    },
    deletemessage: function checkdel(indexx){
        var isempty=facebookprofile.meessages;
        if (isempty.length>0){
            isempty.splice(indexx,indexx);

        }
        return facebookprofile.meessages;

    },
    addfriend: function(){
        facebookprofile.friends+=1;
        return facebookprofile.friends;
    },
    removefriend: function(){
        facebookprofile.friends-=1;
        return facebookprofile.friends;

    } 

  };
  console.log(facebookprofile.name);
  console.log(facebookprofile.friends);
  console.log(facebookprofile.meessages);
  console.log(facebookprofile.postMessage("na tolo"));
  console.log(facebookprofile.deletemessage(1));
  console.log(facebookprofile.addfriend());
  console.log(facebookprofile.removefriend());
  
const donutsss={
    donutss: [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
  ]
}
let simba=donutsss.donutss;
simba.forEach(function(elem){
    console.log(elem.type+" donuts cost $"+elem.cost+" each");

  }
);







