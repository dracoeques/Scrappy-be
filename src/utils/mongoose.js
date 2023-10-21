import mongoose from "mongoose";
import config from "../config/index.js";

mongoose.connect(config.db).then(() => {
  console.log("Successfully connected to mongo server.");
  console.log(`connection uri ${config.db}`);
});

export default mongoose;
