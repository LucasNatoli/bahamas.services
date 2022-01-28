const CoinMarketCap = require('coinmarketcap-api')
const fs = require('fs');
const cliArgs = process.argv.slice(2);

const apiKey = 'ae0aed59-6969-4cdc-82f8-715fe98bbbd9'
const client = new CoinMarketCap(apiKey)

/**
 *    Obtener Cotizaciones segun los parametros recibidos
 */

client.getQuotes({
    symbol: 'USDm,CAKE,XMS, XLR2'
}).then(
    (x) => {
        // Escribir cada cotizacion en el log que corresponda
        for (var q in x.data) {
            var symbol = x.data[q].symbol;
            console.log("parsing: " + symbol);
            var logFileName = '/' + symbol + '_quotes.log';

            console.log("log file Name: " + logFileName);
            var log_file = fs.createWriteStream(__dirname + logFileName, {flags : 'a'});
            var e = {
                last_updated: x.data[q].last_updated,
                id: x.data[q].id,
                name: x.data[q].name,
                symbol: symbol,
                price: x.data[q].quote.USD.price,
            }
            log_file.write(JSON.stringify(e) + ", ");
        }
    }
).catch(console.error)




/** 
 * 
 *   Herramientas para logs
 * 

var log_file = fs.createWriteStream(__dirname + '/quotes.log', {flags : 'a'});
var error_file = fs.createWriteStream(__dirname + '/error.log', {flags : 'a'});
var log_stdout = process.stdout;
var util = require('util');

console.log = function(d) { //
    var msg = util.format(d) + '\n';
    log_file.write(msg);
  log_stdout.write(msg);
};

console.error = function(d) { //
    var msg = util.format(d) + '\n';
    error_file.write(msg);
    process.stderr.write(msg);
};

*/
