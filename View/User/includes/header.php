<?php
	session_start();
	//tiến hành kiểm tra là người dùng đã đăng nhập hay chưa
	if (!isset($_SESSION['username'])) {
		header('Location: ./login.php');
	} else {
		echo "<script>alert('Chào mừng bạn đến với Hệ sinh thái Darknet');</script>";
	}
?>
<html>
	<head>
		<meta charset="UTF-8">
		<title> Group_forums </title>
		<link rel="stylesheet" href="/Models/css/styleas.css">
		<!-- favicon -->
		<link rel="icon" type="image/x-icon" href="/Models/Images/Favicon.png">
		<!-- font awesome -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
		<!-- boxicon -->
		<link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
		<!-- font awesome -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
	</head>
	<body>
		<!-- navigation -->
		<?php require_once "navigation.php"; ?>
		<!-- header -->
		<header style="width:100%; height:250px; border-top: 4px solid orange;position:relative;background-color:black;">
			<div class="logo" style="width:50px; height:50px;border:2px solid orange;border-radius:20px;position:absolute;top:25px;left:0;">
				<img src="/Models/Images/Favicon.png" style="width:100%; height:100%;border-radius:20px;">
				<h1 style="color:red;">Information technology forums</h1>
			</div>
			<!-- slide show header -->
			<div style="width:50%;border:1px solid orange;">
				<div class="wrapper">
					<i id="left" class="fa-solid fa-angle-left"></i>
					<ul class="carousel">
						<?php
							require_once($_SERVER['DOCUMENT_ROOT'] . '/Models/Database/data_homes.php');

							for($i = 0; $i < count($slide_header_h2) || $i < count($slide_header_span); $i++) {
								echo "<li class='card'>";
									echo "<div class='img'></div>";
									echo "<h2>".$slide_header_h2[$i]."</h2>";
									echo "<span>".$slide_header_span[$i]."</span>";
								echo "</li>";
							};
						?>
					</ul>
					<i id="right" class="fa-solid fa-angle-right"></i>
				</div>
			</div>
		</header>
		<!-- mikiway -->
		<?php require_once "mikiway.php"; ?>
		<!-- layout 2 -->
		<?php require_once "layout2.php"; ?>
		<!-- layout 3 -->
		<?php require_once "layout3.php"; ?>
		<!-- layout 4 -->
		<?php require_once "layout4.php"; ?>
		<!-- layout 5 -->
		<?php require_once "layout5.php"; ?>
		<!-- layout 6 -->
		<?php require_once "layout6.php"; ?>
		<!-- time line -->
		<?php require_once "timeline.php"; ?>
		<!-- slide show -->
		<?php require_once "slideshow.php"; ?>
		<!-- faq -->
		<?php require_once "FAQ.php"; ?>
		<!-- footer -->
		<?php require_once "footer.php"; ?>
		<script src="/Models/javascripts/scripts.js"></script>
	</body>
</html>