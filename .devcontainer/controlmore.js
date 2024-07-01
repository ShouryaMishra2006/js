//NULLISH COALESCING OPERATOR (??):null undefined
let val1=5??10//val1 is assigned 5
let val2=null??10//val2 is assigned 10
let val3=undefined??15//15 is assigned
let val4=null??2??3//first true value is executed
const map=new Map()
map.set('IN',"india")
map.set('USA',"united states of america")
map.set('IN',"india")
console.log(map)//size-2
for (const m of map) {
    console.log(m)//separate arrays of all key-pairs
}
for(const [key,value] of map){
    console.log(key,'->',value)//prints key value separately
}
//for of loop does not works for object,for in works,vice versa for maps value=obj[key]
//for each loop mostly used for array has a large prototypes in it it already knows the length and only needs a call back function to perform operation on elements of array
const coding=['cp','dsa','python','java']
coding.forEach(function (item){//call back function does not have name
    item=item+' nice'
    console.log(item)
})
//coding.forEach((item,index,arr)=>{
    //function def
    //})
//we can also define an another function and pass its reference(name) to foreach block coding.forEach(printme)  
//mostly values from database comes in arrays
//call back function in for each loop does not returns a value  
//so we use filter for that 
const nums=[1,2,3,4]
const newn=nums.filter((num/*parameter as value of nums*/)=>num>2/*some condition on num*/) 
const newnu=nums.filter((num)=>{
     return num>2
})
nums.forEach((num)=>{
    if(num>2){
        nums.push(num)
    }
})
//like filter we use a map prototype in arrays that instead of conditions make operations on arrays and return automatically like filters
//chaining
const mynumers=[1,2,3,4,5,6,7]
const mynums=mynumers
             .map((num)=>num*10)//whatever modified array is obtained passed to next map/filter
             .map((num)=>num+1)
             .filter((num)=>num>=40)
const tot=mynumers.reduce((acc,currval)=>{
    return acc+currval//it returns value again to accumulator acc 
},0)  //acc starts from this 0 initial value and currval are the elements of the array
console.log(tot)           