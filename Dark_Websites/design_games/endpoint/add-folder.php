<?php 
include("../conn/conn.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["folder_name"])) {
        $folderName = $_POST["folder_name"];
        
        try {
            $stmt = $conn->prepare("INSERT INTO tbl_image_folder (folder_name) VALUES (:folder_name)");
            
            $stmt->bindParam(":folder_name", $folderName);

            $stmt->execute();

            echo"
            <script>
                alert('Folder Added Successfully');
                window.location.href = 'http://localhost/Dark_Websites/design_games/index.php';
            </script>
            ";
            exit();
        } catch (PDOException $e) {
            echo "Error: ". $e->getMessage();
        }
    
    
    }
}



?>