const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ShareFood API",
      version: "1.0.0",
      description: "Peer-to-peer food donation platform API documentation",
    },
    servers: [
      {
        url: `${process.env.DATABASE_URL}/api`, // Ensure API_BASE_URL is defined
      },
    ],
  },
  apis: [
    path.join(__dirname, "user.js"),
    path.join(__dirname, "donation.js"),
    path.join(__dirname, "request.js"),
    path.join(__dirname, "rating.js"),
    path.join(__dirname, "notification.js"),
  ],
};

const swaggerSpec = swaggerJSDoc(options);

function setupSwagger(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
