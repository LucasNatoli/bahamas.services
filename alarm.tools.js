const ft = require('./filetools');

//Devuelve true o false segun el precio, la condicion y el valor
function checkPriceAlarm (priceAlert) {

    var symbolId = priceAlert.symbolid
    var condition = priceAlert.condition
    var value  = priceAlert.value
    var ret = {
        alertId : priceAlert.id
    }

    return new Promise((resolve, reject)=> {
        ft.getLastQuote(symbolId, 1).then(
            (quote) => {
                var p = parseFloat(quote.price);
                var v = parseFloat(value);
                switch (condition) {
                    case 'higher':
                        ret.activated = p>v
                        resolve(ret);
                        break;
                    case 'lower':
                        ret.activated = p<v
                        resolve (ret);
                        break;
                    default:
                        console.log('Sorry, that is not something I know how to do.');
                        resolve(false)
                }
            }
        ).catch(
            (reason) => { reject(reason) }
        )
    })
};

module.exports = {
    checkPriceAlarm
}