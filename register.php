
<?php

header("Content-Type: application/json");

include "db.php";

$fname = $_POST['fname'] ?? '';
$lname = $_POST['lname'] ?? '';
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';
$contact = $_POST['contactnumber'] ?? '';
$orgname = $_POST['orgname'] ?? '';
$orgdes = $_POST['orgdes'] ?? '';
$orgmail = $_POST['orgmail'] ?? '';

if (
    empty($fname) || empty($lname) ||
    empty($email) || empty($password) ||
    empty($contact) || empty($orgname) ||
    empty($orgdes) || empty($orgmail)
) {
    echo json_encode([
        "status" => "error",
        "message" => "All fields are required"
    ]);
    exit;
}

// Password Hashing
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Insert Query
$sql = "INSERT INTO hr_register
(fname, lname, email, e_password, contact,
org_name, org_desc, org_email)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode([
        "status" => "error",
        "message" => "SQL Error: " . $conn->error
    ]);
    exit;
}

$stmt->bind_param(
    "ssssssss",
    $fname,
    $lname,
    $email,
    $hashedPassword,
    $contact,
    $orgname,
    $orgdes,
    $orgmail
);

if ($stmt->execute()) {

    echo json_encode([
        "status" => "success",
        "message" => "HR Registration Successful"
    ]);

} else {

    if ($stmt->errno == 1062) {
        $message = "Email or Contact already registered";
    } else {
        $message = "Registration Failed";
    }

    echo json_encode([
        "status" => "error",
        "message" => $message
    ]);
}

$stmt->close();
$conn->close();

?>
