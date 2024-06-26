//allowed
let myarray=[1,2,"shourya",true]
const newarray=new Array(1,8,18,"yes")
myarray.push(4)
myarray.pop()
myarray.unshift(0)//adds to the beginning shift removes from beginning
console.log("another",myarray.indexOf(100))//prints -1
myarray.join()//converts the array into string type
//myarray.slice(1,3) prints elements from index 1 to 2 but splice to 3 and also in splice it manipulates the original array and removes the portion also from that
myarray.push(newarray)//it will push the newarray as element to the myarray
const mergearray=myarray.concat(newarray)//concat returns a new array with the element merged
//alternative
const anothermerge=[...myarray,...newarray]
//if an array is having many arrays upto many depths inside then use thatarray.flat(Infinity) or mention the specified depth inside parentheses
console.log(Array.isArray("shourya"))//false
console.log(Array.from("shourya"))//['s','h'.....]
console.log(Array.from({name:"shourya"}))//it returns an empty object(array[])becuase we have to specify whether we have to make arrays of the key or values