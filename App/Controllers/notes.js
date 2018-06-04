notes = require('../Models/notes');

exports.getAll = function(req,res){
  notes.getAll((err, result)=>{
    if(err) {
      res.send({'error': 'An error has occured that is :'+err});
    }else {
      res.send(result);
    }
  });
}

exports.getById = function(req,res){
  var id = req.params.id;
  notes.getById(id, (err, result)=>{
    if(err){
        res.send({'error': 'An error has occured that is :'+err});
    }else{
      res.send(result);
    }
  });
}

exports.create = function(req,res){
  var note = {text: req.body.text, title: req.body.title};
  notes.create(note, (err, result)=>{
    if(err){
      res.send({'error': 'An error has occured that is :'+err});
    }else{
      res.send(result);
    }
  });
}

exports.update = function(req,res){
  var id = req.params.id;
  var note = {text: req.body.text, title: req.body.title};
  notes.update(id, note, (err,result)=>{
    if(err){
        res.send({'error': 'An error has occured that is :'+err});
    }else{
      res.send('note: '+result+' had been updated');
    }
  });
}

exports.delete = function(req,res){
  var id = req.params.id;
  notes.delete(id,(err, result)=>{
    if(err){
      res.send({'error': 'An error has occured that is :'+err});
    }else{
      res.send('note: '+result+' had been deleted');
    }
  });
}
