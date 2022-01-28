const express = require('express')
//const bodyParser = require('body-parser')

const models = require('./models')
const router = require('./router')
const app = express()

const PORT = 3000;

//app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Add CORS headers

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// routes
router(app, models)

app.listen(PORT, () => {
    console.log('APP listening on port:', PORT)
})
