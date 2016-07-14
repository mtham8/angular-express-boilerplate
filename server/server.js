const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors());
app.use(bodyParser());
app.use(express.static('../public'));
// app.use('/lib', express.static('./node_modules'));

const port = process.env.PORT || 8080;

app.listen(port, console.log('Listening to', port));
