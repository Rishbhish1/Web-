// Note: Importing the module from the node docs
const fs = require("fs");
const getNotes = require("./notes.js");
const validator = require("validator");
const chalk = require("chalk");

// fs.writeFileSync("notes.txt", " I am inputting values in the file "); // Note: [fileName][string to write]

// fs.appendFileSync(
//   "notes.txt",
//   " This is new text appended (added) to the file "
// );

// console.log(validator.isEmail("andrew@email.com"));
// console.log(validator.isURL("google"));

console.log(chalk.green.inverse.bold("Success!"));
