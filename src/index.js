function app() {
    // Dependencies
    const express = require('express');
    const mongoose = require('mongoose');
    const bodyParser = require('body-parser');
    const axios = require('axios').default;
    require('dotenv').config();

    // App
    const app = express();

    // Database
    const dbOptions = {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false,
    };

    mongoose.connect(`mongodb://simplemodbot-db:27017/`, dbOptions);
    const db = mongoose.connection;
    db.once('open', () => console.log('Connected to MongoDB'));

    // Middleware
    app.use(bodyParser.json());
    const ccRoute = require('./routes/cc.js');
    app.use('/cc', ccRoute);

    // Listen to paths
    // Root path
    app.get('/', async (req, res) => {
        try {
            // res.json(re.data);
            res.send('Hello, human!');
        } catch (err) {
            console.log(err.stack);
        }
    });

    // Start app
    app.listen(
        process.env.PORT || 3001,
        console.log(`Server started on port ${process.env.PORT || `3001`}`),
    );
}
app();
