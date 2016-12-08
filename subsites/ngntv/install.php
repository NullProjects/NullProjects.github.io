<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div>
            <p>
              <?php
                $servername="localhost";
                $username="username";
                $password="password";
                
                $conn = new mysqli ($servername, $username, $password);
                if ($conn->connect_error){
                     die("Connection Failure:" . $conn->connect_error);
                }
                $sql = "CREATE DATABASE GitCMS_DB"
                        
                        ;
                if ($conn->query($sql) === TRUE ){
                    echo "Database Installed  & Initialized";
                }
                    else{
                        echo "Error, Error, Error... cannot redo" . $conn->error;
                    }
                $sql = "CREATE TABLE users (
                        id int(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                        username VARCHAR(30) NOT NULL,
                        password VARCHAR(30) NOT NULL,
                        adminrole VARCHAR(6) NOT NULL,
                        streamrole VARCHAR(6) NOT NULL,                    
                        email VARCHAR(50) NOT NULL,
                        verified VARCHAR(6) NOT NULL,
                        reg_date TIMESTAMP
                        is_root VARCHAR(6) NOT NULL,
                        )"
               #conn->close();
               ?>
            </p>
        </div>
    </body>
</html>
