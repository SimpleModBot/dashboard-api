const express = require('express');
const router = express.Router();
const guild = require('../models/guild.js');
const tokens = require('../secrets/tokens.json');

// Get all guilds
// router.get('/', async (req, res) => {
//     const guilds = await guild.find({});

//     res.json(guilds);
// });

// Create new guild
// router.post('/new', async (req, res) => {
// 	const newguild = new guild(req.body);
// 	const savedguild = await newguild.save();

// 	res.json(savedguild);
// });

// Get specific guild
router.put('/get', async (req, res) => {
	if (!tokens.valid.includes(req.body.Token)) return res.status(401).json('Unauthorized or invalid token');

	const q = await guild.findOne({ guildID: req.body.Guild });

	res.status(200);
	res.json(q);
});

// Delete a guild
// router.delete('/delete', async (req, res) => {
// 	const result = await guild.findOneAndDelete({ Guild: req.body.Guild, Command: req.body.Command });

// 	res.json(result);
// });

// Update a guild
router.patch('/update', async (req, res) => {
	if (!tokens.valid.includes(req.body.Token)) return res.status(401).json('Unauthorized or invalid token');

	const q = await guild.findOneAndUpdate({ guildID: req.body.Guild }, { $set: req.body.new });

	res.status(200);
	res.json(q);
});

// Get random guild
// router.get('/random', async (req, res) => {
// 	const count = await guild.countDocuments();
// 	const random = Math.floor(Math.random() * count);
// 	const q = await guild.findOne().skip(random);

// 	res.json(q);
// });

module.exports = router;
