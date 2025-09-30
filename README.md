# Eatopia-Food-Delivery-app
# 🍕 Food Delivery App (MERN Stack)

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** food delivery application where users can browse restaurants, view menus, place orders, and track deliveries in real-time. Includes both a customer-facing frontend and an admin dashboard for managing restaurants, menus, and orders.

---

## 🚀 Features

* **Authentication & Authorization** – JWT-based login/signup for customers and admins
* **Restaurant & Menu Management** – Admins can add, edit, and delete restaurants and dishes
* **Cart & Checkout** – Add food items to cart and place orders securely
* **Responsive UI** – Optimized for both mobile and desktop devices

---

## 🛠️ Tech Stack

* **Frontend:** React.js, React Router, Redux / Context API, Tailwind CSS / Bootstrap
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Authentication:** JSON Web Tokens (JWT)

---

## 📦 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/Zarrar201/mern-food-delivery.git
cd mern-food-delivery
```

2. **Install dependencies**

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. **Environment variables**
   Create a `.env` file inside the `backend` directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_KEY=your_stripe_api_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. **Run the app**

```bash
# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm start
```

App runs at:

* Frontend → `http://localhost:3000`
* Backend → `http://localhost:5000`

---

## 🤝 Contribution

Contributions are welcome! Fork the repository, create a new branch, and submit a pull request.

---

## 👨‍💻 Author

Developed by **Tanzeelur Rahman**
