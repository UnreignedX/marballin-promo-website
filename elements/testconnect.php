<?php
$host = "sql300.infinityfree.com";
$user = "if0_39585296";        // default for XAMPP/Laragon
$pass = "mDWlRir5u3aw0";            // default is empty
$db   = "if0_39585296_marballin";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully!";

phpinfo();
?>

<html>
    
</html>