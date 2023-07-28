const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const laughinnModel = require('./models/laughinn')

const app = express()
app.use(express.json())
app.use(cors({ credentials: true, origin: true }));

mongoose.connect("mongodb+srv://subhajit:jENEP1234@cluster0.q0qcvmz.mongodb.net/Hotel_Management_System?retryWrites=true&w=majority");

app.post("/login",(req,res)=>{
    const{email, password} = req.body;
    laughinnModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password)
            {
                res.json("Success")
            }
            else
            {
                res.json("The password is incorrect!")
            }
        }
        else{
            res.jsonright("You don't have any account! :(")
        }
    })
})

app.post('/register',(req, res) => {
    laughinnModel.create(req.body)
    .then(laughinn => res.json(laughinn))
    .catch(err => res.json(err))
})


// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});