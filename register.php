<!DOCTYPE html>
<html>
    <head>
        <title>Register Forums</title>
        <meta charset="UTF-8">
        <link rel="icon" type="image/x-icon" href="Images/Favicon.png">
        <link rel="stylesheet" href="css/register.css">
    </head>
    <body>
        <?php
            require_once ("connect.php");
            if(isset($_POST["btn_submit"])) {
                $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
                $password = filter_input(INPUT_POST, "pass", FILTER_SANITIZE_SPECIAL_CHARS);
                $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
                $passwordC = filter_input(INPUT_POST, "passC", FILTER_SANITIZE_SPECIAL_CHARS);

                if($username == "" || $password == "" || $email == "" || $passwordC == "") {
                    echo "<script>alert('vui long nhap day du thong tin')</script>";
                } else {
                    $sql = "SELECT * FROM userss WHERE username = '$username'";
                    $kt = mysqli_query($conn, $sql);

                    if(mysqli_num_rows($kt) > 0) {
                        echo "<script>tai khoan da ton tai</script>";
                    } else {
                        $sql = "INSERT INTO userss(username, email, password) 
                        VALUES('$username', '$email', '$password')";
                        mysqli_query($conn, $sql);

                        if($passwordC != $password) {
                            echo "<script>alert('mat khau nhap lai khong chinh xac')</script>";
                        } else if($passwordC === $password) {
                            echo "<script>alert('chuc mung ban da dang ky thanh cong')</script>";
                        }
                    }
                }
            }
        ?>
        <div style="width:100%; display:flex; justify-content:space-around; overflow:hidden">
            <!-- layout left -->
            <div style="width:45%; border:1px solid orange; overflow-x:auto;overflow-y:hidden">
                <header style="width:100%; height:250px; border:1px solid orange; background-color:black; overflow:hidden">
                    <?php
                        require_once ("file_data_form/data_image_register.php");
                        echo "<div id='slide_show-container' style='width:100%'>";
                            for($i = 0; $i < count($linkImage); $i++) {
                                echo "<div class='slide'>";
                                    echo "<img src='Images/".$linkImage[$i]."' style='width:100%; height:250px;'/>";
                                echo "</div>";
                            }
                        echo "</div>";
                    ?>
                </header>

                <div style="width:100%; height:427px; border:2px solid blue; overflow-x:hidden; overflow-y:auto; display:flex; justify-content:space-around">
                    <article style="width:30%; background-color:black; overflow-x:hidden; border-radius:20px; color:white; padding:8px">
                    <h4>Challenges</h4><br><hr>
						<h4>Get Informed</h4><br><hr>
						<h4>Get Involved</h4><br><hr>
						<h4>Communicate</h4><br><hr>
						<h4>About HTS</h4><br><hr>
						<h4>Partners</h4><br><hr>
						<h4>Donate</h4><br><hr><br>
						<p>liên hệ với tôi tại: </p>
                        <address style="overflow-x:auto; color:greenyellow;">thanhnguyen126agz@gmail.com</address><br>
                        <h4 style="font-style:Italic;">@copyright - 2024</h4>
                    </article>
                    
                    <?php
                        echo "<article style='width:65%; background-color:black; overflow-x:hidden; border-radius:20px; color:orange; padding:8px'>";
                            echo "<p style='text-align:center;'>".$text_register."</p>";
                        echo "</article>";
                    ?>
                </div>
            </div>

            <!-- layout right -->
            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST" style="width:45%">
                <h2>Register Forums</h2>
                <div class="inputBox">
                    <input type="text" name="username" id="username" required><label>UserName</label>
                </div>
                <div class="inputBox">
                    <input type="email" name="email" id="email" required><label>email</label>
                </div>
                <div class="inputBox">
                    <input type="password" name="pass" id="pass" required><label>password</label>
                </div>
                <div class="inputBox">
                    <input type="password" name="passC" id="passC" required><label>confirm password</label>
                </div>
                <div class="inputBox">
                    <input type="submit" value="Dang ky" name="btn_submit">
                </div>
                <p>Already have an account ? <a href="login.php">Login</a></p>
                <p><a href="">dieu khoan</a> va <a href="#">dich vu</a> ban can phai nam ro</p>
            </form>
        </div>
        <script src="javascript/register.js"></script>
    </body>
</html>