export default function (app) {
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) { //eslint-disable-line
            res.status(err.status || 500);
            res.json({
                code: err.status || 500,
                message: err.message,
                error: err
            });
        });
    } else {
      app.use(function(err, req, res, next) { //eslint-disable-line
          res.status(err.status || 500);
          res.send({
              message: err.message,
              error: {}
          });
      });
    }

    return app;
}
