// Create web server with Node.js
// Created by alexlees
// Date: 2014/09/25
// Version: 0.1.0

var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

router.post('/', function(req, res) {
    var comment = new Comment({
        name: req.body.name,
        email: req.body.email,
        website: req.body.website,
        content: req.body.content
    });

    comment.save(function(err) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Comment created!' });
        }
    });
});

router.get('/', function(req, res) {
    Comment.find(function(err, comments) {
        if (err) {
            res.send(err);
        } else {
            res.json(comments);
        }
    });
});

module.exports = router;