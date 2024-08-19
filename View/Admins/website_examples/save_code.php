<?php require_once('./Controller/connect.php'); ?>
<?php
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $code = $_POST['code'];
        $language = $_POST['language'];
        $stmt = $conn->prepare("INSERT INTO code_snippets(code, language) VALUE(?,?)");
        $stmt->bind_param("ss", $code, $language);
        if($stmt->execute()) {
            echo "code saved successfully";
        } else {
            echo "Error saving code: " . $stmt->error;
        }
        $stmt->close();
    }
    $conn->close();
?>