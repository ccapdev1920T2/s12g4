var mongoose = require('mongoose');

var memSchema = new mongoose.Schema({
	acct_email: {
		type: String,
		required: true
	},
	title: {
		type: String,
        required: true
	},
	description: {
		type: String,
        required: true
	},
	sdate: {
		type: Date,
        required: true
	},
	edate: {
		type: Date,
        required: true
	},
	totalExp: {
		type: String,
		required: true,
		min: 0.00,
		default: 0.00
	},
	photoAlbum: [{
		type: String
	}]
});

module.exports = mongoose.model('Memory', memSchema);