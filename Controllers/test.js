const express = require('express');
const router = express.Router();

const data_value = "data string value"
const something_value = "some other string"
const array_value = [{title: "first data"}, {title: "second data"}, {title: "third data"}]

router.get('/', async (req, res) => {
    try {
        res.send({
            data: data_value, 
            something: something_value,
            array: array_value
        });
    } catch(error) {
        res.status(400).json(error)
    }
    
})

module.exports = router;