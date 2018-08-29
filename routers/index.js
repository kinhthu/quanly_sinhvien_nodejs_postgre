const students = require('./student');

module.exports = (app) => {
    app.use('/students', students);
};
