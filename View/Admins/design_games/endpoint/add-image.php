<?php
    include("../conn/conn.php");

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $folder_id = $_POST['tbl_image_folder_id'];

        // Check if files were uploaded
        if (isset($_FILES['image_name']['name'])) {
            $image_name = $_FILES['image_name']['name'];
            $image_tmp = $_FILES['image_name']['tmp_name'];
            $image_size = $_FILES['image_name']['size'];
            $image_type = $_FILES['image_name']['type'];

            $target_directory = '../images/'; // Change this path as needed

            // $unique_filename = uniqid() . '_' . $image_name;
            $random_bytes = bin2hex(random_bytes(8)); // 16 ký tự ngẫu nhiên
            $unique_filename = $random_bytes . '_' . uniqid('', true) . '.' . pathinfo($image_name, PATHINFO_EXTENSION);

            if (!is_dir($target_directory)) {
                mkdir($target_directory, 0777, true);
            }

            if (move_uploaded_file($image_tmp, $target_directory . $unique_filename)) {

                $stmt = $conn->prepare("INSERT INTO tbl_image (tbl_image_folder_id, image_name) VALUES (:folder_id, :unique_filename)");
                $stmt->bindParam(':folder_id', $folder_id);
                $stmt->bindParam(':unique_filename', $unique_filename);
                $stmt->execute();

                header('Location:http://localhost/View/Admins/design_games/index.php');
            } else {

                echo "Error uploading the image.";
            }
        } else {
            echo "Please select an image to upload.";
        }
    }
?>
