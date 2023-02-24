// import and require that we use the express dependencies
const express = require("express");

const app = express();

const port = 8080;

app.get("/", (req, res) => {
	res.send("Hello World, from express");
});

app.listen(port, () =>
	console.log(`Server is running on ${port}.You better go catch it!`)
);


