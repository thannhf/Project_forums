<<<<<<< HEAD
<!-- FaQ -->
<div style="display: flex;align-items: center;justify-content: center;min-height: 100vh;background: #7d2ae8;padding: 40px;">
    <div class="accordion">
        <div class="image-box">
            <img src="Images/mainImg.png" alt="">
        </div>
        <div class="accordion-text">
            <div class="title">FAQ</div>
            <ul class="faq-text">
                <?php
                    for($i = 0; $i < count($question) || $i < count($question_p); $i++) {
                        echo "<li>";
                            echo "<div class='question-arrow'>";
                                echo "<span class='question'>".$question[$i]."</span>";
                                echo "<i class='bx bxs-chevron-down arrow'></i>";
                            echo "</div>";
                            echo "<p>".$question_p[$i]."</p>";
                            echo "<span class='line'></span>";
                        echo "</li>";
                    }
                ?>
            </ul>
        </div>
    </div>
</div>
<script>
    {
        let li = document.querySelectorAll(".faq-text li");
        for (var i = 0; i < li.length; i++) {
            li[i].addEventListener("click", (e)=>{
            let clickedLi;
            if(e.target.classList.contains("question-arrow")){
                clickedLi = e.target.parentElement;
            } else {
                clickedLi = e.target.parentElement.parentElement;
            }
            clickedLi.classList.toggle("showAnswer");
            });
        }
    }
=======
<!-- FaQ -->
<div style="display: flex;align-items: center;justify-content: center;min-height: 100vh;background: #7d2ae8;padding: 40px;">
    <div class="accordion">
        <div class="image-box">
            <img src="Images/mainImg.png" alt="">
        </div>
        <div class="accordion-text">
            <div class="title">FAQ</div>
            <ul class="faq-text">
                <?php
                    for($i = 0; $i < count($question) || $i < count($question_p); $i++) {
                        echo "<li>";
                            echo "<div class='question-arrow'>";
                                echo "<span class='question'>".$question[$i]."</span>";
                                echo "<i class='bx bxs-chevron-down arrow'></i>";
                            echo "</div>";
                            echo "<p>".$question_p[$i]."</p>";
                            echo "<span class='line'></span>";
                        echo "</li>";
                    }
                ?>
            </ul>
        </div>
    </div>
</div>
<script>
    {
        let li = document.querySelectorAll(".faq-text li");
        for (var i = 0; i < li.length; i++) {
            li[i].addEventListener("click", (e)=>{
            let clickedLi;
            if(e.target.classList.contains("question-arrow")){
                clickedLi = e.target.parentElement;
            } else {
                clickedLi = e.target.parentElement.parentElement;
            }
            clickedLi.classList.toggle("showAnswer");
            });
        }
    }
>>>>>>> 65cc91a7 (update code)
</script>