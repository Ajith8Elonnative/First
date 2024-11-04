 const swaggerAutogen = require("swagger-autogen")();
// import swaggerAutogen from 'swagger-autogen'
const doc = {
  info: {
    title: "User Crud API's",
    description: "Version 2.0"
  },
  host: "https://signup-and-login.onrender.com",
  basePath:"/",
};

const outputFile = "./swagger-output.json";
const routes = ["./main.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);