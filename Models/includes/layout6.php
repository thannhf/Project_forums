<<<<<<< HEAD
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
=======
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
>>>>>>> 65cc91a7 (update code)
</div>