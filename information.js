var gmail=document.querySelector('.gmail')
var phone=document.querySelector('.phone') 
document.onkeydown=function(e){
    switch (e.which){
        case 71:
            gmail.innerHTML=`phamvantri311@gmai.com`
            break;
        case 80:
            phone.innerHTML=`0338513305`
            break;
        default:
            gmail.innerHTML=`phamvantri***@gmail.com`
            phone.innerHTML=`033******* `
    }  
}
var linkqrtele=document.querySelector('.linkqrtele')
linkqrtele.onclick=function(){
    Object.assign(document.querySelector('.qrtele').style,{
        display:'block',    
    })
   setTimeout(function(){
    Object.assign(document.querySelector('.qrtele').style,{
        display:'none',    
    })
   },5000)
}
var linkqrzalo=document.querySelector('.linkqrzalo')
linkqrzalo.onclick=function(){
    Object.assign(document.querySelector('.qrzalo').style,{
        display:'block',    
    })
   setTimeout(function(){
    Object.assign(document.querySelector('.qrzalo').style,{
        display:'none',    
    })
   },5000)
}