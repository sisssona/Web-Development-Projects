import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home page</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me</h1><p>Phone number: 0877 777 330</p>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About me section</h1><p>My name is Savina</p>");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})