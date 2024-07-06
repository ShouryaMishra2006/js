const randomcolor=function(){
    const hex='0123456789ABCDE'
    let colourcode='#'
    for(let i=0;i<6;i++){
      colourcode+=hex[Math.floor(Math.random()*16)]//generates random number between 0 to 15 for index of hex string
    }
    return colourcode;
  }
  const changingcolor=function(){
    document.body.style.backgroundColor=randomcolor()
  }
  let intervalid
  const startchanging=function(){
    if(!intervalid){
     intervalid=setInterval(changingcolor,1000)
    }
  }
  document.querySelector('#start').addEventListener('click',startchanging)
  const stopchanging=function(){
    clearInterval(intervalid)
    intervalid=null//saves memory
  }
  document.querySelector('#stop').addEventListener('click',stopchanging)