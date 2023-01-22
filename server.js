const express = require('express');
const app = express();
const cors = require("cors")

const port = 3030;

const testController = require('./Controllers/test');

app.use(cors()); 
app.use(express.json());

app.use('/test', testController);

app.listen(port, () => console.log(`Listening on port ${port}`));