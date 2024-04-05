const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

//POST
router.post('/', async (req, res) =>{
    
    try{
        const data = req.body

        const newmenu = new MenuItem(data);

        const response = await newmenu.save();
        console.log('data saved');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})


//GET
router.get('/', async (req,res) =>{
    
    try{
        const data = await MenuItem.find()
        console.log('data fetch');
        res.status(200).json(data);
    }catch(err){
        console.log(err);  
        res.status(500).json({error: 'Internal Server Error'});
    }

})


router.get('/:tasteType', async(req,res) =>{
    try{
        const tasteType = req.params.tasteType;  //extract workType from URL-parameter
    //validation
    if(tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour'){
        const response = await MenuItem.find({taste: tasteType});
        console.log('respnse fetched');
        res.status(200).json(response);
    }else{
        res.status(404).json({error: "Invalid taste type"});
    }
    }catch(err){
        console.log(err);  
        res.status(500).json({error: 'Internal Server Error'});
    }

})


//commendt added for testing purposes
module.exports = router;
