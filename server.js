const express = require("express")
const request = require('request')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const api = require('./server/routes/api')

app.use(express.static(path.join(__dirname, 'dist')))


app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) )

app.use('/' , api)

app.get('/city' , function(req , res){
    
})

app.get('/sanity' , function(req , res){
    res.send('STILL SANE')
})

const port = 1337
mongoose.connect( 'mongodb://localhost/weather', { useNewUrlParser: true } ).then( () => {
    app.listen( port, () => console.log( `Running server on port ${ port }` ) )
} )
