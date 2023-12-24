const router = require('express').Router();
const productController = require('../../controllers/productController');

router.get('/new-books', productController.getNewBooks);
router.get('/top-rating', productController.getTopRating);
router.get('/best-seller', productController.getBestSeller);
router.get('/for-kids', productController.getKidBooks);

module.exports = router;