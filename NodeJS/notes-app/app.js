// Note: Importing the module from the node docs
const fs = require("fs");
const yargs = require("yargs");
const getNotes = require("./notes.js");
const validator = require("validator");
const chalk = require("chalk");

const command = process.argv[2];

yargs.command({
  command: "add",
  describe: "Adding a note",
  handler: function () {
    console.log("Adding a Note");
  },
});

yargs.command({
  command: "remove",
  describe: "removing a note",
  handler: function () {
    console.log("Removing a note");
  },
});

yargs.command({
  command: "list",
  describe: "Listing all the notes",
  handler: function () {
    console.log("Listing notes");
  },
});

yargs.command({
  command: "read",
  describe: "reading a note",
  handler: function () {
    console.log("Reading a note");
  },
});
// fs.writeFileSync("notes.txt", " I am inputting values in the file "); // Note: [fileName][string to write]

// fs.appendFileSync(
//   "notes.txt",
//   " This is new text appended (added) to the file "
// );

// console.log(validator.isEmail("andrew@email.com"));
// console.log(validator.isURL("google"));
