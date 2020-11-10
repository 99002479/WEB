
const app = require('express')();
const parser = require("body-parser");
const fs = require("fs");
const dir = __dirname;


app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
let bus = []; 
let flag = 1;

function readData() {
    const filename = "store.json"; 
    const jsonContent = fs.readFileSync(filename, 'utf-8');
    bus = JSON.parse(jsonContent);
}

function saveData() {
    const filename = "store.json";
    const jsonData = JSON.stringify(bus);
    fs.writeFileSync(filename, jsonData, 'utf-8');
}
app.get("/bus", (req, res) => {
    readData();
    res.send(JSON.stringify(bus));
})

app.post('/bus', (req, res) => {
    if (bus.length == 0)
        readData(); 
    let body = req.body; 
    for (let index = 0; index < bus.length; index++) {
        let element = bus[index];
        if (element.userName == body.userName) {

            res.send("User name already exists");
            flag = 0;
        }

    }
    if (flag >= 1) {
        bus.push(body);
        saveData(); 
        res.send("User added successfully");
    }

})


app.listen(1234, () => {
    console.log("SERVER AVAILABLE AT 1234....");
})