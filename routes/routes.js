const express = require('express');
const controller = require('../controllers/controller.js');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/img/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
});
const upload = multer({storage: storage});

const app = express();

app.get('/', controller.getAbout);

app.get('/login', controller.getLogin);

app.get('/home', controller.getHome);

app.get('/success', controller.getSuccess);

app.get('/dashboard', controller.getDashboard);

app.get('/it_create', controller.getItCreate);

app.get('/registration', controller.getRegistration);

app.get('/logout', controller.getLogout);

app.get('/newmemory', controller.getMemCreate);

app.get('/tracker', controller.getTracker);

app.get('/itineraries', controller.getAllIt);

app.get('/it_view', controller.getItView);

app.get('/download_it', controller.getDownloadIt);

app.get('/it_edit', controller.getItEdit);

app.get('/editAct', controller.getActEdit);

app.get('/deleteAct', controller.getActDelete);

app.get('/search', controller.getItSearch);

app.get('/memorySearch', controller.getMemSearch);

app.get('/checkUsername', controller.getCheckUsername);

app.get('/mem_edit', controller.getMemEdit);

app.get('/deleteMemory', controller.getDeleteMemory);

app.get('/deleteIt', controller.getDeleteIt);

app.get('/error', controller.getError);

app.get('/details', controller.getDetails);

app.get('/viewReview', controller.getViewReview);

app.get('/deleteReview', controller.getDeleteReview);

app.get('/review', controller.getReview);

app.get('/editReview', controller.getEditReview);

app.get('/comment', controller.getComment);

app.get('/editComment', controller.getEditComment);

app.get('/deleteComment', controller.getDeleteComment);

app.post('/editReview', controller.postEditReview);

app.post('/review', controller.postReview);

app.post('/login', controller.postLogin);

app.post('/registration', controller.postRegistration);

app.post('/newmemory', upload.array('images', 5) ,controller.postMemCreate);

app.post('/mem_edit',  upload.array('memimages', 5), controller.postMemEdit);

app.post('/it_create', controller.postItCreate);

app.post('/it_edit', controller.postItEdit);

module.exports = app;