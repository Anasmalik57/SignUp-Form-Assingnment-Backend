
# SignUp Login Logout Form

This project provides a backend solution for user authentication, including signup, login, and logout functionalities. Built with Node.js, Express.js, and MongoDB, it also includes a basic frontend interface.

## Folder Structure

```
Frontend/
├── css/
│   ├── login.css
│   ├── index.css
│   ├── register.css
├── login.html
├── index.html
└── register.html
Backend/
├── controllers/
│   ├── user.js
├── middlewares/
│   ├── auth.js
├── models/
│   ├── user.js
├── routes/
│   ├── user.js
├── data/
│   ├── config.env
│   ├── database.js
├── app.js
└── package.json
```

## Features

- **Register**: Sign up new users
- **Login**: Authenticate existing users
- **Logout**: End user sessions

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/Anasmalik57/SignUp-Form-Assingnment-Backend.git
cd SignUp-Form-Assingnment-Backend/Backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the `data` folder and add:

```
PORT=5500
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. **Run the application**

```bash
npm start
```

The server will be available at `http://localhost:5500`.

## API Endpoints

### Register

- **POST /api/users/register**

  Request body:

  ```json
  {
    "name": "Your Name",
    "username": "yourusername",
    "password": "yourpassword",
    "email": "youremail@example.com",
    "bio": "A short bio"
  }
  ```

### Login

- **GET /api/users/login**

  Request body:

  ```json
  {
    "username": "yourusername",
    "password": "yourpassword"
  }
  ```

### Logout

- **GET /api/users/logout**

## Dependencies

- `bcrypt`: ^5.1.1
- `cookie-parser`: ^1.4.6
- `cors`: ^2.8.5
- `dotenv`: ^16.4.5
- `express`: ^4.19.2
- `jsonwebtoken`: ^9.0.2
- `mongoose`: ^8.5.1

## Contributing

Feel free to fork the repository and submit pull requests for improvements.

## License

This project is licensed under the MIT License.
