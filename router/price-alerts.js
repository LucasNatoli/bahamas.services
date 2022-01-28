const checkToken = require('../middleware').checkToken;
const END_POINT = '/v1/alerts'
const PRICE_ALERTS = '/price-alerts'

function findByUser(userid, priceAlert) {
    return new Promise((resolve, reject) => {
        priceAlert.findAll({
            attributes: ['id', 'symbolid', 'name', 'condition', 'value'],
            where: { userid }
        }).then(
            alerts => { resolve(alerts) },
            err => { reject(err) }
        )
    })
}

module.exports = (app, models) => {
    app.get(END_POINT + PRICE_ALERTS,
        (req, res, next) => { checkToken(req, res, next) },
        (req, res) => {
            var userid = req.decoded.id;
            findByUser(userid, models.priceAlert)
                .then(
                    alerts => { res.status(200).send(alerts) }
                ).catch(
                    err => { res.status(500).end() }
                )
    }),

    app.post(END_POINT + PRICE_ALERTS,
        (req, res, next) => { checkToken(req, res, next) },
        (req, res) => {
            var userid = req.decoded.id;
            var symbolid = req.body.symbolid
            var condition = req.body.condition
            var value = req.body.value
            var name = req.body.name

            models.priceAlert.create({
                userid,
                symbolid,
                condition,
                name,
                value
            }).then(
                //account => { res.status(201).send(account.id, account.name) },
                alert => { res.status(201).send({ alertid: alert.id, name: alert.name }) },
                err => { res.status(500).end() }
            )
    }),

    app.put(END_POINT + PRICE_ALERTS,
        (req, res, next) => { checkToken(req, res, next) },
        (req, res) => {
            var alertid = req.body.alertid
            var symbolid = req.body.symbolid
            var condition = req.body.condition
            var value = req.body.value
            var name = req.body.name
            var updateValues = { symbolid, condition, value, name }

            models.priceAlert.findByPk(alertid).then(
                (alert) => {
                    alert.update(updateValues).then(
                        () => { res.status(200).send(updateValues) }
                    ).catch(
                        err => { res.status(500).end() }
                    )
                }
            ).catch( err => { res.status(500).end() } )
        }
    )
}  