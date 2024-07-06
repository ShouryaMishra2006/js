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