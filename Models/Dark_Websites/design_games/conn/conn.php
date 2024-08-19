<<<<<<< HEAD
<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "epiz_34032857_zeroday_exploid";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Aw gg". $e->getMessage() ."";
}

=======
<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "epiz_34032857_zeroday_exploid";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Aw gg". $e->getMessage() ."";
}

>>>>>>> 65cc91a7 (update code)
?>