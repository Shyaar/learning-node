const express =require('express') 

const app = express()
const env = require('dotenv').config()

const PORT = process.env.PORT || 3000


app.get('/',(req,res)=>{
    res.send(`this is the homepage`)
})

app.get('/contact',(req,res)=>{
    res.send(`this is the contact page`)
})

app.listen(PORT)