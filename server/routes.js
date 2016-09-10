const express = require('express');
const router = express.Router();
const path = require('path');

const pathToDist = path.resolve(process.env.NODE_PATH + 'client/dist/index.html');
const pathToRules = pathToDist + 'rules.html';
const pathToApp = pathToDist + 'index.html';

router.get('/rules', function(req, res) {
    res.sendFile(pathToRules);
});

router.get('/', function(req, res){
    res.sendFile(pathToApp);
});

module.exports = router;
