const express = require('express');
const router = express.Router(); // Corrected router declaration

router.post('/foodData', (req, res) => {
    try {
        console.log(global.food_items);
        res.send([global.food_items, global.foodCategory]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error"); // Changed to send 500 status for errors
    }
});

module.exports = router;








// const express=require('express')
// const { route } = require('./CreateUser')
// const router=express.Router()

// router.post('/foodData',(req,res)=>{
//     try{
//         console.log(global.food_items)
//         res.send([global.food_items,global.foodCategory])
//     }
//     catch(error){
//         console.error(error.message);
//         res.send("Server Error")
//     }
// })

// module.exports = router;