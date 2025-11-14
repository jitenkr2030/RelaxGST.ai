// Mock Server for RelaxGST.ai Demo
// This server provides demo data without requiring full npm dependencies

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const demoData = require('./demo-data');

class MockServer {
  constructor(port = 5000) {
    this.port = port;
    this.clients = [...demoData.demoClients];
    this.invoices = [...demoData.demoInvoices];
    this.returns = [...demoData.demoGSTRReturns];
    this.ewayBills = [...demoData.demoEwayBills];
    this.users = [...demoData.demoUsers];
  }

  start() {
    const server = http.createServer((req, res) => {
      this.handleRequest(req, res);
    });

    server.listen(this.port, () => {
      console.log(`🎯 RelaxGST.ai Mock Server running on port ${this.port}`);
      console.log('📊 Demo data loaded and ready for testing');
      console.log('🔗 API Base URL: http://localhost:5000');
    });

    return server;
  }

  handleRequest(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;

    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }

    // Parse request body for POST/PUT requests
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const requestData = body ? JSON.parse(body) : {};
        this.routeRequest(req, res, pathname, method, requestData);
      } catch (error) {
        this.sendError(res, 400, 'Invalid JSON in request body');
      }
    });
  }

  routeRequest(req, res, pathname, method, requestData) {
    console.log(`${method} ${pathname}`);

    // Authentication endpoints
    if (pathname === '/api/auth/register' && method === 'POST') {
      this.handleRegister(req, res, requestData);
    }
    else if (pathname === '/api/auth/login' && method === 'POST') {
      this.handleLogin(req, res, requestData);
    }
    
    // User endpoints
    else if (pathname === '/api/users/profile' && method === 'GET') {
      this.handleGetUserProfile(req, res);
    }
    else if (pathname === '/api/users/profile' && method === 'PUT') {
      this.handleUpdateUserProfile(req, res, requestData);
    }
    
    // Client endpoints
    else if (pathname === '/api/clients' && method === 'GET') {
      this.handleGetClients(req, res);
    }
    else if (pathname === '/api/clients' && method === 'POST') {
      this.handleCreateClient(req, res, requestData);
    }
    else if (pathname.startsWith('/api/clients/') && method === 'GET') {
      this.handleGetClient(req, res, pathname);
    }
    else if (pathname.startsWith('/api/clients/') && method === 'PUT') {
      this.handleUpdateClient(req, res, pathname, requestData);
    }
    else if (pathname.startsWith('/api/clients/') && method === 'DELETE') {
      this.handleDeleteClient(req, res, pathname);
    }
    
    // Invoice endpoints
    else if (pathname === '/api/invoices' && method === 'GET') {
      this.handleGetInvoices(req, res);
    }
    else if (pathname === '/api/invoices' && method === 'POST') {
      this.handleCreateInvoice(req, res, requestData);
    }
    else if (pathname.startsWith('/api/invoices/') && method === 'GET') {
      this.handleGetInvoice(req, res, pathname);
    }
    else if (pathname.startsWith('/api/invoices/') && method === 'PUT') {
      this.handleUpdateInvoice(req, res, pathname, requestData);
    }
    else if (pathname.startsWith('/api/invoices/') && method === 'DELETE') {
      this.handleDeleteInvoice(req, res, pathname);
    }
    
    // GSTR Returns endpoints
    else if (pathname === '/api/gst/returns' && method === 'GET') {
      this.handleGetGSTRReturns(req, res);
    }
    else if (pathname === '/api/gst/returns' && method === 'POST') {
      this.handleCreateGSTRReturn(req, res, requestData);
    }
    
    // E-way Bills endpoints
    else if (pathname === '/api/ewaybills' && method === 'GET') {
      this.handleGetEwayBills(req, res);
    }
    else if (pathname === '/api/ewaybills' && method === 'POST') {
      this.handleCreateEwayBill(req, res, requestData);
    }
    
    // Dashboard endpoint
    else if (pathname === '/api/dashboard/stats' && method === 'GET') {
      this.handleGetDashboardStats(req, res);
    }
    
    // Health check
    else if (pathname === '/api/health' && method === 'GET') {
      this.sendSuccess(res, { status: 'healthy', timestamp: new Date() });
    }
    
    // 404 for unknown routes
    else {
      this.sendError(res, 404, 'API endpoint not found');
    }
  }

  // Authentication handlers
  handleLogin(req, res, data) {
    const { email, password } = data;
    const user = this.users.find(u => u.email === email);
    
    if (user) {
      const mockToken = `mock-jwt-token-${Date.now()}`;
      this.sendSuccess(res, {
        token: mockToken,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
    } else {
      this.sendError(res, 401, 'Invalid credentials');
    }
  }

  handleRegister(req, res, data) {
    const newUser = {
      _id: Date.now().toString(),
      ...data,
      createdAt: new Date(),
      role: 'user'
    };
    this.users.push(newUser);
    this.sendSuccess(res, newUser, 201);
  }

  // User handlers
  handleGetUserProfile(req, res) {
    const user = this.users[0]; // Return first user as demo
    this.sendSuccess(res, user);
  }

  handleUpdateUserProfile(req, res, data) {
    const user = this.users[0];
    Object.assign(user, data, { updatedAt: new Date() });
    this.sendSuccess(res, user);
  }

  // Client handlers
  handleGetClients(req, res) {
    this.sendSuccess(res, this.clients);
  }

  handleCreateClient(req, res, data) {
    const newClient = {
      _id: Date.now().toString(),
      ...data,
      createdAt: new Date(),
      status: 'active'
    };
    this.clients.push(newClient);
    this.sendSuccess(res, newClient, 201);
  }

  handleGetClient(req, res, pathname) {
    const id = pathname.split('/')[3];
    const client = this.clients.find(c => c._id === id);
    if (client) {
      this.sendSuccess(res, client);
    } else {
      this.sendError(res, 404, 'Client not found');
    }
  }

  handleUpdateClient(req, res, pathname, data) {
    const id = pathname.split('/')[3];
    const clientIndex = this.clients.findIndex(c => c._id === id);
    if (clientIndex !== -1) {
      this.clients[clientIndex] = { ...this.clients[clientIndex], ...data, updatedAt: new Date() };
      this.sendSuccess(res, this.clients[clientIndex]);
    } else {
      this.sendError(res, 404, 'Client not found');
    }
  }

  handleDeleteClient(req, res, pathname) {
    const id = pathname.split('/')[3];
    const clientIndex = this.clients.findIndex(c => c._id === id);
    if (clientIndex !== -1) {
      this.clients.splice(clientIndex, 1);
      this.sendSuccess(res, { message: 'Client deleted successfully' });
    } else {
      this.sendError(res, 404, 'Client not found');
    }
  }

  // Invoice handlers
  handleGetInvoices(req, res) {
    this.sendSuccess(res, this.invoices);
  }

  handleCreateInvoice(req, res, data) {
    const newInvoice = {
      _id: Date.now().toString(),
      invoiceNumber: `INV-${new Date().getFullYear()}-${String(this.invoices.length + 1).padStart(3, '0')}`,
      ...data,
      createdAt: new Date(),
      status: 'draft'
    };
    this.invoices.push(newInvoice);
    this.sendSuccess(res, newInvoice, 201);
  }

  handleGetInvoice(req, res, pathname) {
    const id = pathname.split('/')[3];
    const invoice = this.invoices.find(i => i._id === id);
    if (invoice) {
      this.sendSuccess(res, invoice);
    } else {
      this.sendError(res, 404, 'Invoice not found');
    }
  }

  handleUpdateInvoice(req, res, pathname, data) {
    const id = pathname.split('/')[3];
    const invoiceIndex = this.invoices.findIndex(i => i._id === id);
    if (invoiceIndex !== -1) {
      this.invoices[invoiceIndex] = { ...this.invoices[invoiceIndex], ...data, updatedAt: new Date() };
      this.sendSuccess(res, this.invoices[invoiceIndex]);
    } else {
      this.sendError(res, 404, 'Invoice not found');
    }
  }

  handleDeleteInvoice(req, res, pathname) {
    const id = pathname.split('/')[3];
    const invoiceIndex = this.invoices.findIndex(i => i._id === id);
    if (invoiceIndex !== -1) {
      this.invoices.splice(invoiceIndex, 1);
      this.sendSuccess(res, { message: 'Invoice deleted successfully' });
    } else {
      this.sendError(res, 404, 'Invoice not found');
    }
  }

  // GSTR Return handlers
  handleGetGSTRReturns(req, res) {
    this.sendSuccess(res, this.returns);
  }

  handleCreateGSTRReturn(req, res, data) {
    const newReturn = {
      _id: Date.now().toString(),
      returnType: 'GSTR-1',
      status: 'draft',
      ...data,
      createdAt: new Date()
    };
    this.returns.push(newReturn);
    this.sendSuccess(res, newReturn, 201);
  }

  // E-way Bill handlers
  handleGetEwayBills(req, res) {
    this.sendSuccess(res, this.ewayBills);
  }

  handleCreateEwayBill(req, res, data) {
    const newEwayBill = {
      _id: Date.now().toString(),
      ewayBillNumber: String(Math.floor(Math.random() * 1000000000000)).padStart(12, '0'),
      status: 'active',
      ...data,
      createdAt: new Date()
    };
    this.ewayBills.push(newEwayBill);
    this.sendSuccess(res, newEwayBill, 201);
  }

  // Dashboard handler
  handleGetDashboardStats(req, res) {
    this.sendSuccess(res, demoData.demoDashboardStats);
  }

  // Utility methods
  sendSuccess(res, data, statusCode = 200) {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true, data }));
  }

  sendError(res, statusCode, message) {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: false, error: message }));
  }
}

// Start the server if this file is run directly
if (require.main === module) {
  const server = new MockServer(5000);
  server.start();
}

module.exports = MockServer;