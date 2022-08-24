const buttons= document.querySelectorAll('.btn');
result=document.getElementById('result');
// console.log(result);
buttons.forEach((button) =>{
button.addEventListener('click',(e)=>{
    //console.log(e.target.id);
    result.textContent += e.target.id
})
})
egal.addEventListener('click',()=>{
    result.textContent= eval(result.textContent)
})
clear.addEventListener('click',()=>{
    result.textContent=""
})

//////////////////