var mysql = require ("mysql");

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
        connection.end();
    })
}