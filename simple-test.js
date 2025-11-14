#!/usr/bin/env node

/**
 * Simple API Connectivity Test for RelaxGST.ai Platform
 */

const http = require('http');

const API_BASE = 'http://localhost:5000';

async function testAPI() {
    console.log('🧪 Testing RelaxGST.ai API Connectivity...\n');

    // Test basic connectivity
    const tests = [
        { name: 'Health Check', path: '/api/health' },
        { name: 'Dashboard Stats', path: '/api/dashboard/stats' },
        { name: 'Clients List', path: '/api/clients' },
        { name: 'Invoices List', path: '/api/invoices' },
        { name: 'GST Returns', path: '/api/gst/returns' },
        { name: 'E-way Bills', path: '/api/ewaybills' }
    ];

    let passed = 0;
    let failed = 0;

    for (const test of tests) {
        try {
            const response = await makeRequest(test.path);
            if (response.statusCode === 200 && response.data.success) {
                console.log(`✅ ${test.name}: SUCCESS`);
                passed++;
            } else {
                console.log(`❌ ${test.name}: FAILED (${response.statusCode})`);
                failed++;
            }
        } catch (error) {
            console.log(`💥 ${test.name}: ERROR - ${error.message}`);
            failed++;
        }
    }

    console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);
    console.log(passed > failed ? '✅ Platform is operational!' : '❌ Platform needs attention');
}

function makeRequest(path) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 5000,
            path: path,
            method: 'GET',
            timeout: 5000
        };

        const req = http.request(options, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);
                    resolve({ statusCode: res.statusCode, data: parsedData });
                } catch (error) {
                    reject(new Error('Invalid JSON response'));
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.on('timeout', () => {
            req.destroy();
            reject(new Error('Request timeout'));
        });

        req.end();
    });
}

// Run the test
testAPI().catch(console.error);