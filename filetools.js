// fileTools.js
const fs = require('fs');
const readline = require('readline');
const Stream = require('stream');
const logPath = '/logs/';

function getLastQuote (symbolId, minLength) {
    let inStream = fs.createReadStream(__dirname + logPath + symbolId + '_quotes.log');
    let outStream = new Stream;
    return new Promise((resolve, reject)=> {
        let rl = readline.createInterface(inStream, outStream);
        let lastLine = '';
        rl.on('line', function (line) {
            if (line.length >= minLength) {
                lastLine = line;
            }
        });
        rl.on('error', reject)
        rl.on('close', function () {
            var obj = lastLine.slice(0, -1); //cortar la última coma
            resolve(JSON.parse(obj));
        });
    })
}

function appendQuote (symbolId, jsonObject) {
    var log_file = fs.createWriteStream(__dirname + logPath + symbolId + '_quotes.log', {flags : 'a'});
    log_file.write(JSON.stringify(jsonObject) + "," + '\n');
}

module.exports = {
    getLastQuote,
    appendQuote
};