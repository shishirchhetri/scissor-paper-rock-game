const playerOption = document.querySelectorAll(".options");
const playerText = document.getElementById('playerText');
const computerText = document.getElementById('computerText');
let finalResult = document.getElementById('result');
let player, computer, result;

playerOption.forEach(button => button.addEventListener('click',()=>{
    player=button.textContent;
    computerOption();
    playerText.textContent = `You choosed: ${player}`;
    computerText.textContent= `Computer choosed: ${computer}`;
    finalResult.textContent = findWinner();
}))

const computerOption = ()=>{
    const randNum = Math.floor(Math.random()*3)+ 1;
    switch(randNum){
        case 1:
            computer='Scissor';
            break;
        case 2:
            computer='Paper';
            break;
        case 3:
            computer='Rock';
    }
}

const findWinner = ()=>{
    if(player == computer){
        return 'Draw!!';
    }else if(computer == 'Rock'){
        return (player == 'Paper') ? "You won!!" : "You Lose!!"
    }else if(computer == 'Paper'){
        return (player == 'Scissor') ? "You Won!!" : "You Lose!!";
    }else if (computer == 'Scissor'){
        return (player == 'Rock') ? "You Won!!" : "You Lose!!";
    }
}



