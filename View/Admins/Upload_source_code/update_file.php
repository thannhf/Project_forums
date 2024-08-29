<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $file_id = intval($_POST['file_id']);
    $content = filter_var(trim($_POST['content'], FILTER_SANITIZE_STRING));

    $stmt = $conn->prepare("UPDATE files SET content = ? WHERE id = ?");
    $stmt->bind_param("si", $content, $file_id);

    if ($stmt->execute()) {
        echo 'File updated successfully!';
    } else {
        echo 'Error: ' . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>