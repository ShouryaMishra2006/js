const score=new Number(100)//by typing this in console we will also get to know about properties that can be applied to a number
console.log(score.toFixed(2))//upto 2 decimal places and to precision upto 2 digits
console.log(score.toLocaleString('en-IN'))//if we have to apply commas in numbers acc to indian system
console.log(Number)//we will get a function because we are printing the number constructor function not a number object or primitive value
console.log(Math)//object many properties and prototypes will be seen when typed in ispect console
console.log(Math.ceil(4.2))//5 round-4
console.log(Math.floor(4.6))//4 round-5
console.log(Math.floor(Math.random()*10 + 1))// +1 is done so that 0.01 to 0.1 will not be obtained 
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))//from range min to max