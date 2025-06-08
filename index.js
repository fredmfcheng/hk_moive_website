import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const port = 3000;
let characterChoice;
// Read and parse the JSON file
const characterObject = JSON.parse(fs.readFileSync("./characters.json", "utf-8"));

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
// Stringify the object
const characterJSON = JSON.stringify(characterObject);
  
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {data: characterChoice});
});

app.post("/character", (req, res) => {
  //Step 3: Write your code here to make this behave like the solution website.
  //Step 4: Add code to views/index.ejs to use the recieved recipe object.
  switch(req.body.choice) {
    case "tonyLeung" :
    characterChoice = JSON.parse(characterJSON)[0];
    break;
    case "leslieCheung":
    characterChoice = JSON.parse(characterJSON)[1];
    break;
    case "takeshiKaneshiro":
    characterChoice = JSON.parse(characterJSON)[2];
    break;
  default:
    break;
}
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
