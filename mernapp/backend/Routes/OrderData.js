const express = require('express');
const User = require('../models/User');
const Order = require('../models/Orders'); // Correct model name
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const axios = require('axios');
const jwt = require('jsonwebtoken');
// const axios = require('axios');
const fetch = require('../middleware/fetchDetails');
const jwtSecret = "HaHa";

// Creating a user and storing data to MongoDB Atlas, No Login Required
router.post('/createuser', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('name').isLength({ min: 3 })
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let securePass = await bcrypt.hash(req.body.password, salt);
    try {
        await User.create({
            name: req.body.name,
            password: securePass,
            email: req.body.email,
            location: req.body.location
        }).then(user => {
            const data = {
                user: {
                    id: user.id
                }
            };
            const authToken = jwt.sign(data, jwtSecret);
            success = true;
            res.json({ success, authToken });
        }).catch(err => {
            console.log(err);
            res.status(400).json({ error: "Please enter a unique value." }); // Changed to send 400 status for duplicate entries
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error"); // Changed to send 500 status for errors
    }
});

// Authentication a User, No login Required
router.post('/login', [
    body('email', "Enter a Valid Email").isEmail(),
    body('password', "Password cannot be blank").exists(),
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
        }

        const pwdCompare = await bcrypt.compare(password, user.password);
        if (!pwdCompare) {
            return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        };
        success = true;
        const authToken = jwt.sign(data, jwtSecret);
        res.json({ success, authToken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error"); // Changed to send 500 status for errors
    }
});

// Get logged in User details, Login Required.
router.post('/getuser', fetch, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error"); // Changed to send 500 status for errors
    }
});

// Get location from coordinates
router.post('/getlocation', async (req, res) => {
    try {
        let lat = req.body.latlong.lat;
        let long = req.body.latlong.long;
        console.log(lat, long);
        let location = await axios
            .get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=74c89b3be64946ac96d777d08b878d43`)
            .then(async res => {
                console.log(res.data.results);
                let response = res.data.results[0].components;
                let { village, county, state_district, state, postcode } = response;
                return String(village + "," + county + "," + state_district + "," + state + "\n" + postcode);
            })
            .catch(error => {
                console.error(error);
            });
        res.send({ location });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error"); // Changed to send 500 status for errors
    }
});

router.post('/foodData', async (req, res) => {
    try {
        res.send([global.food_items, global.foodCategory]);
    } catch (error) {
        console.error(error.message);
        res.send("Server Error"); // Changed to send 500 status for errors
    }
});

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;

    if (!Array.isArray(data)) {
        return res.status(400).json({ error: "order_data should be an array." });
    }

    await data.splice(0, 0, { Order_date: req.body.order_date });
    console.log("1231242343242354", req.body.email);

    let eId = await Order.findOne({ 'email': req.body.email });
    console.log(eId);
    if (eId === null) {
        try {
            // console.log(data);
            // console.log("1231242343242354", req.body.email);
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({ success: true });
            });
        } catch (error) {
            console.log(error.message);
            res.send("Server Error: " + error.message);
        }
    } else {
        try {
            await Order.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: data } }).then(() => {
                    res.json({ success: true });
                });
        } catch (error) {
            console.log(error.message);
            res.send("Server Error: " + error.message);
        }
    }
});

router.post('/myOrderData', async (req, res) => {
    try {
        console.log(req.body.email);
        let eId = await Order.findOne({ 'email': req.body.email });
        res.json({ orderData: eId });
    } catch (error) {
        res.status(500).send("Error", error.message); // Changed to send 500 status for errors
    }
});

module.exports = router;













