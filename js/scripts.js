const menu = document.querySelector("#hamburger");

menu.addEventListener('click', function () {
   
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }

        
})