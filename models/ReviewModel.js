var mongoose = require('mongoose');

var revSchema = new mongoose.Schema({
	acct_email: {
		type: String
	},
	it_id: {
		type: Number
	},
	name: {
		type: String
	},
	date: {
		type: Date,
		required: true,
		default: Date.now
	},
	time: {
		type: String,
		required: true,
		default: Date.now
	},
	content: {
		type: String
	},
	stars: {
		type: Number,
		required: true,
		min: 0,
		max: 5,
		default: 0
	}
});

module.exports = mongoose.model('Review', revSchema);