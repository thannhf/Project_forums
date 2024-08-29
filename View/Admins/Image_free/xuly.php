
<?php
    require_once '..\..\../Controller/connect.php';
    if (isset($_POST['upload'])) {
        $author = trim($_POST['author']);
        $image = $_FILES['image']['name'];
        $errors = array();
        $file_name = $_FILES['image']['name'];
        $file_size = $_FILES['image']['size'];
        $file_tmp = $_FILES['image']['tmp_name'];
        $file_parts = explode('.', $_FILES['image']['name']);
        $file_ext = strtolower(end($file_parts));
        $expensions = array("jpeg", "jpg", "png");
        
        // Kiểm tra phần đuôi của tệp
        if (!in_array($file_ext, $expensions)) {
            $errors[] = "Chỉ hỗ trợ upload file JPEG hoặc PNG.";
        }
        
        // Kiểm tra kích thước tệp
        if ($file_size > 2097152) { // Giới hạn kích thước tệp là 2MB
            $errors[] = 'Kích thước file không được lớn hơn 2MB';
        }
        
        if (empty($errors)) {
            // Tạo tên tệp mới với ID ngẫu nhiên
            $randomAccountNumber = substr(md5(uniqid()), 0, 20);
            $filenameWithRandomID = $randomAccountNumber . '.' . $file_ext;
            $target = "photo/" . $filenameWithRandomID;
        
            // Di chuyển tệp đã tải lên vào thư mục mong muốn
            if (move_uploaded_file($_FILES['image']['tmp_name'], $target)) {
                $stmt = mysqli_prepare($conn, "INSERT INTO images(image, author) VALUES (?, ?)");
                mysqli_stmt_bind_param($stmt, "ss", $target, $author);
        
                if (mysqli_stmt_execute($stmt)) {
                    echo '<script>alert("Đăng bài viết thành công!");</script>';
                } else {
                    // Sử dụng mysqli_stmt_error để lấy thông tin lỗi chi tiết
                    $error = mysqli_stmt_error($stmt);
                    echo '<script>alert("Lỗi khi insert dữ liệu: ' . $error . '");</script>';
                }
                mysqli_stmt_close($stmt);
            } else {
                echo '<script>alert("Lỗi khi upload file ảnh");</script>';
            }
        } else {
            // Hiển thị lỗi
            foreach ($errors as $error) {
                echo '<script>alert("' . $error . '");</script>';
            }
        }
    }

    $sql = "SELECT * FROM `images` ORDER BY `images`.`id` DESC";
    $result = mysqli_query($conn, $sql);

    while ($row = mysqli_fetch_array($result)) {
        echo "<img src='" . $row['image'] . "' title='".$row['author']. ' || ' . $row['time_upload']."' style='width:150px; height:150px; border:2px solid white; margin:5px; cursor:pointer;'>";
    }
    mysqli_close($conn);
?>