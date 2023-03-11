let gameStart=document.getElementById('gamestart');
gameStart.innerHTML='';

let race100M=document.getElementById('Race100M')
race100M.innerHTML='';

// let RaceTime=document.getElementById('raceTime');
// RaceTime.innerHTML='';

// let RaceResult=document.getElementById('raceResult');
// RaceResult.innerHTML='';

let longJump=document.getElementById('LongJump')
longJump.innerHTML='';

let highJump=document.getElementById('HighJump')
highJump.innerHTML='';

let awardCeremony=document.getElementById('AwardCeremony')
awardCeremony.innerHTML='';

let Award = document.getElementById('AwardList')
Award.innerHTML = '';

let Finish = document.getElementById('finish')
Finish.innerHTML = '';

function OpeningCeremony() {
  console.log("Let the games begin!");
  gameStart.innerHTML="Let the games begin!";
  const score = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0
  };
  setTimeout(() => {
    console.log("Starting Race100M...");
    race100M.innerHTML="Starting Race100M...";
    Race100M(score);
  }, 1000);
}

function Race100M(score) {
  const times = {
    red: Math.floor(Math.random() * 6) + 10,
    blue: Math.floor(Math.random() * 6) + 10,
    green: Math.floor(Math.random() * 6) + 10,
    yellow: Math.floor(Math.random() * 6) + 10,
  };
  console.log("Race100M times:", times);
  // RaceTime.innerHTML="Race100M times:"+ times.value;
  const sortedTimes = Object.entries(times).sort((a, b) => a[1] - b[1]);
  score[sortedTimes[0][0]] += 50;
  score[sortedTimes[1][0]] += 25;
  console.log("Race100M results:", score);
  // RaceResult.innerHTML="Race100M results:" + score.value;
  setTimeout(() => {
    console.log("Starting LongJump...");
    longJump.innerHTML="Starting LongJump...";
    highJump.innerHTML="Starting HighJump...";
    LongJump(score, HighJump);
  }, 3000);
}

function LongJump(score, HighJump) {
  const color = ["red", "yellow", "green", "blue"][Math.floor(Math.random() * 4)];
  // console.log("LongJump winner:", color);
  score[color] += 150;
  console.log("LongJump results:", score);
  console.log("LongJump winner:", color);
  setTimeout(() => {
    console.log("Starting HighJump...");
    
    HighJump(score, AwardCeremony);
  }, 2000);
}

function HighJump(score, AwardCeremony) {
  const color = prompt("What color secured the highest jump?");
  if (color && color in score) {
    score[color] += 100;
    console.log("HighJump results:", score);
    AwardCeremony(score);
  } else {
    console.log("Event was cancelled.");
    AwardCeremony(score);
  }
}

function AwardCeremony(score) {
  const sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
  console.log(`Award Ceremony Results:`);
  awardCeremony.innerHTML="Award Ceremony Results:";
  console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`);
  console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`);
  console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`);
  Award.innerHTML = `
                <li>First Prize: ${sortedScores[0][0]}  came first with ${sortedScores[0][1]} points.</li>
                <li>Second Prize: ${sortedScores[1][0]}  came second with ${sortedScores[1][1]} points</li>
                <li>Third Prize: ${sortedScores[2][0]}  came third with ${sortedScores[2][1]} points.</li>
                `
  Finish.innerHTML="Sports day is over!"              
}

OpeningCeremony(() => {
  console.log("Sports day is over.");
  
});
