const express = require('express');
const cors = require('cors');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();

// Replace with your mongoLab URI
const MONGO_URI = 'mongodb://192.168.1.39:32800';
const MONGO_DB = 'music';
if (!MONGO_URI) {
	throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(`${MONGO_URI}/${MONGO_DB}`);
mongoose.connection
	.once('open', () => console.log('Connected to mongodb instance.'))
	.on('error', error => console.log('Error connecting to mongodb:', error));

app.use(cors());

app.use(bodyParser.json());
app.use(
	'/graphql',
	expressGraphQL({
		schema,
		graphiql: true
	})
);

// const webpackMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('../webpack.config.js');
// app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
