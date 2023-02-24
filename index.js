// import and require that we use the express dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 8080;
const path = require("path");
// app.use(express.static("../client"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("Hello World, from express");
});

app.get("/create-books", (req, res) => {
	res.sendFile(path.join(__dirname, "./new-book.html"));
	console.log(req.body);
	// res.send("Book created successfully!");
});

// app.get("/books", (req, res) => {
// 	res.send()
// });

// app.post("/books", (req, res) => {
// 	console.log(req.body);
// 	res.redirect("/all-books");

// 	// res.sendFile(__dirname, "./new-book.html");
// });

app.get("/all-books", (req, res) => {
	console.log("hi");
	res.send("list of books go here");
	console.log(req.body);
});
app.listen(port, () =>
	console.log(`Server is running on ${port}.You better go catch it!`)
);
