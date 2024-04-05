const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

//POST route to add a person
router.post('/',async (req,res) =>{


    try{
        const data = req.body  //data given by body-parser

        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})



router.get('/', async (req, res) =>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})



router.get('/:workType', async(req,res) =>{
    try{
        const workType = req.params.workType;  //extract workType from URL-parameter
    //validation
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const response = await Person.find({work: workType});
        console.log('respnse fetched');
        res.status(200).json(response);
    }else{
        res.status(404).json({error: "Invalid work type"});
    }
    }catch(err){
        console.log(err);  
        res.status(500).json({error: 'Internal Server Error'});
    }

})



router.put('/:id', async (req,res) =>{
    try{
        const personId = req.params.id;    //id-params kai through
        const updatedPersonData = req.body; //body mai jo data update krna hota h uss bhejte h body k through

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,    //return the updated document (return to response)
            runValidators: true,   //Run Mongoose validation (check are required field)
        })
        if (!response){
            return res.status(404).json({error: 'Person not found'});        
        }

        console.log('data updated')
        res.status(200).json(response);

        

    }catch(err){
        console.log(err);  
        res.status(500).json({error: 'Internal Server Error'});
    }
})


router.delete('/:id', async(req,res) =>{
    try{
        const personId = req.params.id;  //Extract personId from the URL parameter

        //Assuming you have a Person model
        const response = await Person.findByidAndRemove(personId);
        if (!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data deleted')
        res.status(200).json('Person deleted success');

    }catch(err){
        console.log(err);  
        res.status(500).json({error: 'Internal Server Error'});
    }
})

module.exports = router;
