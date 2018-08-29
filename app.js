const express = require('express');
const app = express();
const mountRoutes = require('./routers');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(3000, (err) => {
    console.log('Cannot start service! Error: ', err);
}, () => {
    console.log('Start service successful, please refer to http://localhost:3000');
});
mountRoutes(app);

module.exports = {
    app,
};