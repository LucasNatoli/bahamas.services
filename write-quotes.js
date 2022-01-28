const apiKey = 'ae0aed59-6969-4cdc-82f8-715fe98bbbd9'
const CoinMarketCap = require('coinmarketcap-api')
const client = new CoinMarketCap(apiKey)
const ft = require('./filetools')
const watchlist = require('./watchlist')

var ids = []
for (e in watchlist) {
    ids.push(watchlist[e].id);
}

client.getQuotes({
    id: ids
}).then(
    (response) => {
        for (var i in response.data) {
            var d = response.data[i];
            var obj = {
                last_updated: d.last_updated,
                price: d.quote.USD.price,
            }
            ft.appendQuote(d.id, obj)
        }
    }
).catch(console.error)

