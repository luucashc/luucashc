import express from "express";

const app = express();

app.use(express.static("./"));

app.get("/", (req, res) => res.sendFile("src/application/view/index.html", { root: "." }));

app.listen(3000, () => console.log("server started on http://localhost:3000"));
