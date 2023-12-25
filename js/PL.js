/********SELECTING**********/
//Selecting Gameweek Buttons
let btn1 = document.querySelector("#previousF");
let btn2 = document.querySelector("#nextF");
//Selecting Teams, Fixture h3, Score Inputs, Fixtures List
let theTeam = document.querySelectorAll("#teamF");
let F = document.querySelector("#F");
let inputScore = document.querySelectorAll("#numF");
let fixlist = document.querySelector("#fixlist");
//Selecting positions
let stand = document.querySelectorAll(".position");
//selection prediction rounds
let round = document.querySelectorAll(".round");
let prediction = document.querySelector(".pre-table");
let results = document.querySelectorAll(".result");
//selecting reset buttons
let resetFixture = document.querySelector(".resetF");
let resetAll = document.querySelector(".resetAll");
let confirm = document.querySelector(".confirm");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
//loading
let load = document.querySelector(".loading");


/********LOCAL STORAGE VARIABLES**********/
let storageBOSS2, storageBOSS2Item;
let storageBOSS4, storageBOSS4Item;
let storageClub, storageClubItem;
let storageStandings, storageStandingsItem;
let storageFixture, storageFixtureItem;


/********DATA**********/
//Team names, scores & boolean
//note: condition to update scores (BOSS2), BOSS3 needs to take new values
let BOSS = [
  [
    ["Burnley", "Arsenal", "Bournemouth", "Brighton", "Everton", "Sheffield United", "Newcastle", "Brentford", "Chelsea", "Man United"], 
    ["Man City", "Nottingham Forest", "West Ham", "Luton", "Fulham","Crystal Palace", "Aston Villa", "Spurs", "Liverpool", "Wolves"]
  ], 
  [
    ["Nottingham Forest", "Fulham", "Liverpool", "Wolves", "Spurs", "Man City", "Aston Villa", "West Ham", "Crystal Palace", "Luton"],
    ["Sheffield United" , "Brentford", "Bournemouth","Brighton", "Man United", "Newcastle", "Everton", "Chelsea", "Arsenal", "Burnley"]
  ], 
  [
    ["Chelsea", "Bournemouth", "Brentford", "Arsenal", "Man United", "Everton", "Brighton", "Sheffield United","Burnley" , "Newcastle"], 
    ["Luton", "Spurs", "Crystal Palace", "Fulham", "Nottingham Forest", "Wolves", "West Ham", "Man City", "Aston Villa", "Liverpool"]
  ], 
  [
    ["Luton", "Sheffield United", "Brentford", "Burnley", "Chelsea", "Man City", "Brighton", "Crystal Palace", "Liverpool", "Arsenal"], 
    ["West Ham","Everton","Bournemouth","Spurs","Nottingham Forest","Fulham","Newcastle","Wolves","Aston Villa","Man United"]
  ],
  [
    ["Wolves", "Fulham", "Spurs", "West Ham", "Man United", "Aston Villa", "Everton", "Bournemouth", "Newcastle",  "Nottingham Forest"], 
    ["Liverpool" ,"Luton" , "Sheffield United", "Man City", "Brighton", "Crystal Palace", "Arsenal", "Chelsea", "Brentford", "Burnley"]
  ],
  [
    ["Crystal Palace", "Luton", "Man City", "Brentford", "Burnley", "Arsenal", "Brighton", "Chelsea", "Liverpool",  "Sheffield United"], 
    ["Fulham" ,"Wolves" , "Nottingham Forest", "Everton", "Man United", "Spurs", "Bournemouth", "Aston Villa", "West Ham", "Newcastle"]
  ],
  [
    ["Aston Villa", "Bournemouth", "Everton", "Man United", "Newcastle", "West Ham", "Wolves", "Spurs", "Nottingham Forest",  "Fulham"], 
    ["Brighton" ,"Arsenal" , "Luton", "Crystal Palace", "Burnley", "Sheffield United", "Man City", "Liverpool", "Brentford", "Chelsea"]
  ],
  [
    ["Luton", "Burnley", "Everton", "Fulham", "Man United", "Crystal Palace", "Brighton", "West Ham", "Wolves",  "Arsenal"], 
    ["Spurs" ,"Chelsea" , "Bournemouth", "Sheffield United", "Brentford", "Nottingham Forest", "Liverpool", "Newcastle", "Aston Villa", "Man City"]
  ],
  [
    ["Liverpool", "Bournemouth", "Brentford", "Man City", "Newcastle", "Nottingham Forest", "Chelsea", "Sheffield United", "Aston Villa",  "Spurs"], 
    ["Everton" ,"Wolves" , "Burnley", "Brighton", "Crystal Palace", "Luton", "Arsenal", "Man United", "West Ham", "Fulham"]
  ],
  [
    ["Crystal Palace", "Chelsea", "Arsenal", "Bournemouth", "Wolves", "West Ham", "Aston Villa", "Brighton", "Liverpool",  "Man United"], 
    ["Spurs" ,"Brentford" , "Sheffield United", "Burnley", "Newcastle", "Everton", "Luton", "Fulham", "Nottingham Forest", "Man City"]
  ],
  [
    ["Brentford", "Burnley", "Everton", "Fulham", "Luton", "Man City", "Newcastle", "Nottingham Forest", "Sheffield United",  "Spurs"], 
    ["West Ham" ,"Crystal Palace" , "Brighton", "Man United", "Liverpool", "Bournemouth", "Arsenal", "Aston Villa", "Wolves", "Chelsea"]
  ],
  [
    ["Arsenal", "Aston Villa", "Bournemouth", "Brighton", "Chelsea", "Crystal Palace", "Liverpool", "Man United", "West Ham",  "Wolves"], 
    ["Burnley" ,"Fulham" , "Newcastle", "Sheffield United", "Man City", "Everton", "Brentford", "Luton", "Nottingham Forest", "Spurs"]
  ],
  [
    ["Brentford", "Burnley", "Everton", "Fulham", "Luton", "Man City", "Newcastle", "Nottingham Forest", "Sheffield United",  "Spurs"], 
    ["Arsenal" ,"West Ham" , "Man United", "Wolves", "Crystal Palace", "Liverpool", "Chelsea", "Brighton", "Bournemouth", "Aston Villa"]
  ],
  [
    ["Arsenal", "Bournemouth", "Brentford", "Burnley", "Chelsea", "Liverpool", "Man City", "Newcastle", "Nottingham Forest",  "West Ham"], 
    ["Wolves" ,"Aston Villa" , "Luton", "Sheffield United", "Brighton", "Fulham", "Spurs", "Man United", "Everton", "Crystal Palace"]
  ],
  [
    ["Aston Villa", "Brighton", "Everton", "Fulham", "Luton", "Sheffield United", "Spurs", "Wolves", "Crystal Palace",  "Man United"], 
    ["Man City" ,"Brentford" , "Newcastle", "Nottingham Forest", "Arsenal", "Liverpool", "West Ham", "Burnley", "Bournemouth", "Chelsea"]
  ],
  [
    ["Aston Villa", "Brighton", "Crystal Palace", "Everton", "Fulham", "Luton", "Man United", "Sheffield United", "Spurs",  "Wolves"], 
    ["Arsenal" ,"Burnley" , "Liverpool", "Chelsea", "West Ham", "Man City", "Bournemouth", "Brentford", "Newcastle", "Nottingham Forest"]
  ],
  [
    ["Arsenal", "Bournemouth", "Brentford", "Burnley", "Chelsea", "Liverpool", "Man City", "Newcastle", "Nottingham Forest",  "West Ham"], 
    ["Brighton" ,"Luton" , "Aston Villa", "Everton", "Sheffield United", "Man United", "Crystal Palace", "Fulham", "Spurs", "Wolves"]
  ],
  [
    ["Aston Villa", "Crystal Palace", "Fulham", "Liverpool", "Luton", "Nottingham Forest", "Spurs", "West Ham", "Wolves", "Man City"], 
    ["Sheffield United", "Brighton", "Burnley", "Arsenal", "Newcastle", "Bournemouth", "Everton", "Man United", "Chelsea", "Brentford"], 
  ],
  [
    ["Arsenal", "Bournemouth", "Brentford", "Brighton", "Burnley", "Chelsea", "Everton", "Man United", "Newcastle", "Sheffield United"], 
    ["West Ham", "Fulham", "Wolves", "Spurs", "Liverpool", "Crystal Palace", "Man City", "Aston Villa", "Nottingham Forest", "Luton"], 
  ],
  [
    ["Aston Villa", "Crystal Palace", "Fulham", "Liverpool", "Luton", "Man City", "Nottingham Forest", "Spurs", "West Ham", "Wolves"], 
    ["Burnley", "Brentford", "Arsenal", "Newcastle", "Chelsea", "Sheffield United", "Man United", "Bournemouth", "Brighton", "Everton"], 
  ],
  [
    ["Arsenal" , "Bournemouth", "Brentford","Brighton", "Burnley", "Chelsea", "Everton", "Man United", "Newcastle", "Sheffield United"],
    ["Crystal Palace", "Liverpool", "Nottingham Forest", "Wolves", "Luton", "Fulham", "Aston Villa", "Spurs", "Man City", "West Ham"],
  ], 
  [
    ["Brighton" ,"Arsenal" , "Luton", "Crystal Palace", "Burnley", "Sheffield United", "Man City", "Liverpool", "Brentford", "Chelsea"],
    ["Aston Villa", "Bournemouth", "Everton", "Man United", "Newcastle", "West Ham", "Wolves", "Spurs", "Nottingham Forest",  "Fulham"]
  ],
  [
    ["Arsenal", "Bournemouth", "Brentford", "Brighton", "Burnley", "Chelsea", "Everton", "Man United", "Newcastle", "Sheffield United"], 
    ["Liverpool", "Nottingham Forest", "Man City", "Crystal Palace", "Fulham", "Wolves", "Spurs", "West Ham", "Luton", "Aston Villa"], 
  ],
  [
    ["Aston Villa", "Crystal Palace", "Fulham", "Liverpool", "Luton", "Man City", "Nottingham Forest", "Spurs", "West Ham", "Wolves"], 
    ["Man United", "Chelsea", "Bournemouth", "Burnley", "Sheffield United", "Everton", "Newcastle", "Brighton", "Arsenal", "Brentford"], 
  ],
  [
    ["Brentford", "Burnley", "Everton", "Fulham", "Luton", "Man City", "Newcastle", "Nottingham Forest", "Sheffield United", "Spurs"], 
    ["Liverpool", "Arsenal", "Crystal Palace", "Aston Villa", "Man United", "Chelsea", "Bournemouth", "West Ham", "Brighton", "Wolves"], 
  ],
  [
    ["Arsenal", "Aston Villa", "Bournemouth", "Brighton", "Chelsea", "Crystal Palace", "Liverpool", "Man United", "West Ham", "Wolves"], 
    ["Newcastle", "Nottingham Forest", "Man City", "Everton", "Spurs", "Burnley", "Luton", "Fulham", "Brentford", "Sheffield United"], 
  ],
  [
    ["Brentford", "Burnley", "Everton", "Fulham", "Luton", "Man City", "Newcastle", "Nottingham Forest", "Sheffield United", "Spurs"], 
    ["Chelsea", "Bournemouth", "West Ham", "Brighton", "Aston Villa", "Man United", "Wolves", "Liverpool", "Arsenal", "Crystal Palace"], 
  ],
  [
    ["Arsenal", "Aston Villa", "Bournemouth", "Brighton", "Chelsea", "Crystal Palace", "Liverpool", "Man United", "West Ham", "Wolves"], 
    ["Brentford", "Spurs", "Sheffield United", "Nottingham Forest", "Newcastle", "Luton", "Man City", "Everton", "Burnley", "Fulham"], 
  ],
  [
    ["Arsenal", "Brighton", "Burnley", "Crystal Palace", "Everton", "Fulham", "Luton", "Man United", "West Ham", "Wolves"], 
    ["Chelsea", "Man City", "Brentford", "Newcastle", "Liverpool", "Spurs", "Nottingham Forest", "Sheffield United", "Aston Villa", "Bournemouth"], 
  ],
  [
    ["Aston Villa", "Bournemouth", "Brentford", "Chelsea", "Liverpool", "Man City", "Newcastle", "Nottingham Forest", "Sheffield United", "Spurs"], 
    ["Wolves", "Everton", "Man United", "Burnley", "Brighton", "Arsenal", "West Ham", "Crystal Palace", "Fulham", "Luton"], 
  ],
  [
    ["Arsenal", "Bournemouth", "Brentford", "Burnley", "Nottingham Forest", "West Ham", "Chelsea", "Newcastle", "Liverpool", "Man City"], 
    ["Luton", "Crystal Palace", "Brighton", "Wolves", "Fulham", "Spurs", "Man United", "Everton", "Sheffield United", "Aston Villa"], 
  ],
  [
    ["Aston Villa", "Brighton", "Crystal Palace", "Everton", "Fulham", "Luton", "Man United", "Sheffield United", "Spurs", "Wolves"], 
    ["Brentford", "Arsenal", "Man City", "Burnley", "Newcastle", "Bournemouth", "Liverpool", "Chelsea", "Nottingham Forest", "West Ham"], 
  ],
  [
    ["Arsenal", "Bournemouth", "Brentford", "Burnley", "Chelsea", "Liverpool", "Man City", "Newcastle", "Nottingham Forest", "West Ham"], 
    ["Aston Villa", "Man United", "Sheffield United", "Brighton", "Everton", "Crystal Palace", "Luton", "Spurs", "Wolves", "Fulham"], 
  ],
  [
    ["Aston Villa", "Brighton", "Crystal Palace", "Everton", "Fulham", "Luton", "Man United", "Sheffield United", "Spurs", "Wolves"], 
    ["Bournemouth", "Chelsea", "West Ham", "Nottingham Forest", "Liverpool", "Brentford", "Newcastle", "Burnley", "Man City", "Arsenal"], 
  ],
  [
    ["Aston Villa", "Bournemouth", "Everton", "Fulham", "Man United", "Newcastle", "Nottingham Forest", "Spurs", "West Ham", "Wolves"], 
    ["Chelsea", "Brighton", "Brentford", "Crystal Palace", "Burnley", "Sheffield United", "Man City", "Arsenal", "Liverpool", "Luton"], 
  ],
  [
    ["Sheffield United" , "Brentford", "Bournemouth","Brighton", "Man United", "Newcastle", "Everton", "Chelsea", "Arsenal", "Burnley"],
    ["Nottingham Forest", "Fulham", "Liverpool", "Wolves", "Spurs", "Man City", "Aston Villa", "West Ham", "Crystal Palace", "Luton"]
  ], 
  [
    ["Aston Villa", "Bournemouth", "Everton", "Fulham", "Man United", "Newcastle", "Nottingham Forest", "Spurs", "West Ham", "Wolves"], 
    ["Liverpool", "Brentford", "Sheffield United", "Man City", "Arsenal", "Brighton", "Chelsea", "Burnley", "Luton", "Crystal Palace"], 
  ],
  [
    ["Arsenal", "Brentford", "Brighton", "Burnley", "Chelsea", "Crystal Palace", "Liverpool", "Luton", "Man City", "Sheffield United"], 
    ["Everton", "Newcastle", "Man United", "Nottingham Forest", "Bournemouth", "Aston Villa", "Wolves", "Fulham", "West Ham", "Spurs"], 
  ],
];
let BOSS2 = [
  [
    [0,2,1,4,0,0,5,2,1,1],
    [3,1,1,1,1,1,1,2,1,0]
  ],
  [
    [2,0,3,1,2,1,4,3,0,1],
    [1,3,1,4,0,0,0,1,1,2]
  ],
  [
    [3,0,1,2,3,0,1,1,1,1],
    [0,2,1,2,2,1,3,2,3,2]
  ],
  [
    [1,2,2,2,0,5,3,3,3,3],
    [2,2,2,5,1,1,1,2,0,1]
  ],
  [
    [1,1,2,1,1,3,0,0,1,1],
    [3,0,1,3,3,1,1,0,0,1]
  ],
  [
    [0,1,2,1,0,2,3,0,3,0],
    [0,1,0,3,1,2,1,1,1,8]
  ],
  [
    [6,0,1,0,2,2,2,2,1,0],
    [1,4,2,1,0,0,1,1,1,2]
  ],
  [
    [0,1,3,3,2,0,2,2,1,1],
    [1,4,0,1,1,0,2,2,1,0]
  ],
  [
    [2,1,3,2,4,2,2,1,4,2],
    [0,2,0,1,0,2,2,2,1,0]
  ],
  [
    [1,0,5,2,2,0,3,1,3,0],
    [2,2,0,1,2,1,1,1,0,3]
  ],
  [
    [3,0,1,0,1,6,1,2,2,1],
    [2,2,1,1,1,1,0,0,1,4]
  ],
  [
    [3,3,2,1,4,2,3,1,3,2],
    [1,1,0,1,4,3,0,0,2,1]
  ],
  [
    [0,1,0,3,2,1,4,2,1,1],
    [1,2,3,2,1,1,1,3,3,2]
  ],
  [
    [2,2,3,5,3,4,3,1,0,1],
    [1,2,1,0,2,3,3,0,1,1]
  ],
  [
    [1,2,3,5,3,0,1,1,0,2],
    [0,1,0,0,4,2,2,0,2,1]
  ],
  [
    [1,1,1,2,5,1,0,1,4,1],
    [0,1,2,0,0,2,3,0,1,1]
  ],
  [
    [2,-1,1,0,2,0,2,3,0,3],
    [0,-1,2,2,0,0,2,0,2,0]
  ],
  [
    [1,1,0,1,1,2,2,2,2,-1],
    [1,1,2,1,0,3,1,0,1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
  ],
];
let BOSS3 = [
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ],
  [
    [0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0]
  ],
  [
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
  ],
];
let BOSS4 = [
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
];

//Team stats
let club = {
  Arsenal: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  AstonVilla: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  Bournemouth: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  Brentford: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  Brighton: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  Burnley: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  Chelsea: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  CrystalPalace: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  Everton: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: -10
  },
  Fulham: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  Liverpool: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  Luton: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  ManCity: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  ManUnited: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  Newcastle: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  NottinghamForest: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  SheffieldUnited: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  Spurs: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  WestHam: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  Wolves: {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0, 
    ga: 0,
    gd: 0,
    pts: 0
  },
  clubReset: function() {
    for (let prop in club) {
      for (let prop2 in club[prop]) {
        club[prop][prop2] = 0;
      }
    }
  }
}
//standings table (most important)
let standings = [
  ["Arsenal", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Aston Villa", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Bournemouth", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Brentford", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Brighton", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Burnley", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Chelsea", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Crystal Palace", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Everton", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Fulham", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Liverpool", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Luton", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Man City", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Man United", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Newcastle", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Nottingham Forest", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Sheffield United", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Spurs", 0, 0, 0, 0, 0, 0, 0, 0],
  ["West Ham", 0, 0, 0, 0, 0, 0, 0, 0],
  ["Wolves", 0, 0, 0, 0, 0, 0, 0, 0]
];
//Fixture
let fixture = 1;


/********LOCAL STORAGE**********/
//window.onload.. NOT window.onload()
window.onload = function() {
  //loading
  setTimeout(()=> {load.style.display = "none";}, 500);
  updatePrediction();
  //window.localStorage.clear();
  if (window.localStorage.getItem("BOSS2") && window.localStorage.getItem("club") && window.localStorage.getItem("standings") && window.localStorage.getItem("fixture") && window.localStorage.getItem("BOSS4") && window.localStorage.getItem("BOSS3")) {
    storageBOSS4Item = JSON.parse(window.localStorage.getItem("BOSS4"));
    storageBOSS3Item = JSON.parse(window.localStorage.getItem("BOSS3"));
    storageBOSS2Item = JSON.parse(window.localStorage.getItem("BOSS2"));
    //storageClubItem = JSON.parse(window.localStorage.getItem("club"));
    storageClubItem = club;
    storageStandingsItem = JSON.parse(window.localStorage.getItem("standings"));
    storageFixtureItem = JSON.parse(window.localStorage.getItem("fixture"));
    let B = true;

    fixture = storageFixtureItem;
    standings = storageStandingsItem;
    //club = storageClubItem; u dont need to apply this

    for (let i = 0; i < BOSS3.length; i++) {
      for (let j = 0; j <= 1; j++) {
        for (let k = 0; k < BOSS3[0][0].length; k++) {
          if (BOSS3[i][j][k] !== storageBOSS3Item[i][j][k]) B = false;
        } 
      }
    } 
    updateFixture(storageFixtureItem);
    if (B === true) {
      BOSS2 = storageBOSS2Item;
      BOSS3 = storageBOSS3Item;
      updateStats();
      updateStandingsArray();
      sortUltimate(storageStandingsItem);
      emptyFixture();
      fillFixture(0, BOSS, storageBOSS2Item);
      fillStandings();
    }
    else {
      updateStorage();
      updateStats();
      updateStandingsArray();
      sortUltimate(storageStandingsItem);
      emptyFixture();
      fillFixture(0, BOSS, BOSS2);
      fillStandings();
    }
    BOSS4 = storageBOSS4Item;
    refillPrediction();
  }
  else {
    updateFixture(fixture);
    updateStats();
    updateStandingsArray();
    sortUltimate(standings);
    emptyFixture();
    fillFixture(0, BOSS, BOSS2);
    fillStandings();
    updateStorage();

    storageBOSS4 = JSON.stringify(BOSS4);
    window.localStorage.setItem("BOSS4", storageBOSS4);
  }
  //coloring the predictions
  let bennacer = 0;
  for (let i = 0; i < BOSS2.length; i++) {
    for (let j = 0; j < BOSS2[0][0].length; j++) {
      if ((BOSS2[i][0][j] !== -1) && (BOSS2[i][1][j] !== -1) && (BOSS4[i][1][j] === -1) && (BOSS4[i][0][j] === -1)) {
        results[bennacer].style.backgroundColor = "#adadad";
      } 
      else if ((BOSS3[i][0][j] !== 1) && (BOSS3[i][1][j] !== 1) && (BOSS4[i][1][j] !== -1) && (BOSS4[i][0][j] !== -1) && (BOSS2[i][0][j] === BOSS4[i][0][j]) && (BOSS2[i][1][j] === BOSS4[i][1][j]) ) {
        results[bennacer].style.backgroundColor = "green";
      }
      else if ((BOSS3[i][0][j] !== 1) && (BOSS3[i][1][j] !== 1) && ((BOSS2[i][0][j] !== BOSS4[i][0][j]) || (BOSS2[i][1][j] !== BOSS4[i][1][j]))) {
        results[bennacer].style.backgroundColor = "#ad0000";
      }
      ++bennacer;
    }
  }

}

/********FUNCTIONS**********/
//Delete every team in the fixtures table
function emptyFixture() {
  for (let i = 0; i < theTeam.length; i++) {
    while (theTeam[i].firstChild !== null) {
      theTeam[i].removeChild(theTeam[i].firstChild);
    }
  }
}
//Delete every team on Standings table
function emptyStandings() {
  for (let i = 0; i < stand.length; i++) {
    while(stand[i].firstChild !== null) {
      stand[i].removeChild(stand[i].firstChild);
    }
  }
}
//Update Fixture
function updateFixture(x) {
  F.innerHTML = `Fixture ${x}`;
}
//Update each team's statistics in the club object
function updateStats () {
  //reset all to zero, so it starts calculations from zero
  club.clubReset();
  //Manipulating each team's statistics
  let temp;
  for (let i = 0; i < BOSS.length; i++) {
    for (let j = 0; j < theTeam.length; j++) {
      let v, v2;
      if (j % 2 === 0) {
        v = 0;
      }
      else {
        v = 1;
      }
      temp = BOSS[i][v][Math.floor(j / 2)];
      temp = temp.split(" ").join("");
      if (v === 0) {
        v2 = BOSS2[i][1][Math.floor(j / 2)];
      }
      else {
        v2 = BOSS2[i][0][Math.floor(j / 2)];
      }
      if(BOSS2[i][v][Math.floor(j / 2)] !== -1) {
        for (let prop in club) {
          if (prop === temp) {
            //mp
            ++club[prop].mp;
            //gf
            club[prop].gf+=BOSS2[i][v][Math.floor(j / 2)];
            //ga
            club[prop].ga+=v2;
            //gd
            club[prop].gd = club[prop].gf - club[prop].ga;
            //w
            if (BOSS2[i][v][Math.floor(j / 2)] > v2) {
              ++club[prop].w;
              club[prop].pts+=3;
            }
            //l
            else if (BOSS2[i][v][Math.floor(j / 2)] < v2) {
              ++club[prop].l;
            }
            //d + pts
            else {
              ++club[prop].d;
              ++club[prop].pts;
            }
            break;
          }
        }
      }
    }
  }
} 
//Fill teams in Fixture Table
function fillFixture(x, tab, tab2) {
  for (let i = 0; i <= 1; i++) {
    for (let j = 0; j < tab[0][0].length; j++) {
      let p1 = document.createElement("p");
      let text1 = document.createTextNode(`${tab[fixture - 1][i][j]}`);
      p1.appendChild(text1);

      let img1 = document.createElement("img");
      img1.src = `./pics/${tab[fixture - 1][i][j]}.png`;

      if (i === 0) {
        theTeam[x].appendChild(p1);
        theTeam[x].appendChild(img1);
      }
      else {
        theTeam[x].appendChild(img1);
        theTeam[x].appendChild(p1);
      }
      if (BOSS2[fixture - 1][i][j] !== -1) {
        inputScore[x].value = tab2[fixture - 1][i][j];
      }
      else {
        inputScore[x].value = "";
      }
      if (BOSS3[fixture - 1][i][j] === 1) {
        inputScore[x].style.cssText = "pointer-events: auto; opacity: 1;";
      }
      else {
        inputScore[x].style.cssText = "pointer-events: none; opacity: 0.8;";
      }
      x+=2;
    }
    x = 1;  
  }
}
//Update Position
function fillStandings() {
  emptyStandings();
  for (let i = 0; i < standings.length; i++) {
    let pos = document.createTextNode(`${i + 1}`);
    let teamname = document.createTextNode(`${standings[i][0]}`);

    let img = document.createElement("img");
    let p = document.createElement("p");
    let span1 = document.createElement("span");
    let div1 = document.createElement("div");

    span1.appendChild(pos);
    img.src = `./pics/${standings[i][0]}.png`;
    p.appendChild(teamname);
    div1.appendChild(span1);
    div1.appendChild(img);
    div1.appendChild(p);
    stand[i].appendChild(div1);
    let div2 = document.createElement("div");
    for (let j = 1; j <= 8; j++) {
      let text = document.createTextNode(`${standings[i][j]}`);
      let span2 = document.createElement("span");
      span2.appendChild(text);
      div2.appendChild(span2);
    }
    stand[i].appendChild(div2);

  }
}
//refill Position
function refillPrediction() {
  let j = 0, r = -1, gues;
  for (let i = 0; i < round.length * 10; i++) {
    if (i % 10 === 0) {++r; j = 0;}
    if (BOSS4[r][0][j] !== -1 && BOSS4[r][1][j] !== -1) {
      gues = `${BOSS4[r][0][j]} - ${BOSS4[r][1][j]}`;
    }
    else {
      gues = "-";
    }
    round[r].children[j].children[1].innerHTML = gues;
    ++j;
  }
}
//update prediction
function updatePrediction() {
  for (let i = 0; i < round.length; i++) {
    for (let j = 0; j < standings.length / 2; j++) {
      round[i].children[j].children[0].children[0].src = `./pics/${BOSS[i][0][j]}.png`;
      round[i].children[j].children[1].innerHTML = "-";
      round[i].children[j].children[2].children[0].src = `./pics/${BOSS[i][1][j]}.png`;
    }
  }
}
//Update Standings Array, (dont move this up or it will error)
function updateStandingsArray() {
let  i = -1;
let j = 0;
  for (let prop in club) {
    if (i !== standings.length - 1) {
      ++i;
      standings[i][0] = stringSplitted(prop);
      for(let prop2 in club[prop]) {
        ++j;
        standings[i][j] = club[prop][prop2];
      }
      j = 0;
    }
    else break;
  }
}
//decalage function
function decalage(tab, s, e, k) {
  for (let j = s; j < e; j++) {
    let maxindex = j;
    for (let i = j; i < e; i++) {
      if (tab[i][k] > tab[maxindex][k]) {
        maxindex = i;
      }
    }
    let c = tab[maxindex];
    tab[maxindex] = tab[j];
    tab[j] = c;
  }
}
//sorting accoring to gd
//i added parameters cuz ill use it again for another step
function sortGd(tab, a, b) {
  //creating pts table
  let pointValue = tab[0][a];
  let pts = [pointValue];
  for (let i = 0; i < tab.length; i++) {
    if (tab[i][a] !== pointValue) {
      pts.push(tab[i][a]);
      pointValue = tab[i][a];
    }
  }
  //sorting according to points
  let index1 = 0, iteration = 0, y = 0;
  while (index1 < pts.length) {
    while(tab[iteration][a] === pts[index1] && iteration < tab.length) {
      if (iteration === tab.length - 1) {++iteration; break;}
      else ++iteration;
    }
    decalage(tab, y, iteration, b);
    y = iteration;
    ++index1;
  }
}
//sorting accoring to gf
function sortGf(tab) {
  let iteration = 0;
  let pointValue = tab[0][8];
  let gdValue = tab[0][7];
  let index1 = 0; 
  let y = 0;

  while (iteration < tab.length) {
    while(tab[index1][8] === pointValue && tab[index1][7] === gdValue && index1 < 20) {
      if (index1 === 19) {++iteration; ++index1; break;}
      else {
        ++index1;
        ++iteration;
      }
    }
    decalage(tab, y, index1, 5);
    y = index1;
    pointValue = tab[index1][8];
    gdValue = tab[index1][7];
    ++iteration;
  }
}
//sorting according to hth
function createHthArray(tab) {
  let pts2 = [];
  let y = 0;
  let ga, gd, pts
  for (let i = 0; i < tab.length; i++) {
    pts = tab[i][8];
    gd = tab[i][7];
    ga = tab[i][5];
    while (tab[i][5] === ga && tab[i][7] === gd && tab[i][8] === pts && i < tab.length) {
      pts2[y] = [tab[i][0]];
      pts2[y][1] = 0;
      pts2[y][2] = 0;
      ++y;
      ++i;
      if (i === tab.length) {break;}
    }
    if (pts2.length !== 1) {
      updateHthArray(pts2);
      decalage(pts2, 0, pts2.length, pts2[0].length - 1);
      sortGd(pts2, 2, 1);
      //rani hna
      let u = i - pts2.length;
      for (let k = 0; k < pts2.length; k++) {
        let c, l;
        for (l = (i - pts2.length); l < i; l++) {
          if (tab[l][0] === pts2[k][0]) {
            break;
          }
        }
        c = tab[u];
        tab[u] = tab[l];
        tab[l] = c;
        ++u;
      }
    }
    pts2 = [];
    y = 0;
  }
}
function updateHthArray(tab2) {
  let x, y, H, A, HOME, AWAY;
  for (let i = 0; i < tab2.length; i++) {
    m1 = 1;
    for (let j = 0; j < tab2.length; j++) {
      if (i !== j) {
        x = findAller(tab2[i][0], tab2[j][0], BOSS);
        if (x !== -1) {
          //console.log("x = ", x);
          H = BOSS2[x][0][BOSS[x][0].indexOf(tab2[i][0])];
          //console.log("H = ", x);
          A = BOSS2[x][1][BOSS[x][1].indexOf(tab2[j][0])];
          //console.log("A = ", x);
          HOME = BOSS[x][0][BOSS[x][1].indexOf(tab2[j][0])];
          //console.log("HOME = ", x);
          AWAY = BOSS[x][1][BOSS[x][1].indexOf(tab2[j][0])];
          //console.log("AWAY = ", x);
          //console.log("-------------");
          if (H !== -1 && A !== -1) {
            if (H > A) {
              tab2[i][2] += 3;
            }
            else if (H === A){
              tab2[i][2] += 1;
              tab2[j][2] += 1;
            }
            else {
              tab2[j][2] += 3;
            }
            tab2[j][1] += A;
          }   
        }
      }
    }  
  }
}
function sortHth(tab) {
  createHthArray(tab);
}
//ultimate standings table sort
function sortUltimate(tab) {
  //sorting pts, then gd, then gf, then hth, then hth away goals
  if (seasonStarted(BOSS2)) {
    decalage(tab, 0, tab.length, 8);
    sortGd(tab, 8, 7);
    sortGf(tab);
    sortHth(tab);
  }
  return tab;
}
//split team name (WestHam => West Ham) (only two words)
function stringSplitted(string) {
  let i, bool = false;
  for (i = 1; i < string.length; i++) {
    if (string[i].charCodeAt(0) >= 65 && 90 >= string[i].charCodeAt(0)) {
      bool = true;
      break;
    }
  }
  if (bool === true) {
    string = string.split("");
    string[string.length] = (" ");
    for (let j = string.length; j >= i; j--) {
      string[j] = string[j - 1];
    }
    string[i] = " ";
    --string.length;
    string = string.join("");
  }
  return string;
}
//check if season started
function seasonStarted(tab) {
  for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j <= 1; j++) {
      for (let k = 0; k < Math.floor(tab.length / 2); k++) {
        if (tab[i][j][k] !== -1) {
          return true;
        }
      }
      
    }
  }
  return false;
}
//find fixture (home side)
function findAller(string1, string2, tab) {
  for (let i = 0; i < tab.length; i++) {
    if ((tab[i][0].indexOf(string1) === tab[i][1].indexOf(string2)) && tab[i][0].includes(string1) && tab[i][1].includes(string2) ) {
      return i;
    }
  }
  return -1;
}
//update storage
function updateStorage() {
  storageBOSS2 = JSON.stringify(BOSS2);
  storageBOSS3 = JSON.stringify(BOSS3);
  //storageBOSS4 = JSON.stringify(BOSS4);
  storageClub = JSON.stringify(club);
  storageStandings = JSON.stringify(standings);
  storageFixture = JSON.stringify(fixture);

  window.localStorage.setItem("BOSS2", storageBOSS2);
  window.localStorage.setItem("BOSS3", storageBOSS3);
  //window.localStorage.setItem("BOSS4", storageBOSS4);
  window.localStorage.setItem("club", storageClub);
  window.localStorage.setItem("standings", storageStandings);
  window.localStorage.setItem("fixture", storageFixture)
}
//to force user to type digits only
function digitsOnly(e) {
  let x = e.which || e.keycode;
  if (x >= 48 && x <= 57) return true;
  else return false;
} 


/********DOM**********/
//Changing Gameweek when clicking
let roumi = parseInt(fixlist.value);
fixlist.onclick = () => {
  if (roumi !== fixlist.value) {
    fixture = parseInt(fixlist.value);
    roumi = parseInt(fixlist.value);
    let x = 0;
    updateFixture(fixture);
    updateStorage();
    emptyFixture();
    fillFixture(0, BOSS, JSON.parse(window.localStorage.getItem("BOSS2")));
  }
}
btn1.onclick = () => {
  if (fixture !== 1) {
    --fixture;
    let x = 0;
    updateFixture(fixture);
    updateStorage();
    emptyFixture();
    fillFixture(0, BOSS, JSON.parse(window.localStorage.getItem("BOSS2")));
  }
}
btn2.onclick = () => {
  if (fixture !== BOSS.length) {
    ++fixture;
    let x = 0;
    updateFixture(fixture);
    updateStorage();
    emptyFixture();
    fillFixture(0, BOSS, JSON.parse(window.localStorage.getItem("BOSS2")));
  }
}
//Changing the right team score input to the new value
let fakeArray = Array.from(inputScore);
let lastSelectedIndex;
//normalment ne5dem b addEventListener hna
fakeArray.forEach(function(e) {
  //force user to type digits only
  e.onkeypress = () => {return digitsOnly(event);}
  //Getting the index of the selected score input
  e.onfocus = function() {
    lastSelectedIndex = fakeArray.indexOf(e);
    inputScore[lastSelectedIndex].placeholder = "";
  }
  e.onblur = function() {
    let pair, opposite;
    if (lastSelectedIndex % 2 === 0) {pair = 0; opposite = 1;}
    else {pair = 1; opposite = 0}
    if (!isNaN(parseInt(inputScore[lastSelectedIndex].value))) {
      inputScore[lastSelectedIndex].defaultValue = inputScore[lastSelectedIndex].value;
      BOSS2[fixture - 1][pair][Math.floor(lastSelectedIndex / 2)] = parseInt(inputScore[lastSelectedIndex].value);
      BOSS4[fixture - 1][pair][Math.floor(lastSelectedIndex / 2)] = parseInt(inputScore[lastSelectedIndex].value);
    }
    else {
      BOSS2[fixture - 1][pair][Math.floor(lastSelectedIndex / 2)] = -1;
      BOSS4[fixture - 1][pair][Math.floor(lastSelectedIndex / 2)] = -1;
      storageBOSS4 = JSON.stringify(BOSS4);
      window.localStorage.setItem("BOSS4", storageBOSS4);
    }
    if (BOSS2[fixture - 1][pair][Math.floor(lastSelectedIndex / 2)] !== -1 && BOSS2[fixture - 1][opposite][Math.floor(lastSelectedIndex / 2)] !== -1) {
      updateStats();
      updateStandingsArray();
      sortUltimate(standings);
      updateStorage();
      fillStandings();
    }
    else if (BOSS2[fixture - 1][pair][Math.floor(lastSelectedIndex / 2)] === -1 && BOSS2[fixture - 1][opposite][Math.floor(lastSelectedIndex / 2)] === -1) {
      updateStats();
      updateStandingsArray();
      sortUltimate(standings);
      updateStorage();
      fillStandings();
      refillPrediction();
    }
    if (BOSS4[fixture - 1][pair][Math.floor(lastSelectedIndex / 2)] !== -1 && BOSS4[fixture - 1][opposite][Math.floor(lastSelectedIndex / 2)] !== -1) {
      let guess = `${BOSS4[fixture - 1][0][Math.floor(lastSelectedIndex / 2)]} - ${BOSS4[fixture - 1][1][Math.floor(lastSelectedIndex / 2)]}`;
      round[fixture - 1].children[Math.floor(lastSelectedIndex / 2)].children[1].innerHTML = guess;
      storageBOSS4 = JSON.stringify(BOSS4);
      window.localStorage.setItem("BOSS4", storageBOSS4);
    }
    inputScore[lastSelectedIndex].placeholder = "-";
    updateStats();
  }
});
//reset Fixture
resetFixture.onclick = function() {
  for (let i = 0; i <= 1; i++) {
    for (let j = 0; j < BOSS2[0][0].length; j++) {
      if (BOSS3[fixture - 1][i][j] !== 0) {
        BOSS2[fixture - 1][i][j] = -1;
        BOSS4[fixture - 1][i][j] = -1;
        refillPrediction();
      }
    }
  } 
  updateStats();
  updateStandingsArray();
  sortUltimate(standings);
  updateStorage();
  emptyFixture();
  fillFixture(0, BOSS, BOSS2);
  fillStandings();
  storageBOSS4 = JSON.stringify(BOSS4);
  window.localStorage.setItem("BOSS4", storageBOSS4);
}
resetAll.onclick = function() {
  confirm.style.display = "block";
}
no.onclick = function() {
  confirm.style.display = "none";
}
yes.onclick = function() {
  for (let i = 0; i < BOSS2.length; i++) {
    for (let j = 0; j <= 1; j++) {
      for (let k = 0; k < BOSS[0][0].length; k++) {
        if (BOSS3[i][j][k] !== 0) {
          BOSS2[i][j][k] = -1; 
          BOSS4[i][j][k] = -1;
          refillPrediction();
        }
      }
    }
  }
  confirm.style.display = "none";
  updateStats();
  updateStandingsArray();
  sortUltimate(standings);
  updateStorage();
  emptyFixture();
  fillFixture(0, BOSS, JSON.parse(window.localStorage.getItem("BOSS2")));
  fillStandings();
  storageBOSS4 = JSON.stringify(BOSS4);
  window.localStorage.setItem("BOSS4", storageBOSS4);
} 

