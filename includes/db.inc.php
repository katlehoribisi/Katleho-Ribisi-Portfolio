<?php 

$dsn = "mysql:host=localhost;dbname=kat";
$dbusername = "root";
$dbpassword ="";

 

try {
   $pdo = new PDO($dsn,$dbusername,$dbpassword);
   $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   $fname =  $_REQUEST['fname'];
   $email = $_REQUEST['email'];
   $message = $_REQUEST['message'];
   $sql = "INSERT INTO contact_form (first_name, email_address, user_message)VALUES ('$fname', '$email','$message')";
  // use exec() because no results are returned
  $pdo->exec($sql);
//   echo "New record created successfully";

if ($localhost['REQUEST_METHOD']=='POST'){

   echo "Welcome $fname to our website";

} else {
   header("Location: ../index.php");
}

} catch (PDOException $e) {
   echo "Connection Failed: ". $e->getMessage();
}



// phpinfo()
?>