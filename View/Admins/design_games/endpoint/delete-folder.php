<?php
include ("../conn/conn.php");

if (isset($_GET['folder'])) {
    $folderID = $_GET['folder'];

    try {
        $stmt = $conn->prepare("DELETE FROM tbl_image_folder WHERE tbl_image_folder_id = :folderID");
        $stmt->bindParam(':folderID', $folderID, PDO::PARAM_INT);
        $stmt->execute();

        $stmtImages = $conn->prepare("DELETE FROM tbl_image WHERE tbl_image_folder_id = :folderID");
        $stmtImages->bindParam(':folderID', $folderID, PDO::PARAM_INT);
        $stmtImages->execute();

        echo"
        <script>
            alert('Folder Deleted Successfully');
            window.location.href = 'http://localhost/View/Admins/design_games/index.php';
        </script>
        ";
        exit();
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}

?>
