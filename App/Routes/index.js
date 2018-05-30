var express = require('express');
var router = express.Router();
var notes = require('./notes');

router.use('/notes',notes);

router.get('/',(req,res) =>{
  res.send(`
    <h1> Welcome to you in Your API </h1>
    `);
});

module.exports = router;
