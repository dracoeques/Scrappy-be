import mongoose from "../utils/mongoose.js";
import baseFields from "./baseFields.js";
const sportSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("sport", sportSchema);
