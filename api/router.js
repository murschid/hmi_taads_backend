const express = require('express');
const router = express.Router();
const jsonData = require('./mainData.json');

router.get('/team', (req, res, next) => {
	res.status(200).json(jsonData.team);
});

router.post('/team', (req, res, next) => {
	res.json({
		message: 'I am POST Route'
	});
});

router.put('/team', (req, res, next) => {
	res.json({
		message: 'I am PUT Route'
	});
});

router.get('/taads/:id', (req, res, next) => {
	let id = req.params.id;
	res.status(201).json(jsonData.taads[id]);
});

module.exports = router;