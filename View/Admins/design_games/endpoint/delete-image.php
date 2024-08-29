
<?php
    require_once ("..\..\../Controller/connect.php");

if (isset($_GET['image'])) {
    $imageIDs = filter_input(INPUT_GET, 'image', FILTER_SANITIZE_STRING);
    $imageIDsArray = explode(',', $imageIDs);

    try {
        foreach ($imageIDsArray as $imageID) {
            // Fetch the image name from the database
            $stmt = $conn->prepare("SELECT image_name FROM tbl_image WHERE tbl_image_id = :imageID");
            $stmt->bindParam(':imageID', $imageID, PDO::PARAM_INT);
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($result) {
                $imageFileName = $result['image_name'];

                $stmt = $conn->prepare("DELETE FROM tbl_image WHERE tbl_image_id = :imageID");
                $stmt->bindParam(':imageID', $imageID, PDO::PARAM_INT);
                $stmt->execute();

                $imageFilePath = "../images/" . $imageFileName;
                if (file_exists($imageFilePath)) {
                    unlink($imageFilePath);
                }
            }
        }

        echo "
        <script>
            alert('Image/s Deleted Successfully');
            window.location.href = 'http://localhost/Dark_Websites/design_games/index.php';
        </script>
        ";
        exit();
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>