//counted in miliseconds keep record in milliseconds from jan 1 1970
//date is a type of object representing a single moment in time in platform independent format refer ecmascript for complex use of this
let mydate=new Date()
console.log(mydate.toDateString())//gives current day and date
let newd=new Date(2024,0,28,5,3)//month starts from 0 in js
console.log(newd.toDateString())
console.log(newd.toLocaleString())//also gives the passed last two values as time
let mydates=new Date("2024-02-12")
console.log(mydates.toDateString())
let mytimestamp=Date.now()//on printing gives a large value that is milisecond counted from jan 1 1970...below code gives time for that particular date
console.log(mydates.getTime())
//to more customize
newd.toLocaleString('default',{
    weekday:"long",
})