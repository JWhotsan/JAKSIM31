const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const session = require('express-session');
const sessionStore = require('./session/sessionStore');

const userRouter = require('./router/user');
const goalRouter = require('./router/goal');
const managerRouter = require('./router/manager');
const reportRouter = require('./router/report');
const testRouter = require('./router/test');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use(session({
    key: 'jaksim31_user',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

app.use('/api/user', userRouter);
app.use('/api/goal', goalRouter);
app.use('/api/manager', managerRouter);
app.use('/api/report', reportRouter);
app.use('/api/test', testRouter);

app.get('/', (req, res) => {
    res.send('JAKSIM 31 NODE SERVER');
})

app.get('/test', (req, res) => {
    res.json({message: 'hi'})
})

app.listen(process.env.PORT || 5000, () => {
    console.log('JAKSIM 31 server is running...');
})