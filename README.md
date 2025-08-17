Blog API
📖 Project Description

The Blog API is a Node.js and Express-based backend application that provides authentication and user management features. It is built with MongoDB for data storage and JWT (JSON Web Tokens) for authentication. This project can be extended into a full blogging platform with features like creating, reading, updating, and deleting blog posts.

🚀 Features

User registration

User login with JWT authentication

Secure password storage using bcrypt

Environment variables for configuration

🛠️ Technologies Used

Node.js

Express.js

MongoDB (Mongoose)

JWT (jsonwebtoken)

dotenv

bcryptjs

📂 Project Structure
blogpost-api/
│
├── src/
│   ├── config/
│   │   └── db.js          # Database connection
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.routes.js
│   ├── server.js          # Main entry point
│   └── app.js             # Express app setup
│
├── .env                   # Environment variables
├── package.json
└── README.md

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/blogpost-api.git
cd blogpost-api


Install dependencies:

npm install


Create a .env file in the root directory:

PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/blogpost-api
JWT_SECRET=superlongrandomsecretchangeme
JWT_EXPIRES_IN=7d


Run the server:

npm start

📌 API Endpoints
Authentication

POST /api/auth/register → Register a new user

POST /api/auth/login → Login and get JWT

Example request (Register):

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "mypassword"
}


Example request (Login):

{
  "email": "john@example.com",
  "password": "mypassword"
}

🔑 Environment Variables
Variable	Description	Example
PORT	Server running port	5000
MONGODB_URI	MongoDB connection string	mongodb://127.0.0.1:27017/blogpost-api
JWT_SECRET	JWT secret key	superlongrandomsecretchangeme
JWT_EXPIRES_IN	Token expiration time	7d
🧪 Testing the API

You can test the API using Postman or cURL.

Example with cURL (register):

curl -X POST http://localhost:5000/api/auth/register \
-H "Content-Type: application/json" \
-d '{"name": "Jane Doe", "email": "jane@example.com", "password": "mypassword"}'