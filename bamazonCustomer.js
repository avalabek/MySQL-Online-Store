var mysql = require ("mysql");
var table = require ("console.table");
var inquirer = require ("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazondb"
});

connection.connect(function(err){
    // if (err) throw err;
    console.log("Connected as id " + connection.threadID + "\n");
    listProducts();
});

function listProducts(){
    console.log("Listing all products...\n");
    connection.query ("SELECT item_id, product_name, price FROM products", function(err,res){
        // if (err) throw err;
        //list all the products
         console.log(res);
      console.table(res);
        connection.end();
    })
}
inquirer.prompt([
    {
        type: "input",
        name: "item_id",
        message: "What is the id of the item you want?"
    },

     {
         type:"input",
         name: "quantity",
         message: "What quantity would you like?"
     }
     ]);
     //store the id response and the quantity res in a variable? use this
    //  .then(function(answer){
    //      if (answer.quantity <= 10) {
    //      //how to grab info from table and take out only stock_quantity. I am using 10 just to get it to work 
    //     console.log ("Your item is in stock.")
    //     // update database
    //     updateProduct();
    //      }else{
    //          console.log("Insufficient stock quantities!")
    //      } 

        //need to feed in the input of the item id and use that to select the stock quantity 
        //then store that response in a variable
        // connection.query SELECT stock_quantity from )
//     })

function updateProduct(){
    console.log("Updating product quantities...");
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            //just to see if it works, set to 9
            //need to set it so that it grabs
            //the stock quantity from db and subtracts
            //the amount the user ordered.
           { quantity: 9
           },
        //    {item_id:
            //set this to user input
        // /}
        ],
        function(err,res){
            //no idea where affectedRows is from
            console.log(res.affectedRows + "products updated!\n");
            console.log("Your total price is: ")//need to grab price from db and multiply it by quantity
        }
    )
}