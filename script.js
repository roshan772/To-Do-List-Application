const listcontainor=document.getElementById("list-containor");
const inputbox=document.getElementById("input-box");

function addTask(){
    if(inputbox.value===''){
        alert("Enter Some Data");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainor.appendChild(li);
        inputbox.value = "";
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span)

    }
    saveTask();
}
listcontainor.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveTask();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
});



function saveTask(){
    localStorage.setItem("data",listcontainor.innerHTML);
}
function showTask(){
    listcontainor.innerHTML=localStorage.getItem("data");
}
showTask();
