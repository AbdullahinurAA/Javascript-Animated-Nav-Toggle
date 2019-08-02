const menu = document.querySelector("#hamburger");
const page = document.querySelector('body');
const hideMe = document.querySelector('.container');

menu.addEventListener('click', function () {
   
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        page.classList.remove('page-active');
        hideMe.classList.remove('testId');
    } else {
        menu.classList.add('active');
        page.classList.add('page-active');
        hideMe.classList.add('testId');
    }

    console.log()

        
})