//ON-CLICK PROPERTY

//  const btn1=document.querySelector('#a1');
//  btn1.onclick = function()
//  {
//     console.log("nice to mee you");
//  }

//  function scream()
//  {
//     console.log("we missed the second button");
//  }
//  btn1.onmouseenter = scream;



//ADD EVENT LISTENER:it handles two functions or more functions.

// const btn3=document.querySelector("#v3");

// function twist()
// {
//     console.log("he is a twister");

// }

// function shout()
// {
//     console.log("he is a shouter");
// }

// btn3.addEventListener('click',twist);
// btn3.addEventListener('click',shout);


//RANDOM COLOR CHANGE

// const button=document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click',function()
// {
//    const RandomColor = newColor();
//    document.body.style.backgroundColor=RandomColor;
//    h1.innerText=RandomColor;
// })

// const newColor=()=>
// {
//     const r=Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     return `rgb(${r}, ${g}, ${b})`;
// }




//EVENTS AND THIS KEYWORD:this keyword works a event callback function.when event Listeners is triggered(called).
// const newColor=()=>
// {
//     const r=Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     return `rgb(${r}, ${g}, ${b})`;
// }

// const buttons = document.querySelectorAll('button');

// for(let button of buttons)
// {
//     button.addEventListener('click',colorize)
// }

// const h1s = document.querySelectorAll('h1');
// for(let h1 of h1s)
// {
//     h1.addEventListener('click',colorize)
// }

// function colorize()
// {
//     this.style.backgroundColor = newColor();
//     this.style.color = newColor();
// }




// KEYBOARD EVENTS AND EVENT OBJECTS: keyboard events are nothing but working with keys in a keyboard.

// document.querySelector('button').addEventListener('click',function(eve)
// {
//     console.log(eve);
// })

// const input = document.querySelector('input');
// input.addEventListener('keydown',function(e)
// {
//     console.log(e.key);
//     console.log(e.code);
// })
// input.addEventListener('keyup',function()
// {
//     console.log("KEYUP");
// })

// window.addEventListener('keydown',function(e)
// {
//     switch (e.code)
//     {
//         case 'ArrowUp':
//             console.log("up");
//             break;
//         case 'ArrowDown':
//         console.log("down");
//             break;
//         case 'ArrowLeft':
//         console.log("left");
//             break;
//         case 'ArrowRight':  
//         console.log("right");
//             break;
//         default: 
//         console.log("ignored");


//     }
// })




//FORM EVENT AND PREVENT DEFAULT :
//prevent default:without prevent default ,the console ouptut is not displayed.after using of prevent default we get the output of console.
//prevent default neglects errors when the event is trigger(called).

// const form =document.querySelector('#shelterform');
// const input = document.querySelector('#catName');
// const list = document.querySelector('#cats');
// form.addEventListener("submit",function(e)
// {
//      e.preventDefault();
//      const catName = input.value;
//      const NewLI = document.createElement("LI");
//     NewLI.innerText=catName;
//     list.append(NewLI);
//     input.value="";//RESET FORM(no data in input box)
// })




//INPUT AND CHANGE EVENTS :


// const input = document.querySelector('input');
// const h1= document.querySelector('h1');

//1st type:
// input.addEventListener('change',function (e)
// {
//     console.log("abdcidoj");
// })

//2nd type:
// input.addEventListener('input',function (e)
// {
//    h1.innerText = input.value;
// })



//EVENT BUBBLING :It will bubble or changing the color for the particular event.(it has same error in line 182 .please refer the event bubbling video).

// const button = document.querySelector('#button1');
// const container = document.querySelector('#container');


// button.addEventListener('click',function()
// {
//     container.style.backgroundColor=makeRandomColor();
// })
// // button.addEventListener('click',function (e)
// // {
// //     // container.style.backgroundColor = makeRandomColor();
// //     // e.stopPropagation();
// // })
// // container.addEventListener('click',function() 
// // {
// //     container.classList.toggle('hide');
// // })

// const makeRandomColor = () =>
// {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }




//EVENT DELEGATION:it used for only delete a data in the list(li) not remaining.(it is not working and have some errors in code)

// const tweetForm = document.querySelector("#tweetForm");
// const tweetContainer = document.querySelector("#tweets");
// tweetForm.addEventListener('click',function(e)
// {
//     e.preventDefault();
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value="";
//     tweetInput.value="";
// }
// );

//     const addTweet =(username, tweet) =>
//   {
//     const newTweet = document.createElement("li");
//     const bTag = document.createElement('b');

//      bTag.append(username);
//      newTweet.append(bTag);
//      newTweet.append(`-${tweet}`)
//       tweetContainer.append(newTweet);
//   }

// tweetContainer.addEventListener('click',function(e)
// {
//     e.target.nodeName === "li" && e.target.remove();
// })




//ASYNCHYROUS JAVASCRIPT:

//CALL STACK:stack is nothing but way of execution in javascript when the function calls.the stack follows the LIFO(last in first out ) rule.



//PROMISES:it checks the api data is fetched or not .it has two types 
                                                               // 1) resolved (success)
                                                               // 2) rejected (failure)
 //in promises we use two methods : 1) then() :when promise is succesfull, we use then() for resolved data
                                   //2) catch() when promise is un-succesfull, we use catch() for error data 


 //below code is not running and have errors  
 
//  const fakeRequestPromise =(url) =>
// {
//     return new Promise((resolve, reject) =>
//     {
//         const delay= Math.floor(Math.random() * (4500)) + 500;
//         {
//             setTimeout(() => {
//                 if(delay > 4000)
//                 {
//                     reject("CONNECTION TIMEOUT")
//                 }
//                 else
//                 {
//                     resolve(`here the fake data from ${url}`);
//                 }
                
//             }, delay);
//         }
//     })
// }

//  fakeRequestPromise('yelp.com/api/coffee/page1')
//    .then(()=>
//    {
//       console.log("it worked for(page 1)");
//           fakeRequestPromise('yelp.com/api/coffee/page2')
//           .then(()=>
//                {
//                     console.log("it worked for(page 2)");
                       
//                })
//                fakeRequestPromise('yelp.com/api/coffee/page3')
//                .then(()=>
//                     {
//                          console.log("it worked for(page 3)");
                            
//                     })
//                .catch(() =>
//                {
//                 console.log("error (page 3)")
//                })
//           .catch(() =>
//                {
//                 console.log("error (page 2)")
//                })
//      .catch(() =>
//                {
//                 console.log("error (page 1)")
//                })
//    })


//ASYNC FUNCTION: async function is automatically return promise method.because async function is explicity calls the promise.


// const login = async (username ,password) =>
// {
//     if(!username || !password)
//     throw "MISSING CREDENTIALS"
    
//     if(password === 'venky')
//     return "WELCOME"
//     throw "INVALID PASSWORD"
// }

// login("madhu","venky")
//    .then(msg =>
//     {
//         console.log("LOGED IN!!!");
//         console.log(msg);
//     })
//     .catch(err =>
//         {
//             console.log("ERROR!!!");
//             console.log(err);
//         })


//AWAIT KEYWORD:these keyword stops the execution until the function gets resolved.And works and uses only in the async functions.

// const delayed = (color) =>
// {
//     document.body.style.backgroundColor = color;
// }

// const login = async () =>
// {
//     console.log("hiii");
//     await delayed("green");
// }
// login();






//AJAX (asynchorous javascirpt and xml):WITHOUT SENDING REQUESTS THE WEBSITE AUTOMATICALLY GETS THE RELATED INFORMATION(MATCHING ) TO THE WEBSITE USING JAVASCRIPT.

//API: MEANS application programming interface, gets the data from the servers or database to webpage in the form of JSON.
//now-a-days all languages(java,ruby,phython) prefer AJAJ(asynchorous javascirpt and json)


//CONVERT JAVASCRIPT TO JSON: we use JSON.stringify() method.
//CONVERT JSON TO JAVASCRIPT : we use JSON.parse() method.



//FETCH API: to overcome the disadvantage(didn't of accept promises)s of XHR(xml headear response) we use fetch api(because uses of promises in fetch) in async funcitons. 

//Using on Promise Funciton:--
// fetch("https://swapi.dev/api/people/1/")
// .then((res) =>
// {
//     console.log("resolved",res);
//     return res.json();
// })
// .then((data) =>
// {
//     console.log(data);
// })
// .catch((e) =>
// {
//     console.log("error",e);
// });


//Using Async fuctions:---
// const loadStarWarsPeople = async () =>
// {
//     try{
//         const res = await fetch("https://swapi.dev/api/people/1/");
//         const data = await res.json();
//         console.log(data);
//         const res2 = await fetch("https://swapi.dev/api/people/2/");
//         const data2 = await res2.json();
//         console.log(data2);
//     }
//     catch (e)
//     {
//         console.log("error!!", e);
//     }
// };

// loadStarWarsPeople();





//AXIOS: it is a inbuilt library ,that is used for purly on HTTP REQUEST:

// const loadStarWarsPeople = async(id) =>//not working having some errors.only problem is axios url present int axios.html.
// {
//     try 
//     {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     }
//     catch(e)
//     {
//         console.log("error",e)
//     }
// };
// loadStarWarsPeople(5);



//-------------------------------------------------

//PROTOTYPES AND OOPS CONCEPTS:
//PROTOTYPE:it is template objects(bunch of objects).the prototypes has a lot of methods to access.
//EX: array has lot of methods like push,pop.etc...,


//CONSTRUCTOR FUCTIONS: to reduce length of code from factory fuctions,we use constructor function.in this we add prototype of an funtion.
//RGB(RED GREEN BLUE ),RGBA(RED GREEN BLUE ALPHA):it is used to change the opacity(from bright color to low i.e,transparency) of the color
//HEX(HEXA):it can convert  form of rgb color to another form .ex:rgb(255,20,25) to #234522 .

// function Color(r, g, b)
// {
//     this.r =r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function()
// {
//     const {r, g, b} = this;
//     return `rgb(${r}, ${g},${b})`;
// };

// Color.prototype.hex = function()
// {
//     const {r, g, b}= this;//"this" refers color1 and color2
//     return '#' + ((1 << 24) + ( r << 16 )+ (g << 8) +b).toString(16).slice(1);//this logic is pasted for google
// };

// Color.prototype.rgba = function(a = 1.0)
// {
//     const {r, g, b}= this;//"this" refers color1 and color2
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// };

// const color1 = new Color(40,25,60);
// const color2 = new Color(0,0,0);




//JAVASCRIPT CLASSES:when we declare class and can also create a constructor in class(because it runs faster to execute).

// class Color
// {
//     constructor(r, g, b, name)
//     {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//     }
//     innerRGB()
//     {
//         const {r, g ,b} = this;
//         return `rgb(${r}, ${g},${b})`;
//     }
//     rgb()
//     {
//         return `rgb(${this.innerRGB()})`;
//     }
//     rgba(a = 1.0)
//     {
//         return `rgba(${this.innerRGB()},${a})`;
//     }
//     hex()
//     {
//         const {r,g,b} = this;
//         return ('#' + ((1 << 24) + ( r << 16 )+ (g << 8) +b).toString(16).slice(1));
//     };
// }

// const red = new Color(255, 67, 89, 'tomato');
// const white = new Color(255, 255, 255, 'white');




//EXTENDS AND SUPER KEYWORDS IN CLASSES:
//EXTENDS:we use extends in inheritance,imports the classes from the parent class through extends keyword.

// class Pet
//  {
//     constructor (name,age)
//     {
//         this.name = name;
//         this.age =age;
//     }
//     eat()
//     {
//         return `${this.name} is eating`;
//     }
//  }

// class Cat extends Pet
// {
//     meow()
//     {
//         return 'meow!!'
//     }
// }

// class Dog extends Pet
//  {
//     bark()
//     {
//          return "woof";
//     }
//  }



//SUPER:we use super in inheritance,imports the classes from the parent class through super keyword.

// class Pet
//  {
//     constructor (name,age)
//     {
//         this.name = name;
//         this.age =age;
//     }
//     eat()
//     {
//         return `${this.name} is eating`;
//     }
//  }

// class Cat extends Pet
// {
//     constructor(name,age,livesleft =9)
//     {
//         super(name,age)
//         this.livesleft=livesleft;
//     }
//     meow()
//     {
//         return 'meow!!'
//     }
// }

// class Dog extends Pet
//  {
//     bark()
//     {
//          return "woof";
//     }
//  }


















                                   
                                                                                                    









