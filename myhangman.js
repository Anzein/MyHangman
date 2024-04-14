import PromptSync from 'prompt-sync';
const prompt = PromptSync();

// Start the game
console.log ("Hello, this is a hangman game!")
prompt ("Please, press enter to continue")
console.log ("---------------------------------------------------")
console.log ("Do you want to play?")
console.log
(`Press "S" to start
or
Press "X" to exit`)

let startButton = prompt ("")
// While cicle what is checking input is valid or not
while (!(startButton.toLowerCase() === "s" || startButton.toLowerCase() === "x")) {
  console.log ("This is not one of the options.")
  console.log
  (`Please
Press "S" to start
or
Press "X" to exit`)
  startButton = prompt ("")
}

if (startButton.toLowerCase() === "s") {
  console.log ("Welcome to the hangman game.")
  console.log (`
 _______
 |/      |
 |      (_)
 |      \\|/
 |       |
 |      / \\
 |
_|___
`)

const onlyLetters = "abcdefghijklmnopqrstuvwxyz".split("")

let rightLetters = []
let wrongLetters = []

let gameList = [
  "The Binding of Isaac",
  "Alien Isolation",
  "Undertale",
  "Knock-knock",
  "Happy's Humble Burger Farm",
  "DOOM",
  "Resident Evil",
  "Fearmonium",
  "The Treehouse Man",
  "Typoman",
  "My Big Sister",
  "Demoniaca: Everlasting Night",
  "Oxenfree",
  "Hedon",
  "Beyond two Souls",
  "Ara Fell",
  "Alice Madness Returns",
  "Iris.Fall",
  "The End is nigh",
  "Tormented Souls",
  "Hellblade: Senua's Sacrifice",
  "To the Moon",
  "The World next Door",
  "Mad Father",
  "Chrono Cross",
  "Chrono Trigger",
  "Outlast",
  "Silent Hill",
  "Ion Fury",
  "Nightmare Reaper",
  "Until Dawn",
  "FEZ",
  "Hotline Miami",
  "Virgo versus the Zodiac",
  "Catmaze",
  "The Coma",
  "Sanitarium",
  "Day of the Tentacle",
  "Full Throttle",
  "Fran Bow",
  "Little Misfortune",
  "Beholder",
  "Deadbolt",
  "Castle Crashers",
  "Journey",
  "A Short Hike",
  "GRIS",
  "Celeste",
  "Blood",
  "Dead Estate",
  "Little Nightmares",
  "Murder House",
  "Sea Salt",
  "Deep Dungeons of Doom",
  "The Count Lucanor",
  "Yuppie Psycho",
  "Lovecraft's Untold Stories",
  "LIMBO",
  "Bendy and the Ink Machine",
  "Bendy and the Dark Revival",
  "Final Fantasy VII",
  "Final Fantasy VIII",
  "Final Fantasy IX",
  "Final Fantasy X",
  "Dark Pictures Anthology: Man of Medan",
  "Dark Pictures Anthology: Little Hope",
  "Dark Pictures Anthology: House of Ashes",
  "Dark Pictures Anthology: The Devil in Me",
]

let easySolution = []
let mediumSolution = []
let hardSolution = []

let lengthOfGameList = gameList.length

for (let i = 0; i < lengthOfGameList; i++) {
  if (gameList[i].length <= 8) {
    easySolution.push(gameList[i])
  } else if (gameList[i].length > 8 && gameList[i].length <= 16) {
    mediumSolution.push(gameList[i])
  } else {
    hardSolution.push(gameList[i])
  }
}

console.log ("Choose your difficulty!")
console.log (`
Easy - Press "1" - You will have 6 HP and your word will be short.
Medium - Press "2" - You will have 5 HP and your word will be long.
Hard - Press "3" - You will have 4 HP and your word will be very long.
Nightmare - Press "4" - You will have 3 HP and your word will be very long.
`)

let difficulty = prompt ("")

while (!(difficulty === "1" || difficulty === "2" || difficulty === "3" || difficulty === "4")) {
  console.log ("That's not one of them")
  console.log ("Choose a number (1, 2, 3, 4)")
  console.log (`
Easy - Press "1" - You will have 6 HP and your word will be short.
Medium - Press "2" - You will have 5 HP and your word will be long.
Hard - Press "3" - You will have 4 HP and your word will be very long.
Nightmare - Press "4" - You will have 3 HP and your word will be very long.
`)
  difficulty = prompt ("")
}

switch (difficulty) {
  case "1":
    console.log ("You selected easy difficulty! You are a BIG PUSSY!")
    break;
  case "2":
    console.log ("You selected medium difficulty! You are a NORMIE!")
    break;
  case "3":
    console.log ("You selected hard difficulty! Do you really think you are a BADASS just because you selected hard? You are NOT!")
    break;
  case "4":
    console.log ("Idiot!")
    break;
}

let healthPoint = 0
if (difficulty === "1") {
  healthPoint += 6
} else if (difficulty === "2") {
  healthPoint += 5
} else if (difficulty === "3") {
  healthPoint += 4
} else {
  healthPoint += 3
}

let easyRandom = Math.floor(Math.random()*easySolution.length)
let mediumRandom = Math.floor(Math.random()*mediumSolution.length)
let hardRandom = Math.floor(Math.random()*hardSolution.length)

let solution = ""
if (difficulty === "1") {
  solution = easySolution[easyRandom]
} else if (difficulty === "2") {
  solution = mediumSolution[mediumRandom]
} else {
  solution = hardSolution[hardRandom]
}

let displaySolution = ""
// For cicle what makes the letters of the solution invisible, but it's békénhagyjha the other characters
for (let i = 0; i < solution.length; i++) {
  if (solution[i] === " ") {
    displaySolution += "  "
  } else if (!onlyLetters.includes(solution[i].toLowerCase())) {
    displaySolution += solution[i]+" "
  } else {
    displaySolution += "_ "
  }
}

console.log ("Your word is a videogame title, here it is:")
console.log (displaySolution)
console.log ("Your HP: ",healthPoint)
console.log ("If you want to quit, type 'exit'!")

// Let's begin the game
while (displaySolution.includes("_") && healthPoint > 0) {

  console.log ("Gimme a letter!")
  let userGuess = prompt ("")

  // While cicle what is checking that the user's guess is letter or not
  while (!onlyLetters.includes(userGuess.toLowerCase()) || userGuess.length !== 1 || rightLetters.includes(userGuess.toLowerCase()) || wrongLetters.includes(userGuess.toLowerCase())) {
    if (userGuess.toLowerCase() === "exit") {
      console.log ("Okay! Bye-bye!")
      process.exit(0)
      break
    } else if (userGuess.length !== 1) {
      console.log ("Too long! Type only one character!")
      console.log ("Right letters: ",rightLetters)
      console.log ("Wrong letters: ",wrongLetters)
      console.log ("Your HP: ",healthPoint)
      console.log (displaySolution)
      console.log ("If you want to quit, type 'exit'!")
      userGuess = prompt ("")
    } else if (rightLetters.includes(userGuess.toLowerCase())) {
      console.log ("This letter already was, and it was correct!")
      console.log ("Right letters: ",rightLetters)
      console.log ("Wrong letters: ",wrongLetters)
      console.log ("Your HP: ",healthPoint)
      console.log (displaySolution)
      console.log ("If you want to quit, type 'exit'!")
      userGuess = prompt ("")
    } else if (wrongLetters.includes(userGuess.toLowerCase())) {
      console.log ("This letter already was, and it was incorrect!")
      console.log ("Right letters: ",rightLetters)
      console.log ("Wrong letters: ",wrongLetters)
      console.log ("Your HP: ",healthPoint)
      console.log (displaySolution)
      console.log ("If you want to quit, type 'exit'!")
      userGuess = prompt ("")
    } else {
      console.log ("What are you doin' bro? I said A LETTER!")
      console.log ("Right letters: ",rightLetters)
      console.log ("Wrong letters: ",wrongLetters)
      console.log ("Your HP: ",healthPoint)
      console.log ("If you want to quit, type 'exit'!")
      userGuess = prompt ("")
    }
  }
  // This if statement push the user's letter into the rightLetters if the letter is right, and push the user's letter into the wrongLetters if the letter is wrong
  if (solution.includes(userGuess.toLowerCase()) || solution.includes(userGuess.toUpperCase())) {
    rightLetters.push(userGuess)
  } else if ((!solution.includes(userGuess.toLowerCase()) || !solution.includes(userGuess.toUpperCase())) && !wrongLetters.includes(userGuess.toLowerCase())) {
    wrongLetters.push(userGuess)
    healthPoint = healthPoint - 1
  }

  for (let i = 0; i < solution.length; i++) {
    if (solution[i].toLowerCase() === userGuess.toLowerCase()) {
      displaySolution = displaySolution.substring(0, i * 2) + solution[i] + displaySolution.substring((i * 2) + 1)
    }
  }

  console.log ("Rigth letters: ",rightLetters)
  console.log ("Wrong letters: ",wrongLetters)
  console.log ("Your HP: ",healthPoint)
  console.log (displaySolution)

}

if (healthPoint === 0) {
  console.log ("You are dead!")
  console.log ("Your word was: ",solution)
} else {
  console.log ("You won!")
  console.log ("Congratulations!")
  console.log ("Your word was: ",solution)
}

process.exit(1)

} else {
  console.log ("Okay! Bye-bye!")
  process.exit(0)
}