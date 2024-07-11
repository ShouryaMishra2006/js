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
const con=Object.getOwnPropertyDescriptors(Math,"PI")
console.log(con)//we can define property and set its attributes as not enumerable not writable not changeable etc etc
chait={
    price:250,
    type:"ginger"
}
Object.defineProperty(chait,'type',{
    writable:false,
    enumerable:false
})
for(let [key,value] of Object.entries(chait)){
    if(typeof key!=='function'){
    console.log(`${key}:${value}`)
    }
}//only price is iterable and hence it will be printed only
class usere{
    constructor(username,password){
        this.username=username
        this.password=password
    }
    get password(){
       return `${this._password}abc`.toUpperCase()
    }
    //if get is there then set should also be there with same name as property which we wanna manipulate
    set password(value){
       this._password=value//we are using the underscore so that max call stack can not be exceeded
    }
}
//the above method of using getter and setter is more preffered as due to this personally we can customize the usecase of each properties of the class
const shourya=new usere("mishra","hehe")
console.log(shourya.password)
function useree(username,password){
    this._username=username
    this._password=password
    Object.defineProperty(this,'username',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email=value
        }
    })
}
const meee=new useree("shourya","mishra")
console.log(meee._password)