const fs = require("fs");
const path = require("path");

const pages = [
  "kontakt",
  "o-meni",
  "usluge-prevodjenja",
  "cjenovnik"
];

const buildDir = path.join(__dirname, "build");

pages.forEach(page => {
  const dir = path.join(buildDir, page);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.copyFileSync(
    path.join(buildDir, "index.html"),
    path.join(dir, "index.html")
  );
});

console.log("SEO pages generated");