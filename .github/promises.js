//promise is an object that represents the eventual completion or failure of an async operation
//creating an instance of promise
//bluebird,native(high performance) are some of the libraries used for async operation,fetching and all when promises was not there
const promiseone=new Promise(function(resolve,reject){
    //database calls,network tasks,cryptography(password encrytion)
    setTimeout(function(){
        console.log('async task is complete')
        resolve()//now its the time of promise to get consumed (connects resolve here to then)
    },1000)
})
promiseone.then(function(){
    console.log('promise consumed')//after resolvation of task then this promise is consumed
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2 complete')
        resolve()
    },1000)//after 1 sec async task 2 will get completed
}).then(function(){
    console.log('async 2 resolved')
})
const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:"shourya",email:"shourya.example.com"})
    },1000)
})
promisethree.then(function(user){
    console.log(user)
})
const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
       let error=true
       if(!error){
         resolve({username:"shourya",password:"smsmsmsm"})
       }
       else{
         reject('ERROR:Something went wrong')
       }
    },1000)

})
//promisefour.then().catch()//if not error then take data from then() else take message from catch()
promisefour
.then((user)=>{
    console.log(user)
    return user.username//it returns value to the next then()
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>{
    console.log("the promise is either resolved or rejected")
})//it will always be executed a kind of default
//using async await syntax for consuming promise the only difference is that it waits 
const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
       let error=true
       if(!error){
         resolve({username:"javascript",password:"smsmsmsm"})
       }
       else{
         reject('ERROR:JS went wrong')
       }
    },1000)

})
async function consumepromisefive(){
    try {
      const response=await promisefive
      console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumepromisefive()
async function getallusers(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()//response from the api comes in a string and it takes time to get converted to json format so we use await  
        console.log(data)
    } catch (error) {
        console.log("ERROR:",error)
    }
}
getallusers()
//same work using try catch block
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})