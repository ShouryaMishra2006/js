//stack(primitive)-call by value heap(non-primitive)-call by reference
//variable name is stored in stack but if it is reference non primitive type then its data is stored in heap and is referenced to that variable in stack
let myname="shourya"
let myanothername=myname
myanothername="mishra"
console.log(myname)
console.log(myanothername)//myname will remain shourya