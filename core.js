module.exports = {
    roll : function (ray = false) {
        if (ray) {
            console.log("Function under development... rolling normal dice");
            return this.roll();
        } else {
            return Math.floor(Math.random() * 20) + 1;
        }
    }
}
// FUCKING TUK TUK TAM FUCKING
// TODO: Fix this shit but not in near future
// function rollDice() {
//     return new Promise((resolve, rejection) => {
//         let i = 0;
//         setInterval(() => {
//             process.stdout.clearLine();
//             process.stdout.cursorTo(0);
//             let output = Math.floor(Math.random() * 20) + 1;
//             process.stdout.write(output);
//             if (++i == 5) return output;
//         }, 100);
//     });
// }