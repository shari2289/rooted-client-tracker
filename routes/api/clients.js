const express = require('express');
const router = express.Router();
const stylesCtrl = require('../../controllers/api/clients');


router.get('/', clientsCtrl.index);
router.get('/:id', clientsCtrl.show);
router.post('/', clientsCtrl.create);
router.delete('/:id', clientsCtrl.delete);
router.put('/:id', clientsCtrl.update);

module.exports = router;