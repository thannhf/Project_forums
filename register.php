<!DOCTYPE html>
<html>
	<head>
		<title>Register Forums</title>
		<meta charset="UTF-8"/>
		<link rel="icon" type="image/x-icon" href="./Models/Images/Favicon.png">
		<link rel="stylesheet" href="Models/css/register.css">
	</head>
	<body>
		<?php
			require_once("./Controller/connect.php");
			if (isset($_POST["btn_submit"])) {
				$username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
				$password = filter_input(INPUT_POST, "pass", FILTER_SANITIZE_SPECIAL_CHARS);
				$email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
				$passwordC = filter_input(INPUT_POST, "passC", FILTER_SANITIZE_SPECIAL_CHARS);

				if ($username == "" || $password == "" || $email == "" || $passwordC == "") {
					echo "bạn vui lòng nhập đầy đủ thông tin";
				} else {
					$sql = "SELECT * FROM userss WHERE username = '$username'";
					$kt = mysqli_query($conn, $sql);

					if(mysqli_num_rows($kt)  > 0){
						echo "Tài khoản đã tồn tại";
					}else{
						$sql = "INSERT INTO userss(username, email, password) 
						VALUES ('$username', '$email', '$password')";
						mysqli_query($conn,$sql);

						if($passwordC != $password) {
							echo "<script>alert('mật khẩu nhập lại không chính xác')</script>";
						} else if($passwordC === $password) {
							echo "<script>alert('chúc mừng bạn đã đăng ký thành công')</script>";
						}
					}
				}
			}
		?>
		<div style="width:100%; display:flex; justify-content:space-around; overflow:hidden;">
			<!-- layout left -->
			<div style="width:45%;border: 1px solid orange;overflow-x:auto;overflow-y:hidden;">
				<header style="width:100%;height:250px;border:1px solid orange;background-color:black;overflow:hidden;">
					<?php
						require_once("./Models/file_data_form/data_image_register.php");
						echo "<div id='slide_show-container' style='width:100%;'>";
							for($i = 0; $i < count($linkImage); $i++){
								echo "<div class='slide'>"."<img src='./Models/Images/".$linkImage[$i]."' style='width:100%;height:250px;'/>"."</div>";
							}
						echo "</div>";
					?>
				</header>
				
				<div style="width:100%; height:427px; border:2px solid blue;overflow-x:hidden;overflow-y:auto; display:flex; justify-content:space-around;">
					<article style="width:30%; background-color:black; overflow-x:hidden;border-radius:20px;color:white; padding:8px;">
						<a href="Dark_Websites/News Forums/posts_add.php" style="color:white;"><h4>Social NetWork</h4></a><br><hr>
						<h4>Chat Message</h4><br><hr>
						<h4>Hacking</h4><br><hr>
						<h4>Đạo Đức Hacker</h4><br><hr>
						<h4>About Forums</h4><br><hr>
						<h4>Hosting</h4><br><hr>
						<h4>Donate</h4><br><hr><br>
						<p>liên hệ với tôi tại: </p>
						<address style="overflow-x:auto; color:greenyellow;">thanhnguyen126agz@gmail.com</address><br>
						<h4 style="font-style:Italic;">@copyright - 2024</h4>
					</article>

					<?php
					echo "<article style='width:65%; background-color:black; overflow-x:hidden;border-radius:20px; color:orange; padding:8px;>";
						echo "<p style='text-align:center;'>" . $text_register . "</p>"; 
					echo "</article>";
					?>
				</div>
			</div>

			<!-- layout right -->
			<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" style="width:45%;">
				<h2>Register Forums</h2>
				<div class="inputBox">
					<input type="text" id="username" name="username" required><label>UserName</label>
				</div>
				<div class="inputBox">
					<input type="email" id="email" name="email" required><label>email</label>
				</div>
				<div class="inputBox">
					<input type="password" id="pass" name="pass" required><label>password</label>
				</div>
				<div class="inputBox">
					<input type="password" id="passC" name="passC" required><label>confirm password</label>
				</div>
				<div class="inputBox">
					<input type="submit" name="btn_submit" value="Dang ky">
				</div>
				<?php
					$token = bin2hex(random_bytes(16));
				?>
				<p>Already have an account ? <a href="login.php?id=<?php echo $token ?>">login</a></p><br>
				<p><a href="">điều khoản</a> và <a href="#">dịch vụ</a>bạn cần phải nắm rõ và đồng ý</p>
			</form>
		</div>
		<script src="./Models/javascripts/registers.js"></script>
	</body>
</html>