const alarmConditions = require('./alarm-condition');
const alarmTools = require('./alarm.tools')

for (i in alarmConditions) {
    var cond = alarmConditions[i];
    //console.log(cond.name + ', ' + cond.symbolid + ', ' + cond.condition + ', ' + cond.value);
    alarmTools.checkPriceAlarm(cond).then(
        (tf) => {
            if (tf) {
                console.log ("TRUE")
            } else {
                console.log ("FALSE")
            }
        }
    ).catch(
        (reason) => {
            console.error(reason)
        }
    )
}