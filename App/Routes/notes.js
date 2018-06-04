var express = require('express')
  ,router = express.Router()
  ,controller = require('../Controllers/notes');

router.get('/', controller.getAll);

/*router.get('/:id', (req, res)=>{

});*/

router.get('/:id', controller.getById);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;
