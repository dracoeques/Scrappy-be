const baseFields = {
  siteName: String,
  title: String,
  date: String,
  article: String,
  link: String,
  //   scrapeDate: Date,
};
export const baseErrorFields = {
  ...baseFields,
  scrapeDate: String,
  causesOfError: [String], // Array of strings
};

export default baseFields;
