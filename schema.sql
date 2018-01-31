CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products(
    item_id INT NOT NULL,
    product_name VARCHAR (45),
    department_name VARCHAR (45),
    price DECIMAL (9,2),
    stock_quantity INT,
    PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1000, "lavender", "garden", 4.50, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1001, "aloe", "garden", 2.50, 3);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1003, "mug", "kitchen", 5.50, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1004, "placemat", "kitchen", 4.00, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1005, "lamp", "lighting", 33.00 , 2);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1006, "sunglasses", "accessories", 45.00, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1007, "sweater", "clothing", 79.00, 3);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1008, "handbag", "bags", 99.00, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1009, "jacket", "clothing", 29.99, 5);