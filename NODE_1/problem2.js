// Install moment.js package using npm
const moment = require("moment");
const fs = require("fs");
// Read the json in problem1.json
const data = JSON.parse(fs.readFileSync("./problem2.json", "utf8"));
// Convert the dates into the following format YYYY-MM-DD
data.accidents.forEach((el) => {
  el.date = moment(new Date(el.date)).format("YYYY-MM-DD");
});
// Write the results to output2.json
fs.writeFileSync('output2.json', JSON.stringify(data))
