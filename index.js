/*
    - npm init -y
    - npm i ejs express body-parser bootstrap@5.3.3
    - package.json -> add the line "type": "module",

    Add standard stuff:

            import express from "express";
            import bodyParser from "body-parser";
            import { dirname } from "path";
            import { fileURLToPath } from "url";

            const app = express();
            const port = 3000;

            const __dirname = dirname(fileURLToPath(import.meta.url));
            app.use(bodyParser.urlencoded({ extended: true }));

            app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
            });

    nodemon index.js
*/

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

var siteTitle = "🐮 Kratzers Gallowayhof";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    siteTitle = "🐮 Kratzers Gallowayhof - Home";
    res.render(__dirname + "/views/index.ejs", {siteTitle: siteTitle});
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });