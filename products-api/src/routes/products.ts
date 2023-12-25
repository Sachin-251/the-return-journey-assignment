import express from 'express';
import controller from '../controllers/products';

const router = express.Router();

router.get('/products', controller.getProducts);
router.get('/products/:id', controller.getProduct);
router.post('/products', controller.addProduct);
router.put('/products/:id', controller.updateProduct);
router.delete('/products/:id', controller.deleteProduct);

export = router;