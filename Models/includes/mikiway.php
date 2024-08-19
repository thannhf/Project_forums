<<<<<<< HEAD
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
=======
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
>>>>>>> 65cc91a7 (update code)
</div>