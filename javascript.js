function myFunction() {
    document.getElementById("demo").innerHTML = "Sorry! No offers available at the moment.";
}
// i wrote this code for counter in  static.html
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

// for Form section i wrote this code in guessing.html
let inputElement =document.getElementById("inputElement");
let verifiedText=document.getElementById("submitText");
function submitText(){
let name=inputElement.value;
let verifyText="Hi "+ name +", we are verifying your details";
verifiedText.textContent=verifyText;
verifiedText.style.color="green";
}

// This code for guessing random number in guessing.html
let guessingNum=document.getElementById("guessing");
let verification =document.getElementById("verification");
let randomNumber = Math.ceil(Math.random()*100);
//console.log(randomNumber);

function checkNumber(){
    let guessingNumber=parseInt(guessingNum.value);
 //   console.log(guessingNumber);
    if (guessingNumber > randomNumber){
       verification.textContent="Too High, try again....";
       verification.style.color="blue";
    }
    else if (guessingNumber < randomNumber){
       verification.textContent="Too Low, try again....";
       verification.style.color="blue";
    }
    else if (guessingNumber === randomNumber){
       verification.textContent="Congratulations darling, you guessed correct!";
       verification.style.color="green";
    }
    else{
        verification.textContent="Please enter correctly...";
        verification.style.color="red";
    }

}