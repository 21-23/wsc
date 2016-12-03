import express from 'express';
import path from 'path';

import setErrorHandlers from 'server/utils/server_error_handling';

const app = express();

if(app.get('env') === 'development'){
    const logger = require('morgan');
    app.use(logger('dev'));
}

app.use(express.static(path.resolve(process.env.NODE_PATH + 'client/dist/')));

// catch 404 and forward to error handler
setErrorHandlers(app);

export default app;
