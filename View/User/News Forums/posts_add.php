<!DOCTYPE html>  
<html>
	<head>
		<title>Upload Blogs</title>
		<!-- box icon -->
		<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
		<meta charset="UTF-8"/>
		<link rel="icon" type="image/x-icon" href="Images/Favicon.png">
		<script src="https://cdn.ckeditor.com/4.22.1/standard/ckeditor.js"></script>
		<!-- <link rel="stylesheet" href="styles.css"> -->
	</head>
	<body style="background-color:#333;width:80%;overflow:hidden;">
		<div style="width:100%; display:flex; justify-content:space-around; overflow:hidden; position:relative; left:12%;">
			<!-- layout left -->
			<div style="width:100%;border: 1px solid orange;overflow-x:hidden;overflow-y:hidden;">
				<header style="width:100%;height:250px;border:1px solid orange;background-color:black;overflow:hidden;">
					<?php
						require_once("file_data_form/data_image_register.php");
						echo "<div id='slide_show-container' style='width:100%;'>";
							for($i = 0; $i < count($linkImage); $i++){
								echo "<div class='slide'>"."<img src='Images/".$linkImage[$i]."' style='width:100%;height:250px;'/>"."</div>";
							}
						echo "</div>";
					?>
				</header>
				
				<div style="width:100%; height:427px; border:2px solid blue;overflow-x:auto;overflow-y:auto; display:flex; justify-content:space-around;">
					<article style="width:20%; background-color:black; overflow-x:hidden;border-radius:20px;color:white; padding:8px;">
						<!-- sidebar -->
						<h4><mark>Challenges</mark></h4><hr>
						<h4><mark>Get Informed</mark></h4><hr>
						<h4><mark>Get Involved</mark></h4><hr>
						<h4><mark>Communicate</mark></h4><hr>
						<h4><mark>About HTS</mark></h4><hr>
						<h4><mark>Partners</mark></h4><hr>
						<h4><mark>Donate</mark></h4><hr><br>
						<p>liên hệ với tôi tại: </p>
						<address style="overflow-x:auto; color:greenyellow;">thanhnguyen126agz@gmail.com</address><br>
						<h4 style="font-style:Italic;">@copyright - 2024</h4>
					</article>

					<!-- layout right -->
					<div style="width:75%; overflow-y:auto;">
						<form action="posts_add.php" enctype="multipart/form-data" method="post" class="form" style="background-color: #111;color:orange;overflow:auto;">
							<div style="border:1px solid orange; display:flex; justify-content:center;">
								<article style="border:1px solid orange; width:25%;">	
									<label name="title">Tiêu đề </label>
									<input type="text" name="title" placeholder="title" />
								</article>
								<article style="border:1px solid orange; width:25%;">
									<label>URL </label>
									<input type="text" placeholder="url" name="url"/>
								</article>
								<article style="border:1px solid orange; width:25%;">
									<label>Author</label>
									<input type="text" placeholder="author" name="author"/>
								</article>
								<article style="border:1px solid orange; width:25%;">
									<label>Avatar </label>
									<input type="hidden" name="size" value="1000000">
									<input type="file" name="image" class="hinhanh">
								</article>
							</div>

							<div style="border:1px solid orange;">
								<textarea name="content" style="width:750px; height:100px; padding:5px;" id="content" placeholder="content..." class="noidung"></textarea>
								<script>
									CKEDITOR.replace( 'content' );
								</script>
								<!-- <textarea name="content" style="width:750px; height:100px; padding:5px;" id="content" placeholder="content..." class="noidung"></textarea> -->
							</div>
							
							<input type="submit" name="btn_submit" value="Upload blog" style="cursor:pointer;" />
							<?php 
								require_once 'posts_xuly.php';
							?>
						</form><br><br>
					</div>
				</div>
			</div>
		</div>
		<script src="scripts.js"></script>
	</body>
</html>