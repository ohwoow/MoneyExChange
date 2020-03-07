



const toggle = document.querySelector('.nav__toggle');
const navMobile = document.querySelector('.nav__site--mobile');



    toggle.addEventListener('click', (event) => {
    event.preventDefault();

    navMobile.classList.toggle('active');
    toggle.classList.toggle('active');
});
