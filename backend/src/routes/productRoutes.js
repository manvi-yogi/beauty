import express from 'express';
import {
  getAllProducts,
  getProductById,
  getFeaturedProducts,
  createReview
} from '../controllers/productController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/featured', getFeaturedProducts);
router.get('/:id', getProductById);
router.post('/:id/reviews', protect, createReview);

export default router;
