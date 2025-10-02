import Category from '../models/Category.js';

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true }).sort('name');

    res.status(200).json({
      success: true,
      count: categories.length,
      data: { categories }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }

    res.status(200).json({
      success: true,
      data: { category }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
