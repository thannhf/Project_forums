<?php
    session_start();
    ini_set('session.entropy_file', "/dev/urandom");
    ini_set('session.hash_function', 'SHA256');
?>
<html>
    <head>
        <title>trang dang nhap</title>
        <meta charset="utf-8">
        <link rel="icon" type="image/x-icon" href="Images/Favicon.png">
        <link rel="stylesheet" href="css/login.css">
    </head>
    <body style="background-color:black;">
        <?php
            require_once ("connect.php");
            if(isset($_POST['btn_submit'])) {
                $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
                $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);

                if($username == "" || $password == "") {
                    echo "<script>alert('username and password khong duoc de trong')</script>";
                } else {
                    $sql = "SELECT * FROM userss Where username = '$username' and password = '$password'";
                    $query = mysqli_query($conn, $sql);
                    $num_rows = mysqli_num_rows($query);
                    if($num_rows == 0) {
                        echo "<script>alert('ten dang nhap hoac mat khau khong dung')</script>";
                    } else {
                        $_SESSION['username'] = $username;
                        header('Location: Dark_Websites/Home_forums.php');
                    }
                }
            }
        ?>

        <div class="box">
            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
                <h2>Login</h2>
                <label style="text-align:left">Username:</label>
                <input type="text" name="username" placeholder="username">
                <label>Password:</label>
                <input type="password" name="password" placeholder="password">
                <input type="submit" value="login" name="btn_submit">
                <div class="group">
                    <a href="#">forget password</a>
                    <a href="#">sign up</a>
                </div>
            </form>
        </div>
    </body>
</html>