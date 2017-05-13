module.exports = {
    apps : [
        {
            name      : 'WSC',
            script    : 'dist/',
            env: {
                NODE_PATH: './dist/'
            },
        },
    ],

};
