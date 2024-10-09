const nav_links = document.querySelector('.nav__links'),
nav_toggle_btn = document.querySelector('.nav__toggle-btn');

const links = document.querySelectorAll('.nav__links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});


const toggler = () => {
    let nav_icon = nav_toggle_btn.firstElementChild;
    if (nav_icon.classList.contains("uil-bars")) {
        nav_icon.classList.replace('uil-bars','uil-multiply');
        nav_links.style.display = "flex";
    }else{
        nav_icon.classList.replace('uil-multiply','uil-bars');
        nav_links.style.display = "none";
    }
}

nav_toggle_btn.addEventListener("click",toggler);

