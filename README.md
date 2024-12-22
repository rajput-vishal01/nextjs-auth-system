# Next.js Authentication System

A simple authentication system built with **Next.js**, **MongoDB** and **TailwindCSS**, and **Mailtrap**, featuring user signup, login, and email verification.

## Features

- User signup with password hashing (using **bcrypt**).
- User login with authentication (using **JWT**).
- Email verification using **Mailtrap**.

## Tech Stack

- **Frontend**: Next.js, TailwindCSS
- **Backend**: Next.js API routes
- **Database**: MongoDB
- **Authentication**: bcrypt, JSON Web Tokens (JWT)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/nextjs-auth-system.git
   cd nextjs-auth-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file(use .env-sample for guide):

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

## Usage

- **Sign Up**: Create a new account by providing an email and password.
- **Login**: Log in using your email and password.
- **Password Reset**: Request a password reset email if you forget your password.
- **Email Verification**: Verify your account via a link sent to your email.

## Resources

- Tutorial by **Hitesh Choudhary (Chai aur Code)**
- [Mailtrap Documentation](https://mailtrap.io/)
- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://www.mongodb.com/docs/)

## Contributing

Feel free to fork this repository and contribute to improving this authentication system. Submit a pull request with your changes and improvements.

## 📬 Contact

Feel free to reach out if you have any questions!

- **GitHub**: [rajput-vishal01](https://github.com/rajput-vishal01)
- **Email**: [askvishal.me@gmail.com](mailto:askvishal.me@gmail.com)

## Caution

-The video tutorial used for this project is outdated due to recent updates in Next.js. Additionally, due to an issue with Mailtrap, users are successfully registered in the database but may encounter a signup error.

-However, since the user is registered in the database, they can still log in successfully.

- **SOURCE**: TRUST ME BRO ...!!!

---

## Credits

All the learning in this repository is heavily inspired by **Hitesh Choudhary**, also known as **Chai aur Code**.

Check out his amazing content:
[Code with Chai on YouTube](https://www.youtube.com/c/HiteshChoudharydotcom)

---
