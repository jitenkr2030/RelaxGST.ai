#!/usr/bin/env node

/**
 * RelaxGST.ai Integration Test Script
 * Tests backend API endpoints to verify integration
 */

const axios = require('axios');

class IntegrationTester {
  constructor(baseURL = 'http://localhost:5000') {
    this.baseURL = baseURL;
    this.results = {
      passed: 0,
      failed: 0,
      tests: []
    };
  }

  async testEndpoint(name, method, endpoint, data = null, expectedStatus = 200) {
    try {
      console.log(`\n🧪 Testing: ${name}`);
      
      const config = {
        method,
        url: `${this.baseURL}${endpoint}`,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      if (data) {
        config.data = data;
      }

      const response = await axios(config);
      
      if (response.status === expectedStatus) {
        console.log(`✅ PASSED: ${name}`);
        this.results.passed++;
        this.results.tests.push({ name, status: 'PASSED', response: response.data });
      } else {
        throw new Error(`Expected status ${expectedStatus}, got ${response.status}`);
      }
    } catch (error) {
      console.log(`❌ FAILED: ${name} - ${error.message}`);
      this.results.failed++;
      this.results.tests.push({ 
        name, 
        status: 'FAILED', 
        error: error.message 
      });
    }
  }

  async runTests() {
    console.log('🚀 Starting RelaxGST.ai Integration Tests\n');
    console.log('=' .repeat(50));

    // Test 1: Health Check
    await this.testEndpoint(
      'Health Check',
      'GET',
      '/health',
      null,
      200
    );

    // Test 2: Authentication Endpoints (should work without auth)
    await this.testEndpoint(
      'Registration Endpoint',
      'POST',
      '/api/auth/register',
      {
        name: 'Test User',
        email: 'test@example.com',
        password: 'testpassword123'
      },
      201
    );

    // Test 3: Login Endpoint
    await this.testEndpoint(
      'Login Endpoint', 
      'POST',
      '/api/auth/login',
      {
        email: 'test@example.com',
        password: 'testpassword123'
      },
      200
    );

    // Test 4: 404 Handler
    await this.testEndpoint(
      '404 Handler',
      'GET',
      '/api/non-existent-endpoint',
      null,
      404
    );

    this.printResults();
  }

  printResults() {
    console.log('\n' + '='.repeat(50));
    console.log('📊 TEST RESULTS SUMMARY');
    console.log('='.repeat(50));
    
    console.log(`✅ Passed: ${this.results.passed}`);
    console.log(`❌ Failed: ${this.results.failed}`);
    console.log(`📈 Success Rate: ${((this.results.passed / (this.results.passed + this.results.failed)) * 100).toFixed(1)}%`);
    
    console.log('\n📋 DETAILED RESULTS:');
    console.log('-'.repeat(30));
    
    this.results.tests.forEach((test, index) => {
      const status = test.status === 'PASSED' ? '✅' : '❌';
      console.log(`${index + 1}. ${status} ${test.name}`);
      
      if (test.status === 'FAILED') {
        console.log(`   Error: ${test.error}`);
      }
    });

    console.log('\n🎯 INTEGRATION ASSESSMENT:');
    if (this.results.failed === 0) {
      console.log('🟢 EXCELLENT: All tests passed - Platform is ready for integration!');
    } else if (this.results.failed <= 2) {
      console.log('🟡 GOOD: Most tests passed - Minor configuration needed');
    } else {
      console.log('🔴 NEEDS WORK: Multiple failures - Backend setup required');
    }

    console.log('\n💡 NEXT STEPS:');
    console.log('1. If tests failed, ensure backend server is running');
    console.log('2. Check MongoDB connection and environment variables');
    console.log('3. Verify all dependencies are installed');
    console.log('4. Review .env configuration files');
  }
}

// CLI Usage
async function main() {
  const args = process.argv.slice(2);
  const baseURL = args[0] || 'http://localhost:5000';
  
  const tester = new IntegrationTester(baseURL);
  
  try {
    await tester.runTests();
  } catch (error) {
    console.error('❌ Test suite failed:', error.message);
    console.log('\n🔧 TROUBLESHOOTING:');
    console.log('1. Make sure backend server is running on', baseURL);
    console.log('2. Check if MongoDB is connected');
    console.log('3. Verify environment variables are set');
    console.log('4. Ensure all npm dependencies are installed');
    process.exit(1);
  }
}

// Export for programmatic use
module.exports = IntegrationTester;

// Run if called directly
if (require.main === module) {
  main();
}

/* 
USAGE EXAMPLES:

1. Run with default URL:
   node test-integration.js

2. Run with custom URL:
   node test-integration.js http://localhost:3000

3. Use programmatically:
   const IntegrationTester = require('./test-integration');
   const tester = new IntegrationTester('http://localhost:5000');
   await tester.runTests();
*/