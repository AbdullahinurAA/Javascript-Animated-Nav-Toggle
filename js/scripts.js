const menu = document.querySelector("#hamburger");
const page = document.querySelector('body');

menu.addEventListener('click', function () {
   
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        page.classList.remove('page-active');
    } else {
        menu.classList.add('active');
        page.classList.add('page-active');
    }

    console.log()

        
})