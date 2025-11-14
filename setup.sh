#!/bin/bash

# RelaxGST.ai Platform Setup Script
# This script helps set up the complete RelaxGST.ai platform

echo "🚀 RelaxGST.ai Platform Setup Script"
echo "=================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

# Check if Node.js is installed
check_node() {
    if command -v node &> /dev/null; then
        NODE_VERSION=$(node --version)
        print_status "Node.js is installed: $NODE_VERSION"
    else
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
}

# Check if MongoDB is running
check_mongodb() {
    if command -v mongod &> /dev/null; then
        print_status "MongoDB is installed"
        print_warning "Make sure MongoDB is running on port 27017"
    else
        print_warning "MongoDB not found. You can use MongoDB Atlas (cloud) instead."
    fi
}

# Setup backend
setup_backend() {
    print_step "Setting up Backend..."
    cd relaxgst-backend
    
    # Create logs directory
    mkdir -p logs
    
    # Install dependencies
    print_status "Installing backend dependencies..."
    if npm install --silent; then
        print_status "Backend dependencies installed successfully"
    else
        print_warning "Some dependencies failed to install. Check the output above."
    fi
    
    # Check environment file
    if [ ! -s .env ]; then
        print_warning "Environment file is empty or missing. Please configure .env file"
        print_status "Example environment variables:"
        echo "  MONGODB_URI=mongodb://localhost:27017/relaxgst"
        echo "  JWT_SECRET=your-secret-key"
        echo "  PORT=5000"
    fi
    
    cd ..
}

# Setup frontend
setup_frontend() {
    print_step "Setting up Frontend..."
    cd relaxgst-frontend
    
    # Install dependencies
    print_status "Installing frontend dependencies..."
    if npm install --silent; then
        print_status "Frontend dependencies installed successfully"
    else
        print_warning "Some dependencies failed to install. Check the output above."
    fi
    
    # Check environment file
    if [ ! -s .env ]; then
        print_warning "Frontend environment file needs configuration"
        print_status "Set REACT_APP_API_URL=http://localhost:5000/api"
    fi
    
    cd ..
}

# Setup mobile
setup_mobile() {
    print_step "Setting up Mobile App..."
    cd relaxgst-mobile
    
    # Install dependencies
    print_status "Installing mobile dependencies..."
    if npm install --silent; then
        print_status "Mobile dependencies installed successfully"
    else
        print_warning "Some dependencies failed to install. Check the output above."
    fi
    
    # Check environment file
    if [ ! -s .env ]; then
        print_warning "Mobile environment file needs configuration"
        print_status "Set API_BASE_URL=http://your-api-url/api"
    fi
    
    cd ..
}

# Test backend server
test_backend() {
    print_step "Testing Backend Server..."
    cd relaxgst-backend
    
    if [ -f "node_modules/.bin/nodemon" ]; then
        print_status "Starting backend server in test mode..."
        timeout 10s npm run dev &
        sleep 3
        
        if curl -s http://localhost:5000/health > /dev/null; then
            print_status "✅ Backend server is running and responding!"
        else
            print_warning "⚠️  Backend server may not be running. Check configuration."
        fi
    else
        print_warning "Backend dependencies not fully installed"
    fi
    
    cd ..
}

# Generate API documentation
generate_docs() {
    print_step "Generating API Documentation..."
    
    if [ -f "relaxgst-backend/docs/api-docs.md" ]; then
        print_status "API documentation exists at relaxgst-backend/docs/api-docs.md"
    else
        print_warning "API documentation not found. Consider adding API docs."
    fi
}

# Main setup flow
main() {
    print_status "Starting RelaxGST.ai Platform Setup..."
    
    # Pre-flight checks
    check_node
    check_mongodb
    
    # Setup each component
    setup_backend
    setup_frontend
    setup_mobile
    
    # Test and finalize
    generate_docs
    test_backend
    
    echo ""
    print_status "Setup Complete! 🎉"
    echo ""
    print_status "Next Steps:"
    echo "1. Configure environment variables in each .env file"
    echo "2. Start MongoDB (if using local instance)"
    echo "3. Start the backend: cd relaxgst-backend && npm run dev"
    echo "4. Start the frontend: cd relaxgst-frontend && npm start"
    echo "5. Setup mobile development environment and run React Native app"
    echo ""
    print_status "API Endpoints will be available at: http://localhost:5000/api"
    print_status "Frontend will be available at: http://localhost:3000"
    echo ""
}

# Run the setup
main "$@"