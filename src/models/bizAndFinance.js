import mongoose from "../utils/mongoose.js";
import baseFields, { baseErrorFields } from "./baseFields.js";
const bizAndFinanceSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("bizAndFinance", bizAndFinanceSchema);

const bizAndFinanceErrorSchema = new mongoose.Schema({
  ...baseErrorFields,
});

export const bizAndFinanceErrorModel = mongoose.model(
  "bizAndFinance.error",
  bizAndFinanceErrorSchema
);
