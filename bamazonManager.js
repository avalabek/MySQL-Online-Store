//question: could I put lines 2-16 in a file then require the file for customer/manager files?
var mysql = require("mysql");
var table = require("console.table");
var inquirer = require("inquirer");
var colors = require ("colors/safe");

var connection = mysql.createConnection({
    host: "localhost",
    port:3306,
    user: "root",
    password: "root",
    database: "bamazondb"
});
connection.connect(function(err){
    if(err)throw err;
    console.log("Connected as id "+ connection.threadID + "\n");
runManager();
});

function runManager(){
inquirer.prompt([
{
    type: "list",
        name: "menu",
        message: "Choose from this menu:",
        choices: [
                    "View Products for Sale", 
                    "View Low Inventory",
                    "Add to Inventory",
                    "Add New Product"
                ]
}])
.then(function(answer){
    switch (answer.menu) {
        case "View Products for Sale":
        viewProducts(); 
        
        break;
        
        case "View Low Inventory":
        viewInventory();
        break;

        case "Add to Inventory":
        addInventory();
        break;

        case "Add New Product":
        newProduct();
        break;
    }
})
}
function viewProducts(){
    console.log("view products");
    runAgain();
}

function viewInventory(){
    console.log("view inventory");
    runAgain();
}
function addInventory(){
    console.log("add inventory");
    runAgain();
}
function newProduct(){
    console.log("new product");
    runAgain();
}
function runAgain() {
    inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "Choose from this menu:",
            choices: [
                "Return to Main Menu",
                "Exit Manager View"
          ]
        }])
        .then(function (response) {
            switch (response.options) {
                case "Return to Main Menu":
                    runManager();
                    break;
                case "Exit Manager View":
                    connection.end();
                    break;
            }
        })
    }        