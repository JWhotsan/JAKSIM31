const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const session = require('express-session');
const sessionStore = require('./session/sessionStore');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(session({
    key: 'jaksim31_user',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

app.get('/', (req, res) => {
    res.send('JAKSIM 31 NODE SERVER');
})

app.listen(5000, () => {
    console.log('JAKSIM 31 server is running...');
})