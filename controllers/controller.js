
const db = require('../models/db.js');
const crypto = require('crypto');
const sanitize = require('mongo-sanitize');
const Account= require('../models/AccountModel.js');
const Activity= require('../models/ActivityModel.js');
const Comment= require('../models/CommentModel.js');
const Itinerary= require('../models/ItineraryModel.js');
const Memory= require('../models/MemoryModel.js');
const Review= require('../models/ReviewModel.js');

const controller = {
    getAbout: function(req,res){
        res.    render('about_us',{
            title: 'About Us'
        });
    },
    getLogin: function(req, res){
        res.render('login', {
            title: 'Login'
        });
        
    },
    getHome: function(req,res){
        res.render('home', {
            title: 'Welcome'
        });
    },
    getRegistration: function(req, res){
        res.render('registration', {title: "Registration"});
    },
    getDashboard: function(req, res){
        var checker = req.cookies.userData;
        if(!checker)
        {
            res.redirect('/error')
        }
        else{
        var query = null;
        var projection = null;
        var sort = {it_sdate: -1}
        db.findManySorted(Itinerary, query, projection, sort, function(itresult){
            db.findMany(Review, query, projection, function(revresult){
                db.findManySorted(Comment, query, projection, {date: 1}, function(comresult){
                    res.render('dashboard', {title: 'Dashboard', username: req.cookies.userData.username, email:req.cookies.userData.email, fname: req.cookies.userData.fname, lname: req.cookies.userData.lname,
                    itinerary: itresult.map(itresult => itresult.toJSON()), review: revresult.map(revresult => revresult.toJSON()), comment: comresult.map(comresult => comresult.toJSON())});
                })
                
            })
        });
        }
    },
    getLogout: function(req, res){
        res.clearCookie('userData');
        res.render('logout', {title: "Logout Successful"});
    },
    getSuccess: function(req, res){
        res.render('success', {title: "Registration Successful"});
    },
    postLogin: function(req, res){
        var u = sanitize(req.body.username);
        var p = sanitize(req.body.password);
        var query = {username: u};
        var projection = null;
        var hash = crypto.createHash('sha256');
        db.findOne(Account, query, projection, function(result){
            if(result === null)
            {
                res.render('login', {title: 'Login', message: "Username or Password is incorrect"});
            }
            else
            {
                var passHash = p + result.salt;
                hash = hash.update(passHash).digest('hex');
                if(hash === result.hash)
                {
                    res.cookie("userData", result);
                    res.redirect('/dashboard');
                }
                else
                {
                    res.render('login', {title: 'Login', message: "Username or Password is incorrect"});

                }
            }
        });
    },
    postRegistration: function(req, res){
        var compAddress = req.body.city;
        var compAddress = compAddress + " " + req.body.country;
        var birthday = new Date(req.body.birthday);
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        var age = Math.abs(ageDate.getFullYear() - 1970);
        var salt = crypto.randomBytes(64).toString('base64');
        var password = req.body.password + salt;
        var hash = crypto.createHash('sha256').update(password).digest('hex');
        var user = 	{

            fname: req.body.Fname,
            lname: req.body.Lname,
            email: req.body.email,
            username: req.body.username,
            hash: hash,
            salt: salt,
            age: age,
            address: compAddress,
            birthday: req.body.birthday,
            occupation: req.body.occupation,
            passport_id: req.body.ppid
        }
        db.insertOne(Account, user);
        res.redirect('/success');
    },
    getItCreate: function(req, res){
        var checker = req.cookies.userData;
        
        if(!checker)
        {
            res.redirect('/error')
        }
        else
        res.render('it_create', {title: 'Create Itinerary', username: req.cookies.userData.username})
    },

    postItCreate: function(req, res, next){
        var loopCtr = 0;
        var choiceCtr = 0;
        var it_id = req.body.it_id;
        while(choiceCtr == loopCtr)
        {
            if(req.body.hasOwnProperty("create_it"))
            {
                choiceCtr += 2;
                var it = {
                    acct_email: req.cookies.userData.email,
                    it_id: it_id,
                    it_name: req.body.it_name,
                    it_sdate: req.body.it_start,
                    it_edate: req.body.it_end,
                    it_location: req.body.it_loc
                }
                db.insertOne(Itinerary, it);
                res.redirect('/itineraries');
            }

            else if(req.body.hasOwnProperty("addAct"))
            {
                choiceCtr += 1;
                
                var name, date, stime, etime, cost, address, cname, cnum, cmail, transpo;
                if (req.body.act_date == null)
                    date = "";
                else
                    date = req.body.act_date;
                if (req.body.act_stime == null)
                    stime = "";
                else
                    stime = req.body.act_stime;
                if (req.body.act_etime == null)
                    etime = "";
                else
                    etime = req.body.act_etime;
                if (req.body.act_cost == null)
                    cost = "";
                else
                    cost = req.body.act_cost;
                if (req.body.act_street == null)
                    street = "";
                else
                    street = req.body.act_street;
                if (req.body.act_city == null)
                    city = "";
                else
                    city = req.body.act_city;
                if (req.body.act_zip == null)
                    zip = "";
                else
                    zip = req.body.act_zip;
                if (req.body.act_cname == null)
                    cname = "";
                else
                    cname = req.body.act_cname;
                if (req.body.act_cnum == null)
                    cnum = "";
                else
                    cnum = req.body.act_cnum;
                if (req.body.act_cmail == null)
                    cmail = "";
                else
                    cmail = req.body.act_cmail;
                if (req.body.act_trans == null)
                    transpo = "";
                else
                    transpo = req.body.act_trans;
                
                var address = "";
                if(street != "" || city != "" || zip != "")
                {
                    if(street != "" && city != "" && zip != "")
                        address = street + ", " + city + ", " + zip;
                    else if(street != "" && city != "")
                        address = street + ", " + city;
                    else if(street != "" && zip != "")
                        address = street + ", " + zip;
                    else if(city != "" && zip != "")
                        address = city + ", " + zip;
                    else if(street != "")
                        address = street;
                    else if(city != "")
                        address = city;
                    else if(zip != "")
                        address = zip;
                }

                var act = {
                    it_id: req.body.act_id,
                    name: req.body.act_name,
                    date: date,
                    stime: stime,
                    etime: etime,
                    cost: cost,
                    address: address,
                    cname: cname,
                    cnum: cnum,
                    cmail: cmail,
                    transpo: transpo
                }

                db.insertOne(Activity, act);
            }
        }
        
    },

    getMemCreate: function(req, res){
        var checker = req.cookies.userData;
        
        if(!checker)
        {
            res.redirect('/error')
        }
        else
        res.render('newmemory', {title: 'Create Memory', username: req.cookies.userData.username});
    },

    postMemCreate: function(req, res){
        var fileArray = req.files;
        var location;
        var imgLoc = [];
        
        if(fileArray)
        {
            for(let i = 0; i < fileArray.length; i++){
                location = fileArray[i].location;
                imgLoc.push(location);
            }
        }
        var memory = {
            acct_email: req.cookies.userData.email,
            title: req.body.title,
            description: req.body.comment,
            sdate: req.body.sdate,
            edate: req.body.edate,
            totalExp: req.body.expense,
            photoAlbum: imgLoc
        }
        db.insertOne(Memory, memory);
        res.redirect('/tracker');
    },

    getTracker: function(req, res){
        var checker = req.cookies.userData;
        
        if(!checker)
        {
            res.redirect('/error')
        }
        else{
        var query = {acct_email: req.cookies.userData.email};
        projection = null;
        sort= {sdate: -1}
        db.findManySorted(Memory, query, projection, sort, function(result){
            res.render('tracker', {title: 'My Memories', username: req.cookies.userData.username, memory: result.map(result => result.toJSON())});
        });
    }
    },

    getAllIt: function(req, res){
        var checker = req.cookies.userData;
        
        if(!checker)
        {
            res.redirect('/error')
        }
        else{
        var query = {acct_email: req.cookies.userData.email};
        projection = null;
        sort = {it_sdate: -1}
        db.findManySorted(Itinerary, query, projection, sort, function(result){
            res.render('itineraries', {title: 'My Itineraries', username: req.cookies.userData.username, itinerary: result.map(result => result.toJSON())});
        });
    }
    },

    getItView: function(req, res){
        var checker = req.cookies.userData;
        
        if(!checker)
        {
            res.redirect('/error')
        }
        else{
        var it_name = sanitize(req.query.it_name);
        var it_id = sanitize(req.query.it_id);
        var it_sdate = sanitize(req.query.it_sdate);
        var it_edate = sanitize(req.query.it_edate);
        var it_location = sanitize(req.query.it_location);
        var query = {it_id: it_id};
        projection = null;
        db.findMany(Activity, query, projection, function(actresult){
            db.findOne(Review, query, null, function(revresult){
                res.render('it_view', {title: 'View Itinerary', username: req.cookies.userData.username, it_id: it_id, it_name: it_name, it_sdate: it_sdate, it_edate: it_edate, it_location: it_location, activity: actresult.map(actresult => actresult.toJSON()),
            review: revresult});
            })
            
        });
    }
    },

    getItEdit: function(req,res){
        var checker = req.cookies.userData;
        
        if(!checker)
        {
            res.redirect('/error')
        }
        else{

        var it_name = sanitize(req.query.it_name);
        var it_id = sanitize(req.query.it_id);
        var it_sdate = sanitize(req.query.it_sdate);
        var it_edate = sanitize(req.query.it_edate);
        var it_location = sanitize(req.query.it_location);
        var query = {it_id: it_id};
        var projection = null;


        db.findMany(Activity, query, projection, function(result){
            res.render('it_edit', 
                {
                    title: 'Edit Itinerary', 
                    username: req.cookies.userData.username,
                    it_name: it_name,
                    it_id: it_id,
                    it_sdate: it_sdate,
                    it_edate: it_edate,
                    it_location: it_location,
                    activity: result.map(result => result.toJSON())});
        });
    }

    },

    postItEdit: function(req,res){

        var update = {

            it_name: req.body.itname,
            it_sdate: req.body.itsdate,
            it_edate: req.body.itedate,
            it_location: req.body.itlocation
        }
                
        filter = {it_id: req.query.it_id};

        db.updateOne(Itinerary, filter, update);

        res.redirect('/itineraries');
    
    },

    getActEdit: function(req,res){
        var checker = req.cookies.userData;
        
        if(!checker)
        {
            res.redirect('/error')
        }
        else{

        var update = {

            date: req.query.date,
            stime: req.query.stime,
            etime: req.query.etime,
            cost: req.query.cost,
            address: req.query.address,
            cname: req.query.cname,
            cnum: req.query.cnum,
            cmail: req.query.cmail,
            transpo: req.query.transpo
                
        }


        var query = {it_id: req.query.it_id, name: req.query.name};

        db.updateOne(Activity, query, update);
    }

    },

    getActDelete: function(req, res){
        var checker = req.cookies.userData;
        
        if(!checker)
        {
            res.redirect('/error')
        }
        else{

        var filter = {it_id: req.query.it_id, name: req.query.name};
        db.deleteOne(Activity, filter);
        }

    },

    getMemSearch: function(req,res){
        var checker = req.cookies.userData;
        
        if(!checker)
        {
            res.redirect('/error')
        }
        else{
        var query = {$or: [{title: {'$regex' : req.query.search, '$options' : 'i'}}, {description: {'$regex' : req.query.search, '$options' : 'i'}}], acct_email: req.cookies.userData.email};
        projection = null;
        db.findMany(Memory, query, projection, function(result){
            res.render('memorySearch', {title: 'Memory Search', mem_search: req.query.search, username: req.cookies.userData.username, memory: result.map(result => result.toJSON())});
        })
    }
    },

    getItSearch: function(req,res){

        var checker = req.cookies.userData;
        
        if(!checker)
        {
            res.redirect('/error')
        }
        else{
            var number = parseInt(req.query.itSearch)
            if(number)
            var query = {$or: [{it_name: {'$regex' : req.query.itSearch, '$options' : 'i'}}, {it_location: {'$regex' : req.query.itSearch, '$options' : 'i'}}, {it_id: number}]};
            else
            var query = {$or: [{it_name: {'$regex' : req.query.itSearch, '$options' : 'i'}}, {it_location: {'$regex' : req.query.itSearch, '$options' : 'i'}}]};
            projection = null;
            sort = {it_sdate: -1}
            db.findManySorted(Itinerary, query, projection, sort, function(itresult){
                db.findMany(Review, null, projection, function(revresult){
                    db.findManySorted(Comment, null, projection, {date: 1}, function(comresult){
                        res.render('search', {title: 'Itinerary Search Result/s', username: req.cookies.userData.username, 
                        itinerary: itresult.map(itresult => itresult.toJSON()), review: revresult.map(revresult => revresult.toJSON()), comment: comresult.map(comresult => comresult.toJSON())});
                    })
                
                })
            });
            
        }
    },

    getCheckUsername: function(req,res){
        var username = req.query.username;
        var query = {username: username};
        projection = 'username';
        db.findOne(Account, query, projection, function(result){
            res.send(result);
        })
    },

    getDeleteMemory: function(req, res){
        var condition = {_id: req.query._id};
        db.deleteOne(Memory, condition);
    },

    getMemEdit: function(req, res){
        var checker = req.cookies.userData;
        
        if(!checker)
        {
            res.redirect('/error')
        }
        else{
        var _id = sanitize(req.query._id);
        var query = {_id: _id};
        var projection = null;
        db.findOne(Memory, query, projection, function(result){
            res.render('mem_edit', {title: 'Edit Memory', username: req.cookies.userData.username, mem_title: result.title, mem_desc: result.description,
                                   mem_sdate: result.sdate, mem_edate: result.edate, mem_cost: result.totalExp});
        })
    }
        
    },

    postMemEdit: function(req, res){
        var fileArray = req.files;
        var location;
        var imgLoc = [];
        if(fileArray)
        {
            for(let i = 0; i < fileArray.length; i++){
                location = fileArray[i].location;
                imgLoc.push(location);
            }
            var update = {
                title: req.body.memtitle,
                description: req.body.memcomment,
                sdate: req.body.memsdate,
                edate: req.body.memedate,
                totalExp: req.body.memexpense,
                photoAlbum: imgLoc
            }
        }
        else
        {
            var update = {
                title: req.body.memtitle,
                description: req.body.memcomment,
                sdate: req.body.memsdate,
                edate: req.body.memedate,
                totalExp: req.body.memexpense,
            }
        }
        filter = {_id: req.query._id}
        db.updateOne(Memory, filter, update);
        res.redirect('/tracker');
    },

    getDownloadIt: function(req, res){
        var checker = req.cookies.userData;
        
        if(!checker)
        {
            res.redirect('/error')
        }
        else{
        var it_name = req.query.it_name;
        var it_id = sanitize(req.query.it_id);
        var it_sdate = req.query.it_sdate;
        var it_edate = req.query.it_edate;
        var it_location = req.query.it_location;
        var query = {it_id: it_id};
        projection = null;
        db.findMany(Activity, query, projection, function(result){
            res.render('download_it', {it_id: it_id, it_name: it_name, it_sdate: it_sdate, it_edate: it_edate, it_location: it_location, activity: result.map(result => result.toJSON())});
        })
    }
    },

    getDeleteIt: function(req, res){
        var it_id = sanitize(req.query.it_id)
        var condition = {it_id: it_id};
        db.deleteOne(Itinerary, condition);
        db.deleteMany(Activity, condition);
    },

    getError: function(req,res){
        res.render("error", {title: "Error"});
    },
    getDetails: function(req, res){ 
        var checker = req.cookies.userData; 
         
        if(!checker) { 
            res.redirect('/error') 
        } 
        else{ 
            var it_name = req.query.it_name; 
            var it_id = sanitize(req.query.it_id);
            var it_sdate = req.query.it_sdate; 
            var it_edate = req.query.it_edate; 
            var it_location = req.query.it_location; 
            var query = {it_id: it_id}; projection = null; 
            db.findMany(Activity, query, projection, function(result){ 
                res.render('details', {title: 'View Itinerary', username: req.cookies.userData.username, 
                it_id: it_id, it_name: it_name, it_sdate: it_sdate, it_edate: it_edate, it_location: it_location, activity: result.map(result => result.toJSON())}); }); 
            } 
    },
    getViewReview: function(req, res){
        var checker = req.cookies.userData; 
         
        if(!checker) { 
            res.redirect('/error') 
        } 
        else{ 
            var it_id = sanitize(req.query.it_id)
            var query = {it_id: it_id};
            db.findOne(Itinerary, query, null, function(itresult){
                db.findOne(Review, query, null, function(revresult){
                    res.render('viewReview', {title: 'Review', username: req.cookies.userData.username, it_name: itresult.it_name, stars: revresult.stars, date: revresult.date, time: revresult.time, content: revresult.content})
                })
            })
        }
    },
    getDeleteReview: function(req,res){
        var it_id = sanitize(req.query.it_id)
        var condition = {it_id: it_id};
        db.deleteOne(Review, condition);
    },

    getReview: function(req, res){
        var checker = req.cookies.userData; 
         
        if(!checker) { 
            res.redirect('/error') 
        } 
        else{
            var it_id = sanitize(req.query.it_id)
            var query = {it_id: it_id};
            db.findOne(Itinerary, query, null, function(result){
                res.render('review', {title:"Create Review", username: req.cookies.userData.username, it_name: result.it_name, it_id: result.it_id})
            })
        }
    },

    postReview: function(req, res)
    {
        var today = new Date();
        var time = ("0" + today.getHours()).slice(-2) + ':' + ("0" + today.getMinutes()).slice(-2);
        var name = req.cookies.userData.fname + " " + req.cookies.userData.lname
        var review = {
            acct_email: req.cookies.userData.email,
            it_id: req.body.it_id,
            name: name,
            date: today,
            time: time,
            content: req.body.content,
            stars: req.body.stars
        }
        db.insertOne(Review, review);
        var redirect = '/viewReview?it_id='+req.body.it_id;
        res.redirect(redirect);
    },
    getEditReview: function(req, res){
        var checker = req.cookies.userData; 
         
        if(!checker) { 
            res.redirect('/error') 
        } 
        else{
            var it_id = sanitize(req.query.it_id)
            var query = {it_id: it_id};
            db.findOne(Itinerary, query, null, function(result){
                db.findOne(Review, query, null, function(revresult){
                    res.render('editReview', {title:"Edit Review", username: req.cookies.userData.username, it_name: result.it_name, it_id: result.it_id, stars: revresult.stars, content: revresult.content})
                })
                
            })
        }
    },
    postEditReview: function(req, res){
        var today = new Date();
        var time = ("0" + today.getHours()).slice(-2) + ':' + ("0" + today.getMinutes()).slice(-2);
        var review = {
            date: today,
            time: time,
            content: req.body.content,
            stars: req.body.stars
        }
        db.updateOne(Review, {it_id: req.body.it_id}, review)
        var redirect = '/viewReview?it_id='+req.body.it_id;
        res.redirect(redirect);
    },
    getComment: function(req, res){
        var it_id = req.query.it_id;
        var comment = req.query.comment;
        var today = new Date();
        var time = ("0" + today.getHours()).slice(-2) + ':' + ("0" + today.getMinutes()).slice(-2);
        var writer = req.cookies.userData.fname + " " + req.cookies.userData.lname;
        var acct_email = req.cookies.userData.email;
        var addCom = {
            acct_email: acct_email,
            it_id: it_id,
            writer: writer,
            comment: comment,
            date: today,
            time: time
        }
        db.insertOne(Comment, addCom);
    },
    getEditComment: function(req, res){
        var it_id = req.query.it_id;
        var comment = req.query.comment;
        var acct_email = req.cookies.userData.email;
        var filter = {it_id: it_id, acct_email: acct_email};
        var newCom = {
            comment: comment
        }
        db.updateOne(Comment, filter, newCom);
    },
    getDeleteComment: function(req, res){
        var _id = req.query._id;
        condition = {_id: _id};
        db.deleteOne(Comment, condition);
    },
    getCheckReview: function(req, res){
        var it_id = req.query.it_id;
        var query = {it_id: it_id};
        db.findOne(Review, query, "it_id", function(result){
            res.send(result);
        })
    }
}
module.exports = controller;
