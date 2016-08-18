let express = require("express"),
    api = express.Router();

api.post("/files", function (req, res) {
    upload(req, res, function (err) {
        console.log(req.files);
        if (err) {
            console.log("Files upload failed");
            res.json({
                success: false,
                message: "Files could not be uploaded successfully"
            });
        } else {
            console.log("Files upload succeeded");
            res.json({
                success: true,
                message: "Files uploaded successfully",
                list: []
            });
        }
    });
});

module.exports = api;