function myFunction() {
    document.getElementById("demo").innerHTML = "Sorry! No offers available at the moment.";
}
let counterValueElement=document.getElementById("counter");

function decrement(){
    let previousCounterValue=counterValueElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterValueElement.textContent=updatedCounterValue;
}

function increment(){
    let previousCounterValue=counterValueElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterValueElement.textContent=updatedCounterValue;
}

function reset(){

    let updatedCounterValue = 0;
    counterValueElement.textContent=updatedCounterValue;
}
