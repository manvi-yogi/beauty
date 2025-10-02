import dotenv from 'dotenv';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import connectDatabase from '../config/database.js';
import User from '../models/User.js';
import Category from '../models/Category.js';
import Product from '../models/Product.js';
import Order from '../models/Order.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const importData = async () => {
  try {
    await connectDatabase();

    const data = JSON.parse(
      fs.readFileSync(join(__dirname, '../../data/sample-data.json'), 'utf-8')
    );

    await User.deleteMany();
    await Category.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log('Existing data deleted...');

    const createdUsers = await User.create(data.users);
    console.log(`${createdUsers.length} users created`);

    const createdCategories = await Category.create(data.categories);
    console.log(`${createdCategories.length} categories created`);

    const productsWithCategory = data.products.map(product => ({
      ...product,
      category: createdCategories[0]._id
    }));

    const createdProducts = await Product.create(productsWithCategory);
    console.log(`${createdProducts.length} products created`);

    console.log('Data imported successfully!');
    console.log('\n=== SAMPLE CREDENTIALS ===');
    console.log('Admin:');
    console.log('  Email: admin@ecommerce.com');
    console.log('  Password: Admin@123456');
    console.log('\nUser:');
    console.log('  Email: john@example.com');
    console.log('  Password: User@123456');
    console.log('==========================\n');

    process.exit(0);
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await connectDatabase();

    await User.deleteMany();
    await Category.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log('Data deleted successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error deleting data:', error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
