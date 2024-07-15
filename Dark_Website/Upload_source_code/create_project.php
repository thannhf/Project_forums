
<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $description = trim($_POST['description'], FILTER_SANITIZE_STRING);

    $stmt = $conn->prepare("INSERT INTO projects (name, description) VALUES (?, ?)");
    $stmt->bind_param("ss", $name, $description);

    if ($stmt->execute()) {
        echo 'Project created successfully!';
    } else {
        echo 'Error: ' . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>

