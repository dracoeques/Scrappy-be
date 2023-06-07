import Agenda from "agenda";
import config from "../config";

const db_uri = config.db;
if (!db_uri) {
  console.log("Database uri not found in Agenda.");
}
const agenda = new Agenda({
  db: { address: db_uri, collection: "scrapper-jobs" },
});

agenda.on("ready", () => console.log("Agenda started"));
agenda.on("error", () => console.log("Error occured when starting agenda"));

export default agenda;
