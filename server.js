const express = require('express');
const app=express();
app.get('/',(req,res)=>{
    res.sendStatus(300)
    res.send('Hi..')
})
app.get('/user',(req,res)=>{
    res.send('Hi..')
})
app.get('/:name',(req,res)=>{
  res.send(`Name ,${req.params.name}`)
})

app.listen(3000)
