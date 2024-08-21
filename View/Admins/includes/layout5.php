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