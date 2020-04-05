var mongoose = require('mongoose');

var itSchema = new mongoose.Schema({
	acct_email: {
		type: String,
		required: true
	},
	it_id: {
		type: Number,
		required: true
	},
	it_name: {
		type: String,
        required: true
	},
	it_sdate: {
		type: Date,
        required: true
	},
	it_edate: {
		type: Date,
        required: true
	},
	it_location: {
		type: String,
        required: true
	}
});

module.exports = mongoose.model('Itinerary', itSchema);