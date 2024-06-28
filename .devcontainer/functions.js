function Saymy(){
    console.log("shourya")
}
//Saymy->reference Saymy->execution
//passed value:arguments taken value to operate :parameter
//if no value is passed to the function then parameter is considered to be undefined not null better to introduce a default value by doing parameter="default"
function prices(...val1){
    return val1
}
console.log(prices(100,200,300))//[100,200,300] due to ...(rest or spread operator)
function handleobj(anyobj){
    console.log(`user is ${anyobj.name}`)
}
const user={
    name:"shourya"
}
handleobj(user)
handleobj({
    name:"shourya"
})//same for array
//var keyword if used to declare then it can be also accessed outside the inside scope that doesn't sounds good
var c=300
{
    var c=30
}
console.log(c)//prints 30 even when we write only c=30
//when we use nodejs to run code in terminal and in console then different global scope is seen
var c=60//still it will print 30
//we will study closure in dom (how we manipulate html page through js)
addones()//no error if we are calling it before its declaration
function addones(num){
    return num+1
}
//addtwo()//error due to way of declaration,it is known as hoisting
const addtwo=function(num){
    return num+2
}
//THIS keyword refers to current context(values or properties inside the block)
const users={
    name:"shourya",
    welcome:function(){
        console.log(`${this.name} welcome to users`)//if we simply write name then not defined this here refers to block of users
    }
}
users.welcome()
users.name="shubhra"
users.welcome()//shubhra welcome to users (context is changed means value inside users block)
console.log(this)//empty object but in browser :window is the context that this refers to globally
function chai(){
    let sername="mishra"
    console.log(this.sername)//undefined ,this refers for only objects
    console.log(this)//some other stuffs
}
//arrow function
const chai2=()=>{
    let sername="mishra"
    console.log(this.sername)//undefined
    console.log(this)//empty object
}
chai()
chai2()
//we can directly write the arrow function as follows
const addtwos=(n1,n2)=> (n1+n2)//without parentheses also works but when we use curly braces then we have to write return keyword explicitly
const extra=(n3,n4)=>({meee:"shourya"})
console.log(extra(2,3))//{meee:"shourya"} will be printed but undefined without parentheses
//immediately invoked function expressions
//used when we have to directly connect files to database or avoid extra execution,declaration of variables or pollution from global scope
//for this we define function in parentheses
//(function chai1(){
      //named IIFE unnamed->arrow
//    console.log(`DB CONNECTED`);
//})();//second parentheses is for function call and terminating character required to tell where to stop execution and when
//(function chai2(){
 //   console.log(`DB CONNECTED 2`);
//})();
((name)=>{
  console.log(`${name}`)
})("shourya")