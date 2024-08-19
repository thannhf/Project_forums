<<<<<<< HEAD
<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $project_id = intval($_POST['project_id']);
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $content = trim($_POST['content'], FILTER_SANITIZE_STRING);

    $stmt = $conn->prepare("INSERT INTO files (project_id, name, content) VALUES (?, ?, ?)");
    $stmt->bind_param("iss", $project_id, $name, $content);

    if ($stmt->execute()) {
        echo 'File added successfully!';
    } else {
        echo 'Error: ' . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
=======
<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $project_id = intval($_POST['project_id']);
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $content = trim($_POST['content'], FILTER_SANITIZE_STRING);

    $stmt = $conn->prepare("INSERT INTO files (project_id, name, content) VALUES (?, ?, ?)");
    $stmt->bind_param("iss", $project_id, $name, $content);

    if ($stmt->execute()) {
        echo 'File added successfully!';
    } else {
        echo 'Error: ' . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
>>>>>>> 65cc91a7 (update code)
