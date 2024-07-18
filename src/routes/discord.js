const express = require('express');
const router = express.Router();
const tokens = require('../secrets/tokens.json');
const axios = require('axios');

// Get user info from Discord
router.get('/user', async (req, res) => {
    if (!tokens.valid.includes(req.body.Token)) return res.status(401).json('Unauthorized or invalid token');

    const response = await fetch('https://discord.com/api/users/@me', {
        headers: {
            'authorization': `${req.body.tokenType} ${req.body.accessToken}`,
            'Access-Control-Allow-Origin': '*',
        },
    }).catch(err => {
        console.error(err);
        res.status(400);
        res.json({ message: 'Could not fulfill request', error: err })
    });

	res.status(200);
	res.json(response.json());
});

module.exports = router;