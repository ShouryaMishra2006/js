const name="shourya"
const age=18
console.log(name+age)//shourya18 output
//using backtics modern way 
console.log(`my name is ${name} and my age is ${age}`)//string interpulation
//any methods and functions for string csn be applied easily
const newname=new String('sm')
console.log(newname.__prototype__)//undefined but expected object {} means empty object ....let obj={} then console.log(obj.property) will give undefined
console.log(newname)//in console,key value pairs and length of the string will be seen 0 mapped with s and so on and many prototypes
console.log(newname[0])
console.log(newname.length)//2 similar methods are toUpperCase charAt indexOf
//master all strings methods by using them frequently
const anothername=newname.substring(0,4)//newname.slice(-8,4) substring does not allows negative number slicing newname.trim() removes
//extra spaces and lines mdn reference 
const url="shouryamishra55%20@gmail.com"//browser removes extra spaces from url and adds %20 in place of that
console.log(url.replace('%20','-'))
console.log(url.includes('shourya'))