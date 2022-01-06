import fs from "fs";

export const cleanFile = (pathToFile) => {
  fs.unlink(pathToFile, function (err) {
    if (err) {
      throw err;
    } else {
      console.log("Successfully deleted the file.");
    }
  });
};
