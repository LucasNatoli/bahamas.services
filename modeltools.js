const m = require('./models')


const args = process.argv.slice(2);


switch (args[0]) {
    case 'sync':
        console.log("Syncronizing models")
        m.sequelize.sync()
        .then()
        .catch((r) => {console.error(r)})
        break;
    case 'force':
        console.log("Syncronizing models FORCE")
        m.sequelize.sync({force: true})
        .then()
        .catch((r) => {console.error(r)})
        break;

    default:
        console.log('Sorry, that is not something I know how to do.');
 }
