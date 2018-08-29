const { app } = require('./app');

app.get('/', (req, res) => {
    res.send('<h1>Hello all!!!</h1>')
});
