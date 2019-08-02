const menu = document.querySelector("#hamburger");
const page = document.querySelector('body');
const hideMe = document.querySelector('.show');
const nav = document.querySelector('nav');
const para = document.querySelector('#secondPara')

menu.addEventListener('click', function () {
   
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        page.classList.remove('page-active');
        hideMe.classList.remove('testId');
        nav.classList.remove('navigator');
        para.classList.add('hideMe');
    } else {
        menu.classList.add('active');
        page.classList.add('page-active');
        hideMe.classList.add('testId');
        nav.classList.add('navigator')
        para.classList.remove('hideMe');
    }

    console.log()

        
})