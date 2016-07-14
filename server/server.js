const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors());
app.user(bodyParser());
app.use(express.static('./public'));

const port = process.env.PORT || 8080;

app.listen(port, console.log('Listening to 8080', port));
