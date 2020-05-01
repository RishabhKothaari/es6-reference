/*
Map method is mainly used on arrays or collections to execute a custom method
on each item of the array or collection
*/

const items = ['milk','sugar','flour','cinnamon','turmeric']

const list = items.map((item)=>{
    return `<li>${item}</li>`
})

const list2 = items.map((item)=>`<li>${item}</li>`)
// console.log(list)
// console.log(list2)