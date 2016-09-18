const express = require('express');
const router = express.Router();
const Score = require('../models/hiscore'); // Schema

router.route('/h1score')
  .get(list)
  .post(score)
;

module.exports = router;

function list(req, res) {
    Score.find((err, scores)=> {
        if(err) {
            res.send(err);
        }

        res.json(scores);
    });
}

function score(req, res) {
    var score = new Score(); 
    score.name = req.body.name;
    score.score = req.body.score;
    score.time = new Date();

    score.save(function(err) {
        if (err) {
            res.send(err);
        } else {
            res.json({message: 'Score posted'});
        }
    });
}
