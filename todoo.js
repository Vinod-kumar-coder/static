// let hElement =document.createElement("h1");
// let containerElement=document.getElementById("containerr");
// hElement.textContent="Hi! My Daily Checklist";
// hElement.classList.add("head");
// containerElement.appendChild(hElement);

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
    {
        text:"Learn React",
        uniqueId:4
    }
]

function createAndAppendTodo(todo){
let todoitemscontainerElement = document.getElementById("todoitemscontainer");
let todoitemElement=document.createElement("li");
todoitemElement.classList.add("d-flex","flex-row", "listitems");
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
labelElement.textContent=todo.text;
labelElement.setAttribute("for",checkboxId);
labelcontainerElement.appendChild(labelElement);

let iconcontainerElement=document.createElement("div");
iconcontainerElement.classList.add("ms-auto");
labelcontainerElement.appendChild(iconcontainerElement);
let spanElement =document.createElement("span");
spanElement.classList.add("icon");
spanElement.textContent="delete";
iconcontainerElement.appendChild(spanElement);
}

for (let todo of todolist){
    createAndAppendTodo(todo);
}