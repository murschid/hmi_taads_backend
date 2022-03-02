const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./api/router');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', router);

app.get('/', (req, res) => {
	res.send(`<h1>Express Server - ${port}</h1>`);
});

app.listen(port, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});