//hiệu ứng slideshow
{
	let IndexSlide = 0;
	showSlide();
	function showSlide() {
		let slide = document.getElementsByClassName('slide');
		let lengthSlide = slide.length;
		for(let i = 0; i < lengthSlide; i++){
			slide[i].style.display = "none";
		}
		IndexSlide++;
		if(IndexSlide > slide.length){
			IndexSlide = 1;
		}
		slide[IndexSlide - 1].style.display = "block";
		setTimeout(showSlide, 3000);
	}
}
// xuống dòng mỗi khi nhấn enter
{
	const textarea = document.getElementById('content');
	textarea.addEventListener('keydown', function(event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			textarea.execCommand('insertLineBreak');
		}
	});
}