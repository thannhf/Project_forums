<<<<<<< HEAD
{// vô hiệu hóa f12 và ctrl
    document.addEventListener("keydown", function(event){
        if (event.ctrlKey){
            event.preventDefault();
        }
        if(event.keyCode == 123){
            event.preventDefault();
        }
    });
}
{// ngăn chặn sự kiện chuột phải -> inspect || view source code
    document.addEventListener('contextmenu', event => event.preventDefault());
}
{
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildrens = [...carousel.children];
    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });
    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }
    const dragging = (e) => {
        if(!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }
    const infiniteScroll = () => {
        if(carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
        clearTimeout(timeoutId);
        if(!wrapper.matches(":hover")) autoPlay();
    }

    const autoPlay = () => {
        if(window.innerWidth < 800 || !isAutoPlay) return;
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 1500);
    }
    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
}

// cloud
{
    function randomText() {
        var text = ("qwertyuiopasdfghjklzxcvbnm1234567890");
        letter = text[Math.floor(Math.random() * text.length)];
        return letter;
    }
    function rain() {
        let cloud = document.querySelector('.clouds');
        let e = document.createElement('div');
        let left = Math.floor(Math.random() * 310);
        let size = Math.random() * 1.5;
        let duration = Math.random() * 1;

        e.classList.add('text');
        cloud.appendChild(e);
        e.innerText = randomText();
        e.style.left = left + 'px';
        e.style.fontSize = 0.5 + size + 'em';
        e.style.animationDuration = 1 + duration + 's';

        setTimeout(function() {
            cloud.removeChild(e)
        },2000)
    }
    setInterval(function() {
        rain()
    }, 20);
}

// slide 3d
{
    let prev = document.querySelector('.prevadd');
    let next = document.querySelector('.nextadd');
    let box = document.querySelector('.boxadd');
    let degrees = 0;
    prev.addEventListener('click', function() {
        degrees += 45;
        box.style = `transform:perspective(1000px) rotateY(${degrees}deg)`;
    })

    next.addEventListener('click', function() {
        degrees -= 45;
        box.style = `transform:perspective(1000px) rotateY(${degrees}deg)`;
    })
=======
{// vô hiệu hóa f12 và ctrl
    document.addEventListener("keydown", function(event){
        if (event.ctrlKey){
            event.preventDefault();
        }
        if(event.keyCode == 123){
            event.preventDefault();
        }
    });
}
{// ngăn chặn sự kiện chuột phải -> inspect || view source code
    document.addEventListener('contextmenu', event => event.preventDefault());
}
{
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildrens = [...carousel.children];
    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });
    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }
    const dragging = (e) => {
        if(!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }
    const infiniteScroll = () => {
        if(carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
        clearTimeout(timeoutId);
        if(!wrapper.matches(":hover")) autoPlay();
    }

    const autoPlay = () => {
        if(window.innerWidth < 800 || !isAutoPlay) return;
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 1500);
    }
    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
}

// cloud
{
    function randomText() {
        var text = ("qwertyuiopasdfghjklzxcvbnm1234567890");
        letter = text[Math.floor(Math.random() * text.length)];
        return letter;
    }
    function rain() {
        let cloud = document.querySelector('.clouds');
        let e = document.createElement('div');
        let left = Math.floor(Math.random() * 310);
        let size = Math.random() * 1.5;
        let duration = Math.random() * 1;

        e.classList.add('text');
        cloud.appendChild(e);
        e.innerText = randomText();
        e.style.left = left + 'px';
        e.style.fontSize = 0.5 + size + 'em';
        e.style.animationDuration = 1 + duration + 's';

        setTimeout(function() {
            cloud.removeChild(e)
        },2000)
    }
    setInterval(function() {
        rain()
    }, 20);
}

// slide 3d
{
    let prev = document.querySelector('.prevadd');
    let next = document.querySelector('.nextadd');
    let box = document.querySelector('.boxadd');
    let degrees = 0;
    prev.addEventListener('click', function() {
        degrees += 45;
        box.style = `transform:perspective(1000px) rotateY(${degrees}deg)`;
    })

    next.addEventListener('click', function() {
        degrees -= 45;
        box.style = `transform:perspective(1000px) rotateY(${degrees}deg)`;
    })
>>>>>>> 65cc91a7 (update code)
}