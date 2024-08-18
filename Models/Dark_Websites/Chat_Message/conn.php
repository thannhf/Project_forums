<?php
	$servername = "localhost";
    $username = "root";
    $password = "";
	$dbname = "epiz_34032857_zeroday_exploid";
    // tạo kết nối
    $conn = mysqli_connect($servername, $username, $password, $dbname);
	mysqli_query($conn,"SET NAMES 'UTF8'");
?>