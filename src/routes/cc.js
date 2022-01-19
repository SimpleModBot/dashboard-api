const express = require('express');
const router = express.Router();
const cc = require('../models/cc.js');

// Get all commands
router.get('/', async (req, res) => {
	const ccs = await cc.find({ Guild: req.query.Guild });

	res.status(200);
	res.json(ccs);
});

// Create new cc
router.post('/new', async (req, res) => {
	const newcc = new cc(req.body);
	const savedcc = await newcc.save();

	res.status(200);
	res.json(savedcc);
});

// Get specific cc
router.get('/get', async (req, res) => {
	const q = await cc.findOne({ Guild: req.body.Guild, Command: req.body.Command });

	res.status(200);
	res.json(q);
});

// Delete a cc
router.delete('/delete', async (req, res) => {
	const result = await cc.findOneAndDelete({ Guild: req.body.Guild, Command: req.body.Command });

	res.status(200);
	res.json(result);
});

// Update a cc
router.patch('/update', async (req, res) => {
	const q = await cc.updateOne({Guild: req.body.Guild, Command: req.body.Command }, {$set: req.body.new});

	res.status(200);
	res.json(q);
});

// Get random cc
// router.get('/random', async (req, res) => {
// 	const count = await cc.countDocuments();
// 	const random = Math.floor(Math.random() * count);
// 	const q = await cc.findOne().skip(random);

// 	res.json(q);
// });

module.exports = router;