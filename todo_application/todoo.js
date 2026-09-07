let todoitemscontainerElement = document.getElementById("todoitemscontainer");
let addButton=document.getElementById("addbutton");
let savebuttonElement= document.getElementById("savebutton");


function gettodofromlocalstorage(){
  let savedTodolist=localStorage.getItem("todolist");
  if (savedTodolist===null){
        return [];
  }
  else{
    return JSON.parse(savedTodolist);
  };
}
// let todolist=[
//     {
//         text:"Learn HTML",
//         uniqueId:1
//     },
//     {
//         text:"Learn CSS",
//         uniqueId:2
//     },
//     {
//         text:"Learn JS",
//         uniqueId:3
//     },
// ];
let todolist=gettodofromlocalstorage();
let todosCount=todolist.length;

function onAddTodo(){
    let userEnterValueElement= document.getElementById("uservalue");
    let userEnterValue=userEnterValueElement.value;
    if (userEnterValue===""){
        alert("Enter a valid todo task not an empty task");
        return;
    }
    todosCount=todosCount+1;
    let newtodo={
        text:userEnterValue,
        uniqueId:todosCount,
        isCheckedd:false
    }
    todolist.push(newtodo);
    createAndAppendTodo(newtodo);
    userEnterValueElement.value=""
}

addButton.onclick=function(){
           onAddTodo();
};


savebuttonElement.onclick=function(){
           localStorage.setItem("todolist",JSON.stringify(todolist));
};


function onchecked(checkboxId,labelId,todoId){
    let checkedboxElement=document.getElementById(checkboxId);
    let labeledElement=document.getElementById(labelId);
    if (checkedboxElement.checked===true){
        labeledElement.classList.add("line");
    }
    else{
        labeledElement.classList.remove("line");
    }
    let todoObjectIndex=todolist.findIndex(function(eachtodo){   // WE ARE FINDING THE INDEX OF THE OBJECT WHICH IS HECKED IN ALL TODO ITEMS
        let eachtodoid="todo"+eachtodo.uniqueId;
        if (todoId===eachtodoid){
            return true;
        }
        else{
            return false;
        }
    });
    let todoObject=todolist[todoObjectIndex]; // WE GET THE TODOITEM WITH INDEX WHICH IS CHECKED
    if (todoObject.isCheckedd===true){        // HERE WE ARE DOING, IF THE TODOOBJECT IS NOT CHECKED(FALSE) THEN WE ARE MAKING IT AS CHECKED(TRUE) AND VICEVERSA
        todoObject.isCheckedd=false;
    }
    else{
        todoObject.isCheckedd=true;
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
checkboxElement.checked=todo.isCheckedd;   // HERE WE ARE ADDING THIS TO CHECK WHETHER THE TODO IS CHECKED OR NOT
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
if (todo.isCheckedd===true){                  // AFTER ADDING THE CHECKED LINE ABOVE, IF IT IS CHECKED WE ARE ADDING STYLE TO IT.
    labelElement.classList.add("line");
}
labelcontainerElement.appendChild(labelElement);
checkboxElement.onclick=function(){
    onchecked(checkboxId,labelId,todoId);
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
    //todolist.pop(todoItem);
    let todoObjectIndex=todolist.findIndex(function(eachtodo){
         let eachid ="todo"+eachtodo.uniqueId;
         if(eachid===todoId){
            return true;
         }
         else{
            return false;
         }
    });
    todolist.splice(todoObjectIndex,1);
}
// this loop iterates over the array with objects
for (let todo of todolist){
    createAndAppendTodo(todo);
}