const express = require('express');
const router = express.Router();
const path = require('path');

const pathToApp = path.resolve(process.env.NODE_PATH + 'client/dist/index.html')

router.get('/rules', function(req, res) {

});

router.get('/', function(req, res){
    res.sendFile(pathToApp);
});

module.exports = router;
