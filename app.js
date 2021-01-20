//require packages
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const showCrap = require('./crapGenerator.js')
const handlebars = require('handlebars')

handlebars.registerHelper('if_eq', function (a, b, options) {
  if (a === b) {
    return options.fn(this)
  } else {
    return options.inverse(this)
  }
})

//set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//set routers
app.get('/', ((req, res) => {
  res.render('index')
}))

app.post('/', ((req, res) => {
  const option = req.body
  console.log(option)
  const crap = showCrap(option)
  res.render('index', { crap, option })
}))

//start and listen on the server
app.listen(port, () => {
  console.log(`Express is now listening on https://localhost:${port}`)
})