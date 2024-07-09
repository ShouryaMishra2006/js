//constructor function gives a new instance for that object whenever we use constructor function with new keyword
// User={
//     username:"shourya",
//     password:"sm123",
//     login:function(){
//        }
// }
function User(username,password,greet){
    this.username=username
    this.password=password
    this.greeting=function(greet){
        console.log(`wish ${greet}`)
    }
}
const userone=new User("mishra","me123","happy bday")
console.log(userone)//function:anonymous encapsulation
function createuser(username,score){
    this.username=username
    this.score=score
}
const chai= new createuser("chai",2)
createuser.prototype.increment=function(score){
    score++
    console.log(score)
}
const tea=  createuser("tea",1)
chai.increment(2)//it will work for only chai object not for tea object because of new keyword that tells the object that a prototype is injected in it
let str="shourya  "
String.prototype.truelength=function(){
    console.log(this.trim().length)
}
str.truelength()