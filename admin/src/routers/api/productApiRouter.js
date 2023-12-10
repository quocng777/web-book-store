const router = require('express').Router();
const productController = require('../../controllers/productController');

router.post('/', productController.addProduct);

router.post('/:id', productController.editProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;