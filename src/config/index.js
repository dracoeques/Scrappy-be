import dotenv from "dotenv";
dotenv.config();

const ENVIRONMENT = process.env.NODE_ENV;
const config = {};
switch (ENVIRONMENT) {
  case "production":
    config.db = process.env.MONGO_PROD_URI;
    config.port = process.env.PROD_PORT;
  case "test":
    config.db = process.env.MONGO_TEST_URI;
    config.port = process.env.TEST_PORT;
  default:
    config.db = process.env.MONGO_DEV_URI;
    config.port = process.env.DEV_PORT;
}

export default config;
