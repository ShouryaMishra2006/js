//objects are made from two ways literals and constructors...when formed from literals then they are not singleton 
//objects as literals declaration
//in arrays elements can be mapped with only integer values as keys but not in object
const mysym=new Symbol("key1")
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
console.log("email")//or
console.log(objects.email)//but using this we cant access the full name property written as string
console.log(objects[email])
//by Object.freeze(objects) we cant be able to change the properties values even simply by assignment
objects.greeting=function(){
    console.log("hello world")
}
console.log(objects.greeting)//Function(only reference)
console.log(objects.greeting())//hello world
objects.ogreeting=function(){
    console.log(`hello world,${this.name}`)
}