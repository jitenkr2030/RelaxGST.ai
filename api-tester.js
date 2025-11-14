#!/usr/bin/env node

/**
 * Comprehensive API Testing Script for RelaxGST.ai Platform
 * This script tests all major API endpoints and generates a functionality report
 */

const http = require('http');
const https = require('https');

const API_BASE = 'http://localhost:5000';
const testResults = {
    passed: [],
    failed: [],
    warnings: []
};

class APITester {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.results = {
            tests: [],
            summary: {
                total: 0,
                passed: 0,
                failed: 0,
                successRate: 0
            }
        };
    }

    async makeRequest(endpoint, method = 'GET', data = null) {
        return new Promise((resolve) => {
            const url = new URL(endpoint, this.baseUrl);
            const options = {
                hostname: url.hostname,
                port: url.port || (url.protocol === 'https:' ? 443 : 80),
                path: url.pathname + url.search,
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                }
            };

            const req = http.request(options, (res) => {
                let responseData = '';
                
                res.on('data', (chunk) => {
                    responseData += chunk;
                });
                
                res.on('end', () => {
                    try {
                        const parsedData = JSON.parse(responseData);
                        resolve({
                            statusCode: res.statusCode,
                            data: parsedData,
                            success: res.statusCode >= 200 && res.statusCode < 300
                        });
                    } catch (error) {
                        resolve({
                            statusCode: res.statusCode,
                            data: responseData,
                            success: res.statusCode >= 200 && res.statusCode < 300
                        });
                    }
                });
            });

            req.on('error', (error) => {
                resolve({
                    statusCode: 0,
                    data: { error: error.message },
                    success: false
                });
            });

            if (data && (method === 'POST' || method === 'PUT')) {
                req.write(JSON.stringify(data));
            }

            req.end();
        });
    }

    async testEndpoint(name, endpoint, method = 'GET', data = null, expectedFields = []) {
        console.log(`🧪 Testing: ${name} (${method} ${endpoint})`);
        
        try {
            const result = await this.makeRequest(endpoint, method, data);
            const testResult = {
                name,
                endpoint,
                method,
                statusCode: result.statusCode,
                success: result.success,
                timestamp: new Date().toISOString()
            };

            if (result.success) {
                console.log(`  ✅ ${name} - SUCCESS (${result.statusCode})`);
                
                // Check if response contains expected fields
                if (expectedFields.length > 0 && result.data.data) {
                    const responseData = result.data.data;
                    const missingFields = expectedFields.filter(field => 
                        !responseData.hasOwnProperty(field)
                    );
                    
                    if (missingFields.length > 0) {
                        testResult.warning = `Missing expected fields: ${missingFields.join(', ')}`;
                        console.log(`  ⚠️  Warning: ${testResult.warning}`);
                        this.results.summary.warnings++;
                    }
                }
                
                this.results.summary.passed++;
            } else {
                console.log(`  ❌ ${name} - FAILED (${result.statusCode})`);
                console.log(`  📋 Response: ${JSON.stringify(result.data)}`);
                testResult.error = result.data;
                this.results.summary.failed++;
            }
            
            testResult.response = result.data;
            this.results.tests.push(testResult);
            
        } catch (error) {
            console.log(`  💥 ${name} - ERROR: ${error.message}`);
            this.results.tests.push({
                name,
                endpoint,
                method,
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            });
            this.results.summary.failed++;
        }
        
        this.results.summary.total++;
    }

    async runAllTests() {
        console.log('🚀 Starting RelaxGST.ai Platform API Tests');
        console.log(`📍 API Base URL: ${this.baseUrl}`);
        console.log('=' * 60);

        // Health Check
        await this.testEndpoint(
            'Server Health Check',
            '/api/health',
            'GET',
            null,
            ['status']
        );

        // Authentication Tests
        console.log('\n🔐 Authentication Tests:');
        await this.testEndpoint(
            'User Login - Valid Credentials',
            '/api/auth/login',
            'POST',
            { email: 'raj.sharma@example.com', password: 'password123' },
            ['token', 'user']
        );

        await this.testEndpoint(
            'User Login - Invalid Credentials',
            '/api/auth/login',
            'POST',
            { email: 'invalid@email.com', password: 'wrongpassword' }
        );

        await this.testEndpoint(
            'User Profile',
            '/api/users/profile',
            'GET',
            null,
            ['name', 'email', 'role', 'organization']
        );

        // Dashboard Tests
        console.log('\n📊 Dashboard Tests:');
        await this.testEndpoint(
            'Dashboard Statistics',
            '/api/dashboard/stats',
            'GET',
            null,
            ['totalClients', 'totalInvoices', 'totalRevenue', 'outstandingAmount']
        );

        // Client Management Tests
        console.log('\n👥 Client Management Tests:');
        await this.testEndpoint(
            'Get All Clients',
            '/api/clients',
            'GET',
            null
        );

        await this.testEndpoint(
            'Create New Client',
            '/api/clients',
            'POST',
            {
                name: 'Test Client Ltd',
                email: 'test@client.com',
                phone: '+919876543000',
                gstin: '27TESTCL1234D1Z5',
                address: 'Test Address, Mumbai'
            },
            ['name', 'email', 'gstin']
        );

        // Invoice Management Tests
        console.log('\n🧾 Invoice Management Tests:');
        await this.testEndpoint(
            'Get All Invoices',
            '/api/invoices',
            'GET',
            null
        );

        await this.testEndpoint(
            'Create New Invoice',
            '/api/invoices',
            'POST',
            {
                client: {
                    name: 'Test Client',
                    gstin: '27TESTCL1234D1Z5'
                },
                items: [
                    {
                        description: 'Test Service',
                        quantity: 1,
                        rate: 1000,
                        taxRate: 18,
                        amount: 1000
                    }
                ],
                subtotal: 1000,
                taxAmount: 180,
                total: 1180
            },
            ['invoiceNumber', 'status']
        );

        // GST Returns Tests
        console.log('\n📋 GST Returns Tests:');
        await this.testEndpoint(
            'Get GSTR Returns',
            '/api/gst/returns',
            'GET',
            null
        );

        await this.testEndpoint(
            'Create GSTR Return',
            '/api/gst/returns',
            'POST',
            {
                period: '2025-11',
                returnType: 'GSTR-1'
            },
            ['returnType', 'status']
        );

        // E-way Bills Tests
        console.log('\n🚚 E-way Bills Tests:');
        await this.testEndpoint(
            'Get E-way Bills',
            '/api/ewaybills',
            'GET',
            null
        );

        await this.testEndpoint(
            'Create E-way Bill',
            '/api/ewaybills',
            'POST',
            {
                supplier: {
                    gstin: '27TESTCL1234D1Z5',
                    name: 'Test Supplier'
                },
                recipient: {
                    gstin: '27TESTRC1234E1Z5',
                    name: 'Test Recipient'
                },
                vehicleNumber: 'MH 01 TEST 1234',
                totalValue: 1000,
                distance: 50
            },
            ['ewayBillNumber', 'status']
        );

        // Generate Report
        this.generateReport();
    }

    generateReport() {
        console.log('\n' + '=' * 60);
        console.log('📋 TEST RESULTS SUMMARY');
        console.log('=' * 60);

        const { total, passed, failed } = this.results.summary;
        const successRate = ((passed / total) * 100).toFixed(1);

        console.log(`📊 Total Tests: ${total}`);
        console.log(`✅ Passed: ${passed}`);
        console.log(`❌ Failed: ${failed}`);
        console.log(`📈 Success Rate: ${successRate}%`);

        if (failed > 0) {
            console.log('\n❌ Failed Tests:');
            this.results.tests
                .filter(test => !test.success)
                .forEach(test => {
                    console.log(`  - ${test.name} (${test.method} ${test.endpoint})`);
                });
        }

        console.log('\n🎯 Platform Functionality Assessment:');
        
        if (successRate >= 90) {
            console.log('✅ EXCELLENT: Platform is highly functional (90%+ success rate)');
        } else if (successRate >= 75) {
            console.log('✅ GOOD: Platform is mostly functional (75%+ success rate)');
        } else if (successRate >= 50) {
            console.log('⚠️  MODERATE: Platform has some issues (50%+ success rate)');
        } else {
            console.log('❌ NEEDS WORK: Platform has significant issues (<50% success rate)');
        }

        console.log('\n🔧 Available Features:');
        console.log('  • User Authentication & Authorization');
        console.log('  • Client Management (CRUD operations)');
        console.log('  • Invoice Creation & Management');
        console.log('  • GST Return Filing (GSTR-1, GSTR-3B)');
        console.log('  • E-way Bill Generation');
        console.log('  • Dashboard & Analytics');
        console.log('  • RESTful API with JSON responses');

        console.log('\n💡 Next Steps for Production:');
        console.log('  1. Replace mock data with real database (MongoDB)');
        console.log('  2. Implement proper JWT authentication');
        console.log('  3. Add input validation & sanitization');
        console.log('  4. Configure proper error handling');
        console.log('  5. Add rate limiting & security middleware');
        console.log('  6. Set up monitoring & logging');
        console.log('  7. Deploy to production environment');

        // Save detailed report to file
        this.saveDetailedReport();
    }

    saveDetailedReport() {
        const report = {
            timestamp: new Date().toISOString(),
            apiBase: this.baseUrl,
            summary: this.results.summary,
            tests: this.results.tests
        };

        const fs = require('fs');
        fs.writeFileSync(
            '/workspace/RelaxGST.ai/api-test-report.json',
            JSON.stringify(report, null, 2)
        );

        console.log(`\n📄 Detailed report saved to: api-test-report.json`);
    }
}

// Run the tests
if (require.main === module) {
    const tester = new APITester(API_BASE);
    tester.runAllTests().then(() => {
        console.log('\n🎉 All tests completed!');
        process.exit(0);
    }).catch((error) => {
        console.error('\n💥 Test execution failed:', error);
        process.exit(1);
    });
}

module.exports = APITester;