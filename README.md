# 🌐 Scalable Authentication System – Frontend

A production-ready frontend built with React, designed to work seamlessly with a secure backend authentication system.
This application handles complete user authentication flows including login, signup, session handling, protected routes, and multi-device management.

---

## 🚀 Core Features

* User Registration & Login UI
* Email Verification Flow
* JWT-based Authentication (Access + Refresh Token)
* Automatic Token Refresh Handling
* Protected Routes (Private Routing)
* Multi-Device Session Awareness
* Logout (Single Device)
* Logout from All Devices
* Password Reset Flow (Forgot / Reset)
* Role-Based UI Access Handling
* Persistent Authentication State
* API Integration with Backend

---

## 🛠️ Tech Stack

* React (Vite)
* React Router DOM
* Axios
* Context API (Global Auth State)

---

## 📂 Project Structure

```id="0qtrg4"
src/
├── components/
├── pages/
├── context/
├── routes/
├── utils/
├── App.jsx
└── main.jsx
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```id="j6zv6p"
VITE_API_URL=http://localhost:5000
```

---

## ▶️ Running the Application

Install dependencies:

```id="y7dxh1"
npm install
```

Start development server:

```id="z3y9s6"
npm run dev
```

Application will run on:

```id="u3w6qk"
http://localhost:5173
```

---

## 🔐 Authentication Flow (Frontend Perspective)

1. User interacts with login/signup forms
2. Credentials sent to backend APIs
3. Access token used for authenticated requests
4. Refresh token automatically handled in background
5. Protected routes restrict unauthorized access
6. Auth state managed globally using Context API
7. Logout updates UI and clears session

---

## 🔗 Backend Integration

Ensure backend server is running:

```id="t8s9df"
http://localhost:5000
```

All API requests are routed through:

```id="l0q8xn"
VITE_API_URL
```

---

## 🛡️ Client-Side Handling

* Automatic token refresh on expiry
* Centralized API handling with Axios
* Route protection using auth state
* Session persistence across refresh
* Clean separation of UI and auth logic

---

## 👨‍💻 Author

Love Kumar

---
