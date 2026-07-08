function myFunction() {
    document.getElementById("demo").innerHTML = "Sorry! No offers available at the moment.";
}
let counterValueElement=document.getElementById("counter");

function decrement(){
    let previousCounterValue=counterValueElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterValueElement.textContent=updatedCounterValue;
     if (updatedCounterValue<0){
        counterValueElement.style.color="red";
    }
     else{
        if (updatedCounterValue==0){
            counterValueElement.style.color="black";
        }
     }
}

function increment(){
    let previousCounterValue=counterValueElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterValueElement.textContent=updatedCounterValue;
    if (updatedCounterValue>0){
        counterValueElement.style.color="green";
    }
    else{
        if (updatedCounterValue==0){
            counterValueElement.style.color="black";
        }
     }
}

function reset(){
    counterValueElement.style.color="black";
    counterValueElement.textContent=0;
}
