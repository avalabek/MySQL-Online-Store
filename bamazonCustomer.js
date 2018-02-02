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
          var nextQuery = "SELECT * FROM products WHERE ?";
        //   connection.query('SELECT * FROM products WHERE ?', { item_id: answer.item }, function (err, res) {
        //       if (err) reject(err);
        //       resolve(res);
          connection.query(nextQuery, [{item_id: item}],function(err,response){
             // if (err)throw err;
        console.log(response);
        console.log("________^^does it still say undefined?_________")
        console.log(nextQuery);
          })
        })
    }
     //the above returns undefined as result, means it isn't finding it?
     //             var inStock = response[0];
     //          if (quantity<= inStock.stock_quantity){
     //              console.log("You're in luck! It's in stock.");
     //          }else{
     // console.log("That item is out of stock.");
     // //then run function to start over or end, or give choice
     //          }
     //         });

     //           console.log("Did I get stock quantities to print?");
     //        });
     // }//end of function runPrompt



     // function updateProduct(){
     //     console.log("Updating product quantities...");
     //     var query = connection.query(
     //         "UPDATE products SET ? WHERE ?",
     //         [
     //              //grabs the stock quantity from db and subtracts
     //             //the amount the user ordered. think this is wrong
     //            { quantity: (products.stock_quantity - inStock[i])
     //            },
     //            {item_id: item
     //             //set this to user input
     //         }
     //         ],function(err,res){
     //             //no idea res. what? item_id or product_name
     //             console.log(res.affectedRows + "products updated!\n");
     //             console.log("Your total price is: ")//need to grab price from db and multiply it by quantity
     //         }
     //     )
     // }