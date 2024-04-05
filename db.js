//responsible to establish database connection

const mongoose = require('mongoose');  //act like a bridge(mongoose export)

//define mongodb connection url
const mongoURL = 'mongodb://localhost:27017/mydatabase' //define url where to define

//set up mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

//get default connection
//mongoose maintain a default connections object representing the mongodb connection.
const db = mongoose.connection; //maintain mongoose to establish connection(db obj)

//event listener keyword
db.on('connected', () => {
    console.log('Connected to Mongodb server');
})

db.on('error', (err) => {
    console.log('error to Mongodb server', err);
})

db.on('disconnected', () => {
    console.log('Disconnected to Mongodb server');
})

//ultimately export above connection to run on server file
module.exports = db; //represent mongodb connection






