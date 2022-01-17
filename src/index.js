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
      // get example
      // const re = await axios({
      //   url: `http://localhost:${process.env.PORT || `3001`}/cc/get/`,
      //   data: {
      //     Guild: `911107504421875712`,
      //     Command: `lmaothisworked`,
      //   },
      // });

      // delete example
      // const re = await axios({
      //   url: `http://localhost:${process.env.PORT || `3001`}/cc/delete/`,
      //   method: 'delete',
      //   data: {
      //     Guild: `911107504421875712`,
      //     Command: `lmaothisworked`,
      //   },
      // });

      // create example
      // const re = await axios({
      //   url: `http://localhost:${process.env.PORT || `3001`}/cc/new`,
      //   method: `post`,
      //   data: {
      //     _id: new mongoose.Types.ObjectId(),
      //     Guild: `911107504421875712`,
      //     Command: `lmaothisworked`,
      //     Response: `lmaothisworked?`,
      //   },
      // });

      // update example
      // const re = await axios({
      //   url: `http://localhost:${process.env.PORT || `300`}/cc/update/?Guild=911107504421875712&Command=lmaothisworked`,
      //   method: `patch`,
      //   data: {
      //     Guild: `911107504421875712`,
      //     Command: `lmaothisworked`,
      //     new: {
      //       Response: `this also worked ig`,
      //     },
      //   },
      // });

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
