
# LiaPlus Chat App Assignment

## Overview
The LiaPlus Chat App Assignment is a full-stack web application designed to demonstrate real-time chat functionality. The project includes both frontend and backend components, allowing users to communicate seamlessly in real-time.

## Features
- Real-time messaging.
- Seamless frontend-backend integration.
- Easy setup and deployment.

## Prerequisites
- Node.js (version 16 or higher recommended)
- npm (Node Package Manager)
- Git

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/SaurabhKumar171/liaplus-chat-app-assignment.git
cd liaplus-chat-app-assignment
```

### 2. Install Dependencies
Run the following command in the root directory:
```bash
npm install
```

### 3. Configure Environment Variables
1. Create a `.env` file in the root directory by copying the content of `env_example`:
```bash
cp env_example .env
```
2. Paste the content from `env_example` into the newly created `.env` file.

### 4. Set Up the Server
1. Navigate to the server directory:
```bash
cd server
```
2. Install server dependencies:
```bash
npm install
```
3. Create a `.env` file in the `server` directory by copying the content of `env_example`:
```bash
cp env_example .env
```
4. Paste the content from `env_example` into the newly created `.env` file.
5. Navigate back to the root directory:
```bash
cd ..
```

### 5. Start the Application
Run the following command to start both the frontend and backend servers:
```bash
npm run dev
```
This command will automatically start both the frontend and backend services.

## Project Structure
- **React-chat-app**: React-based UI for users to interact with the application.
- **server**: Node.js server that handles API requests and real-time messaging.

## Scripts
- `npm run dev`: Starts both the frontend and backend servers in development mode.
- `npm install`: Installs all required dependencies.

## Technologies Used
- **Frontend**: React, TailwindCSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, PostgreSQL

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For any inquiries or support, please contact:
- **Author**: Saurabh Kumar
- **GitHub**: [SaurabhKumar171](https://github.com/SaurabhKumar171)
