const db = require('./models/db.js');
const Account= require('./models/AccountModel.js');
const Activity= require('./models/ActivityModel.js');
const Comment= require('./models/CommentModel.js');
const Itinerary= require('./models/ItineraryModel.js');
const Memory= require('./models/MemoryModel.js');
const Review= require('./models/ReviewModel.js');
db.connect();
db.deleteMany(Account);
db.deleteMany(Activity);
db.deleteMany(Comment);
db.deleteMany(Itinerary);
db.deleteMany(Memory);
db.deleteMany(Review);