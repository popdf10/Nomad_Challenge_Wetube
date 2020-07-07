import fs from "fs";

let fileName;

export const getHome = (req, res) => {
  res.render("home", { pageTitle: "TXT2HTML" });
};

export const postHome = (req, res) => {
  const {
    file: { filename },
  } = req;
  fileName = filename;
  res.redirect("/read");
};

export const read = (req, res) => {
  fs.readFile(`./upload/${fileName}`, "utf-8", function read(err, data) {
    if (err) {
      throw err;
    }
    const content = data;
    console.log(content);
    res.render("read", { pageTitle: "contents", content });
  });
};
