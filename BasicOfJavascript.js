//  Variable Type

var name = "Ritika"
name = 1
name = true
//  console.log(name)


// var (old), let, const : makes your code stricter (value/type cannot be changed)
let name2 = 'Harry';
const age = 21;

var isStudent = false;
// console.log(name2)

let color = "Blue";
const height = 150
let pizza = false

// Array lets you aggregate the results
let numbers = [1,2,3];
let names = ["Joe","Ray","Ben"]

let ages = 18
let canVote = (age >= 18)

// console.log(canVote)

// console.log(names[0])
// console.log(color)
// console.log(height)
// console.log(pizza)

// Function
function greet(name){
    return "Hello," + name;
}

function sum(a,b){
    return a+b;
}

function canVotes(age){
    return age>18;
}

if(age>18){
    // console.log("adult");
}
else{
    console.log("child");
}

//  Loops
for(let i=0;i<names.length;i++){
    // console.log(names[i]);
}

let j = 0;
while(j<=5){
    // console.log(j);
    j++;
}

// console.log(sum(5,6));
// console.log(canVotes(21));

// console.log(sum("Ritika","Gupta"));
// console.log(greet("Ritika"));


// Complex Types : Types that aggreagte more than one data 
// 1.Objects : Similar to Map in C++/HashMap in Java (collection of key value pairs)

let user = {
    firstName : "Ritika",
    age : "20",
    gender : "female"
}

console.log(user.firstName);
console.log(user["age"]);

let num=20;
if(num%2==0){
    console.log("even");
}
else{
    console.log("odd");
}

function sumN(n){
    let result = 0;
    for(let i=1;i<=n;i++){
        result+=i;
    }
    return result;
}

// console.log(sumN(10));

function oks(user){
    if(user.gender == 'male'){
        console.log('Hello Mr '+user.name+', your age is ' + user.age);
    }
    else if(user.gender == 'female'){
        console.log('Hello Ms '+user.name+', your age is ' + user.age);

    }
    else{
        console.log('Hello Mate '+user.name+', your age is ' + user.age);

    }
}

oks(user = {
    name : "Ritika",
    age : 20,
    gender : "female",
})

function hellos(user){
    // console.log("Hello, "+user.name+" your age is "+user.age);
}

hellos(person = {
    name : "Joe",
    age : 25
});

let evens = [];
function evenArr(input){
    for(let i=0;i<input.length;i++){
        if(input[i]%2==0){
            evens.push(input[i]);
        }
    }
    return evens;
}

function evenNums(input){
    let even = [];
    even = input.filter(input => input % 2 == 0)
    return even;
}

// console.log(evenNums([5,6,7,8,9,0]));

// console.log(evenArr([1,2,3,4,5,6,7,8]));

//  Nested Object
let objArr = ["Ritika",21,
    {name : " Joe",
        age : 22,
        cities : ["Delhi","Mumbai","Vadodra",{
            country : "India"
        }]
    }
]

console.log(objArr[2].cities[3].country);

//  Array of Objects

function arrayObj(users){
    let adultUsers = [];
    for(let i=0;i<users.length;i++){
        if(users[i].age>18){
            adultUsers.push(users[i]);
        }        
    }
    return adultUsers;
}

// console.log(arrayObj([
//     {name : "Ritika", age : 21},
//     {name : "Riya",   age : 22},
//     {name : "Abhi",   age : 17},
//     {name : "Gian",   age : 11}
// ]))


function maleValid(users){
    let maleUser = [];
    // for(let i =0;i<users.length;i++){
    //     if(users[i].age>18 && users[i].gender == "male"){
    //         maleUser.push(users[i]);
    //     }
    // }

    maleUser = users.filter(person => person.age>18 && person.gender == "male");
    return maleUser;
}

console.log(maleValid([
    {name : "Ritika", age : 21, gender : "female"},
    {name : "Krish", age : 17, gender : "male"},
    {name : "Rith", age : 21, gender : "male"}
]))