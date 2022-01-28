const ft = require('./filetools');
const myArgs = process.argv.slice(2);

ft.getLastQuote(myArgsnode,1).then(
    (lastLine) => {
        console.log(lastLine)
    }
).catch(
    (rejected) => {
        console.error(rejected)
    }
)