# Blog Project

## Description
A full-stack blogging application built with Node.js, Express, MongoDB, and EJS.
It supports user authentication, blog post management, and image uploads, all while rendering dynamic content seamlessly.

##  Core Capabilities
- 🔑 User authentication (Sign up & Login)
- 🍪 Session handling with cookies
- ✍️ Full blog CRUD (create, read, update, delete)
- 🖼️ Image upload powered by Multer
- 🔒 Protected routes (only logged-in users can post blogs)
- 🎨 Dynamic views using EJS templating

## Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB + Mongoose
- Templating Engine: EJS
- File Handling: Multer
- Session & Cookies: Cookie-Parser

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/blog-project.git
   ```

2. Open the application in your browser:
   ```sh
   http://localhost:8081
   ```

## Default Login Credentials
- **Username:** admin
- **Password:** 123

## Folder Structure
```
blog-project/
│── configs/
│   ├── database.js
│── controller/
│   ├── credController.js
│   ├── userController.js
│── middleware/
│   ├── imageUpload.js
│   ├── redirectMiddleware.js
│   ├── userAuth.js
│── models/
│   ├── credentialsModel.js
│   ├── userModel.js
│── public/
│── router/
│   ├── credRouter.js
│   ├── indexRouter.js
│   ├── userRouter.js
│── uploads/
│── views/
│   ├── partials/
│   ├── editform.ejs
│   ├── form.ejs
│   ├── index.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── single.ejs
│── .gitignore
│── index.js
│── package.json
│── package-lock.json
```
## screenshot
1. Home Page
<img width="1882" height="861" alt="image" src="https://github.com/user-attachments/assets/2e244524-8441-4630-a017-ed75a13c98d0" />
2. Login Page
   <img width="1661" height="825" alt="image" src="https://github.com/user-attachments/assets/7de7cc50-19ae-4c22-91af-ec4e562b496d" />
3. Add Blog Page
   <img width="1794" height="834" alt="image" src="https://github.com/user-attachments/assets/251bbf39-63e2-492f-98f4-1184e06e0730" />
4. View Page
   <img width="1802" height="750" alt="image" src="https://github.com/user-attachments/assets/a3a91fc7-7999-4728-bdf6-b206efd295f3" />














