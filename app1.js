// console.log("this is working");
// let random = Math.random();

// if(random < 0.5)
// {
//     console.log("the random number is less than 0.5")
//     console.log(random);
// }


// const age= 20;
// if(age <5)
// {
//     console.log("you are baby and it free of cost to travel")
// }
// else if(age <10)
// {
//     console.log("you are child.pay $10")

// }
// else if(age < 65)
// {
//     console.log("you are adult.pay $20 ")
// }
// else if(age > 65)
// { 
//     console.log("you are a senior citizen .and pay only $10")

// }

// const day = prompt("enter the day").toLowerCase();
// if(day === "monday")
// {
//     console.log("it is monday");

// }
// else if(day === "friday" )
// {
//     console.log("it is a friday");
// }
// else if(day === "saturday")
// {
//     console.log("hurry!!! enjoy the weekend");
// }
// else 
// {
//     console.log("invalid data");
// }


/* NESTING CONDITONALS STATEMENTS*/
// const password = prompt("enter the password")

// if(password.length >=6)
// {
//     if(password.indexOf(" ") === -1)
//     {
//         console.log("valid password");
      
        
//     }
//     else
//     {

//         console.log("password dont contain spaces")
//     }
   
// }
// else{
//     console.log("too short password")
// }    

// -------


//LOGICAL OR OPERATOR
//   const password = prompt("enter the password");

//   if(password.length >=6 && password.indexOf(" ") === -1)
//   {
//     console.log("valid password");

//   }
//   else
//   {
//     console.log("not a valid password");
//   }


//LOGICAL OR OPERATOR
// const age = prompt("enter your age");
// if((age >=0 && age < 5) || age >= 65)
// {
//     console.log("free")
// }
// else if(age >= 5 && age < 10){
// console.log("$10");
// }
// else if(age >= 10 && age < 65)
// {
//     console.log("$20")

// }
// else{
//     console.log("invalid age !!!!")
// }
 //---------------

//NOT OPERATOR
// const age = 100;
// if(!(age >=0 && age < 5 || age >=65))
// {
//     console.log("you are not a baby  or a senior")
// }

//  SWITCH CASE 
// const day = 55;
// switch(day)
// {
//     case 1: 
//     console.log("monday");
//     break;
//     case 2:
//     console.log("tuesday");
//     break;
//     case 3:
//     console.log("wed");
//     break;
//     case 4:
//     console.log("thur");
//     break;
//     case 5:
//     console.log("fri");
//     break;
//     case 6:
//     console.log("sat");
//     break;
//    case 7:
//     console.log("sunday");
//     default:
//         console.log("invalid data!!")
    
// }


//---------

//ARRAYS

//push operation------
// let names=["sonu","venky",1];
// names.push("madhu");
// // console.log(names);
// let result = names.push(12345);
// console.log(result);
// console.log(names);

//pop operation
// num=[1,22,"23","madhu"];
// num.pop();
// num.pop();
// console.log(num);

//shift operation
// movies=["ironman","superman","bat-man"];
// movies.shift();
// console.log(movies);

//unshift operation
// movies=["ironman"];
// movies.unshift("aquaman");
// console.log(movies);


//concate 
// let cats=["kitty"];
// let dogs=["jimmy"];
// console.log(cats.concat(dogs));


//includes 
// let names =["sumo","thar","fortuner"];
// console.log(names.includes("thar"));

//indexof
// let names =["sumo","thar","fortuner"];
//  console.log(names.indexOf("thar"));


//reverse
// let names =["sumo","thar","fortuner"];
// console.log(names.reverse());

// // slice
// let colors=["red","blue","white","green"];
// console.log(colors.slice(2));

//splice 
// let colors=["red","blue","white","green"];
// console.log(colors.splice(2,1));
// console.log(colors.splice(1,0,"violent"));


//sort
// let colors=["red","blue","white","green"];
// console.log(colors.sort());


//equality testing
//  let nums=[1,2,3];
//  let numscopy = nums;
// console.log(nums === numscopy);//true


//  MULTI-DIMENSIONAL ARRAYS
// const games=[["abc","xyz","wxy"],[1,2,3,4],["abcd",1,"123"]];
// console.log(games[0][1]);


//OBJECT LITERALS
// const midterms = {boyname:"chandu",girlname:"bindu"};
// console.log(midterms.boyname);
// console.log(midterms["girlname"]); 

//modify the objects 
// const midterms = {boyname:"chandu",girlname:"bindu"};
// console.log(midterms.girlname="lakshmi");
//modify in above or below in two ways ----------------------------< 
// console.log(midterms.animal="elephant");
// console.log(midterms["people"]=100);
// console.log(midterms);

//nested arrays and objects
// const cinema =[
//     {
//         moviename:"salaar", director:"neel mawa"
//     },
//     {
//         moviename:"bahubali",director:"rajamouli"
//     }
// ]
// console.log(cinema[1].moviename);



//FOR LOOP
// for(let i=1;i<=10;i++)
// {
//     console.log(i +" "+ "hii");
// }



// FOR LOOP OVER AN ARRAY 
// let array=["blue","red","black"];
// for(let i =0;i < array.length;i++)
// {
//     console.log(array[i]);
// }


//for descending order of array 
// let array=["blue","red","black"];
// for(let i = array.length - 1; i >= 0; i--)
// {
//     console.log(array[i]);
// }


//Nested Arrays
// const names=[["madhu","chandu","kevin"],
// ["jack","manoj"],
// ["yuma"]
// ]
// for(let i=0;i< names.length;i++)
// {
//     const row = names[i];
//     console.log(`ROW ${i+1}`)
//     for(let j=0; j< row.length; j++)
//     {
//         console.log(row[j]);
//     }
// }


// While loop
// const secret = "india";
// let guess=prompt("enter the secret code...");
// while(guess !== secret)
// {
//     guess=prompt("enter the secret code...");

// }
// console.log("congrates you are in!!!");


//Break keyword
// for(let i=0;i<1000;i++)
// {
//     console.log(i);
//     if(i === 100)  break;
// }



//For-of loop
const names=[["madhu","chandu","kevin"],
["jack","manoj"],
["yuma"]
]
// for(let i=0;i< names.length;i++)
// {
//     const row = names[i];
//     console.log(`ROW ${i+1}`)
//     for(let j=0; j< row.length; j++)
//     {
//         console.log(row[j]);
//     }
// }
 
// ----------- OR--------------- 

// 1 ST EXAMPLE
// for(row of names )
// {
//     for (student of row)
//     {
//         console.log(student);
//     }
// }

//SECOND EXAMPLE OF FOR-OF LOOP
// for (char of "hello world")
// {
//     console.log(char);
// }




//FOR_OF LOOP: is used for objects only 
// const studentscore={
//     madhu:78,
//     venky:80,
//     subbu:56
// }
// for(let person in studentscore)
// {
//     console.log(`${person} scored ${studentscore[person]}`);
// }



//----------------

//FUNCTION
//  function sing()
//  {
//     console.log("i can sing a song");
//  }
//  sing();//calling the funciton name


//Function with arguments
// function greet(firstname)
// {
//     console.log(`hii dear,  ${firstname}`);
// }
// greet("arun");



//Function with multiple arguments
// function repeat(str, numTimes)
// {
//     let result ='';
//     for(let i=0;i<numTimes; i++)
//     {
//         result += str;
//     }
//     console.log(result);
// }

// repeat("danger"   , 6);



//Function with return keyword
// function add(x,y)
// {
//     if(typeof x !== "number" || typeof y !== "number")
//     {
//         return false;

//     }
//     return x + y;
// }
 
// add(10,10);//run this method in console


//Lexical Scope(calling methods in another method)
// function bank()
// {
//     const heros =["spiderman","superman","ironman"];
//     function cry()
//     {
//         function inner()
//         {
//             for(let hero of heros)
//             {
//                 console.log(`pls help usb ${hero.toUpperCase()}`);
//             }
//         }
//         inner();
//     }
//     cry();
// }
// bank();


//Funciton can be stored in variable
// const add = function(x,y)
// {
//     return x + y;
// }
// add(5,7);//run in  the console



//Calling the funtion in another function(HIGHER ORDER FUNCTIONS)
// function calltwice(func)
// {
// func();
// func();
// func();
// }
// function roll()
// {
//     const roll =Math.floor(Math.random() * 6) +1;
//     console.log(roll);
// }
// calltwice(roll);


//RETURNING FUNCTIONS(HIGHER ORDER FUNCTIONS)
// function isbetween(min ,max)
// {
//     return function(num)
//     {
//         return num >=min && num <= max;
//     }
// }
// const issenior123= isbetween(1,100);//run in console
// issenior123(10);//run in console


//functions can uses as a property in objects(DEFINING METHODS)
// const mymaths = {
//     PI:3.14159,
//     square:function(num)
//     {
//         return num *num ;
//     },
//     cube : function(num)
//     {
//         return num ** 3;
//     }
// }
//mymaths.square(5);//run in console


//THIS KEYWORD 
// const cat ={
//     name:"blue",
//     color:'black',
//     meow()
//     {
//         console.log(`${this.name} and ${this.color} says   MEWO`)
//     }
// }
// cat.meow();



//TRY/CATCH BLOCKS

// function hello(msg)
// {
//     try
//     {
//         console.log(msg.toUpperCase().repeat(3));
//     }
//     catch(e)
//     {
//         console.log("please enter string");
//     }
// }
// hello("hiii");




// array methods
//FOR_EACH METHOD(ARRAY)
// const movies=[1,2,3,4];
// movies.forEach(function (movie)
// {
//     console.log(movie);
// })


//MAP METHOD
// const movies=[
//     {
//         title: "svsc",
//         rating: 4
//     },
//     {
//         title:"billa",
//         rating:3
//     }
// ]

// const newarray=movies.map(function(movie)
// {
//     return movie.title.toUpperCase();
// })
//console.log(newarray);


//  ARROW FUCNTIONS

//two arguements
// const  add = (x,y) => {
//     return x + y;
// }
// console.log(add(9,6));

//single argument in arrow function
// const  mutliply = (x) => {
//     return x * x;
// }
// console.log(mutliply(6));

//empty argument 
// const roll =() =>
// {
//     return Math.floor(Math.random() * 6)+1;
// }
// console.log(roll());



//implict returns:executes only in one line statement

// const rollDie =() =>
// (
//     Math.floor(Math.random() * 6)+1
// )
// console.log(rollDie());
// //2nd example
// const add =(a,b) => a+b;
// console.log(add(7,8));



//Arrow functions Wrapup
// const movierating=[
//     {
//         title:"siva",
//         rating:50
//     },
//     {
//         title:"bahubali",
//         rating:99
//     }
// ]
// const ratingofmovie=movierating.map((movie) =>(

//     `${movie.title} - ${movie.rating/10}`))

//  console.log(ratingofmovie);


//------CALLBACKS--------
//SETTIMEOUT 
// setTimeout(() =>
// {
//     console.log("hello")
// }, 2000)

//SET-INTERVAL:it executes continuously until it stops//when we use set-interval automatically we should know clearinterval(to stops execution)
// setInterval(() =>
// {
//     console.log("hello")
// }, 2000)/




//FILTER METHOD
// const movierating=[
//     {
//         title:"siva",
//         rating:50
//     },
//     {
//         title:"bahubali",
//         rating:99
//     }
// ]

// const goodmovies=movierating.filter(movie =>(movie.rating>50))
// console.log(goodmovies);
// const goodtitles = goodmovies.map(m =>(m.title));
// console.log(goodtitles);
//(-----OR------)
// const goodtitles = movierating.filter((movie) =>(movie.rating>50)).map((m) =>(m.title));
// console.log(goodtitles);




//EVERY :it is a boolean type return true or false. In a array any element returns false and remaining elements also gets false .
// const exams=[80,30,50,41,44,76,10];
// const result=exams.every((score) => (score > 50));
// console.log(result);

//SOME:it is a boolean type return true or false. In a array any element returns false and it checks remaining elements  is true or false .
// const exams=[80,30,50,41,44,76,10];
//  const result=exams.some((score) => (score > 50));
//  console.log(result);




//REDUCE METHOD
// const prices=[10,20,30,50,76,85,34];
// const total = prices.reduce((total,price) => (total + price));
// console.log(total);
//finding minvalue in array
// const level= [10,2,4,5,33,44,12,78];
// const minlevel=level.reduce((min, num) =>{
//     if (num < min)
//     {
//         return num;
//     }
//     return min;
// });
// console.log(minlevel);

///------
// const evens=[2,4,8];
// const total =evens.reduce((sum, num) => sum +num , 100)//100 is the initialising the value for sum i.e sum =100 at begin
// console.log(total);




//Arrow funciton in "this"  keyword
// const person ={
//     firstname:"i have my firstname",
//     secondname:"i have my secondname",
//     fullname:function()
//     {
//         return `${this.firstname} amd ${this.secondname}`
//     },
//     shoutname: function()
//     {
//         setTimeout(() =>
//         {
//             console.log(this);
//             console.log(this.fullname())
//         }, 3000)
//     }
// }
// console.log(person);





//   DOM (DOCUMENT OBJECT MODEL)

//GET ELEMENT BY ID:slects only particular single id name or single object.
// const mainheading=document.getElementById("mainheading");

// console.dir(mainheading);// to get properties and objects from document. we use "dir". we can use in the place of "dir" in "log" ,but it gets only html format of particular object
//output for using dir:
//h1#mainheading

// console.log(mainheading);
//output for using log:
/* <h1 id="mainheading">I ♥ unicorns</h1> */


//GET ELEMENT BY TAGNAME:selects only particular tag name of the body of html.
//document.getElememtByTagName('div');


//GET ELEMENT BY CLASSNAME: Selects the class name of the html body,
//document.getElememtByClassName('square');


//QUERY SELECTOR:only matches the first element of body in html
//document.querySelector('.square');//matches the first of the square class.totally square class elements are 4, but it matches the first element among 4 elements.
 
//QUERY SELECTOR ALL:gets the collection of matching elements.
//document.querySelectorAll('p');//gets all collections


//INNER HTML:uses to set any data including the tags.
// document.querySelector('h1').innerHTML='<i> hii </i>';

//INNER TEXT:gets the data without tags in html "or" show the data present inside the tag.
// document.querySelector('h1').innerText;

//TEXT CONTENT: is same as the inner text but it adds the space around the data .
// document.querySelector('h1').TextContent;


//ARTTIBUTES:there are some methods for "set" and "get" for attributes.

//CHANGING STYLES:changes the color,fontsize...etc to the properties of css.

//CLASS LIST:to add classes or to removes class .


//SIBLING/PARENT/CHILD:any tag having parent(before the tag) and child(after the tag). 

//APPEND OR PREPEND AND APPENDCHILD:
//append: adding the text or tag at end of any tag(inside (EX)p-tag).
// const p = document.querySelector('p');
// p.append("iam new");
//prepend :adding the text or tag at begining of any tag(inside (EX)p-tag).
// const p = document.querySelector('p');
// p.prepend("iam new");
//append child: adding a tag at end of the body.
//document.body.appendChild(newImg);


//REMOVE CHILD AND REMOVE
//remove child: is used to remove any child from parent .
// const firstlink = document.querySelector('li');
// const ul = firstlink.parentElement
// ul.removeChild(firstlink);

//remove: is used to remove with or without parent
// const img = document.querySelector('img');
// img.remove();
//-------------or-------
// const b = img.parentElement;
//img.parentElement.removeChild(img);














