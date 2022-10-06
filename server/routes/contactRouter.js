const Router = require('express');
const contactController = require('../controllers/contactController')

const router = new Router();

router.get('/contacts', contactController.getAll);
router.post('/contacts', contactController.create);
router.delete('/contacts/:id', contactController.delete);

module.exports = router;