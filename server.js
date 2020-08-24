// npm express
// npm express-handlebars

const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded( { extended: true }))
app.use(express.json())

app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.get('/test', (req, res) => {
    res.render('test')
})
app.get('/bio', (req, res) => {
    res.render('bio')
})

app.listen(3000)