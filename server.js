const express = require('express');

//Initiating the app
const app = express();

//routes
app.use('/api', require('./src/routes'));

//setting up the app to be listening at port 3001
app.listen(3001);
