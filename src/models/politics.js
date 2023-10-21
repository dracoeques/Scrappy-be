import mongoose from "../utils/mongoose.js";
import baseFields from "./baseFields.js";
const politicsSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("politics", politicsSchema);
