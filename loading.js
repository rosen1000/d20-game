const readline = require("readline");
const settings = require("./settings.json");

module.exports = async function () {
    return new Promise((resolve, reject) => {
        if (settings.loading == false) return resolve();
        function loadingBar() {
            return new Promise((resolve2, reject) => {
                let i = 0;
                let interval = setInterval(() => {
                    readline.clearLine(process.stdout);
                    readline.cursorTo(process.stdout, 0);
                    let text = "[";
                    for (let j = i; j >= 0; j--) {
                        text += "=";
                    }
                    for (let j = i; j < 20; j++) {
                        text += "-";
                    }
                    text += "]";
                    process.stdout.write(text);
                    if (i++ == 20) {
                        clearInterval(interval);
                        resolve2();
                    }
                }, 100);
            })
        }
        loadingBar().then(() => {
            setTimeout(function () {
                console.log(" Done loading!");
                resolve();
            }, 500);
        })
    })
}