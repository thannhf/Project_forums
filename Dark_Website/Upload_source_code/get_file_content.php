<?php
include 'db.php';

if (isset($_GET['file_id'])) {
    $file_id = intval($_GET['file_id']);

    $stmt = $conn->prepare("SELECT content FROM files WHERE id = ?");
    $stmt->bind_param("i", $file_id);

    if ($stmt->execute()) {
        $stmt->bind_result($content);
        $stmt->fetch();
        echo $content;
    } else {
        echo 'Error: ' . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
