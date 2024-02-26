/*const createPost = (req,res,next) => {

	res.send('Hello from Node Js using Nodemon');
};

module.exports = {

	createPost
};*/

const express = require('express');
const router = express.Router();

router.get('/fe',(req,res,next) => {

	res.send('Hello from Node Js using Nodemon');
});

router.get('/admin', (req, res, next) =>{

	res.render('home',null);
});

module.exports = router;


