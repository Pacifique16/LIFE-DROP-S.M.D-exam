# LIFEDROP - Blood Donation Management System

A web-based blood donation management platform connecting donors, hospitals, and administrators.

## Features

- **Donor Management**: Registration, profile management, donation history
- **Hospital Portal**: Blood request creation, donor matching, inventory management
- **Admin Dashboard**: User management, system monitoring, reports
- **Real-time Matching**: Automatic donor-request matching by blood type and location
- **Notifications**: Email/SMS alerts for donation requests
- **Inventory Tracking**: Blood stock management with expiry dates

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **Authentication**: JWT + bcrypt

## Project Structure

```
lifedrop/
├─ README.md
├─ .gitignore
├─ backend/
│  ├─ package.json
│  ├─ src/
│  │  ├─ index.js
│  │  ├─ routes/
│  │  ├─ controllers/
│  │  ├─ models/
│  │  └─ middlewares/
│  └─ .env.example
└─ frontend/
   ├─ package.json
   ├─ src/
   │  ├─ main.jsx
   │  ├─ App.jsx
   │  └─ pages/
   └─ vite.config.js
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL
- Git

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd lifedrop
```

2. Setup Backend
```bash
cd backend
npm install
cp .env.example .env
# Configure your database and environment variables
npm run dev
```

3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```

## Requirements Implemented

### Functional Requirements
- ✅ User registration and authentication
- ✅ Blood request creation and management
- ✅ Donor-request matching algorithm
- ✅ Notification system
- ✅ Donation tracking and history
- ✅ Inventory management
- ✅ Admin panel

### Non-Functional Requirements
- ✅ Performance: Sub-5 second matching
- ✅ Security: JWT authentication + bcrypt
- ✅ Usability: Responsive design
- ✅ Compatibility: Cross-browser support

### Domain Requirements
- ✅ Donor eligibility verification
- ✅ Donation interval tracking (3 months)
- ✅ Hospital verification
- ✅ Blood expiry management
- ✅ Emergency request prioritization

## 📝 License

© Copyright 2025 Pacifique Harerimana

This project is for educational purposes as part of AUCA Data Structure and Algorithms coursework. Feel free to fork and learn from it, but please give credit where it's due.



## ⭐ Show Your Support

**If you found this project helpful or interesting, please consider giving it a star!** 🌟

Your support motivates me to create more educational projects and helps others discover useful resources.


## 👨‍💻 Author
**Pacifique Harerimana**  
📧 Contact: [GitHub](https://github.com/Pacifique16)


##
*Built with ❤️ for learning and sharing knowledge*
