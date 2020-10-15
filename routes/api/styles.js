const express = require('express');
const router = express.Router();
const stylesCtrl = require('../../controllers/api/styles');


router.get('/', stylesCtrl.index);
router.get('/:id', stylesCtrl.show);
router.post('/', stylesCtrl.create);
router.delete('/:id', stylesCtrl.delete);
router.put('/:id', stylesCtrl.update);

module.exports = router;