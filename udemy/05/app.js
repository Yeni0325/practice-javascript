const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

// 1. 게임 시작 시 사용자가 가위, 바위, 보 중에 어떤 옵션을 낼지 선택
const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${PAPER}?`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return ;
    }
    return selection;
};

// 2. 랜덤으로 컴퓨터의 옵션 선택
const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    } else if(randomValue < 0.67){
        return PAPER;
    } else {
        return SCISSORS;
    }
};

// 3. 결과값 return
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
    cChoice === pChoice
        ? RESULT_DRAW
        : (cChoice === ROCK && pChoice === PAPER) ||
          (cChoice === PAPER && pChoice === SCISSORS) ||
          (cChoice === SCISSORS && pChoice === ROCK)
        ? RESULT_PLAYER_WINS
        : RESULT_COMPUTER_WINS;

    // if(cChoice === pChoice){
    //     return RESULT_DRAW;
    // } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK){
    //     return RESULT_PLAYER_WINS;
    // } else {
    //     return RESULT_COMPUTER_WINS;
    // }

startGameBtn.addEventListener('click', () => {
    if(gameIsRunning){  // 이미 게임시 시작되어있다면 버튼을 클릭해도 새로운 게임이 시작되지 않음
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice(); // might be undefined
    const computerChoice = getComputerChoice();
    let winner;
    if(playerChoice){
        winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice);
    }
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
    if(winner === RESULT_DRAW){
        message = message + 'had a draw.';
    } else if(winner === RESULT_PLAYER_WINS){
        message = message + 'won.';
    } else {
        message = message + 'lost.';
    }
    alert(message);
    gameIsRunning = false;
});  // 간접실행

// not related to game

// 매개변수를 기반으로 덧셈과 뺄셈을 처리해주는 하나의 함수
const combine = (resultHandler, operation, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for(const num of numbers){
        if(operation === 'ADD'){
            sum += validateNumber(num);
        } else {
            sum -= validateNumber(num);
        }
    }
    resultHandler(sum);
};

// const subtractUp = function(resultHandler, ...numbers){
//     let sum = 0;
//     for (const num of numbers) {  // don't use that.
//         sum -= num;
//     }
//     resultHandler(sum);
// };

const showResult = (messageText, result) => {
    alert(messageText + ' ' + result);
};

combine(showResult.bind(this, 'The result after adding all numbers is : '), 'ADD', 1, 5, 10, 'tt', 6, 10);
combine(showResult.bind(this, 'The result after adding all numbers is : '), 'ADD', 1, 5, 10, -3, 6, 10, 25, 88);
combine(showResult.bind(this, 'The result after subtracting all numbers is : '), 'SUBTRACT', 1, 10, 15, 20);
