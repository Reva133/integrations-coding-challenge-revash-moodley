import mongoose from 'mongoose';
import config from './config.json';

require('mongoose');

export default callback => {
	// connect to a database if needed, then pass it to `callback`:
	mongoose.connect(config.dbUrl);
	callback();
}
