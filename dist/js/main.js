// Select dom Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menunav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
 //Set Initial State Of the Menu
 let ShowMenu = false;

 menuBtn.addEventListener('click',toggleMenu);

 function toggleMenu() {
     if(!ShowMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menunav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // reset the menu state

        ShowMenu = true;
     } else {

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menunav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // reset the menu state

        ShowMenu = false;

     }
 }