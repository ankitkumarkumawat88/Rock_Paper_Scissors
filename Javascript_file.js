let user=0;
let com=0;
let box=document.querySelector("#msg");
 let userscor=document.querySelector("#user_scor");
let comnscor=document.querySelector("#com_scor");




const generatecom=()=>{
    const options=["rock","paper","scissors"];
    const randomInd=(Math.floor(Math.random()*3));
    return(options[randomInd]);
    //rock,paper ,scissors;

}

const drogame=()=>{
    box.innerText="Game was drow play again";
    box.style.backgroundColor="#081b31";
}


const choices=document.querySelectorAll(".choice");
const playGame=(choicesId)=>{
    console.log("choice is user=",choicesId);
//computer choice genrate
const computerchoice=generatecom();
console.log("choice of computer=",computerchoice);


if(choicesId==computerchoice){
  //  drow game
  drogame();
}
else{
    let usewin=true;
    if(choicesId=="rock"){
       usewin= computerchoice=="paper"?false:true;
    }
    else if(choicesId=="paper"){
        usewin=computerchoice=="scissors"?false:true;
    }
    else {
        usewin=computerchoice=="rock"?false:true;
    }
    showuserwint(usewin,choicesId,computerchoice);
}
}

const showuserwint=(usewin,choicesId,computerchoice)=>{
    if(usewin==true){
        user++;
        userscor.innerText=user;
    box.innerText=`You win ! Your ${choicesId} beats ${computerchoice}`;
    box.style.backgroundColor="green"; 
    
}
else {
    com++;
    comnscor.innerText=com;
    box.innerText=`You los ! Your ${computerchoice} beats ${choicesId}`;
    box.style.backgroundColor="red";
}
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choicesId=choice.getAttribute("id");
  playGame(choicesId);
    })
});
