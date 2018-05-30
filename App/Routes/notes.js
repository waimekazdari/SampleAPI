var express = require('express')
  ,router = express.Router()
  ,notes = require('../Models/notes');

router.get('/', (req, res)=>{
  notes.getAll((err, result)=>{
    if(err) {
      res.send({'error': 'An error has occured that is :'+err});
    }else {
      res.send(result);
    }
  });
});

router.get('/:id', (req, res)=>{
  var id = req.params.id;
  notes.getById(id, (err, result)=>{
    if(err){
        res.send({'error': 'An error has occured that is :'+err});
    }else{
      res.send(result);
    }
  });
});

router.post('/',(req, res) =>{
  var note = {text: req.body.text, title: req.body.title};
  notes.create(note, (err, result)=>{
    if(err){
      res.send({'error': 'An error has occured that is :'+err});
    }else{
      res.send(result);
    }
  });
});

router.put('/:id', (req, res)=>{
  var id = req.params.id;
  var note = {text: req.body.text, title: req.body.title};
  notes.update(id, note, (err,result)=>{
    if(err){
        res.send({'error': 'An error has occured that is :'+err});
    }else{
      res.send('note: '+result+' had been updated');
    }
  });
});

router.delete('/:id', (req, res)=>{
  var id = req.params.id;
  notes.delete(id,(err, result)=>{
    if(err){
      res.send({'error': 'An error has occured that is :'+err});
    }else{
      res.send('note: '+result+' had been deleted');
    }
  });
});

module.exports = router;
