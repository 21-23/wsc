const express = require('express');
const router = express.Router();

router.get('/rules', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

if (process.env.NODE_ENV === 'development') {
    router.all('*', function(req, res, next){
        //proxy here
    });
}

router.get('*', function(req, res, next){
    //serve bundles from static folder
});

module.exports = router;
