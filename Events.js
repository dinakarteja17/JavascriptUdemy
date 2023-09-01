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



//





                                   
                                                                                                    









