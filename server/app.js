const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('JAKSIM 31 NODE SERVER');
})

app.listen(5000, () => {
    console.log('JAKSIM 31 server is running...');
})