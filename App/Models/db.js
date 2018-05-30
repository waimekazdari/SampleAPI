var MongoClient = require('mongodb').MongoClient;
var Config = require('../../Config/settings');
//var Database;

exports.connect = (cb)=>{
  module.exports = MongoClient.connect(Config.dbConfig.url, (err, database) =>{
      if(err){
        return cb(err);
      }
      cb(null,database.db('notable'));
    });
}
