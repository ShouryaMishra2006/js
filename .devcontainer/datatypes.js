//primitive 
//7:(call by value):string,number,boolean,null,undefined,symbol(it is used to make unique datatype),BigInt
//reference(non primitive)
//array,objects,functions
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)
const bignumber=839478313309480n//last mein put n for behind the scenes assigning bigint datatype to it
//function can be treated as a variable
const myfunction=function(){
    console.log("hello world")
}
//datatype of non primitive datatype is function and that of function is function object