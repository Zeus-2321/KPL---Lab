//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(name, age, team, trophies) {
  let managerDetails = [
    name, age, team, trophies
  ]
  return managerDetails;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(formation) {
  if (formation.length == 0) {
    return null;
  }
  let gameFormation = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
  return gameFormation;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year) {
  let playerYear = players.filter((elt) => {
    if (elt.debut == year) {
      return true;
    } else {
      return false;
    }
  })
  return playerYear;
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position) {
  let playerPosition = players.filter((elt) => {
    if (elt.position == position) {
      return true;
    } else {
      return false;
    }
  })
  return playerPosition;
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName) {
  return players.filter((player) => {
    let trophy = player.awards.filter(elt => {
      return elt.name == awardName;
    })
    return trophy.length > 0;
  });
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, numOfTimes) {
  return players.filter((player) => {
    let awardXtrophies = player.awards.filter((elt) => {
      return elt.name == awardName;
    });
    return awardXtrophies.length == numOfTimes;
  });
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  return players.filter((player) => {
    if (player.country == country) {
      let awardXcountry = player.awards.filter((elt) => {
        return elt.name == awardName;
      });
      return awardXcountry.length > 0;
    } else {
      return false;
    }
  });
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  return players.filter((player) => {
    return player.team == team && player.awards.length >= noOfAwards && player.age <= age;
  });
}

//Progression 9 - Sort players in descending order of their age

function SortAge() {
  return players.sort((player1, player2) => {
    return player1.age - player2.age;
  })
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team) {
  return players.filter(player => {
      return player.team == team;
    })
    .sort((player1, player2) => {
      return player2.awards.length - player1.awards.length;
    })
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  return players.filter((player) => {
      if (player.country != country) {
        return false;
      }
      let ans = player.awards.filter((elt) => {
        return elt.name == awardName;
      });
      return ans.length == noOfTimes;
    })
    .sort((player1, player2) => {
      return player1.name.localeCompare(player2.name)
    })
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age) {
  return players
    .filter((player) => {
      return player.age > age;
    })
    .sort((player1, player2) => {
      return player1.name.localeCompare(player2.name);
    })
    .map(player => {
      player.awards.sort((award1, award2) => {
        return award2.year - award1.year;
      });
      return player;
    })
}