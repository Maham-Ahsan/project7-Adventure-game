#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter your name: "
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "Select",
        type: "list",
        message: "Select your Enemy: ",
        choices: [chalk.bgBlueBright("Skeleton"), chalk.bgCyanBright("Alien"), chalk.bgBlackBright("Zombie")]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.Select);
do {
    //skeleton
    if (opponent.Select == chalk.bgBlueBright("Skeleton")) {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What do you want to do?",
                choices: [chalk.red("Attack"), chalk.green("Drink portion"), chalk.yellow("Run for your life...")]
            }
        ]);
        if (ask.opt == chalk.red("Attack")) {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.fuel} fuel is ${p1.fuel}`);
                console.log(`${o1.fuel} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.fuel} fuel is ${p1.fuel}`);
                console.log(`${o1.fuel} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        ;
        if (ask.opt == chalk.green("Drink portion")) {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion your fuel is ${p1.fuel}`);
        }
        ;
        if (ask.opt == chalk.yellow("Run for your life...")) {
            console.log("You Loose, Better luck Next Time");
            process.exit();
        }
    }
    //Alien
    if (opponent.Select == chalk.bgCyanBright("Alien")) {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What do you want to do?",
                choices: [chalk.red("Attack"), chalk.green("Drink portion"), chalk.yellow("Run for your life...")]
            }
        ]);
        if (ask.opt == chalk.red("Attack")) {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.fuel} fuel is ${p1.fuel}`);
                console.log(`${o1.fuel} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.fuel} fuel is ${p1.fuel}`);
                console.log(`${o1.fuel} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        ;
        if (ask.opt == chalk.green("Drink portion")) {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion your fuel is ${p1.fuel}`);
        }
        ;
        if (ask.opt == chalk.yellow("Run for your life...")) {
            console.log("You Loose, Better luck Next Time");
            process.exit();
        }
    }
    //zombie
    if (opponent.Select == chalk.bgBlackBright("Zombie")) {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What do you want to do?",
                choices: [chalk.red("Attack"), chalk.green("Drink portion"), chalk.yellow("Run for your life...")]
            }
        ]);
        if (ask.opt == chalk.red("Attack")) {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.fuel} fuel is ${p1.fuel}`);
                console.log(`${o1.fuel} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.fuel} fuel is ${p1.fuel}`);
                console.log(`${o1.fuel} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        ;
        if (ask.opt == chalk.green("Drink portion")) {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion your fuel is ${p1.fuel}`);
        }
        ;
        if (ask.opt == chalk.yellow("Run for your life...")) {
            console.log("You Loose, Better luck Next Time");
            process.exit();
        }
    }
    ;
} while (true);
