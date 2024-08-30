import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from 'path';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Setze den View-Engine und das Views-Verzeichnis
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Verwende Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Statisches Verzeichnis korrekt setzen
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;
var siteTitle = "🐮 Kratzers Gallowayhof";

//Routen
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
