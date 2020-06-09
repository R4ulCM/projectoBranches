const express = require('express');
const router = express.Router();

const getUser = require('./getUser/getUser');

router.get('/V01/getUser',getUser);

module.exports = router;

console.log("Paso por user-index.js");