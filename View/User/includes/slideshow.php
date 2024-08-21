<!-- slide show -->
<div class="show_slides" style="width: 100%;height:250px;border:1px solid black;
text-align:center;padding:5px;">
    <?php
        for($i = 0; $i < count($value_slides); $i++) {
            echo "<div class='Slide_S'>".$value_slides[$i]."</div>";
        }
    ?>
</div>
<script>
    // slide show 
    {
        let Slide_Index = 0;
        show_slides();
        function show_slides() {
            let slides_S = document.getElementsByClassName('Slide_S');
            for(let i = 0; i < slides_S.length; i++) {
                slides_S[i].style.display = "none";
            }
            Slide_Index++;
            if(Slide_Index > slides_S.length) {
                Slide_Index = 1;
            }
            slides_S[Slide_Index-1].style.display = "block";
            setTimeout(show_slides, 3000);
        }
    }
</script>