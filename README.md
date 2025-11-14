# 🎯 RelaxGST.ai - Complete GST Compliance Platform

<div align="center">

[![Platform Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)](https://github.com/jitenkr2030/RelaxGST.ai)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue)](#)
[![License](https://img.shields.io/badge/License-MIT-yellow)](#)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.5.0-green)](https://www.mongodb.com/)

**Comprehensive GST Compliance Platform for Indian Businesses**

[Website](#) • [Documentation](#) • [API Docs](#) • [Demo](#) • [Support](#)

</div>

---

## 🌟 Overview

RelaxGST.ai is a complete, production-ready platform designed to revolutionize GST compliance for businesses across India. The platform provides comprehensive tools for managing invoices, filing GST returns, generating e-way bills, and maintaining GST compliance across all business operations.

### ✨ Key Features

- 🔐 **User Authentication & Authorization** - Secure JWT-based authentication system
- 👥 **Client Management** - Complete client database with GSTIN validation
- 🧾 **Invoice Generation** - GST-compliant invoice creation with automatic calculations
- 📋 **GSTR Return Filing** - GSTR-1 and GSTR-3B return preparation and filing
- 🚚 **E-way Bill Generation** - Complete e-way bill workflow with vehicle tracking
- 📊 **Analytics Dashboard** - Real-time business intelligence and reporting
- 📱 **Mobile Application** - React Native app for iOS and Android
- 🏪 **Multi-tenant Support** - Support for multiple organizations
- 🔒 **Security First** - Enterprise-grade security with rate limiting and encryption

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- MongoDB 7.0+
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/jitenkr2030/RelaxGST.ai.git
cd RelaxGST.ai
```

### 2. Install Dependencies

```bash
# Backend dependencies
cd relaxgst-backend
npm install

# Frontend dependencies  
cd ../relaxgst-frontend
npm install

# Mobile dependencies
cd ../relaxgst-mobile
npm install
```

### 3. Environment Configuration

Create `.env` files in each component directory:

**Backend (.env):**
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/relaxgst
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=30d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Frontend (.env):**
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_ENVIRONMENT=development
```

### 4. Start Development Servers

```bash
# Start backend server
cd relaxgst-backend
npm run dev

# Start frontend (in another terminal)
cd relaxgst-frontend
npm start

# Start mobile app (in another terminal)
cd relaxgst-mobile
npx react-native start
```

---

## 📱 Platform Components

### Backend API Server (`relaxgst-backend/`)

A robust Node.js/Express.js API server with MongoDB integration.

**Features:**
- RESTful API with 15+ endpoints
- JWT authentication & authorization
- MongoDB with Mongoose ODM
- Rate limiting and security middleware
- File upload and PDF processing
- Email notifications
- Comprehensive logging

**Key Files:**
- `server.js` - Main application entry point
- `config/db.js` - Database connection
- `models/` - Mongoose schemas
- `routes/` - API route definitions
- `controllers/` - Business logic
- `middlewares/` - Authentication & validation

### Frontend Web Application (`relaxgst-frontend/`)

A modern React.js application with Redux state management.

**Features:**
- React 18.2.0 with hooks
- Redux Toolkit for state management
- React Router for navigation
- Tailwind CSS for styling
- Axios for API communication
- Responsive design
- PWA capabilities

**Key Components:**
- Authentication (Login/Register)
- Dashboard with analytics
- Client management
- Invoice creation & listing
- GST return forms
- E-way bill generator
- Reports and analytics

### Mobile Application (`relaxgst-mobile/`)

Cross-platform React Native application.

**Features:**
- React Native 0.72.4
- React Navigation for routing
- Camera integration for document scanning
- PDF viewer
- Offline support
- Push notifications
- Biometric authentication

---

## 🛠️ Technology Stack

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js 4.18
- **Database:** MongoDB 7.5 with Mongoose
- **Authentication:** JWT (jsonwebtoken)
- **Security:** bcryptjs, helmet, cors, rate-limiting
- **File Handling:** multer, sharp, pdf-parse
- **Email:** nodemailer
- **Logging:** Winston
- **Validation:** express-validator

### Frontend
- **Framework:** React 18.2.0
- **State Management:** Redux Toolkit
- **Routing:** React Router 6.15
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **UI Components:** Headless UI, Heroicons
- **Forms:** React Hook Form
- **Charts:** Recharts
- **Notifications:** React Hot Toast

### Mobile
- **Framework:** React Native 0.72.4
- **Navigation:** React Navigation 6
- **State Management:** Redux Toolkit
- **Camera:** React Native Camera
- **PDF:** React Native PDF
- **File System:** React Native FS
- **UI:** React Native Elements, React Native Paper

---

## 📊 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

```http
POST /auth/register    # User registration
POST /auth/login       # User login
GET  /auth/me          # Get current user
POST /auth/logout      # User logout
```

### User Management

```http
GET    /users/profile      # Get user profile
PUT    /users/profile      # Update profile
PUT    /users/password     # Change password
GET    /users/organization # Get organization details
```

### Client Management

```http
GET    /clients           # Get all clients
POST   /clients           # Create new client
GET    /clients/:id       # Get client by ID
PUT    /clients/:id       # Update client
DELETE /clients/:id       # Delete client
```

### Invoice Management

```http
GET    /invoices          # Get all invoices
POST   /invoices          # Create new invoice
GET    /invoices/:id      # Get invoice by ID
PUT    /invoices/:id      # Update invoice
DELETE /invoices/:id      # Delete invoice
POST   /invoices/:id/send # Send invoice via email
GET    /invoices/:id/pdf  # Download PDF
```

### GST Returns

```http
GET    /gst/returns          # Get all GSTR returns
POST   /gst/returns          # Create GSTR return
PUT    /gst/returns/:id      # Update GSTR return
GET    /gst/returns/:id/pdf  # Download return PDF
POST   /gst/returns/:id/file # File return
```

### E-way Bills

```http
GET    /ewaybills          # Get all e-way bills
POST   /ewaybills          # Create e-way bill
PUT    /ewaybills/:id      # Update e-way bill
GET    /ewaybills/:id      # Get e-way bill details
POST   /ewaybills/:id/cancel # Cancel e-way bill
```

### Analytics

```http
GET    /dashboard/stats    # Get dashboard statistics
GET    /reports/revenue    # Revenue reports
GET    /reports/tax        # Tax liability reports
GET    /reports/clients    # Client performance reports
```

### Example API Response

```json
{
  "success": true,
  "data": {
    "totalClients": 150,
    "totalInvoices": 1250,
    "totalRevenue": 2500000,
    "outstandingAmount": 125000
  }
}
```

---

## 🧪 Testing

### Demo Server

A fully functional mock server is included for testing:

```bash
cd /workspace/RelaxGST.ai
node mock-server.js
```

**Access:** http://localhost:5000

### Interactive Testing Interface

Open `test-interface.html` in your browser for comprehensive testing:

- ✅ User authentication testing
- ✅ Client management interface
- ✅ Invoice generation
- ✅ GST return forms
- ✅ E-way bill generator
- ✅ Real-time dashboard
- ✅ API endpoint testing

### Automated Testing

```bash
# Run API tests
node api-tester.js

# Run simple connectivity test
node simple-test.js
```

### Demo Data

The platform includes comprehensive demo data:
- 3 demo users (Admin, User, Accountant)
- 3 client organizations
- Sample invoices with GST calculations
- GSTR returns (GSTR-1, GSTR-3B)
- E-way bills with vehicle details
- Dashboard analytics

---

## 🔒 Security Features

### Authentication & Authorization
- JWT token-based authentication
- Password hashing with bcrypt (salt rounds: 10)
- Role-based access control (Admin, User, Accountant)
- Session management and timeout

### API Security
- Rate limiting (100 requests per 15 minutes)
- CORS configuration
- Helmet.js for secure headers
- Input validation and sanitization
- SQL injection protection
- XSS prevention

### Data Protection
- Environment variable configuration
- Secure password policies
- Data encryption at rest
- Secure file uploads
- Audit logging

---

## 📱 Mobile App Features

### Cross-Platform Compatibility
- iOS 12.0+
- Android API Level 21+
- React Native 0.72.4

### Key Features
- **Document Scanning:** Camera integration for invoice/document capture
- **Offline Mode:** Work without internet connection
- **Push Notifications:** Real-time updates and reminders
- **Biometric Auth:** Fingerprint/Face ID authentication
- **PDF Viewer:** View and share documents
- **File Sharing:** Share invoices and reports

### Getting Started with Mobile

```bash
cd relaxgst-mobile

# Install dependencies
npm install

# iOS
npx react-native run-ios

# Android
npx react-native run-android

# Start Metro bundler
npx react-native start
```

---

## 🚀 Deployment

### Production Deployment

#### 1. Environment Setup
```bash
# Production environment variables
NODE_ENV=production
PORT=5000
MONGO_URI=mongodb://your-production-db
JWT_SECRET=your-production-jwt-secret
# ... other production variables
```

#### 2. Build Applications
```bash
# Backend
cd relaxgst-backend
npm install --production
npm start

# Frontend
cd relaxgst-frontend
npm run build
# Serve build folder with nginx/apache

# Mobile
cd relaxgst-mobile
cd android && ./gradlew assembleRelease
# OR for iOS
cd ios && xcodebuild -archive
```

#### 3. Database Migration
```bash
# Setup MongoDB
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Run migrations (if applicable)
npm run migrate
```

### Docker Deployment

```dockerfile
# Example Dockerfile for backend
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

### Cloud Deployment Options

- **AWS:** EC2, ECS, Lambda
- **Google Cloud:** App Engine, Cloud Run
- **Azure:** Container Instances, App Service
- **DigitalOcean:** Droplets, App Platform
- **Heroku:** Simple deployment option

---

## 📈 Performance

### Optimization Features
- Database indexing for fast queries
- Image optimization with Sharp
- Caching with Redis (configurable)
- Lazy loading for components
- Code splitting for web
- Bundle optimization

### Scalability
- Horizontal scaling with load balancers
- Microservices architecture ready
- CDN integration for assets
- Database clustering support
- Auto-scaling capabilities

---

## 🔧 Configuration

### Environment Variables

#### Backend Configuration
```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/relaxgst

# Authentication
JWT_SECRET=your-secret-key
JWT_EXPIRE=30d
BCRYPT_SALT_ROUNDS=10

# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# File Upload
MAX_FILE_UPLOAD=5000000
UPLOAD_PATH=./uploads

# Security
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX=100
ALLOWED_ORIGINS=http://localhost:3000

# External Services
STRIPE_SECRET_KEY=sk_test_your_key
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

#### Frontend Configuration
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_ENVIRONMENT=development
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_your_key
REACT_APP_GOOGLE_MAPS_API_KEY=your-maps-key
```

---

## 📚 Usage Examples

### Creating a New Invoice

```javascript
const invoiceData = {
  client: {
    name: "ABC Corporation",
    gstin: "27XYZAB1234C1Z5",
    address: "456 Industrial Area, Mumbai"
  },
  items: [
    {
      description: "Consulting Services",
      quantity: 10,
      rate: 5000,
      taxRate: 18
    }
  ]
};

const response = await fetch('/api/invoices', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify(invoiceData)
});
```

### Filing GST Returns

```javascript
const gstrData = {
  period: "2025-11",
  returnType: "GSTR-1",
  outwardSupplies: [
    {
      gstin: "27XYZAB1234C1Z5",
      invoiceValue: 88500,
      taxAmount: 13500
    }
  ]
};

const response = await fetch('/api/gst/returns', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify(gstrData)
});
```

### Generating E-way Bills

```javascript
const ewayBillData = {
  supplier: {
    gstin: "27ABCDE1234F1Z5",
    name: "Your Company"
  },
  recipient: {
    gstin: "29QRSTU3456V7W5",
    name: "Client Company"
  },
  vehicleNumber: "MH 01 AB 1234",
  totalValue: 47790,
  distance: 150
};

const response = await fetch('/api/ewaybills', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify(ewayBillData)
});
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Code Style
- ESLint configuration included
- Prettier for code formatting
- Conventional commits
- Comprehensive documentation

---

## 📞 Support

### Getting Help

- **Documentation:** Check the [docs](docs/) folder
- **Issues:** Report bugs on [GitHub Issues](https://github.com/jitenkr2030/RelaxGST.ai/issues)
- **Discussions:** Use [GitHub Discussions](https://github.com/jitenkr2030/RelaxGST.ai/discussions)
- **Email:** support@relaxgst.ai

### Common Issues

**Q: Server won't start**
A: Check MongoDB connection and environment variables

**Q: Frontend not loading**
A: Verify API URL in .env file

**Q: Mobile app build fails**
A: Ensure React Native CLI is installed and properly configured

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Web framework
- [React](https://reactjs.org/) - UI library
- [React Native](https://reactnative.dev/) - Mobile framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management

---

## 🚀 Roadmap

### Version 2.0 (Planned)
- [ ] Multi-tenant architecture
- [ ] Advanced analytics and AI insights
- [ ] Integration with GST portal APIs
- [ ] Mobile app store deployment
- [ ] Advanced reporting features
- [ ] Third-party integrations (Tally, QuickBooks)

### Version 3.0 (Future)
- [ ] AI-powered invoice scanning
- [ ] Automated GST compliance checking
- [ ] Multi-language support
- [ ] Advanced workflow automation
- [ ] Enterprise features
- [ ] API marketplace

---

<div align="center">

**Built with ❤️ for GST compliance in India**

[⭐ Star this repo](https://github.com/jitenkr2030/RelaxGST.ai) • [🐛 Report Bug](https://github.com/jitenkr2030/RelaxGST.ai/issues) • [💡 Request Feature](https://github.com/jitenkr2030/RelaxGST.ai/issues)

</div>