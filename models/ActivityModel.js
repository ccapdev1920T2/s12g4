var mongoose = require('mongoose');

var actSchema = new mongoose.Schema({
	it_id: {
		type: Number,
	},
	name: {
		type: String,
		required: true
	},
	date: {
		type: Date
	},
	stime: {
		type: String
	},
	etime: {
		type: String
	},
	cost: {
		type: String
	},
	address: {
		type: String
	},
	cname: {
		type: String
	},
	cnum: {
		type: String
	},
	cmail: {
		type: String
	},
	transpo: {
		type: String
	}
});

module.exports = mongoose.model('Activity', actSchema);