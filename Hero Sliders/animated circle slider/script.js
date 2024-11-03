const rotateBtn = document.querySelector('.rotate-btn'),
 slides = document.querySelectorAll('.bg-slide'),
 total_slides = slides.length;

 let index = 0;

 rotateBtn.addEventListener("click" , () => {
    rotateBtn.classList.add('active');
    setTimeout(() => {
        rotateBtn.classList.remove('active');
    },2100);

    slides.forEach(slide => {
        if(slide.classList.contains('active')) {
            slide.classList.add("after-active");
        }else {
            slide.classList.remove("after-active");
        }
    });


     slides[index].classList.remove("active");

    index++;

    if(index == total_slides){
        index = 0;
    }

    slides[index].classList.add("active");

 });