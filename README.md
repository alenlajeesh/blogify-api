# 🚀 Blogify API  
  
![Node.js](https://img.shields.io/badge/node.js-20-green)  
![Express](https://img.shields.io/badge/express.js-backend-blue)  
![MongoDB](https://img.shields.io/badge/mongodb-database-green)  
![Stripe](https://img.shields.io/badge/stripe-payments-purple)  
  
A **RESTful API for a blogging platform** built using **Node.js, Express, and MongoDB**.
The API supports authentication, post management, image uploads, and payment processing.  
  
---  
  
# ✨ Features  
  
- 🔐 JWT Authentication  
- 📝 Blog Post CRUD  
- ☁️ Image Uploads (Cloudinary)  
- 💳 Stripe Payment Integration  
- 📦 Order Management  
- 📄 RESTful API Design  
- 🛡️ Secure Protected Routes  
  
---  
  
# 🛠 Tech Stack  
  
**Backend**  
  
- Node.js  
- Express.js  
  
**Database**  
  
- MongoDB  
- Mongoose  
- MongoDB Atlas  
  
**Authentication**  
  
- JSON Web Token (JWT)  
- bcrypt  
  
**File Upload**  
  
- Cloudinary  
- Multer  
  
**Payments**  
  
- Stripe API  
  
---  
  
# 📦 Installation  
  
Clone the repository:  
  
```bash  
git clone https://github.com/YOUR_USERNAME/blogify-api.git
```

Move into the project:

```
cd blogify-api
```

Install dependencies:

```
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory.

```
PORT=3000  
  
MONGO_URI=your_mongodb_connection  
  
JWT_SECRET=your_jwt_secret  
  
CLOUDINARY_CLOUD_NAME=  
CLOUDINARY_API_KEY=  
CLOUDINARY_API_SECRET=  
  
STRIPE_SECRET_KEY=
```

---

# ▶️ Running the Server

Start development server:

```
npm run dev
```

Server runs at:

```
http://localhost:3000
```

---

# 📡 API Endpoints

## Authentication

|Method|Endpoint|Description|
|---|---|---|
|POST|`/api/auth/register`|Register new user|
|POST|`/api/auth/login`|Login user|

---

## Posts

|Method|Endpoint|Description|Auth|
|---|---|---|---|
|GET|`/api/posts`|Get all posts|❌|
|GET|`/api/posts/:id`|Get single post|❌|
|POST|`/api/posts`|Create post|✅|
|PUT|`/api/posts/:id`|Update post|✅|
|DELETE|`/api/posts/:id`|Delete post|✅|

---

## Upload

|Method|Endpoint|
|---|---|
|POST|`/api/upload`|

---

## Payments

|Method|Endpoint|
|---|---|
|POST|`/api/payments/create-payment-intent`|
|POST|`/api/payments/confirm-payment`|

---

## Orders

|Method|Endpoint|
|---|---|
|POST|`/api/orders`|
|GET|`/api/orders/my-orders`|
|GET|`/api/orders/:id`|

---

# 📂 Project Structure

```
src  
│  
├── controllers  
├── models  
├── routes  
├── middleware  
├── config  
└── utils
```

---

# 🤝 Contributing

Pull requests are welcome.

Steps:

1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Open a Pull Request

---

# 📜 License

MIT License

---

# 👨‍💻 Author

Developed by **Alen Lajeesh**
