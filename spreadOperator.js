/**
 * Spread operator lets you expand iterables such as array or string where more than one value of the iterable is expected in the fuction calls
 * Uses:
 * 1. In function calls
 * 2. When accepting array of araguments
 * 3. Cloning,Concatinating arrays
 */

 //NOTE:
 /**
  * In frameworks like React, it's important not to mutate specific data (the state, specifically).  Because of the way React is written, updating arrays & objects directly in the state can cause issues where your app does not render or re-render when it should.
  * You'll often see spread used in this context.
  */

 //function calls
 function multiply(...nums){
     const muliplier = 2;
    //  nums.forEach((n,i)=>{
    //      console.log(muliplier*n)
    //  })
     return nums.map((n,i)=>{
         return muliplier*n
     })
 }

 function multiply2(multiplier,...nums){
     return nums.map((n,i)=>{
         return multiplier*n
     })
 }
 console.log(multiply(1,2,3,4,5,6))
 console.log(multiply2(3,1,2,3,4,5,6))
// cloning and concatinating
 const fruits = ['apple','bannana','mangoes','blueberry','strawberry']
 const veggeis = ['carrot','cucumber','celerary','spinach','broccoli']
 const foodItems = [...fruits,'rice','wheat',veggeis]

 let tasks = [{'info':'task 1',done:false},{'info':'task2',done:false}]
 const newTask = {'info':'task3',done:false};
 tasks = [newTask,...tasks]
 console.log("tasks = ",tasks)