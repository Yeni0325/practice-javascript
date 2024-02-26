// 상수는 대문자, 단어 사이를 구분할 때는 _를 사용
const ATTACK_VALUE = 10;            // 플레이어의 최대 공격력
const STRONG_ATTACK_VALUE = 17;     // 플레이어의 최대 강한 공격력
const MOSTER_ATTACK_VALUE = 14;     // 몬스터의 최대 공격력
const HEAL_VALUE = 20;              // 플레이어의 힐량

const MODE_ATTACK = 'ATTACK';                   // MODE_ATTACK = 0;
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';     // MODE_STRONG_ATTACK = 1;
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVNET_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Maximum life for you and the monster.', '100');

let chosenMaxLife = parseInt(enteredValue);    // 플레이어와 몬스터의 최대 체력
let battleLog = [];

if(isNaN(chosenMaxLife) || chosenMaxLife <= 0){   // 입력한 값이 숫자가 아닌 경우, parseInt의 결과가 숫자가 아닌 경우 => enteredValue가 숫자로 변환할 수 없는 값인 경우
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth){
    let logEntry = {
        event : event, 
        value : value, 
        finalMonsterHealth : monsterHealth,
        finalPlayerHealth : playerHealth
    };
    if(event === LOG_EVENT_PLAYER_ATTACK){
        logEntry.target = 'MOSTER';
    } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK){
        logEntry.target = 'MOSTER';
    } else if (event === LOG_EVENT_MONSTER_ATTACK){
        logEntry.target = 'PLAYER';
    } else if (event === LOG_EVNET_PLAYER_HEAL){
        logEntry.target = 'PLAYER';
    }
    battleLog.push(logEntry);
}

function reset(){
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound(){
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MOSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);

    if(currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert('You would be dead but the bonus  life save you!');
        setPlayerHealth(initialPlayerHealth);
    }

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert("You won!");
        writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentMonsterHealth, currentPlayerHealth);
    } else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("You lost!");
        writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currentMonsterHealth, currentPlayerHealth);
    } else if(currentMonsterHealth <= 0 && currentPlayerHealth <= 0){
        alert("You have a draw!");
        writeToLog(LOG_EVENT_GAME_OVER, 'A DRAW', currentMonsterHealth, currentPlayerHealth);
    }

    if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0){
        reset();
    }
}

function attackMonster(mode){
    let maxDamage = mode === MODE_ATTACK?ATTACK_VALUE:STRONG_ATTACK_VALUE;
    let logEvent = mode === MODE_ATTACK?LOG_EVENT_PLAYER_ATTACK:LOG_EVENT_PLAYER_STRONG_ATTACK;

    // if(mode === MODE_ATTACK){
    //     maxDamage = ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACK;
    // } else if(mode === MODE_STRONG_ATTACK){
    //     maxDamage = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    // }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
    endRound();
}

function attackHandler(){
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler(){
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert("You can't heal to more than your max initial health.");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(LOG_EVNET_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);
    endRound();
}

function printLogHandler(){
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);