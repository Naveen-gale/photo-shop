# 📸 Photo Studio & Shop Application

A full-stack photography portfolio and e-commerce platform built with **React (Vite)** and **Node.js (Express)**.

## 📂 Project Structure

A managed monorepo structure separating frontend clients and backend services.

```
photo-grapehare-shop/
├── 📂 backend/                 # Node.js & Express API
│   ├── 📂 config/              # Configuration files
│   ├── 📂 controllers/         # Request handlers (Admin, Photo, Contact)
│   ├── 📂 db/                  # MongoDB Connection
│   ├── 📂 middleware/          # Auth & File Upload Middleware
│   ├── 📂 models/              # Mongoose Schemas
│   ├── 📂 routes/              # API Route Definitions
│   ├── 📂 utils/               # Helpers (ImageKit, Mailer)
│   ├── app.js                  # Express App Setup
│   └── server.js               # Server Entry Point
│
├── 📂 frontend/                # React (Vite) Client
│   ├── 📂 public/              # Static Assets
│   ├── 📂 src/
│   │   ├── 📂 assets/          # Images & Icons
│   │   ├── 📂 components/      # Reusable UI Components (Navbar, Hero, etc.)
│   │   ├── 📂 pages/           # Application Pages (Home, Gallery, Login)
│   │   ├── App.jsx             # Main Component & Routing
│   │   └── main.jsx            # Entry Point
│   ├── vercel.json             # Vercel Deployment Config
│   └── vite.config.js          # Vite Configuration
│
├── render.yaml                 # Render Infrastructure as Code
└── README.md                   # Project Documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas Account
- ImageKit Account
- Gmail Account (for email notifications)

### 1️⃣ Installation

**Clone the repository:**
```bash
git clone https://github.com/Naveen-gale/photo-grapehare-shop.git
cd photo-grapehare-shop
```

### 2️⃣ Backend Setup
Navigate to the backend folder and install dependencies:
```bash
cd backend
npm install
```

**Create a `.env` file in `backend/.env` with the following keys:**
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

# Admin Access
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=securepassword123

# Image Hosting (ImageKit)
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint

# Email Service (Nodemailer)
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

**Start the Server:**
```bash
npm start
# Server runs on http://localhost:5000
```

### 3️⃣ Frontend Setup
Navigate to the frontend folder and install dependencies:
```bash
cd ../frontend
npm install
```

**Start the Client:**
```bash
npm run dev
# App runs on http://localhost:5173
```

## 🌍 Deployment

### Backend (Render)
1.  Create a **New Web Service** on [Render](https://render.com/).
2.  Connect this repository.
3.  Set **Root Directory** to `backend`.
4.  Add all **Environment Variables** from the backend section above.

### Frontend (Vercel)
1.  Create a **New Project** on [Vercel](https://vercel.com/).
2.  Connect this repository.
3.  Set **Root Directory** to `frontend`.
4.  Deploy!

---
*Built with ❤️ by Naveen*
