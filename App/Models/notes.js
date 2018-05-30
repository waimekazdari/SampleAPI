var db = require('./db');
var ObjectID = require('mongodb').ObjectID;
var notes;
var details;
db.connect((err,don)=>{
  if(err) {
    console.log('error has occured in database connection');
  }else{
    notes = don.collection('notes');

    exports.create = function (note, cb) {
      notes.insert(note,(err ,result) =>{
        if(err){
          return cb(err);
        }
        cb(null, result);
      });
    }

    exports.getAll = function(cb) {
      notes.find({}).toArray((err, result) =>{
        if(err){
          return cb(err);
        }
        cb(null,result);
      });
    }

    exports.getById = function (id, cb) {
      details = {'_id': new ObjectID(id)};

      notes.findOne(details, (err, result)=>{
        if(err){
          return cb(err);
        }
        cb(null,result);
      });
    }


    exports.update = function (id, note, cb) {
      details = {'_id': new ObjectID(id)};
      notes.update(details,note, (err, result)=>{
        if(err){
          return cb(err);
        }
        cb(null, result);
      } );
    }


    exports.delete = function(id, db) {
      details = {'_id': new ObjectID(id)};
      notes.remove(details, (err, result)=>{
        if(err) return cb(err);
        cb(null, result);
      });
    }


  }
});
