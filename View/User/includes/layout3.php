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