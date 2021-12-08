const inquirer = require("inquirer")

const replayQuestion = () => {
  inquirer
  .prompt([{
      type: "list",
      name: "restartOrEnd",
      message: "Would you like to start again?",
      choices: ["Yes", "No"]
    }
  ]
  )
  
  .then((answer) => {
    if (answer.restartOrEnd === "Yes") {
      init();
    }
    else {return};
  }
  )
}

class pet{
  constructor(name, type,) {
    this.name = name
    this.type = type
  }

  hunger = 50;
  fun = 50;
  energy = 50;
  hydration = 50;
  age = 0;

  decay() {
    this.fun -= 5;
    this.hunger += 5;
    this.hydration -= 5;
    this.energy -= 5;
    this.age += 1;
 
    };

  play() {
    this.fun += 10;
    console.log(`You play with ${this.name}... their fun has increased to ${this.fun}`);
    this.decay()
    };

    feed() {
      this.hunger -= 10
      console.log(`${this.name} is eating... their hunger has decreased to ${this.hunger}`)
      this.decay()
      };
      
  sleep() {
    this.energy += 10
    console.log(`${this.name} is sleeping... their energy has increased to ${this.energy}`)
    this.decay()
    };
    
  drink() {
    this.hydration += 10
    console.log(`${this.name} is drinking... their hydration has increased to ${this.hunger}`)
    this.decay()
    };
}

let initQuestions = [
  {
    type: "list",
    name: "type",
    message: "Choose your pet",
    choices: ["Dog", "Cat", "Rabbit", "Bear"],
  },
  {
    type: "input",
    name: "name",
    message: "Use the keyboard to enter your pets name",
  },
]

let myPet

const init = () => {
  inquirer
    .prompt(initQuestions)
    .then((answers) => {
      console.log(answers)
      myPet = new pet(answers.name, answers.type)
    })
    .then(() => gameLoop())
    .catch((error) => {
      console.log(error)
    })
}

const gameLoop = () => {
   if (myPet.hunger >= 100) {
    console.log(`${myPet.name} became so hungry they ran away. ${myPet.type}s need food!`);
    console.log(`You kept ${myPet.name} for ${myPet.age} days`);
    return replayQuestion();    
  }
  
  if (myPet.fun <= 0) {
    console.log(`${myPet.name} became so bored they ran away. ${myPet.type}s need play time!`);
    console.log(`You kept ${myPet.name} for ${myPet.age} days`);
    return replayQuestion();    
  }

  if (myPet.hydration <= 0) {
    console.log(`${myPet.name} became so thirsty they ran away. ${myPet.type}s need to drink!`);
    console.log(`You kept ${myPet.name} for ${myPet.age} days`);
    return replayQuestion();    
  }

  if (myPet.energy <= 0) {
    console.log(`${myPet.name} became so tired they passed out. When they woke they ran away. ${myPet.type}s need to sleep!`);
    console.log(`You kept ${myPet.name} for ${myPet.age} days`);
    return replayQuestion();    
  }

  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Choose an activity",
        choices: ["feed", "drink", "play", "sleep"],
      },
    ])
    .then((answer) => {
      if (answer.action === "feed") {
        myPet.feed()
      }
      else if (answer.action === "drink") {
        myPet.drink()
      }
      else if (answer.action === "play") {
        myPet.play()
      }
      else if (answer.action === "sleep") {
        myPet.sleep()
      }
    })
    .then(() => gameLoop())
}

init()