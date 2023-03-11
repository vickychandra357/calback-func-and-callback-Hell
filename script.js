function OpeningCeremony(callback) {
    console.log("Let the games begin!");
    const score = { red: 0, blue: 0, green: 0, yellow: 0 };
    setTimeout(() => {
      console.log("Starting Race100M...");
      Race100M(score, callback);
    }, 1000);
  }
  
  function Race100M(score, callback) {
    const times = {
      red: Math.floor(Math.random() * 6) + 10,
      blue: Math.floor(Math.random() * 6) + 10,
      green: Math.floor(Math.random() * 6) + 10,
      yellow: Math.floor(Math.random() * 6) + 10,
    };
    console.log("Race100M times:", times);
    const sortedTimes = Object.entries(times).sort((a, b) => a[1] - b[1]);
    score[sortedTimes[0][0]] += 50;
    score[sortedTimes[1][0]] += 25;
    console.log("Race100M results:", score);
    setTimeout(() => {
      console.log("Starting LongJump...");
      LongJump(score, callback);
    }, 3000);
  }
  
  function LongJump(score, callback) {
    const color = ["red", "yellow", "green", "blue"][Math.floor(Math.random() * 4)];
    console.log("LongJump winner:", color);
    score[color] += 150;
    console.log("LongJump results:", score);
    setTimeout(() => {
      console.log("Starting HighJump...");
      HighJump(score, callback);
    }, 2000);
  }
  
  function HighJump(score, callback) {
    const color = prompt("What color secured the highest jump?");
    if (color && color in score) {
      score[color] += 100;
      console.log("HighJump results:", score);
      callback(score);
    } else {
      console.log("Event was cancelled.");
      AwardCeremony(score);
    }
  }
  
  function AwardCeremony(score) {
    const sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
    console.log(`Award Ceremony Results:`);
    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`);
  }
  
  OpeningCeremony((score) => {
    console.log("Sports day is over.");
  });
  