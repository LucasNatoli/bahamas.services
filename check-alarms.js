const models = require('./models')
const checkPriceAlarm = require('./alarm.tools').checkPriceAlarm

models.priceAlert.findAll(
    { attributes: ['id', 'symbolid', 'name', 'condition', 'value'] }
).then(
    priceAlerts => {
        for (let i = 0; i < priceAlerts.length; i++) {
            var alert = priceAlerts[i].dataValues
            checkPriceAlarm(alert).then(
                t => {
                    if (t.activated) {
                        models.priceAlert.findByPk(t.alertId)
                        .then(
                            pa => pa.update({
                                activated: true, 
                                lastactivated: models.sequelize.literal('CURRENT_TIMESTAMP')
                            })
                            .then( r => console.log(r.dataValues) )
                            .catch( e => console.error(e) )
                        ).catch( 
                            e => console.error(e) 
                        )
                    } 
                }
            )
        }
    }
)
