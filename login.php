
<?php

header("Content-Type: application/json");

include "db.php";

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

$sql = "SELECT * FROM hr_register WHERE email = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {

    $user = $result->fetch_assoc();

    if (password_verify($password, $user['password'])) {

        session_start();

        $_SESSION['hr_id'] = $user['id'];
        $_SESSION['hr_name'] = $user['fname'];

        echo json_encode([
            "status" => "success",
            "message" => "Login successful"
        ]);

    } else {

        echo json_encode([
            "status" => "error",
            "message" => "Incorrect password"
        ]);

    }

} else {

    echo json_encode([
        "status" => "error",
        "message" => "User not found"
    ]);

}

$stmt->close();
$conn->close();

?>
