import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let wcf = fifaData.filter(function(item){
	return item.Year === 2014 && item.Stage === "Final";                
});
console.log(wcf);
wcf.forEach(function(item){
	console.log("Home Team Name:", item["Home Team Name"])          
});
wcf.forEach(function(item){
	console.log("Away Team Name:", item["Away Team Name"])          
});
wcf.forEach(function(item){
	console.log("Home Team Goals:", item["Home Team Goals"])          
});
wcf.forEach(function(item){
	console.log("Away Team Goals:", item["Away Team Goals"])          
});

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */


function getFinals(data){
    const fData = data.filter(item => {
      return item.Stage === "Final";
    });
    return fData;
  };
  console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */


function getYears(){
  const years = [];
  const d = getFinals(fifaData).map(item => {
    years.push(item.Year);
  })
  return years;
}

console.log(getYears());

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

//getFinals as callback function
//filter who won game
//whoever's score was higher, return that team's name


function getWinners(getFinals) {
    const winners = [];
    const finalsData = getFinals(fifaData);
    finalsData.map(item => {
        if (item["Home Team Goals"] > item["Away Team Goals"]){
            winners.push(item["Home Team Name"]);
        } else {
            winners.push(item["Away Team Name"]);
        }
    })
    return winners;
};

console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {
    let years = getYears();
    let countries = getWinners(getFinals);
    let array = years.map(function(year, index){
        let country = countries[index];
        return `In ${year}, ${country} won the world cup!`;
    })
        return array;
    // return `In ${year}, ${country} won the world cup!`;
};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */


//ATTEMPT TO MAKE ARRAY FIRST


// const homeScores = [];

// function createArray(array, data, key){
//     let newArray = data.map(item => {
//         return item[key];
//     })
//     return array.push(newArray);
// }
// console.log(createArray(homeScores, fifaData, "Home Team Goals"));




function getHomeAverageGoals(data) {
    const homeScores = [];

    let homeAverage = data.reduce((total, value) => {
        return total += data["Home Team Goals"];
    },0);
  return "Home Average: " + (homeAverage);
};

console.log(getHomeAverageGoals(fifaData));




function getAwayAverageGoals(data) {
    let awayAverage = data.reduce((total, value) => {
        return total += data["Away Team Goals"];
    },0);
    return "Away Average: " + (awayAverage);
};

console.log(getAwayAverageGoals(fifaData));





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
