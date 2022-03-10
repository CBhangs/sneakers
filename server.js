require('dotenv').config()
console.log(process.env.MONGO_URI)
const express = require('express'); // lets you run express
const mongoose = require('mongoose') // lest you run mongoose
const methodOverride = require('method-override');
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
app.use(express.urlencoded({ extended: true })) // User sends request, Middleware runs between controller and callback functions
app.use((req, res, next) => {
    console.log(req.body)
    next()
})
app.use(methodOverride('_method'))

///////////////////////////////////
// INDEX
///////////////////////////////////
app.get('/sneakers', (req, res) => {
    Sneaker.find({}, (err, foundSneakers) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('Index', {
                sneakers: foundSneakers
            })
        }
    })

});


///////////////////////////////////
// NEW
///////////////////////////////////
app.get('/sneakers/new', (req, res) => {
    res.render('New')
})


///////////////////////////////////
// DELETE
///////////////////////////////////

///////////////////////////////////
//Update
///////////////////////////////////
app.put('/sneakers/:id', (req, res) => {
    Sneaker.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedSneaker) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect(`/sneakers/${req.params.id}`)
        }
    })
})


///////////////////////////////////
//CREATE
///////////////////////////////////
app.post('/sneakers', (req, res) => {
   Sneaker.create(req.body, (err, createdSneaker) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.redirect('/sneakers')
        }
    })
})


///////////////////////////////////
//EDIT
///////////////////////////////////


///////////////////////////////////
//SHOW
///////////////////////////////////




app.listen(3000, () => {
    console.log('listening')
})