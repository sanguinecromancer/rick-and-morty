From the rick-morty directory:
    npm run setup-project
    npm run dev

This will create a both frontend (localhost:5173) and backend (port:5100) server.

Login: I have created a profile and hardcoded sample email and password, but it is possible to create your own account.

Database: I use MongoDB database with Mongoose, the database is in Atlas cloud and user and in .env you can find the database connection string. 

CSS: I did not use a library for CSS, however I re-used some base styles that I used before in another project. They are not created from scratch. Under src/assets/wrappers I have created wrapper components for styling, with help of the library: styled-components.

Dark mode / light mode: Can be switched from moon or sun icon in the navigation bar.


React: I tried to use new features of react router, such as FormData API.