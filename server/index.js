const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const Controller = require('./controller');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
}).catch(error => {
    console.error('error in initial massive set up', error);
})

//endpoints
app.get('/api/inventory', Controller.getAll);
app.get('/api/inventory', Controller.getOne);
app.post('/api/inventory', Controller.create);
app.put('/api/inventory', Controller.update);
app.delete('/api/inventory', Controller.delete);

const Port = 4002;
app.listen(Port, () => {
    console.log(`server is listening on port ${Port}`)
})