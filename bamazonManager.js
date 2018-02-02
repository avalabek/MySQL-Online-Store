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
})
.then(function(answer){
    switch (answer.menu) {
        case "View Product for Sale":
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
});
}

function viewProducts(){
    console.log("view products");
}
function viewInventory(){
    console.log("view inventory");
}
function addInventory(){
    console.log("add inventory");
}
function newProduct(){
    console.log("new product");
}