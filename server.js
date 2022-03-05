require('dotenv').config()
console.log(process.env.MONGO_URI)
const express = require('express'); // lets you run express
const mongoose = require('mongoose') // lest you run mongoose
const app = express(); // calls express to work 
const Sneaker = require('./models/sneakers'); // imports sneakers from wherever it is 


///////////////////////////////////
// MVC Setup
///////////////////////////////////


// VIEWS
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// MODELS
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// MIDDLEWARE
app.use(express.urlencoded({ extended: true })) // allows code below to work (req.body)
app.use((req, res, next) => {
    console.log(req.body)
    next()
})

///////////////////////////////////
// INDEX
///////////////////////////////////
app.get('/sneakers', (req, res) => {
    Sneaker.find({}, (err, foundSneakers) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('sneakers/Index', {
                sneakers: foundSneakers
            })
        }
    })

});


///////////////////////////////////
// NEW
///////////////////////////////////
app.get('/sneakers/new', (req, res) => {
    res.render('sneakers/New')
})


///////////////////////////////////
// DELETE
///////////////////////////////////

///////////////////////////////////
//Update
///////////////////////////////////


///////////////////////////////////
//CREATE
///////////////////////////////////

///////////////////////////////////
//EDIT
///////////////////////////////////


///////////////////////////////////
//SHOW
///////////////////////////////////




app.listen(5000, () => {
    console.log('listening')
})