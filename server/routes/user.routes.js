const Dev = require('../controllers/user.controllers');

module.exports = (app) => {
    app.get('/api/devs', Dev.getAll),
    app.get('/api/dev/:id', Dev.getOne),
    app.post('/api/dev/new', Dev.addDev),
    app.delete('/api/dev/delete/:id', Dev.deleteDev)
}