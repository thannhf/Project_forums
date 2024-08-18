<!-- footer -->
<section class="footer">
    <div class="footer-row">
        <?php
            for($i = 0; $i < count($footer_col_h4) || $i < count($links_1) ||$i < count($links_2) ||
            $i < count($links_3) ||$i < count($links_4) ||$i < count($links_5); $i++) {
                echo "<div class='footer-col'>";
                    echo "<h4>".$footer_col_h4[$i]."</h4>";
                    echo "<ul class='links'>";
                        echo "<li><a href='#'>".$links_1[$i]."</a></li>";
                        echo "<li><a href='#'>".$links_2[$i]."</a></li>";
                        echo "<li><a href='#'>".$links_3[$i]."</a></li>";
                        echo "<li><a href='#'>".$links_4[$i]."</a></li>";
                        echo "<li><a href='#'>".$links_5[$i]."</a></li>";
                    echo "</ul>";
                echo "</div>";
            }
        ?>
        <div class="footer-col">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for a weekly doseof news, updates, helpful tips, and exclusive offers.</p>
            <form action="#">
                <input type="text" placeholder="Your email" required>
                <button type="submit">SUBSCRIBE</button>
            </form>
            <div class="icons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-github"></i>
            </div>
        </div>
    </div>
</section>