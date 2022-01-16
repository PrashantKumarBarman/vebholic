The frontend is in frontend directory

The backend is in backend directory

### Steps to run the application

- cd into backend directory
- Run `npm install`
- Enter the backend server port and mongodb credentials in .env file
- Start the backend server with `nodemon app.js` or `npm start` or `node app.js` command, default server port is 8000

- cd into frontend directory
- Run `npm install`
- In the package.json file add or update proxy property value with the url of the backend server, for example - http://localhost:8080
- Run the frontend react app with `npm start` command
- The application will run at 3000 default port for react app in development mode.
- Now you can open the application on browser at http://localhost:3000
