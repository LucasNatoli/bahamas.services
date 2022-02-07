const checkToken = require('../middleware').checkToken;
const END_POINT = '/v1/system'
const WATCHLIST = '/watchlist'


module.exports = (app, models) => {
    app.get(END_POINT + WATCHLIST,
        (req, res) => {
            models.systemWatchlist.findAll()
            .then(
                list => { res.status(200).send(list) }
            ).catch(
                err => { 
                    res.status(500).send(err) //debe escribir en un log de error
                }
            )
    }),

    app.post(END_POINT + WATCHLIST,
        (req, res, next) => { checkToken(req, res, next) },
        (req, res) => {
            var id = req.body.id;
            var symbol = req.body.symbol
            var name = req.body.name
            var newElem = {id, symbol, name}

            models.systemWatchlist.create(newElem)
            .then ( item => res.status(201).send(item) )
            .catch( err => { res.status(500).send({name: err.name, errors: err.errors}) } )

    })
}  