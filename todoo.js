// let hElement =document.createElement("h1");
// let containerElement=document.getElementById("containerr");
// hElement.textContent="Hi! My Daily Checklist";
// hElement.classList.add("head");
// containerElement.appendChild(hElement);
let todoitemscontainerElement = document.getElementById("todoitemscontainer");
let addButton=document.getElementById("addbutton");
let savebuttonElement= document.getElementById("savebutton");
let todolist=[
    {
        text:"Learn HTML",
        uniqueId:1
    },
    {
        text:"Learn CSS",
        uniqueId:2
    },
    {
        text:"Learn JS",
        uniqueId:3
    },
];

function onAddTodo(){
    let userEnterValueElement= document.getElementById("uservalue");
    let userEnterValue=userEnterValueElement.value;
    if (userEnterValue===""){
        alert("Enter a valid text");
        return;
    }
    let newtodo={
        text:userEnterValue,
        uniqueId:todolist.length+1
    }
    todolist.push(newtodo);
    createAndAppendTodo(newtodo);
    userEnterValueElement.value=""
}

addButton.onclick=function(){
           onAddTodo();
};

function saveitemstolocalstorage(){

}
savebuttonElement.onclick=function(){
           saveitemstolocalstorage();
};
function onchecked(checkboxId,labelId){
    let checkedboxElement=document.getElementById(checkboxId);
    let labeledElement=document.getElementById(labelId);
    if (checkedboxElement.checked===true){
        labeledElement.classList.add("line");
    }
    else{
        labeledElement.classList.remove("line");
    }
};
// we are creating function for todo list item
function createAndAppendTodo(todo){
let todoitemElement=document.createElement("li");
todoitemElement.classList.add("d-flex","flex-row", "listitems");
let todoId="todo"+todo.uniqueId;
todoitemElement.id=todoId;
todoitemscontainerElement.appendChild(todoitemElement);
let checkboxElement=document.createElement("input");
let checkboxId="checkbox"+todo.uniqueId;
checkboxElement.type="checkbox";
checkboxElement.classList.add("check");
checkboxElement.id=checkboxId;
todoitemElement.appendChild(checkboxElement);
let labelcontainerElement=document.createElement("div");
labelcontainerElement.classList.add("d-flex","flex-row","labelstyle");
todoitemElement.appendChild(labelcontainerElement);
let labelElement=document.createElement("label");
let labelId="label"+todo.uniqueId;
labelElement.textContent=todo.text;
labelElement.setAttribute("for",checkboxId);
labelElement.id=labelId;
labelcontainerElement.appendChild(labelElement);
checkboxElement.onclick=function(){
    onchecked(checkboxId,labelId);
};
let iconcontainerElement=document.createElement("div");
iconcontainerElement.classList.add("ms-auto");
labelcontainerElement.appendChild(iconcontainerElement);
let delIconElement =document.createElement("i");
delIconElement.classList.add("far", "fa-trash-alt","delete-icon");
//spanElement.textContent="delete";
iconcontainerElement.appendChild(delIconElement);
delIconElement.onclick=function(){
    delTodoItem(todoId);
}
}
function delTodoItem(todoId){
    let todoItem =document.getElementById(todoId);
    todoitemscontainerElement.removeChild(todoItem);
}
// this loop iterates over the array with objects
for (let todo of todolist){
    createAndAppendTodo(todo);
}