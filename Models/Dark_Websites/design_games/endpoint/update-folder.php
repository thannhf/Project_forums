<<<<<<< HEAD
<?php
    include("../conn/conn.php");

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["folder_name"])) {
            $folderID = $_POST['tbl_image_folder_id'];
            $folderName = $_POST["folder_name"];

            try {
                $stmt = $conn->prepare("UPDATE tbl_image_folder SET folder_name = :folder_name WHERE tbl_image_folder_id = :tbl_image_folder_id");
                $stmt->bindParam(":tbl_image_folder_id", $folderID);
                $stmt->bindParam(":folder_name", $folderName);
                $stmt->execute();

                echo"
                    <script>
                        alert('Folder Updated Successfully');
                        window.location.href = 'http://localhost/Dark_Websites/design_games/index.php';
                    </script>
                ";
                exit();
            } catch (PDOException $e) {
                echo "Error: ". $e->getMessage();
            }
        
        }
    }
=======
<?php
    include("../conn/conn.php");

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["folder_name"])) {
            $folderID = $_POST['tbl_image_folder_id'];
            $folderName = $_POST["folder_name"];

            try {
                $stmt = $conn->prepare("UPDATE tbl_image_folder SET folder_name = :folder_name WHERE tbl_image_folder_id = :tbl_image_folder_id");
                $stmt->bindParam(":tbl_image_folder_id", $folderID);
                $stmt->bindParam(":folder_name", $folderName);
                $stmt->execute();

                echo"
                    <script>
                        alert('Folder Updated Successfully');
                        window.location.href = 'http://localhost/Dark_Websites/design_games/index.php';
                    </script>
                ";
                exit();
            } catch (PDOException $e) {
                echo "Error: ". $e->getMessage();
            }
        
        }
    }
>>>>>>> 65cc91a7 (update code)
?>