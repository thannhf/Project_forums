<html>	
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="style.css"/>
		<!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> -->
	</head>
	<body>
		<?php
			require_once 'posts_connect.php';

			// gửi bài viết
			if (isset($_POST['btn_submit'])) {
				$title = filter_var(strip_tags(trim($_POST['title'])), FILTER_SANITIZE_STRING);
				$url = filter_var(strip_tags(trim($_POST['url'])), FILTER_SANITIZE_URL);
				$content = trim($_POST['content']);
				$author = filter_var(strip_tags(trim($_POST['author'])), FILTER_SANITIZE_STRING);

				// upload ảnh
				$image = $_FILES['image'];
				$errors = [];
				$file_name = $image['name'];
				$file_size = $image['size'];
				$file_tmp = $image['tmp_name'];
				$file_ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
				$allowed_extensions = ["jpeg", "jpg", "png"];

				// check type file
				if (!in_array($file_ext, $allowed_extensions)) {
					$errors[] = "Chỉ hỗ trợ upload file JPEG hoặc PNG.";
				}

				// check size file
				if ($file_size > 5 * 1024 * 1024) {
					$errors[] = 'Kích thước file không được lớn hơn 5MB';
				}

				if (empty($errors)) {
					$target = "photo/" . basename($file_name);

					// Upload file image
					if (move_uploaded_file($file_tmp, $target)) {

						// truy vấn SQL
						$stmt = mysqli_prepare($conn, "INSERT INTO contentmembers(title, url, content, image, author) 
						VALUES (?, ?, ?, ?, ?)");
						// insert values vào truy vấn
						mysqli_stmt_bind_param($stmt, "sssss", $title, $url, $content, $target, $author);

						// run truy vấn
						if (mysqli_stmt_execute($stmt)) {
							echo '<script>alert("Đăng bài viết thành công!");</script>';
						} else {
							$error = mysqli_stmt_error($stmt);
							echo '<script>alert("Lỗi khi insert dữ liệu: '.$error.'");</script>';
						}
						mysqli_stmt_close($stmt);
					} else {
						echo '<script>alert("Lỗi khi upload file ảnh");</script>';
					}
				} else {
					// show error
					foreach ($errors as $error) {
						echo '<script>alert("' . $error . '");</script>';
					}
				}
			}

			$sql = "SELECT * FROM `contentmembers` ORDER BY `contentmembers`.`id` DESC";
			$result = mysqli_query($conn, $sql);

			// comment logic
			if (isset($_POST['btn_comment_submit'])) {
				$post_id = $_POST['post_id'];
				$comment_content = filter_var(strip_tags(trim($_POST['comment_content'])), FILTER_SANITIZE_STRING);

				// Insert comment into database
				$stmt = mysqli_prepare($conn, "INSERT INTO comments (post_id, comment_content) VALUES (?, ?)");
				mysqli_stmt_bind_param($stmt, "is", $post_id, $comment_content);

				if (mysqli_stmt_execute($stmt)) {
					echo '<script>alert("Bình luận thành công!");</script>';
				} else {
					$error = mysqli_stmt_error($stmt);
					echo '<script>alert("Lỗi khi bình luận: ' . $error . '");</script>';
				}
				mysqli_stmt_close($stmt);
			}

			if (isset($_POST['like_comment'])) {
				$comment_id = $_POST['comment_id'];

				// Update likes count
				$stmt = mysqli_prepare($conn, "UPDATE comments SET likes = likes + 1 WHERE id = ?");
				mysqli_stmt_bind_param($stmt, "i", $comment_id);

				if (mysqli_stmt_execute($stmt)) {
					echo '<script>alert("Đã like bình luận!");</script>';
				} else {
					$error = mysqli_stmt_error($stmt);
					echo '<script>alert("Lỗi khi like bình luận: ' . $error . '");</script>';
				}
				mysqli_stmt_close($stmt);
			}

			while ($row = mysqli_fetch_array($result)) {
				echo "<div style='width:100%; height:300px;overflow-y:auto;overflow-x:hidden; border:1px solid orange; background-color:black;color:white;'>";
					// title
					echo "<h1 style='text-align:center;border:1px solid orange;'>".$row['title']."<br>"."</h1>";
					// image, author, view_count, id, regdate
					echo "<span style='color:orange;'>" . "<img src=" . $row['image'] . " style='width:40px; height:40px;overflow:hidden;'>";
						echo "người đăng bài: " . $row['author'] . " || ";
						echo "view / favorite: " . $row['view_count'] . " || ";
						echo '<a href="update_view.php?id=' . $row['id'] . '" style="padding:5px; cursor:pointer;background:orange; color:black; border:1px solid black; border-radius:50px;">favorite</a>';  
					echo "</span>";
					echo "<span style='float:right;color:orange;'>times: " . $row['reg_date'] . "</span><br>";
					// content, url
					echo "<div onkeydown='myFunction(event)' id='getValue' style='width:100%;height:auto;overflow:auto;border:2px solid white;'>" . $row['content'] . '<br>' . "</div>";
					echo "<span style='cursor:pointer;width:820px;'>url: " . $row['url'] . "</span>";

					// comments
					echo '<div>';
						echo '<form method="post" action="posts_add.php">';
							echo '<input type="hidden" name="post_id" value="' . $row['id'] . '">';
							echo '<textarea name="comment_content" rows="3" cols="50"></textarea><br>';
							echo '<button type="submit" name="btn_comment_submit">Bình luận</button>';
						echo '</form>';

						$comment_sql = "SELECT * FROM comments WHERE post_id = ".$row['id']." ORDER BY created_at ASC";
						$comment_result = mysqli_query($conn, $comment_sql);
						while ($comment_row = mysqli_fetch_array($comment_result)) {
							echo '<div>';
								echo htmlspecialchars($comment_row['comment_content']);
								echo '<br>Likes: ' . $comment_row['likes'];
								// Like button
								echo '<form method="post" action="posts_add.php">';
									echo '<input type="hidden" name="comment_id" value="'.$comment_row['id'].'">';
									echo '<button type="submit" name="like_comment">Like</button>';
								echo '</form>';
							echo '</div>';
						}
					echo '</div>';
					// echo '<div><a href="posts_edit.php?id='.$row['id'].'">Edit</a></div>|<div><a href="posts_delete.php?id='.$row['id'].'">Delete</a></div>';
				echo "</div><br><br><br>";
			}
			mysqli_close($conn);
		?>
	</body>
</html>