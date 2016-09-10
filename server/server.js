const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();

if(app.get('env') === 'development'){
    const logger = require('morgan');
    app.use(logger('dev'));
}

app.use(express.static(path.resolve(process.env.NODE_PATH + 'client/dist/')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(express.static('../client/dist'));

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            code: err.status || 500,
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: {}
    });
});

module.exports = app;
