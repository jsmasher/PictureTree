let express = require("express"),
    bodyParser = require("body-parser"),
    multer = require("multer"),
    api = require("./routes/api"),
    app = express();

app.use(bodyParser.json());

let storage = multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, './public/uploads');
        },
        filename: function (req, file, callback) {
            callback(null, file.fieldname + '-' + Date.now());
        }
    }),
    upload = multer({ storage }).array("pictures", 10); // Allowing maximum of 10 images to upload at a time

app.use(express.static("public"));
app.use("/api", api);

app.listen(8080, function () {
    console.log("Listening on port 8080...");
});