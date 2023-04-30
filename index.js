const express = require('express');

const app = express()
const port = process.env.PORT || 5000;
const catagoris = require('./data/catagoris.json')
const cors = require('cors')

app.use(cors())

app.get('/', (req , res)=>{
    res.send('Dragon is running hlw')
})

app.get('/catagoris', (req , res)=>{
    res.send(catagoris)
})

app.listen(port , ()=>{
    console.log(`Dragon Api is running on ${port}`)
})