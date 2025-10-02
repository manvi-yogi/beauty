# E-Commerce Backend API

Complete Node.js, Express.js, and MongoDB backend for an e-commerce application with admin panel and user features.

## Features

### User Features
- User registration and authentication (JWT)
- User profile management
- Product browsing with filters and search
- Product reviews and ratings
- Shopping cart functionality
- Order placement and tracking
- Order cancellation
- Order history

### Admin Features
- Dashboard with statistics
- Product management (CRUD)
- Category management (CRUD)
- Order management and status updates
- User management
- Image upload via Cloudinary
- Inventory tracking
- Low stock alerts

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image hosting
- **Multer** - File upload handling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- Cloudinary account

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend root directory:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:

```env
PORT=5000
NODE_ENV=development

# MongoDB Atlas Example:
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce

# Or Local MongoDB:
MONGODB_URI=mongodb://localhost:27017/ecommerce

JWT_SECRET=your_super_secret_jwt_key_change_this
JWT_EXPIRE=7d

# Cloudinary Configuration (get from https://cloudinary.com)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Database Setup

#### Option 1: MongoDB Atlas (Recommended for production)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string and update `MONGODB_URI` in `.env`

#### Option 2: Local MongoDB

1. Install MongoDB locally
2. Start MongoDB service:
```bash
# Windows
net start MongoDB

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

3. Use the local connection string in `.env`:
```env
MONGODB_URI=mongodb://localhost:27017/ecommerce
```

### Cloudinary Setup

1. Create a free account at [Cloudinary](https://cloudinary.com)
2. Go to Dashboard
3. Copy your Cloud Name, API Key, and API Secret
4. Update the Cloudinary variables in `.env`

### Seed Database

Import sample data (categories, products, and users):

```bash
npm run seed
```

This will create:
- 5 categories
- 12 products
- 3 users (1 admin, 2 regular users)

**Sample Credentials:**

Admin:
- Email: `admin@ecommerce.com`
- Password: `Admin@123456`

User:
- Email: `john@example.com`
- Password: `User@123456`

To delete all data:
```bash
npm run seed -- -d
```

### Running the Server

Development mode (with nodemon):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Documentation

### Authentication Endpoints

#### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+1234567890"
}
```

#### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```
GET /api/auth/me
Authorization: Bearer <token>
```

#### Update Profile
```
PUT /api/auth/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Updated",
  "phone": "+1234567890",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA"
  }
}
```

#### Update Password
```
PUT /api/auth/password
Authorization: Bearer <token>
Content-Type: application/json

{
  "currentPassword": "oldPassword",
  "newPassword": "newPassword"
}
```

### Product Endpoints

#### Get All Products
```
GET /api/products?page=1&limit=12&category=<categoryId>&search=<query>&minPrice=10&maxPrice=500&sort=-createdAt
```

Query Parameters:
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 12)
- `category` - Filter by category ID
- `search` - Search in name, description, and tags
- `minPrice` - Minimum price filter
- `maxPrice` - Maximum price filter
- `sort` - Sort field (use `-` for descending)

#### Get Featured Products
```
GET /api/products/featured
```

#### Get Product by ID
```
GET /api/products/:id
```

#### Create Review
```
POST /api/products/:id/reviews
Authorization: Bearer <token>
Content-Type: application/json

{
  "rating": 5,
  "comment": "Excellent product!"
}
```

### Category Endpoints

#### Get All Categories
```
GET /api/categories
```

#### Get Category by ID
```
GET /api/categories/:id
```

### Order Endpoints

#### Create Order
```
POST /api/orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "orderItems": [
    {
      "product": "productId",
      "name": "Product Name",
      "quantity": 2,
      "image": "image_url",
      "price": 99.99
    }
  ],
  "shippingAddress": {
    "fullName": "John Doe",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA",
    "phone": "+1234567890"
  },
  "paymentMethod": "credit_card",
  "itemsPrice": 199.98,
  "taxPrice": 15.99,
  "shippingPrice": 10.00,
  "totalPrice": 225.97
}
```

#### Get My Orders
```
GET /api/orders/my-orders
Authorization: Bearer <token>
```

#### Get Order by ID
```
GET /api/orders/:id
Authorization: Bearer <token>
```

#### Cancel Order
```
PUT /api/orders/:id/cancel
Authorization: Bearer <token>
```

### Admin Endpoints

All admin endpoints require admin role authentication:
```
Authorization: Bearer <admin_token>
```

#### Dashboard Statistics
```
GET /api/admin/dashboard/stats
```

#### Product Management

Create Product:
```
POST /api/admin/products
Content-Type: application/json

{
  "name": "New Product",
  "description": "Product description",
  "price": 99.99,
  "compareAtPrice": 129.99,
  "category": "categoryId",
  "stock": 100,
  "brand": "Brand Name",
  "tags": ["tag1", "tag2"],
  "isFeatured": true
}
```

Update Product:
```
PUT /api/admin/products/:id
Content-Type: application/json

{
  "name": "Updated Product",
  "price": 89.99
}
```

Delete Product:
```
DELETE /api/admin/products/:id
```

Upload Product Images:
```
POST /api/admin/products/:id/images
Content-Type: multipart/form-data

images: <file>
images: <file>
```

#### Category Management

Create Category:
```
POST /api/admin/categories
Content-Type: application/json

{
  "name": "New Category",
  "description": "Category description"
}
```

Update Category:
```
PUT /api/admin/categories/:id
```

Delete Category:
```
DELETE /api/admin/categories/:id
```

#### Order Management

Get All Orders:
```
GET /api/admin/orders?status=pending&page=1&limit=20
```

Update Order Status:
```
PUT /api/admin/orders/:id
Content-Type: application/json

{
  "orderStatus": "shipped",
  "trackingNumber": "TRACK123456"
}
```

#### User Management

Get All Users:
```
GET /api/admin/users?page=1&limit=20
```

Update User Role:
```
PUT /api/admin/users/:id/role
Content-Type: application/json

{
  "role": "admin"
}
```

Delete User:
```
DELETE /api/admin/users/:id
```

## Error Handling

All API responses follow this format:

Success Response:
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { }
}
```

Error Response:
```json
{
  "success": false,
  "message": "Error message"
}
```

## Order Status Flow

1. `pending` - Order created, payment pending
2. `processing` - Payment received, order being prepared
3. `shipped` - Order shipped to customer
4. `delivered` - Order delivered successfully
5. `cancelled` - Order cancelled

## Project Structure

```
backend/
├── data/
│   └── sample-data.json        # Sample data for seeding
├── src/
│   ├── config/
│   │   ├── cloudinary.js       # Cloudinary configuration
│   │   └── database.js         # MongoDB connection
│   ├── controllers/
│   │   ├── adminController.js  # Admin operations
│   │   ├── authController.js   # Authentication
│   │   ├── categoryController.js
│   │   ├── orderController.js
│   │   └── productController.js
│   ├── middleware/
│   │   ├── auth.js             # Auth & authorization
│   │   └── errorHandler.js     # Error handling
│   ├── models/
│   │   ├── Category.js
│   │   ├── Order.js
│   │   ├── Product.js
│   │   └── User.js
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── authRoutes.js
│   │   ├── categoryRoutes.js
│   │   ├── orderRoutes.js
│   │   └── productRoutes.js
│   ├── utils/
│   │   ├── jwt.js              # JWT utilities
│   │   └── seedData.js         # Database seeding
│   └── server.js               # Main server file
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Development Tips

1. Use MongoDB Compass or Studio 3T to visualize your database
2. Test APIs using Postman or Thunder Client
3. Check logs for detailed error messages
4. Use nodemon for auto-restart during development
5. Keep your JWT_SECRET secure and never commit it

## Common Issues

### MongoDB Connection Error
- Check if MongoDB is running
- Verify connection string in `.env`
- Check network/firewall settings
- For Atlas: Verify IP whitelist

### Cloudinary Upload Error
- Verify API credentials
- Check file size limits
- Ensure proper file format

### JWT Token Error
- Token expired - login again
- Invalid token - check Bearer format
- Missing token - include in Authorization header

## Production Deployment

1. Set `NODE_ENV=production` in `.env`
2. Use a strong `JWT_SECRET`
3. Enable MongoDB authentication
4. Set up proper CORS origins
5. Use HTTPS
6. Set up environment variables on hosting platform
7. Consider using PM2 for process management

## License

MIT

## Support

For issues and questions, please create an issue in the repository.
