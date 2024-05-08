"use strict";

window.addEventListener("scroll", function() {
    let scroll = window.scrollY || document.documentElement.scrollTop;
    let header = document.querySelector('.header-js');

    if (header) {
        let headerHeight = header.offsetHeight;

        if (scroll > headerHeight) {
            header.classList.add('header--scroll');
        } else {
            header.classList.remove("header--scroll");
        }
    }
});