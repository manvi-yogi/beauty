# Quick Setup Guide

## Step-by-Step Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Set Up MongoDB

Choose one option:

**Option A: MongoDB Atlas (Cloud - Recommended)**

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster (Free tier is fine)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database user password

**Option B: Local MongoDB**

1. Download from https://www.mongodb.com/try/download/community
2. Install and start MongoDB service
3. Connection string: `mongodb://localhost:27017/ecommerce`

### 3. Set Up Cloudinary

1. Go to https://cloudinary.com
2. Sign up for free account
3. Go to Dashboard
4. Copy these three values:
   - Cloud Name
   - API Key
   - API Secret

### 4. Configure Environment Variables

Create `.env` file in backend folder:

```bash
cp .env.example .env
```

Edit `.env` and fill in your values:

```env
PORT=5000
NODE_ENV=development

# Paste your MongoDB connection string here
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# Generate a random string (30+ characters)
JWT_SECRET=your_very_long_random_secret_key_here

# Paste your Cloudinary values here
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 5. Import Sample Data

```bash
npm run seed
```

This creates sample products, categories, and users.

**Test Credentials:**
- Admin: `admin@ecommerce.com` / `Admin@123456`
- User: `john@example.com` / `User@123456`

### 6. Start Server

```bash
npm run dev
```

Server will run at: http://localhost:5000

### 7. Test the API

Visit http://localhost:5000 - you should see:
```json
{
  "success": true,
  "message": "E-commerce API is running"
}
```

## Quick Test

Use these endpoints to verify everything works:

1. **Get Products:**
   ```
   GET http://localhost:5000/api/products
   ```

2. **Login:**
   ```
   POST http://localhost:5000/api/auth/login
   Content-Type: application/json

   {
     "email": "admin@ecommerce.com",
     "password": "Admin@123456"
   }
   ```

3. **Get Categories:**
   ```
   GET http://localhost:5000/api/categories
   ```

## Troubleshooting

### "Cannot connect to MongoDB"
- Check if MongoDB is running
- Verify connection string in `.env`
- For Atlas: Check IP whitelist (add 0.0.0.0/0 for testing)

### "Cloudinary upload failed"
- Verify credentials in `.env`
- Check if values have spaces (remove them)

### "Port 5000 already in use"
- Change PORT in `.env` to 5001 or another port
- Or stop other service using port 5000

### "Module not found"
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then run `npm install`

## Next Steps

1. Test all endpoints using Postman or Thunder Client
2. Connect your frontend to `http://localhost:5000`
3. Customize products and categories
4. Add more sample data if needed

## Important Notes

- Keep your `.env` file secure (never commit it)
- Use strong passwords in production
- For production, use `npm start` instead of `npm run dev`
- Set `NODE_ENV=production` in production

## Sample Data Info

The seed script creates:
- **5 Categories:** Electronics, Fashion, Home & Living, Sports, Books
- **12 Products:** Various electronic items with descriptions
- **3 Users:** 1 admin and 2 regular users

To delete all data:
```bash
npm run seed -- -d
```
