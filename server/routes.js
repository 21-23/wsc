const express = require('express');
const router = express.Router();

router.get('/rules', function(req, res, next) {

});

if (process.env.NODE_ENV === 'development') {
    router.all('*', function(req, res, next){
      res.send(process.env.NODE_ENV)
    });
}

router.get('*', function(req, res, next){
    res.send(process.env.NODE_ENV)
});

module.exports = router;
