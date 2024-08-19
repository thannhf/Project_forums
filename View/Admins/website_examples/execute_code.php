<?php require_once('./Controller/connect.php'); ?>
<?php
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $snippet_id = $_POST['snippet_id'];
        $stmt = $conn->prepare("SELECT code, language FROM code_snippets WHERE id = ?");
        $stmt->bind_param("i", $snippet_id);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_assoc();
        $code = $result['code'];
        $language = $result['language'];

        if($language = 'php') {
            ob_start();
            eval('?>' . $code);
            $output = ob_get_clean();
            $stmt = $conn->prepare("INSERT INTO execution_results(snippet_id, result) VALUE(?, ?)");
            $stmt->bind_param("is", $snippet_id, $output);
            $stmt->execute();
            $stmt->close();
            echo $output;
        } else {
            echo "Unsupported language";
        }
    }
    $conn->close();
?>