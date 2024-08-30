import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from 'path';

const app = express();

app.set('view engine', 'ejs');

const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

var siteTitle = "🐮 Kratzers Gallowayhof";

app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    siteTitle = "🐮 Kratzers Gallowayhof - Home";
    res.render(__dirname + "/views/index.ejs", {siteTitle: siteTitle});
  });

app.get("/gallery", (req, res) => {
    siteTitle = "🐮 Kratzers Gallowayhof - Gallery";

    /* Gallery Script */


    res.render(__dirname + "/views/gallery.ejs", {siteTitle: siteTitle});
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
