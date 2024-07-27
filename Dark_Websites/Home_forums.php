<?php
	session_start();
	//tiến hành kiểm tra là người dùng đã đăng nhập hay chưa
	if (!isset($_SESSION['username'])) {
		header('Location: login.php');
	} else {
		echo "<script>alert('Chào mừng bạn đến với Hệ sinh thái Darknet');</script>";
	}
?>
<html>
	<head>
		<meta charset="UTF-8">
		<title> Group_forums </title>
		<link rel="stylesheet" href="styleas.css">
		<!-- favicon -->
		<link rel="icon" type="image/x-icon" href="Images/Favicon.png">
		<!-- font awesome -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
		<!-- boxicon -->
		<link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
		<!-- font awesome -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
		<script>
			{// vô hiệu hóa f12 và ctrl
				document.addEventListener("keydown", function(event){
					if (event.ctrlKey){
						event.preventDefault();
					}
					if(event.keyCode == 123){
						event.preventDefault();
					}
				});
			}
			{// ngăn chặn sự kiện chuột phải -> inspect || view source code
				document.addEventListener('contextmenu', event => event.preventDefault());
			}
		</script>
	</head>
	<body>
		<nav>
			<a href="News Forums/posts_add.php" id="indicator">social network</a>
			<a href="Chat_Message/index.php">Chat</a>
			<a href="#" id="indicator">account</a>
			<a href="#">thông báo</a>
			<a href="#" id="indicator">MyCV</a>
			<a href="#">Members</a>
			<a href="#" id="indicator">Report</a>
		</nav>
		<!-- header -->
		<header style="width:100%; height:250px; border-top: 4px solid orange;position:relative;background-color:black;">
			<div class="logo" style="width:50px; height:50px;border:2px solid orange;border-radius:20px;position:absolute;top:25px;left:0;">
				<img src="Images/Favicon.png" style="width:100%; height:100%;border-radius:20px;">
				<h1 style="color:red;">Information technology forums</h1>
			</div>
			<!-- slide show header -->
			<div style="width:50%;border:1px solid orange;">
				<div class="wrapper">
					<i id="left" class="fa-solid fa-angle-left"></i>
					<ul class="carousel">
						<?php
							require_once("Database/data_homes.php");
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
		<div id="all_body" class="all_body" style="width:100%; height:400px; border:1px solid black;background-color: #333;
		position:relative;display:flex;justify-content:space-around;background:linear-gradient(#0d0551,#30e9ff);">
			<div class="containers" style="width:30%;position:absolute;left:0;
			background:linear-gradient(#ff3779, #0d0551);border-radius:180px;">
				<div class="suns"></div>
				<div class="earths">
					<div class="moons"></div>
				</div>
			</div>
			<!-- block -->
			<div class="containerB" style="position:absolute; top:-26%;width:70%;right:0;">
				<?php
					for($i = 0; $i < count($card_1_h2); $i++) {
						echo "<div class='cardB'>";
							echo "<div class='iconB'></div>";
							echo "<div class='contentB'>";
								echo "<h2>".$card_1_h2[$i]."</h2>";
							echo "</div>";
						echo "</div>";
					}
				?>
			</div>    
		</div>
		<!-- layout 2 -->
		<div class="layout_two" id="layout_two" style="width:100%; height:350px; border:1px solid black;background-color:black;">
			<div class="wrapper3" style="background: linear-gradient(#ffde59, #e45d0b);">
				<header>WELCOME</header>
				<input type="radio" name="slider3" checked id="home3">
				<input type="radio" name="slider3" id="blog3">
				<input type="radio" name="slider3" id="code3">
				<input type="radio" name="slider3" id="help3">
				<input type="radio" name="slider3" id="about3">
				<nav>
					<label for="home3" class="home3"><?php echo $nav_header_content[0];?></label>
					<label for="blog3" class="blog3"><?php echo $nav_header_content[1];?></label>
					<label for="code3" class="code3"><?php echo $nav_header_content[2];?></label>
					<label for="help3" class="help3"><?php echo $nav_header_content[3];?></label>
					<label for="about3" class="about3"><?php echo $nav_header_content[4];?></label>
					<div class="slider3"></div>
				</nav>
				<section>
					<div class="content3 content-1_3" style="background: linear-gradient(#ff8859, #5f0b95);">
						<div class="title3"><?php echo $nav_header_content[0]; ?></div>
						<p><?php echo $content_data_content[0];?></p>
					</div>
					<div class="content3 content-2_3" style="background: linear-gradient(#ff8859, #5f0b95);">
						<div class="title3"><?php echo $nav_header_content[1]; ?></div>
						<p><?php echo $content_data_content[1];?></p>
					</div>
					<div class="content3 content-3_3" style="background: linear-gradient(#ff8859, #5f0b95);">
						<div class="title3"><?php echo $nav_header_content[2] ?></div>
						<p><?php echo $content_data_content[2];?></p>
					</div>
					<div class="content3 content-4_3" style="background: linear-gradient(#ff8859, #5f0b95);">
						<div class="title3"><?php echo $nav_header_content[3]; ?></div>
						<p><?php echo $content_data_content[3];?></p>
					</div>
					<div class="content3 content-5_3" style="background: linear-gradient(#ff8859, #5f0b95);">
						<div class="title3"><?php echo $nav_header_content[4] ?></div>
						<p><?php echo $content_data_content[4];?></p>
					</div>
				</section>
			</div>
		</div>
		<!-- layout 3 -->
		<div class="layout_three" id="layout_three" style="width:100%; height:600px;position:relative;display:flex;justify-content:space-around;
		background:linear-gradient(#FFCF26, #3929F1, #EB22CB)">
			<!-- cloud và 3 card -->
			<div class="containerbr" style=" top:-15%; width:70%;">
				<?php
					for($i = 0; $i < count($boxbr_h2) || $i < count($boxbr_p) || $i < count($boxbr_links); $i++) {
						echo "<div class='boxbr'>";
							echo "<span></span>";
							echo "<div class='contentbr'>";
								echo "<h2>".$boxbr_h2[$i]."</h2>";
								echo "<p>".$boxbr_p[$i]."</p>";
								echo $boxbr_links[$i];
							echo "</div>";
						echo "</div>";
					}
				?>
			</div>
			<!-- cloud -->
			<div class="containerara" style="width:30%;">
				<div class="clouds"></div>
			</div>
		</div>
		<!-- layout 4 3 card-->
		<div>
			<div class="containerabba">
				<?php
					for($i = 0; $i < count($boxabba_h2) || $i < count($boxabba_p) || $i < count($boxabba_links); $i++) {
						echo "<div class='boxabba'>";
							echo "<span></span>";
							echo "<div class='contentabba'>";
								echo "<h2>".$boxabba_h2[$i]."</h2>";
								echo "<p>".$boxabba_p[$i]."</p>";
								echo "<a href='#'>".$boxabba_links[$i]."</a>";
							echo "</div>";
						echo "</div>";
					}
				?>
			</div>
		</div><hr style="border:2px solid orange;">
		<!-- slide 3d -->
		<div class="containeradd" style="background-color: black;height:650px; display:flex; justify-content:center;
        align-items: center;transform-style: preserve-3d;">
			<div class="boxadd">
				<?php
					for($i = 0; $i < count($styles) || $i < count($h2); $i++) {
						echo "<span style='".$styles[$i]."'><h2>".$h2[$i]."</h2></span>";
					}
				?>
			</div>
			<div class="btnsadd" style="background-color: black;">
				<div class="btnadd prevadd"></div>
				<div class="btnadd nextadd"></div>
			</div>
		</div>
		<!-- layout 5 hình vuông quay bên trái và thẻ bên phải -->
		<div style="width:100%; height:600px;position:relative;display:flex;justify-content:space-around;
		background:linear-gradient(#00EAFF, #4D3589, #BADAFF, #0025CE); ">
			<div class="cubeabc" style="width:30%;">
				<div class="topabc"><h1 style="font-size:25px;color:red;text-align:center;">
					<a href="" style="color:yellow">BlockChain</a><br><br>
					<a href="" style="color:yellow">BigData</a><br><br>
					<a href="work_online/index.html" style="color:yellow">Việc Làm</a></h1>
				</div>
				<div>
					<span style="--i:0;"><h1 style="font-size: 25px; text-align:center;">
					<a href="" style="color:yellow">bảng thống kê các vụ tấn công mạng</a></h1></span>
					<span style="--i:1;"><h1 style="font-size: 25px; text-align:center;">
					<a href="" style="color:yellow">phòng trưng bày/ triển lãm</a></h1></span>
					<span style="--i:2;"><h1 style="font-size: 30px; text-align:center;">
					<a href="super_market/index.php" style="color:yellow">Super Market</a></h1></span>
					<span style="--i:3;"><h1 style="font-size: 25px; text-align:center;">
					<a href="" style="color:yellow">Bách Khoa Toàn Thư</a></h1></span>
				</div>
			</div>
			<div class="containerads" style="width:70%;">
				<?php
					for($i = 0; $i < count($cardads_h2) || $i < count($cardads_p) || $i < count($imgBxads) ||
					$i < count($textBxads) || $i < count($style_card) || $i < count($readmore_links); $i++) {
						echo "<div class='cardads' style='".$style_card[$i]."'>";
							echo "<div class='contentads'>";
								echo "<h2>".$cardads_h2[$i]."</h2>";
								echo "<p>".$cardads_p[$i]."</p>";
								echo $readmore_links[$i];
							echo "</div>";
							echo "<div class='imgBxads'>";
								echo "<img src='".$imgBxads[$i]."' style='width: 100px;height:100px'>";
							echo "</div>";
							echo "<div class='textBxads'>";
								echo "<h2>".$textBxads[$i]."</h2>";
							echo "</div>";
						echo "</div>";
					}
				?>
			</div>
		</div>
		<!-- layout 6 ba thẻ thẳng hàng -->
		<div class="containerer" style="background-color: black;height:500px;">
			<?php
				for($i = 0; $i < count($carder_h3) || $i < count($carder_style) || $i < count($carder_redmores); $i++) {
					echo "<div class='carder' style='".$carder_style[$i]."'>";
						echo "<div class='boxer'>";
							echo "<div class='iconer'>";
								echo "<div class='iconBoxer'></div>";
							echo "</div>";
							echo "<div class='contenter'>";
								echo "<h3>".$carder_h3[$i]."</h3>";
								echo "<p></p>";
								echo $carder_redmores[$i];
							echo "</div>";
						echo"</div>";
					echo"</div>";
				}
			?>
		</div>
		<!-- time line -->
		<div class="wrapperabv">
			<div class="center-lineabv">
				<a href="#" class="scroll-iconabv"><i class="fas fa-caret-up"></i></a>
			</div>
			<?php
				for($i = 0; $i < count($row_1abv) || $i < count($title_rows1) ||$i < count($span_row1) ||
				$i < count($row_2abv) || $i < count($title_rows2) ||$i < count($span_row2); $i++) {
					echo "<div class='rowabv ".$row_1abv[$i]."'>";
						echo "<section>";
							echo "<i class='icon fas fa-home'></i>";
							echo "<div class='detailsabv'>";
								echo "<span class='titleabv'>".$title_rows1[$i]."</span>";
								echo "<span>".$span_row1[$i]."</span>";
							echo "</div>";
							echo "<p>bắt đầu phát hành và bản thử nghiệm đầu tiên năm 2022. mới bắt đầu thực hành mà chỉ có html và css đơn giản thôi :))</p>";
							echo "<div class='bottomabv'>";
								echo "<a href='#'>Read more</a>";
								echo "<i>- Someone famous</i>";
							echo "</div>";
						echo "</section>";
					echo "</div>";
					echo "<div class='rowabv ".$row_2abv[$i]."'>";
						echo "<section>";
							echo "<i class='icon fas fa-home'></i>";
							echo "<div class='detailsabv'>";
								echo "<span class='titleabv'>".$title_rows2[$i]."</span>";
								echo "<span>".$span_row2[$i]."</span>";
							echo "</div>";
								echo "<p>năm 2023 đã có 4 bản thử nghiệm nhưng không thành công. à ừ do thiếu kiến thức đó mà phải học thêm thôi mặc dù lần này đã có thêm javascript cơ bản // đến 2024 hehe đã có bản mới nhất và có thể đi vào hoạt động rồi bổ sung thêm php ajax cơ sở dữ liệu mysql gần xong rồi đs phải học backend và bảo mật và luyện datastructure and algorithms nữa chứ :))</p>";
							echo "<div class='bottomabv'>";
								echo "<a href='#'>Read more</a>";
								echo "<i>- Someone famous</i>";
							echo "</div>";
						echo "</section>";
					echo "</div>";
				}
			?>
		</div>
		<!-- slide show -->
		<div class="show_slides" style="width: 100%;height:250px;border:1px solid black;
		text-align:center;padding:5px;">
			<?php
				for($i = 0; $i < count($value_slides); $i++) {
					echo "<div class='Slide_S'>".$value_slides[$i]."</div>";
				}
			?>
		</div>
		<script>
			// slide show 
			{
				let Slide_Index = 0;
				show_slides();
				function show_slides() {
					let slides_S = document.getElementsByClassName('Slide_S');
					for(let i = 0; i < slides_S.length; i++) {
						slides_S[i].style.display = "none";
					}
					Slide_Index++;
					if(Slide_Index > slides_S.length) {
						Slide_Index = 1;
					}
					slides_S[Slide_Index-1].style.display = "block";
					setTimeout(show_slides, 3000);
				}
			}
		</script>
		<!-- FaQ -->
		<div style="display: flex;align-items: center;justify-content: center;min-height: 100vh;background: #7d2ae8;padding: 40px;">
			<div class="accordion">
				<div class="image-box">
					<img src="Images/mainImg.png" alt="">
				</div>
				<div class="accordion-text">
					<div class="title">FAQ</div>
					<ul class="faq-text">
						<?php
							for($i = 0; $i < count($question) || $i < count($question_p); $i++) {
								echo "<li>";
									echo "<div class='question-arrow'>";
										echo "<span class='question'>".$question[$i]."</span>";
										echo "<i class='bx bxs-chevron-down arrow'></i>";
									echo "</div>";
									echo "<p>".$question_p[$i]."</p>";
									echo "<span class='line'></span>";
								echo "</li>";
							}
						?>
					</ul>
				</div>
			</div>
		</div>
		<script>
			{
				let li = document.querySelectorAll(".faq-text li");
				for (var i = 0; i < li.length; i++) {
					li[i].addEventListener("click", (e)=>{
					let clickedLi;
					if(e.target.classList.contains("question-arrow")){
						clickedLi = e.target.parentElement;
					} else {
						clickedLi = e.target.parentElement.parentElement;
					}
					clickedLi.classList.toggle("showAnswer");
					});
				}
			}
		</script>
		<!-- footer -->
		<section class="footer">
			<div class="footer-row">
				<?php
					for($i = 0; $i < count($footer_col_h4) || $i < count($links_1) ||$i < count($links_2) ||
					$i < count($links_3) ||$i < count($links_4) ||$i < count($links_5); $i++) {
						echo "<div class='footer-col'>";
							echo "<h4>".$footer_col_h4[$i]."</h4>";
							echo "<ul class='links'>";
								echo "<li><a href='#'>".$links_1[$i]."</a></li>";
								echo "<li><a href='#'>".$links_2[$i]."</a></li>";
								echo "<li><a href='#'>".$links_3[$i]."</a></li>";
								echo "<li><a href='#'>".$links_4[$i]."</a></li>";
								echo "<li><a href='#'>".$links_5[$i]."</a></li>";
							echo "</ul>";
						echo "</div>";
					}
				?>
				<div class="footer-col">
					<h4>Newsletter</h4>
					<p>Subscribe to our newsletter for a weekly doseof news, updates, helpful tips, and exclusive offers.</p>
					<form action="#">
						<input type="text" placeholder="Your email" required>
						<button type="submit">SUBSCRIBE</button>
					</form>
					<div class="icons">
						<i class="fa-brands fa-facebook-f"></i>
						<i class="fa-brands fa-twitter"></i>
						<i class="fa-brands fa-linkedin"></i>
						<i class="fa-brands fa-github"></i>
					</div>
				</div>
			</div>
		</section>
		<script src="script.js"></script>
	</body>
</html>