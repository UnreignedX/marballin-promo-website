<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "marballin";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully!";
?>

<html>
    
</html>