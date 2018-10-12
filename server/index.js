const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const Controller = require('./controller/controller');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
}).catch(error => {
    console.error('error in initial massive set up', error);
})

//endpoints
// app.get('/api/...', Controller.);
// app.get('/api/...', Controller.);
// app.post('/api/...', Controller.);
// app.put('/api/...', Controller.);
// app.delete('/api/...', Controller.);

const Port = 4002;
app.listen(Port, () => {
    console.log(`server is listening on port ${Port}`)
})