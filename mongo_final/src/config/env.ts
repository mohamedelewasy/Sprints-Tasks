import dotenv from "dotenv";
dotenv.config();

export default () => ({
  port: process.env.PORT || 5000,
  mongoUrl: process.env.MONGO_URL || "",
  jwtSecret: process.env.SECRET || "",
});
