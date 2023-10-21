import mongoose from "../utils/mongoose.js";
import baseFields from "./baseFields.js";
const bizAndFinanceSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("bizAndFinance", bizAndFinanceSchema);
