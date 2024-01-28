Hello :) This is Zeynep and my app can be built this way:

From the rick-morty directory:
    npm run setup-project
    npm run dev

This should run both client and server simultaneously. But if it doesn't work, in separate terminals you can run "npm run server" and
"npm run client"


This will create a both frontend (localhost:5173) and backend (port:5100) server.

Important: It is required to have .env environmental variables in the root folder. I will write this file content in the email to Carla.
The app won't work without it.


------FEATURES--------------

Login: I have created a profile and hardcoded sample email and password, but it is possible to create your own account.

Database: I use MongoDB database with Mongoose, the database is in Atlas cloud and user and in .env you can find the database connection string. 

CSS: I did not use a library for CSS, however I re-used some base styles that I used before in another project. They are not created from scratch. Under src/assets/wrappers I have created wrapper components for styling, with help of the library: styled-components. Please keep in mind I wrote some of the CSS but inspired from other websites mostly. I take it from project to project.

If I had to do it again I would use plain scss maybe but I still made use of new CSS variables.

API call from express to the Rick & Morty API can be found in models/CharactersModel.js

Dark mode / light mode: Can be switched from moon or sun icon in the navigation bar.

Test: I have added an authorization test under test/auth.test.mjs. It can be run by "npm run test".
For testing library I wanted to make use of the new Node.JS test runner feature. This will both avoid adding a new library and it will
support ES modules natively and elegantly!

React: I tried to use new features of react router, such as FormData API.

Error message toaster: I make use of the library called react-toastify.

-------- Extra libraries I have used -----------------

Nodemon: Hot module reload for express.JS that improves development experience.

Morgan: It logs the HTTP requests nicely in the terminal.

Express Validator: For validation layer, it is a useful library. It gets added to the middle of API call statement so you can validate prematurely.

Bcryptjs: For hashing passwords, it's one of the two popular libraries: bcrypt and bcryptjs. 
bcrypt.gensalt(10) - We first generate a random salt value
bcrypt.hash(password, salt) - We calculate hash value using a one-way hash function with the salt value.

jasonwebtoken: We create a JWT with this library, when user logs in, they will receive a JWT token. For user to access resources later,
we will be looking for this JWT. We send everything with HTTP cookies, which is a secure way how to communicate back and forth.




