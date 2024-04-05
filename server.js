//importing libraries
var fs = require('fs');
var os = require('os');
const db = require('./db');

var user = os.userInfo();

console.log(user.username);
console.log(user);

fs.appendFile('gretting.txt','Hi' + user.username + '!', ()=>{
    console.log('file is created');
});


//import other server
console.log('os');
const notes  = require('./notes.js');
var age = notes.age;
console.log(age);

var result = notes.addNumber(age,18);
console.log(result);

//lodash
var _ = require('lodash');
var data = ['person','person',1,2,1,2,'namee','age',2];
var filter = _.uniq(data);
console.log(filter);
console.log(_.isString('Nupur'));

//json to object
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);


//object to json
const objectToConvert = {
    name: "Alice",
    age: 25
};
const json = JSON.stringify(objectToConvert);
console.log(json);


//express
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, ()=>{
    console.log("listening on port 3000")
}) //room no.  

const Person = require('./models/Person');
const MenuItem = require('./models/MenuItem');


//add body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json()); //all data convert to object and store to req.body

//create post method to save data to database
//.....





    //const data = req.body  //Assuming the request body contains the person data

    //Create a new Person document usingthe mongoose model
    //const newPerson = new Person(data);
    //newPerson.name = data.name;
    //newPerson.age = data.age;
    //newPerson.gender = data.gender;
    //newPerson.mobile = data.mobile;
    //newPerson.email = data.email;
    //newPerson.address = data.address;


    //save newPerson to database
    //newPerson.save((error, savedperson) =>{
        //if(error){
            //console.log('Error on saving person', error);
            //res.status(500).json({error: 'Internal server error'})
        //}
        //else{
            //console.log('data saved successfully');
            //res.status(200).json(savedperson);
        //}
    //})


//get method to get person data
//....



//create post method to save data to database
//....menu POST




//Import the router file
const personRoutes = require('./routes/personRoutes');

//Use router
app.use('/person', personRoutes);

//IMport the router file for menu
const MenuRoutes = require('./routes/MenuRoutes');

//Use router for Menu
app.use('/menu', MenuRoutes);