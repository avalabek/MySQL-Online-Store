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
    if (err) throw err;
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
        // connection.end();
        runPrompt();
    })
}
function runPrompt(){
    inquirer
        .prompt([
    {
        type: "input",
        name: "id",
        message: "What is the id of the item you want?"
    },

     {
         type:"input",
         name: "quantity",
         message: "What quantity would you like?"
     }
     ])
     
     //store the id response and the quantity res in a variable? use this
      .then(function(res){
          
          //console.log(res); successfully logs response to inquirer
          var item = res.id;
          var quantity = res.quantity;
          console.log(item);
          console.log(quantity);
          //below there is some problem other than the query; i have put in loads of simple query statements and none work
          //for example
        //   var nextQuery = "SELECT * FROM products";
        //ideas: scope? wrap in function then call it?
          var nextQuery = "SELECT stock_quantity FROM products";
          connection.query(nextQuery, [{item_id: item}],function(err,response){
             // if (err)throw err;
        console.log(response);
        console.log("________^^does it still say undefined?_________")
        console.log(nextQuery);
          })
        })
    }
     