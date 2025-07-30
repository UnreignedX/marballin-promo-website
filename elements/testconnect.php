<?php
$host = "ep-tiny-voice-a1aen4ha-pooler.ap-southeast-1.aws.neon.tech";
$user = "neondb_owner";        // default for XAMPP/Laragon
$pass = "npg_2zIeO6iWCDEN";            // default is empty
$db   = "marballin";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully!";

phpinfo();
?>

<html>
    
</html>