const express = require('express');
const app = express()


const port = process.env.PROT || 5000;

const users = [
    {id: 1, name: 'Sufi', email:'sufi@gmail.com'},
    {id: 1, name: 'Sale', email:'sale@gmail.com'},
    {id: 1, name: 'Saki', email:'saki@gmail.com'},
    {id: 1, name: 'Salt', email:'salt@gmail.com'}
]

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })

app.get('/users',(req,res) =>{
    res.send(users)
   
})

app.listen(port, () =>{
    console.log('running server' ,{port})
})