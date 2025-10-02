import express from 'express';
import {
  createProduct,
  updateProduct,
  deleteProduct,
  uploadProductImages,
  createCategory,
  updateCategory,
  deleteCategory,
  getAllOrders,
  updateOrderStatus,
  getAllUsers,
  updateUserRole,
  deleteUser,
  getDashboardStats
} from '../controllers/adminController.js';
import { protect, authorize } from '../middleware/auth.js';
import { upload } from '../config/cloudinary.js';

const router = express.Router();

router.use(protect);
router.use(authorize('admin'));

router.get('/dashboard/stats', getDashboardStats);

router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
router.post('/products/:id/images', upload.array('images', 5), uploadProductImages);

router.post('/categories', createCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

router.get('/orders', getAllOrders);
router.put('/orders/:id', updateOrderStatus);

router.get('/users', getAllUsers);
router.put('/users/:id/role', updateUserRole);
router.delete('/users/:id', deleteUser);

export default router;
