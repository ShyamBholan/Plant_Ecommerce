# 🌿 Plant E-Commerce

A modern e-commerce web application for buying plants online. This React-based project integrates secure Stripe payments and supports international shipping using country listings.

## 🚀 Features

- 🌱 Browse and purchase various plants
- 🔒 Secure Stripe payment integration
- 🌍 Country-based shipping support (`countries-list`)
- 🔔 Toast notifications for user feedback
- 📦 Real-time cart and checkout updates
- 🧾 Order summary and receipt
- 🔁 Page routing using `react-router-dom`

## 🛠️ Tech Stack

| Tech             | Description                                  |
|------------------|----------------------------------------------|
| React            | Frontend UI                                  |
| Stripe.js        | Payment gateway integration                  |
| Axios            | HTTP requests                                |
| React Router DOM | Routing system                               |
| React Icons      | Vector icons                                 |
| React Toastify   | Toast notifications                          |
| Countries-list   | Country list for shipping info               |
| MongoDB          | Cloud database for storing product/order info|
| React Scripts    | App lifecycle scripts                        |
| Jest / RTL       | Testing libraries                            |

## 📦 Installation

```bash
git clone https://github.com/yourusername/plant-ecommerce.git
cd plant-ecommerce
npm install
```

## 🧪 Scripts

| Command         | Description                       |
|----------------|-----------------------------------|
| `npm start`     | Runs the app in development mode  |
| `npm test`      | Launches the test runner          |
| `npm run build` | Builds the app for production     |
| `npm run eject` | Ejects from Create React App      |

## 💳 Stripe Setup

To enable Stripe payments, make sure to:

1. Get your **Stripe publishable key** and **secret key** from [Stripe Dashboard](https://dashboard.stripe.com/).
2. Use `@stripe/react-stripe-js` and `@stripe/stripe-js` to wrap your checkout components.
3. Set up a backend endpoint (not included here) to handle `PaymentIntents` securely.

## 🗃️ MongoDB Integration

This project uses **MongoDB Atlas** for storing data like users, products, and orders.

### MongoDB Setup

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/v2/66725ba949d2c7696062183d#/overview) and create a cluster.
2. Create a database and collection (e.g., `plants`, `orders`, `users`).
3. In your backend project (Node.js/Express recommended), connect using the MongoDB URI:

```js
const mongoose = require('mongoose');

mongoose.connect("your-mongodb-connection-uri", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));
```

4. Replace `"your-mongodb-connection-uri"` with the actual URI from MongoDB Atlas.

## 🌐 Browser Support

| Environment  | Version                 |
|--------------|--------------------------|
| Chrome       | Last 1 version           |
| Firefox      | Last 1 version           |
| Safari       | Last 1 version           |
| Production   | >0.2%, not dead, not Opera Mini |

## ✅ Testing

Built-in support for:
- `@testing-library/react`
- `@testing-library/jest-dom`

Run tests:

```bash
npm test
```

## 📁 Project Structure (Suggested)

```
/src
 ┣ /components
 ┣ /pages
 ┣ /assets
 ┣ /utils
 ┣ App.js
 ┣ index.js
```

## 📌 To-Do

- Add backend for handling orders and payments securely
- User authentication system
- Admin dashboard for inventory management
- Order history and tracking

## 🧑‍💻 Author

- **Your Name** – [@yourgithub](https://github.com/yourgithub)

## 📄 License

This project is licensed under the MIT License.
