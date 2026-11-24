
<?php

$conn = new mysqli("localhost", "root", "", "emp_management");

if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}

?>
