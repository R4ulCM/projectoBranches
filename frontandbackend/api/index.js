const express = require('express');
const router = express.Router();

//router.use(express.json);

const user = require('./user');

router.use('/user', user);

router.all('/', function(request, response){
    response.json({
        "Branches":"http://localhost:8080/api/getUser"
    });
});

module.exports = router;

console.log("Paso por api-index.js");