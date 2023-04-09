const handOptions = {
    'rock' : '/pictures_rockpaper/Rock.png' , 
    'paper' : '/pictures_rockpaper/Paper.png' , 
    'scissors' : '/pictures_rockpaper/Scissors.png'
}
let SCORE =0;

const pickUserHand = (Hand) => {
    // console.log(Hand);
    // Handles the current page, i.e main page
    let hands = document.querySelector('.hands');
    hands.style.display = "none" ; 

    // after playing a game the further result is shown
    let contest = document.querySelector(".contest");
    contest.style.display ="flex" ; 

    // checks the user picked 
    document.getElementById("userPickImage").src = handOptions[Hand];
    let cpHand = pickComputerHand();
    referee(Hand,cpHand)
}

const pickComputerHand = () =>{
    let Hands = ['rock' , 'paper' , 'scissors']
    let cpHand = Hands[ Math.floor (Math.random()*3) ]
    // console.log(cpHand);
    //  set the computer pick 
    document.getElementById("computerPickImage").src = handOptions[cpHand];
    return cpHand;
}



const referee = (userHand , cpHand) =>{
    if (userHand =='paper' && cpHand=="scissors" ){
        setDecision("YOU LOSE!")
    }
    if (userHand =='paper' && cpHand=="rock" ){
        setDecision("YOU WIN!")
        SCORE= SCORE+1
        setScore(SCORE)
    }
    if (userHand =='paper' && cpHand=="paper" ){
        setDecision("It's a tie!")
    }
    if (userHand =='rock' && cpHand=="scissors" ){
        setDecision("YOU WIN!")
        SCORE= SCORE+1
        setScore(SCORE)
    }
    if (userHand =='rock' && cpHand=="paper" ){
        setDecision("YOU LOSE!")
    }
    if (userHand =='rock' && cpHand=="rock" ){
        setDecision("It's a tie!")
    }
    if (userHand =='scissors' && cpHand=="rock" ){
        setDecision("YOU LOSE!")
    }
    if (userHand =='scissors' && cpHand=="paper" ){
        setDecision("YOU WIN!")
        SCORE= SCORE+1
        setScore(SCORE)
    }
    if (userHand =='scissors' && cpHand=="scissors" ){
        setDecision("It's a tie!")
    }

    
}

const restartGame = () =>{
    let hands = document.querySelector('.hands');
    hands.style.display = "flex" ; 

    // after playing a game the further result is shown
    let contest = document.querySelector(".contest");
    contest.style.display ="none" ; 
}

const setDecision = (decision) =>{
    document.querySelector(".decision h1").innerText = decision;
}
const setScore = (score) =>{
    document.querySelector(".score h1").innerText = score;
}

