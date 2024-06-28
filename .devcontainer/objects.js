//objects are made from two ways literals and constructors...when formed from literals then they are not singleton 
//objects as literals declaration
//in arrays elements can be mapped with only integer values as keys but not in object
//const mysym=new Symbol("key1") symbol is not a constructor
const mysym=Symbol("mykey")
const objects={
    name:"shourya",
    age:18,
    [mysym]:"mykey1",//if we have to use it as a symbol instead of strings in properties of objects
    "full name":"shourya mishra",
    email:"shourya@google.com",
    isloggedin:false,
    lastlogindays:["monday","saturday"]
}
//accesing methods
console.log(objects.email)//but using this we cant access the full name property written as string
console.log(objects["email"])
//by Object.freeze(objects) we cant be able to change the properties values even simply by assignment
objects.greeting=function(){
    console.log("hello world")
}
console.log(objects.greeting)//Function(only reference)
console.log(objects.greeting())//hello world
objects.ogreeting=function(){
    console.log(`hello world,${this.name}`)
}
//object declared with the help of constructor
const tinderuser=new Object()
tinderuser.id="oyehoye"
tinderuser.mail="jbdb@google.com"
tinderuser.age=18
console.log(tinderuser)
const names={
    username:{
        fullname:{
            first:"shourya",
            last:"mishra"
        }
    }
}//nested objects possible console.log(name.username?.fullname) ? tells if it exists the only print it
const target={1:'a',2:'b'}
const source={3:'a',2:'b'}
const returned=Object.assign({},target,source)//returned==target and this merges the key value pairs of both the objects
//const returned={...target,...source}
//if objects as elements are stored in an array then we can access their properties simply by arr[0].email
//Object.keys(tinderuser)--->it returns an array with keys of tinderuser object as elements same for its values
//Object.entries(tinderuser)-->array with elements as array of key with values its elements
tinderuser.hasOwnProperty("email")//true
//object destructure
const course={
    name:"shourya",
    age:18,
    gender:"female"
}
//instead of course.name we can directly access it by
const {name}=course//now we directly print name ,we can also refer name by another when we add const {name:another}=course
//backend se jo values aati hai vo pehle xml structure mein aati thi ab aati hai json m api k through
//when object is not given a variable name then it can be treated as json in which keys should also be written as string
//function of api is to fetch and provide data in form of objects when a url is called or something from backend 
{
    "name";"shourya",
    "age";18
}//json format(random me user api)
//datas in api are fetched in above json format also in below not always in object type format 
[
    {},
    {}
]