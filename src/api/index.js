import { version } from '../../package.json';
import { application, Router } from 'express';
const badRequest = require('../util/getResponses/badRequest');
export default ({ config, db }) => {
	let api = Router();
	const customersRoute = require('./routes/customers');
	api.use('/customers', customersRoute);

	api.get('/teapot', (req, res) => {
		res.status('200').send("I'm a teapot");
	});

	api.all('*', (req, res) => {
		res.status(400).json(badRequest);
	})

	return api;
}
