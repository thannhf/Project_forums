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