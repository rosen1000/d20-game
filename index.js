const core = require("./core.js");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
let player = require("./saves/player.json");

require("./loading.js")().then(async () => {
    setTimeout(() => {
        console.clear();
        console.log("Welcome to the d20 game");
        startUp();
    }, 1000);
});

async function startUp() {
    setName().then(() => {
        setAge().then(() => {
            console.log("gg")
        });
    });
}

let setName = function () {
    return new Promise((resolve, rejection) => {
        readline.question("What's your name?\n", (input) => {
            player.name = input;
            readline.pause();
            resolve();
        });
    });
}


async function setAge() {
    return new Promise((resolve, rejection) => {
        getData("What's your age range? (young/adult/old)\n").then(input => {
            if (input == "young") {
                value = core.roll();
                player.age = value + 3;
                readline.write("Your age is " + player.age + "\n");
                resolve();
            } else if (input == "adult") {
                value = core.roll();
                player.age = value + 20;
                readline.write("Your age is " + player.age + "\n");
                resolve()
            } else if (input == "old") {
                value = core.roll();
                player.age = value + 50;
                readline.write("Your age is " + player.age + "\n");
                resolve()
            } else {
                readline.write("Your answear doesn't match any choice");
                resolve(setAge());
            }
        }).catch((reason) => {
            readline.write(reason);
            resolve(setAge());
        })
    });
}

function getData(question) {
    return new Promise((resolve, rejection) => {
        readline.question(question, (input) => {
            if (typeof (parseInt(input)) == NaN) {
                rejection("This is not text");
                readline.pause();
            }
            let a = ["young", "adult", "old"];
            if (a.includes(input)) {
                resolve(input);
                readline.pause();
            } else {
                rejection("This doesn't match any of the choices");
                readline.pause();
            }
        });
    });
}

function game() {
    process.stdin.setEncoding("utf-8");
    process.stdin.on("data", async (inputText) => {
        let args = inputText.split(" ");
    });
}