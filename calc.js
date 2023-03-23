let res=document.getElementById("text-input");

let calculate=(number)=>
{
    res.value += number;
}
let result=()=>
{
try{
    res.value=eval(res.value);
}
catch(err){
    alert("Enter the valid input");
}
}
function clr()
{
    res.value=" ";
}
function del(){
    res.value = res.value.slice(0,-1);
}