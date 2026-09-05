//SET TIME OUT :-
 

// let greet = (say)=>{
//  setTimeout(()=> {
//    console.log(say);
// },1000)
// }

// greet("hello");



//SET TIME INTERVAL :-

// setInterval(()=>{
//     let Add = (a,b) =>{
//         console.log(a+b)
//     }
//     Add(1,2)
// },1000);

// let IntervalID = setInterval(()=>{
//    console.log(1+8)
//    clearInterval(IntervalID);
// },2000)

// console.log(IntervalID);


//logic bulid :-

let count = 0 ;

// let IntervalId = setInterval(() => {
//     count++
//     console.log(count);

//     if(count === 10){
//         clearInterval(IntervalId);
//     }
// }, 1000);



// setTimeout(()=>{
//     console.log("Game started!")
//  let Stop = setInterval(()=>{
// count++
// console.log(count)

// if(count === 5){
//     clearInterval(Stop);
//     setTimeout(()=>{
// console.log("Game Over !")
//     },2000)
// }
//     },1000)
// },2000);



// let Sub = 11;

// setTimeout(()=>{
// console.log("Time Start Now !")
// let SubId = setInterval(()=>{
// Sub--;
// console.log(Sub);
// if(Sub === 0){
//     clearInterval(SubId);
//     setTimeout(() =>{
//         console.log("Time's Up!")
//     },2000);
// }

// },1000)
// },2000)



//ternary operator :-

// let user = +prompt("How Old Are You ?");


// let allow = user > 18 ? "Go Somewhere" : user < 18 ? "Don't Go Anywhere" : "Just Wait !"

// console.log(allow);

// alert(`${allow}`);




// let Ask = +prompt("Enter Any Number ?");

// let gettoKnow =  Ask % 2 === 0 ?  "Even Number !" : "Odd Number !"

// console.log(gettoKnow);



//Nullish operator :-

//objects :-

// let person = {
//     name : "fabiha",
//     class: 11,
//     hobbies : (hob1,hob2,hob3)=>{
// console.log(hob1,hob2,hob3);
// return  " fabiha";
//     },
//     otherPerson : {
// street : "2 gali",
// area : "5/f"
//     },
// }
//  person.hobbies("sleeping" ,"eating","dancing")

// console.log(person.hobbies.city);

// console.log("hello!");


// console.log(person ?. hobbies() )
// console.log(person ?. otherPerson ?. street ?. area  ?. city);
// console.log(person.otherPerson.street.area.city);

// console.log("hyyyyy");


// console.log(2**2);

// let user = +prompt("Enter any number");

// let num = 2 ; 

// console.log(Math.pow(num,3));

// document.write(`Square : ${(Math.pow(user,2))}`)
// document.write("<br />");
// document.write("<br />");

// document.write(`Cube: ${(Math.pow(user,3))}`)



//Rest Parameter :-
// let total ;

// let Numbers = (...num) =>{
//     total = num ;
//     for(let get of total){
//         console.log(get);
//     }

// }

// Numbers(1,2,3,4,5,6,7,8,9,10);

// let fruits = ["apple","mango","banana","oranage","grapes"];

// for(let fruit of fruits){
//     console.log(fruit);
// }



// for(let phall in fruits){
//     console.log(phall)
// }

// //Spread Operator :-

// let arr1 = [10,20,30,40];
// let arr2 = [50,60,70,80,90];


// let Result = [...arr1,...arr2];


// for(let ouput in Result){
//     console.log(Result[ouput]);
// }

// console.log(Result);


// let person = {
//     name : "fabiha",
//     class : 11,
//     course : "web",
// }

// console.log(person)

// for(let item in person){
//     console.log(item);
// }


//high order function :-

//  let duas = () =>{
//     console.log("duaa")
//   }

// let  friends = (best) =>{
// // console.log(best)
//  return best();
// return "fabiha";
// console.log(duas);
// }

// console.log(friends(  girl = (word)=>{console.log("areeba")} ));



// function greet() {
//     console.log("Hello");
// }

// let myFunction = greet;

// myFunction(); // Hello
 
// function greet(word) {
//     // word()
//     console.log(word);
// }



// greet(function runFunction() {
//  console.log("greet");
// })

// console.log( greet(function runFunction() {
//  console.log("greet");
// }))
// console.log(greet( function runFunction() {
//  console.log("greet");
// }));



//logic :-


// let sayHello = ( word) =>{
//     console.log(` hello ${word}`)
// }


// let myFunc = sayHello;

// myFunc("fabiha");


// let operation;

// let Add = (a , b) =>{
//     console.log(a + b)
// }

// let sub = (a,b) =>{
//       console.log(a - b)
// }
// //add ;

//  operation = Add;
// operation(2,6)

// //sub;
// operation = sub;
// operation(3,9)



//higher order functon logic :-


// function greet() {
//     console.log("Hello");
// }

// function execute(fn) {
//     fn();
// }
// execute(greet);


// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }


// console.log(add(2,4))
// console.log(multiply(5,3))




//iterators ;

// let numbers = [1,2,3,4,5];

// console.log(numbers);


// let  control = numbers[Symbol.iterator]();


// console.log(control.next());
// console.log(control.next());
// console.log(control.next());
// console.log(control.next());
// console.log(control.next());
// console.log(control.next());


//generators :-


// fuction declar

// function greet (){
//     console.log("hello");
// }
// greet()

//funtion expreseeion 

// let say = function (){
//     console.log("heloo!")
// }
// say()

//arrow fuction ;-



// let kuhbolo = () =>{
//     console.log("hyy")
// }

// kuhbolo()


// //genertor :-

// function* greet0 (){
//     yield " hello";
//     console.log("hyy");
//     yield "bye";
//     console.log("salam");
//     yield "random";
// }

// let control0 = greet0();

// console.log(control0);


// console.log(control0.next());
// console.log(control0.next());
// console.log(control0.next());
// console.log(control0.next());


//MAP:-


// let student = new Map();

// //set
// student.set("name" , "fabiha");
// student.set("age" , 17);
// student.set("course" , "web");


// console.log(student);



//get
// console.log(student.get("name"));


// //loop for of 
// for(const [key,value] of student){
//     console.log( typeof key,value);
// }



//objects :-

// let personInfo = {
//     name : "fabiha",
//     class : 11,
// }

// console.log( typeof personInfo.name);
// console.log( typeof personInfo.class);

// console.log(personInfo);
//map :-

// let studentinfo = new Map();
// //set
// studentinfo.set("name" , "fabiha")
// studentinfo.set( "age", 17)
// studentinfo.set( "class", 11)

// //has
// console.log(studentinfo.has("class"));
// console.log(studentinfo)
// console.log(studentinfo.size)


// //delete
// studentinfo.delete("age");
// console.log(studentinfo)


// //size :-
// console.log(studentinfo.size)


// //loop for of 
// for(const [key,value] of studentinfo){
//     console.log(  key,value);
// }


//closur :-


// let main_inner = (myname) =>{
//  return function inner (){
//     console.log(`hello ${myname}`)
    
// }
// inner();
// }

// let Result0 = main_inner("fabiha")
// Result0();



//higher order function :-


// let outer = (exceptnextouter)=>{
//     console.log("ye outer hai abhee")
//     exceptnextouter();
//      return function iner (ahm){
//         console.log("iner fuction !");
//         ahm();
//         return function(anymous){
//             console.log("return fuction");
//             anymous();
//         }
//     }
// }


// let nextouter = () =>{
//     console.log("ye next outer hai bahi !")
// }


// let otherfuc = () =>{
//     console.log("other fucntion !");
// }


// outer(nextouter)

// let Result = outer(nextouter)
// console.log(Result(otherfuc));

// console.log(outer(nextouter));


// let output = Result(otherfuc);
// output( function(){
//     console.log("anoumys function")
// })



//lexical scope :-

// let code = 0 ;

// function hmm (){
//     console.log(code);
//      code = 1;
//      function hmm1(){
//         console.log(code);
//      }
//      function hmm2(){
//         console.log(code)
//      }
// hmm1()
// hmm2()
// }

// hmm();





// let arr1 = ["item1" , "item2" , "item3"];
//  let arr2 = arr1;

// console.log(arr1)
// console.log(arr2)



// console.log(arr1 === arr2) //true

// arr2 = [...arr1];

// console.log(arr1 === arr2) //false 






//primitive data type :-

let num = 5 ;

let num2 = num ;

// console.log(num)
// console.log(num2)
// console.log(num === num2)

// console.log("after reisgn")
// num = 7;
// console.log(num)
// console.log(num2)


num2 = 10

let num3 = num2;

// console.log(num2 === num3);

// num2 = 11;

// console.log(num2 === num3);


//non - primitive datatype :-

// console.log("Arrays")

// let arr3 = ["fabiha" , "areeba"];

// let arr4 = arr3

// console.log(arr3 === arr4);


// arr4.push("zainab");

// console.log(arr3);
// console.log(arr4);

//methods:-
// let arr5 = [...arr3];  //spread operator
// arr5 = [].concat(arr3) //conact method
// arr5 = arr3.slice(0)    //slice method

// let arr5 = [...arr3]; 


// console.log(arr3 === arr5);


// arr3.push("hoorain");

// console.log(arr3);
// console.log(arr5);


//object :-

// console.log("objects")

let Myinfo = {
    name : "fabiha",
    city : "karachi",
}

// let otherinfo = Myinfo;

// console.log(Myinfo === otherinfo);


// otherinfo = {... Myinfo};
 

// console.log(Myinfo === otherinfo);


//hosting:-

// console.log("hosting")
// console.log(value)
// var value = 15;

//let:-

// console.log("let")
// console.log(value1)
// let value1 = 15;

//const
// console.log("const")
// console.log(value2)
// let value2 = 15;

// mygreet()

// function mygreet(){
//     console.log("hello");
// }

// console.log(you);
// // you() //you is not a function :-

// var you = function (){
//     console.log("hello");
// }




//array method

//some:-

let Numbers = [22,55,20,17,27,30];

 const values = Numbers.some((num)=>{
 return num > 18
})


console.log( values);


//every:-

let arr = [1,3 ,2,3,4]

const All =  arr.every((oops) =>{
    return  oops  < 5 
})

console.log(All);



//find :-

const dhoodna = arr.find((num) =>{
 return num < 2
})


console.log(dhoodna);


//reduce :-
// let arr = [1,3 ,2,3,4];

let sum = 0 

 let total = arr.reduce((accumlator , currentValue)=>{
     return    sum = sum + currentValue
},0)


console.log(total)


//sort :-

let fruit= ["apple" , "mago" , "banana" , "orange" , "grapes"];

console.log(fruit.sort());

let counting = [9,7,2,10,16,5,3];   




//without call back
// console.log(counting.sort());   //10,16,2,,3,5,7,9



//with cALL BACK 

// console.log(counting.sort((a,b)=>{      //2,3,5,7,9,10,16
//  return  a - b;
// })
// );




//map:-

// let counting = [9,7,2,10,16,5,3];   
let aarry= [10,20,30,40,50];

const  count11 = aarry.map(( word)=>{
    return word + 10;
})

console.log(count11);


//filter :-


console.log(aarry.filter((num) =>{
  return  num < 40
}))



//fill :-

console.log(aarry.fill(5,2,3))


let convert  = [10,40,3,7,5,3,4,8];

let logic = convert.filter((num)=>{
  return  num < 10
})


console.log(logic);


let filling = logic.map((num) =>{
  return num *2
})

console.log(filling);

console.log(filling.fill(12,3,4));

//includes:-

// let fruit= ["apple" , "mago" , "banana" , "orange" , "grapes"];


console.log(fruit.includes("orange"));


///modules :-


// import { greet } from "./file2.js";

// import person  from "./file3.js";

// console.log(greet("fabihaSohail"));

// console.log(person);


// import ahnm from "./file2.js";

// console.log(ahnm);


import data  from  "./file1.js";

// console.log(data)

console.log(data.number);
console.log(data.friends);




//destructing:-
// let {numbers , friends} = data
// console.log(data.number);
// console.log(data.friends);



function StudentInfo (anyname,anyage,anyclass){
    this.name = anyname;
    this.age = anyage;
    this.class = anyclass;
};

// console.log(new StudentInfo().class);
// console.log(new StudentInfo().name);
// console.log(new StudentInfo().age);


let StudentInfo1 =  new StudentInfo("fabiha",17,11);
let StudentInfo2 = new StudentInfo("areeba",17,11)

console.log(StudentInfo2);
console.log(StudentInfo1);



// oops

// Encapsulation:_


class Info{
    constructor(anyname,anyclass){
    this.name =  anyname;
    this.class = anyclass;
    }

    define(){
       return  `My name is ${this.name} and i study in ${this.class}`
    }

}

let Myself = new Info("fabiha" , 11);
console.log(Myself);
console.log( Myself.define());




//Inheritance:-

class Aboutme extends Info{
    constructor(anyname,anyclass,anycity){
       super(anyname,anyclass);
       this.city = anycity;
    }

    define(){
        console.log(`${Myself.define()} and i live in this ${this.city}`)
    }
}



let me = new Aboutme("fabiha" , 11 , "karachi")
console.log(me);
me.define()


console.log(me);












//encapsulation:-

let stu1 = new Info("areeba" , 12);
console.log(stu1)
console.log(stu1.define());

//inheritance:-

let stu1info = new Aboutme("areeba" , 12 , "karachi")
console.log(stu1info);
stu1info.define()


let stu2 = new Info("hamna" , 11);
console.log(stu2)
console.log(stu2.define());

//inheritance
let stu2info = new Aboutme("hamna" , 11,"queeta");
console.log(stu2info)
stu1info.define()


let stu3 = new Info("hoorain" , 12);
console.log(stu3)
console.log(stu3.define());

//inheritance
let stu3info = new Aboutme("hoorain" , 12,"queeta");
console.log(stu3info)
stu3info.define()


let stu4= new Info("rifza" , 12);
console.log(stu4)
console.log(stu4.define());


//inheritance
let stu4info = new Aboutme("rifza" , 12,"queeta");
console.log(stu4info)
stu4info.define()



//abstraction 
class Car {
  startEngine() {
    console.log("Engine started");
  }

  drive() {
    console.log("Car is moving");
  }
}

const car = new Car();
car.drive();




class Ages {
   constructor(studentAGe){
this.studentAGe = studentAGe;
   }

   agefounder(yourname,yourcity){
    console.log(`my name is ${yourname} i live in this ${yourcity} `)
   }
}
let umar = new Ages(17);
console.log(umar);
umar.agefounder("fabiha", "karachi");




//encapsulation:-
class person10{
  constructor(myname){
this.myname = myname;
  }
  define(){
console.log(this.myname);
  }

}

let obj = new person10("fabiha");
console.log(obj);
obj.define();


//inheritance:-

class inhert extends person10{
    constructor(myname,myage){
super(myname);
this.myage = myage;
  }
  define(){
console.log(this.myage);
  }
}

let inheritance = new inhert("fabiha",17);
console.log(inheritance);
inheritance.define();

//absraction:-
class hide {
  constructor(){
console.log("engine started")
  }
  define(){
    console.log("car is moving !")
  }
}

let absraction = new hide()
absraction.define()



class CoffeeMachine {

  makeCoffee() {
    this.boilWater();
    this.addCoffee();
    this.addMilk();
    this.serveCoffee();
  }

  boilWater() {
    console.log("Boiling Water");
  }

  addCoffee() {
    console.log("Adding Coffee");
  }

  addMilk() {
    console.log("Adding Milk");
  }

  serveCoffee() {
    console.log("Coffee Ready");
  }

}

let coffee = new CoffeeMachine();

coffee.makeCoffee();


class BankAccount {

  #balance = 5000;   //private

  checkBalance() {
    console.log(this.#balance);
  }

}

let user = new BankAccount();
user.checkBalance();


class BankAccount0 {

  #balance = 10000;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }

}

let user10 = new BankAccount0();

user10.deposit(500);

console.log(user10.getBalance());


// let asked = prompt("what your name ?")
// let aske0 = prompt("how old are you ?")
// let aske1 = prompt("In which class do you study ?");


// class hide0 {
  
//   #age = aske0;
//   constructor(myname , myage , myclass){
// this.name = myname;
// this.#age = myage;
// this.class = myclass
//   }
//   // passedyears(){        if you want to know
//   //   return this.#age;
//   // }
// };

// let hidden = new hide0(asked,aske0,aske1);
// console.log(hidden);
// console.log(hidden.name);
// console.log(hidden.class);

// console.log(hidden.#age); //"private field"

// console.log(hidden.passedyears()); //return


//without prompt:-

// class hide0 {
//   #age;
//   constructor(myname , myage , myclass){
// this.name = myname;
// this.#age = myage;
// this.class = myclass
//   }
// };

// let hidden = new hide0("fabiha",17,12);
// console.log(hidden.#age);
// console.log(hidden.name);
// console.log(hidden.class);


//polymorphism:-

class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}

const dog = new Dog();
const cat = new Cat();

dog.sound(); // Bark
cat.sound(); // Meow



class her {
  constructor(hername){
this.she = hername
console.log(hername);
  }
}
 new her("fabiha");


 class him {
  constructor(himname){
this.he = himname
console.log(himname);
  }
}

new him("rayyan");

// varibale SCope:-


var myName = "fabiha!";

let person0 = {
  name : `${myName}`
}

console.log(person0.name);


{
  var numBers = 123
  let numbErs = 456
  const NumbeRs = 789
}

console.log(numBers);


let CALL = () =>{
var hello = "hy";
}

CALL()

// console.log(hello);



//Closure :-



function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3


 let take = () =>{
  let greet = "hello";
  console.log(greet);

  return  function get (){
    let greet = "hy"
    console.log(greet);
     function AgainGet (){
    // let greet = "Salam"
    console.log(greet);
  }
  AgainGet();
  }
  get();

 }

 take()
//  console.log(take());
 let result = take();
 result();

// NUmbers Getting IN closure

let ParentNo = () =>{
let num1 = 0;
console.log(num1);

 return function outer (){
  let num1 = 1 ;
    console.log(num1)
   return  function inner (){
      let num1 = 2 ;
      console.log(num1);
    return   function inermost (){
        let num1 = 3
        console.log(3)
      }
      inermost()
    }
    inner()
}
 outer()
}

console.log(ParentNo());

let outcome = ParentNo();
outcome()()();



// Destructuring:-

// Array

let Colors = ["red","blue","pink"];

let [color1,color2,color3] = Colors

console.log(color1)
console.log(color2)
console.log(color3)


let Rangs = ["red","blue", ["purple","mehroon"],"pink"];
let [color4,color5,[color10, color12], color7] = Rangs

console.log(color4)
console.log(color5)
console.log(color10)
console.log(color12)
console.log(color7)



//Objects:-

let MeraObj = {
  name0 : "fabiha",
  f_nmae : "sohail",
  Class : 11,
  hobby : ()=>{
    console.log("sleeping!")
  },
  ObtherObj : {
 address : "5/f new karachi",
 city : "Karachi"
  }
}


let {name0:myName0 , f_nmae , Class ,   ObtherObj:{address , city} } = MeraObj

console.log(myName0 , f_nmae , Class ,  address , city );



//Default Parameter:-

let likes = (greet , helo="hyyy" , jee="ahmm") =>{
  console.log(greet , helo , jee)
}

likes("Diamond" , "byeeeeeee" ,  "okkk" );

//Rest Parameter

let dislikes = (first1, ...first0  ) =>{
  console.log(first1 , first0)
}
dislikes("loveing" , "caring" , "attaching");

// Spread Operator:-

let myArray = ["f", "A" ,"B" , "I" , "H" ,"A"];
console.log(myArray);


myArray.push("hhha");
let OtherArray = ["b" , "i" , "s", [...myArray]];
console.log(OtherArray);
console.log("myArray" , myArray)
console.log(OtherArray);


// Iterators & Generators :-
//ARRAY

//just one line:-
let evenNo = [2,4,6,8,10][Symbol.iterator]();
console.log(evenNo.next())
console.log(evenNo.next())
console.log(evenNo.next())
console.log(evenNo.next())
console.log(evenNo.next())


//put in variable:-
let selctNo = evenNo[Symbol.iterator]();
console.log(selctNo.next());
console.log(selctNo.next());
console.log(selctNo.next());
console.log(selctNo.next());
console.log(selctNo.next());
console.log(selctNo.next());


// FUNCTION:-

let anthm = function* (){
  console.log("helo")
   yield "hello";
  let greet = "hy";
  console.log(greet);
   yield console.log("fabiha");
}
anthm();

let calling = anthm()
console.log(calling.next());
console.log(calling.next());





//Modules:-

import { MyFavName } from "./file1.js";
console.log(MyFavName);


import { book0 } from "./file1.js";
console.log(book0);


import xyx from "./file1.js";
console.log(xyx.you);
console.log(xyx.Me)
console.log(xyx.And);


import {name , num12 , value} from "./file1.js"
console.log(name)
console.log(num12)
console.log(value);


//MAP:-
let Girl = new Map;
console.log(Girl)

Girl.set("name" , "fabiha");
Girl.set("age" , 17)
Girl.set("course" , "web");

// Get:-
console.log(Girl.get("name"));
console.log(Girl.get("age"));
console.log(Girl.get("course"));

// Has:-
console.log(Girl.has("course"))

// Delet:-
console.log(Girl.delete("age"));

console.log(Girl.size)

//loop:-
for(let [value,key] of Girl){
  console.log(value , key)
}



//ARRAY METHODS:-


// some:-


let Cout = [1,2,3,9];
let drak = ["blue", "black"]

Cout.some((num)=>{
if(num > 1){
  console.log(num);
}
})
let ColorsCheck = drak.some((color) =>{
  return color.includes("blue")
})
console.log(ColorsCheck);


// Every:-

Cout.every((num) =>{
if(num > 0){
  console.log(num);
}
})


let Check = Cout.every((num) =>{
   return num < 10
})
console.log(Check)


//find

let find = Cout.find((num) =>{
 num > 3
})

console.log(find);


//Reducer:-

let value0 = [10,20,30,40,50];

let Calculate = value0.reduce((accumlator,currentValue) =>{
  return value0 = accumlator + currentValue
})

console.log(Calculate);


//Sort:-

let Ours = ["fabiha" , "areeba" , "hamna"];
let Assendorder = [2,10,7,9,22]

//sequence:-
console.log(Ours.sort());
console.log(Assendorder.sort());


let seq = Assendorder.sort((a , b) =>{
 return a - b
})
console.log(seq);


//map ;


let divide = Assendorder.map((num) =>{
return num / 2 
})
console.log(divide);


let Add = Assendorder.map((num) =>{
return num + 2
})
console.log(Add);


let Sub = Assendorder.map((num) =>{
return num - 1
})
console.log(Sub);

let multiply = Assendorder.map((num) =>{
return num * 10
})
console.log(multiply);



//filter:-
//condition base:-

let filter = Assendorder.filter((num) =>{
return num > 10
})
console.log(filter);


//Higher Order Function:-

let firstOrder = (callback) =>{
  console.log("ye 1st order hai");
  callback();

  //iner
function inner (innermost){
console.log("this is iner function");
innerMost();
}

//innermost
function innerMost (){
console.log("this is inerMost function");
}
inner(innerMost)

//return 
return function(){
  console.log("hello return")
   return function name (){
   console.log("fabihaa") 

   return function age (){
    console.log("my 17")
   }
  }
}
}

let secondOrder = () =>{
   console.log("ye 2nd order hai")
}

let show = firstOrder(secondOrder);
show()()();


//Ternary Operator:-

// let user11 = +prompt("how old are you ?");
// let user12 = +prompt("choose one NO")



// let bet = (user11 >= 20) ? "Adults" : (user11 > 12 && user11 < 19) ? "Teenger" : "Childhood";
// // console.log(bet);
// alert(`${bet}`);


// let show01 = (user12 === 7) ? "you got laptop" : (user12 > 0 && user12 < 7) ? "you got toys" :
// (user12 > 10 && user12 < 19) ? "you got Iphone" : "you got slap😂"

// alert(`${show01}`);


// Nullish Operator:-

let favrtism = {
  color : "Red",
  Dish : "Biryani",
  Car : "BMW",
  hobby :{
    hobby1 : "sleep",
    hobby2 : "scroll"
  }
}

console.log(favrtism.color);
console.log(favrtism?.hobby?.hobby1?.hobby2?.hobby3?.hobby4);


let myPortfolio = {
  name : "fabiha",
  f_nmae : "Sohail",
  class : 11,
  city : "Karachi",
  otherinfo : {
    address: "5/f new karachi!",
    age : 17,
  }
}

console.log(myPortfolio?. otherinfo ?. address );


// Exponentiation Operator:-

let power = 2** 3
console.log(power)
console.log(4**2)
console.log(5**2)
console.log(6**2)
console.log(7**2)
console.log(8**2)
console.log(9**2)
console.log(10**2)


//method of exponent :-

console.log(Math.pow(2,3))
console.log(Math.pow(3,3))
console.log(Math.pow(4,3))
console.log(Math.pow(5,3))
console.log(Math.pow(6,3))
console.log(Math.pow(7,3))