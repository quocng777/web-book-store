const router = require('express').Router();
const productController = require('../controllers/productController');

const productApiRouter = require('./api/productApiRouter');
const categoryApiRouter = require('./api/categoryApiRouter');

router.get('/', productController.renderHomePage);

router.use('/api/products', productApiRouter);

router.use('/api/categories', categoryApiRouter);

module.exports = router;