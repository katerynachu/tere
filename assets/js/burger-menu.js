const headerBurger = document.querySelector('.header_burger');
const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('.open-btn');
const mobileMenu = document.querySelector('.menu');

headerBurger.addEventListener('click', () => {
    closeBtn.classList.toggle('hidden');
    openBtn.classList.toggle('hidden');
    mobileMenu.classList.toggle('close');

});

const menuItems = document.querySelectorAll('.menu_link');

menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor link behavior
        const target = document.querySelector(item.getAttribute('href'));
        if (target) {
            mobileMenu.classList.add('close');
            closeBtn.classList.toggle('hidden');
            openBtn.classList.toggle('hidden');
            
            window.scrollTo({
                top: target.offsetTop - 120,
                behavior: 'smooth' // Scroll with smooth animation
            });
        }
    });
});

const mediaQuery = window.matchMedia('(min-width: 768px)');

const setMenuState = (mediaQuery) => {
    if (mediaQuery.matches === true) {
        mobileMenu.classList.remove('close');
    } else {
          mobileMenu.classList.add('close');

    
    }
};
setMenuState(mediaQuery);
mediaQuery.addListener(setMenuState);


