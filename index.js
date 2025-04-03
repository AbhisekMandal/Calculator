let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let add=document.getElementById("add");
let sub=document.getElementById("sub");
let into=document.getElementById("into");
let div=document.getElementById("div");
let ans=document.getElementById("ans");

function fun_add() {
    let result= parseInt(num1.value) + parseInt(num2.value);
    ans.innerText=result;   
}

add.onclick=fun_add();