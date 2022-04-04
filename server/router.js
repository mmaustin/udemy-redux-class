const Authentication = require('./controllers/authentication.js')

module.exports = function(app){
    app.get('/', Authentication.signup)
}