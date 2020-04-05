var mongoose = require('mongoose');

var comSchema = new mongoose.Schema({
	acct_email: {
		type: String
	},
	it_id: {
		type: Number
	},
	writer: {
		type: String,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	time: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Comment', comSchema);