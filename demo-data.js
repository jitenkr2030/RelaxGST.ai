// Demo Data Generator for RelaxGST.ai Platform
// This file creates comprehensive demo data for testing the platform functionality

const demoUsers = [
  {
    _id: "6501234567890abcdef123456",
    name: "Raj Kumar Sharma",
    email: "raj.sharma@example.com",
    password: "$2a$10$HashedPassword123", // Password: "password123"
    phone: "+919876543210",
    role: "admin",
    organization: {
      name: "Sharma Enterprises Pvt Ltd",
      gstin: "27ABCDE1234F1Z5",
      address: "123 Business Plaza, Mumbai, Maharashtra - 400001"
    },
    preferences: {
      currency: "INR",
      language: "en",
      notifications: true
    },
    createdAt: new Date("2024-01-15"),
    lastLogin: new Date("2025-11-14")
  },
  {
    _id: "6501234567890abcdef123457",
    name: "Priya Patel",
    email: "priya.patel@example.com",
    password: "$2a$10$HashedPassword456", // Password: "password456"
    phone: "+919876543211",
    role: "user",
    organization: {
      name: "Patel Trading Co",
      gstin: "29FGHIJ5678K1L5",
      address: "456 Commerce Street, Ahmedabad, Gujarat - 380001"
    },
    preferences: {
      currency: "INR",
      language: "en",
      notifications: true
    },
    createdAt: new Date("2024-02-10"),
    lastLogin: new Date("2025-11-13")
  },
  {
    _id: "6501234567890abcdef123458",
    name: "Amit Singh",
    email: "amit.singh@example.com",
    password: "$2a$10$HashedPassword789", // Password: "password789"
    phone: "+919876543212",
    role: "accountant",
    organization: {
      name: "Singh & Associates",
      gstin: "07KLMNO9012P3Q5",
      address: "789 Corporate Center, New Delhi, Delhi - 110001"
    },
    preferences: {
      currency: "INR",
      language: "hi",
      notifications: false
    },
    createdAt: new Date("2024-03-05"),
    lastLogin: new Date("2025-11-12")
  }
];

const demoInvoices = [
  {
    _id: "6502345678901abcdef123456",
    invoiceNumber: "INV-2025-001",
    client: {
      name: "ABC Corporation",
      gstin: "27XYZAB1234C1Z5",
      address: "456 Industrial Area, Mumbai, Maharashtra",
      phone: "+919876543220"
    },
    items: [
      {
        description: "Consulting Services",
        quantity: 10,
        rate: 5000,
        taxRate: 18,
        amount: 50000
      },
      {
        description: "Software License",
        quantity: 1,
        rate: 25000,
        taxRate: 18,
        amount: 25000
      }
    ],
    subtotal: 75000,
    taxAmount: 13500,
    total: 88500,
    dueDate: new Date("2025-12-15"),
    status: "paid",
    createdBy: "6501234567890abcdef123456",
    createdAt: new Date("2025-11-01"),
    paidAt: new Date("2025-11-05")
  },
  {
    _id: "6502345678901abcdef123457",
    invoiceNumber: "INV-2025-002",
    client: {
      name: "XYZ Industries Ltd",
      gstin: "29QRSTU3456V7W5",
      address: "789 Business Park, Pune, Maharashtra",
      phone: "+919876543221"
    },
    items: [
      {
        description: "GST Compliance Services",
        quantity: 12,
        rate: 3000,
        taxRate: 18,
        amount: 36000
      },
      {
        description: "Return Filing",
        quantity: 3,
        rate: 1500,
        taxRate: 18,
        amount: 4500
      }
    ],
    subtotal: 40500,
    taxAmount: 7290,
    total: 47790,
    dueDate: new Date("2025-12-20"),
    status: "pending",
    createdBy: "6501234567890abcdef123457",
    createdAt: new Date("2025-11-10")
  }
];

const demoClients = [
  {
    _id: "6503456789012abcdef123456",
    name: "ABC Corporation",
    email: "contact@abccorp.com",
    phone: "+919876543220",
    gstin: "27XYZAB1234C1Z5",
    address: "456 Industrial Area, Mumbai, Maharashtra",
    contactPerson: "Rajesh Kumar",
    industry: "Manufacturing",
    status: "active",
    createdBy: "6501234567890abcdef123456",
    createdAt: new Date("2024-01-20"),
    lastInvoiceDate: new Date("2025-11-01"),
    totalInvoiced: 88500,
    payments: 88500,
    outstanding: 0
  },
  {
    _id: "6503456789012abcdef123457",
    name: "XYZ Industries Ltd",
    email: "info@xyzind.com",
    phone: "+919876543221",
    gstin: "29QRSTU3456V7W5",
    address: "789 Business Park, Pune, Maharashtra",
    contactPerson: "Sneha Sharma",
    industry: "Technology",
    status: "active",
    createdBy: "6501234567890abcdef123457",
    createdAt: new Date("2024-02-15"),
    lastInvoiceDate: new Date("2025-11-10"),
    totalInvoiced: 47790,
    payments: 0,
    outstanding: 47790
  },
  {
    _id: "6503456789012abcdef123458",
    name: "Global Solutions Inc",
    email: "billing@globalsolutions.com",
    phone: "+919876543222",
    gstin: "07ABCDE7890F1G5",
    address: "321 Corporate Tower, Bangalore, Karnataka",
    contactPerson: "Vikram Reddy",
    industry: "Consulting",
    status: "active",
    createdBy: "6501234567890abcdef123458",
    createdAt: new Date("2024-03-10"),
    lastInvoiceDate: new Date("2025-10-25"),
    totalInvoiced: 120000,
    payments: 120000,
    outstanding: 0
  }
];

const demoGSTRReturns = [
  {
    _id: "6504567890123abcdef123456",
    returnType: "GSTR-1",
    period: "2025-10",
    filedDate: new Date("2025-11-05"),
    status: "filed",
    outwardSupplies: [
      {
        gstin: "27XYZAB1234C1Z5",
        invoiceValue: 88500,
        taxAmount: 13500,
        placeOfSupply: "27"
      }
    ],
    totalInvoiceValue: 88500,
    totalTaxAmount: 13500,
    createdBy: "6501234567890abcdef123456",
    createdAt: new Date("2025-11-01"),
    fileReferenceNumber: "FRN20251105123456"
  },
  {
    _id: "6504567890123abcdef123457",
    returnType: "GSTR-3B",
    period: "2025-10",
    filedDate: new Date("2025-11-10"),
    status: "filed",
    outwardSupplies: 13500,
    inputTaxCredit: 8000,
    netTaxLiability: 5500,
    createdBy: "6501234567890abcdef123456",
    createdAt: new Date("2025-11-08"),
    fileReferenceNumber: "FRN20251110123457"
  }
];

const demoEwayBills = [
  {
    _id: "6505678901234abcdef123456",
    ewayBillNumber: "123456789012",
    ewayBillDate: new Date("2025-11-14"),
    validUpto: new Date("2025-11-21"),
    supplier: {
      gstin: "27ABCDE1234F1Z5",
      name: "Sharma Enterprises Pvt Ltd",
      address: "123 Business Plaza, Mumbai, Maharashtra"
    },
    recipient: {
      gstin: "29QRSTU3456V7W5",
      name: "XYZ Industries Ltd",
      address: "789 Business Park, Pune, Maharashtra"
    },
    vehicleNumber: "MH 01 AB 1234",
    totalValue: 47790,
    taxAmount: 7290,
    status: "active",
    distance: 150,
    mode: "road",
    createdBy: "6501234567890abcdef123456",
    createdAt: new Date("2025-11-14")
  }
];

const demoDashboardStats = {
  totalClients: 3,
  totalInvoices: 2,
  totalRevenue: 136290,
  outstandingAmount: 47790,
  monthlyStats: {
    "2025-11": {
      invoices: 2,
      revenue: 136290,
      ewayBills: 1
    },
    "2025-10": {
      invoices: 3,
      revenue: 245000,
      ewayBills: 2
    },
    "2025-09": {
      invoices: 2,
      revenue: 180000,
      ewayBills: 1
    }
  },
  gstCompliance: {
    returnsFiled: 2,
    pendingReturns: 0,
    nextDueDate: new Date("2025-12-15")
  }
};

// Export all demo data
module.exports = {
  demoUsers,
  demoInvoices,
  demoClients,
  demoGSTRReturns,
  demoEwayBills,
  demoDashboardStats
};

// Function to add demo data to database
function addDemoData(db) {
  const User = db.model('User');
  const Invoice = db.model('Invoice');
  const Client = db.model('Client');
  const GSTRReturn = db.model('GSTRReturn');
  const EwayBill = db.model('EwayBill');

  return {
    addUsers: async () => {
      await User.insertMany(demoUsers);
      console.log('Demo users added successfully');
    },
    addInvoices: async () => {
      await Invoice.insertMany(demoInvoices);
      console.log('Demo invoices added successfully');
    },
    addClients: async () => {
      await Client.insertMany(demoClients);
      console.log('Demo clients added successfully');
    },
    addGSTRReturns: async () => {
      await GSTRReturn.insertMany(demoGSTRReturns);
      console.log('Demo GSTR returns added successfully');
    },
    addEwayBills: async () => {
      await EwayBill.insertMany(demoEwayBills);
      console.log('Demo e-way bills added successfully');
    },
    addAll: async () => {
      await Promise.all([
        User.insertMany(demoUsers),
        Client.insertMany(demoClients),
        Invoice.insertMany(demoInvoices),
        GSTRReturn.insertMany(demoGSTRReturns),
        EwayBill.insertMany(demoEwayBills)
      ]);
      console.log('All demo data added successfully');
    }
  };
}

module.exports.addDemoData = addDemoData;