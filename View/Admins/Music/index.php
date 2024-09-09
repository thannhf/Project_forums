<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
	$dbname = "epiz_34032857_zeroday_exploid";
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    mysqli_query($conn,"SET NAMES 'UTF8'");
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Music Player</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div class="containerMusic">
            <div style="width:100%; height:300px; border:2px solid orange; padding:5px;">
                <h2 id="songName" style="color:white; text-align:center;">Chọn một bài hát</h2><br />
                <p id="songAuthor" style="color:orange; text-align:center;"></p><br />
                <audio id="audioPlayer" controls style="width: 100%; display: none;">
                    <source id="audioSource" src="" type="audio/mpeg">
                </audio><br />
                <div class="containerButton" style="border:2px solid orange; padding:5px; display:flex; justify-content:space-around;">
                    <button onclick="previousSong()" style="cursor:pointer; padding:5px;"><<<</button>
                    <button onclick="playCurrentSong()" style="cursor:pointer; padding:5px;">Play</button>
                    <button onclick="pauseCurrentSong()" style="cursor:pointer; padding:5px;">Pause</button>
                    <button onclick="nextSong()" style="cursor:pointer; padding:5px;">>>></button>
                    <button onclick="replaySong()" style="cursor:pointer; padding:5px;">Replay</button>
                </div>
            </div>
            <h1 style="text-align: center;">List Music</h1>
            <ul id="musicList">
                <?php
                    $sql = "SELECT * FROM music";
                    $result = $conn->query($sql);
                    if($result->num_rows > 0){
                        while($row = $result->fetch_assoc()){
                            echo "<li onclick='playMusic(".$row['id'].")' data-id='".$row['id']."' data-name='".$row['Name_music']."' data-author='".$row['author']."' data-path='file_music/".$row['path']."'>"
                                    . $row['Name_music'] . " - " . $row['author'] .
                                "</li>";
                        }
                    } else {
                        echo "Không có bài hát nào.";
                    }
                ?>
            </ul>
        </div>

        <div class="containerContent">
            <div class="showContentMusic" id="musicDetails">
                <div class="logo" style="width:200px; height:200px; border:3px solid orange; margin-top: 40px; margin-left:40px; border-radius: 20px; overflow:hidden; cursor:pointer;">
                    <img src="Image/Favicon.png" alt="Logo" style="width:100%; height:100%;">
                </div>
                <div style="width:650px; height: 250px; margin-top: 2.5%; overflow:hidden; box-shadow: -10px 10px 20px white;">
                    <div class="slide1" style="width:100%; height:100%;"><img src="Image/Band1.jpg" alt="" style="width:100%; height:100%;"></div>
                    <div class="slide1" style="width:100%; height:100%;"><img src="Image/Band2.jpg" alt="" style="width:100%; height:100%;"></div>
                    <div class="slide1" style="width:100%; height:100%;"><img src="Image/Band3.jpg" alt="" style="width:100%; height:100%;"></div>
                </div>
                <script>
                    let SlideIndex = 0;
                    setInterval(() => {
                        let slideElement = document.getElementsByClassName("slide1");
                        for(let i = 0; i < slideElement.length; i++) {
                            slideElement[i].style.display = "none";
                        }
                        SlideIndex++;
                        if(SlideIndex > slideElement.length){
                            SlideIndex = 1;
                        }
                        slideElement[SlideIndex - 1].style.display = "block";
                    }, 3000);
                </script>
            </div><br />

            <div class="showContentMusic" style="width: 100%; height: 455px; display: flex; justify-content: space-around; background-color: white;">
                <div class="subContainer-content-left" style="width:30%; height:100%; border:2px solid orange; position:absolute; left:0; background-color:black;">
                    <h1 style="color:orange; text-align:center;">Nghệ Sĩ</h1>
                </div>
                <div class="subContainer-content-right" style="width:67%; height:100%; border:2px solid orange; position:absolute; right: 0; background-color:black;">
                    
                </div>
            </div>
        </div>

        <script src="script.js"></script>
    </body>
</html>
<?php $conn->close(); ?>