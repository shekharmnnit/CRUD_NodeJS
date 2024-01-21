const express = require('express')
const mongoose = require('mongoose')

const app = express()
const url= 'mongodb://localhost/AlienDBex'

//database connectin
mongoose.connect(url)

const con = mongoose.connection
con.on('open', ()=>{
    console.log('connected...')
})

app.use(express.json())
app.listen(9000,()=>{
    console.log('server started')
})

const alienRouter= require('./routers/aliens')
app.use('/aliens', alienRouter)

