// logic form register
{
    let label = document.querySelectorAll('label').forEach(label => {
        label.innerHTML = label.innerText.split('').map((letters, i) =>`<span style="transition-delay:${i * 50}ms">${letters}</span>`).join('');
    })
}

// logic slieshow
{
    let IndexSlide = 0;
    showSlide();
    function showSlide() {
        let slide = document.getElementByClassName('slide');
        let lengthSlide = slide.length;
        for(let i = 0; i < lengthSlide; i++) {
            slide[i].style.display = "none";
        }
        IndexSlide++;
        if(IndexSlide > slide.length) {
            IndexSlide = 1;
        }
        slide[IndexSlide - 1].style.display = "block";
        setTimeout(showSlide, 3000);
    }
}