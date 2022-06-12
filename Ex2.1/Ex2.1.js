const fs = require("fs");

fs.writeFile("./notes.txt", "Some text", (err) => {
  if (err) {
    console.log(err);
  }
});

fs.copyFile("notes.txt", "copyOfMyNotesFile.txt", (err) => {
  if (err) {
    console.log(err);
  }
});

fs.rename("copyOfMyNotesFile.txt", "renameCopyOfMyNotesFile.txt", (err) => {
  if (err) {
    console.log(err);
  }
});

fs.readdir("./", (err, files) => {
  files.forEach((file) => console.log(file));
  if (err) {
    throw err;
  }
});

console.log(fs.readdirSync(__dirname));

fs.writeFile("toDelete.txt", "To Delete!", (err) => {
  if (err) {
    console.log(err);
  }
});
fs.unlink(
  "toDelete.txt",
  () => console.log("Deletion Complete!"),
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);
