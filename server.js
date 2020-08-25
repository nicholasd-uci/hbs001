// npm express
// npm express-handlebars

const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded( { extended: true }))
app.use(express.json())

// you have to include these two line in order for your hbs to be rendered //
app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.set('view engine', '.hbs')


app.get('/bio', (req, res) => {
    res.render('bio')
})

app.get('/portfolio', (req, res) => {
    res.render('portfolio')
})

app.listen(3000)