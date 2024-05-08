"use strict";

window.addEventListener("scroll", function () {
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

function modalInit() {
    // Get the body
    let body = document.querySelector('body')

    // Get the modal
    let modal = document.getElementById('share-modal');

    // Get the button that opens the modal
    let shareButtons = document.querySelectorAll('.share-modal-open-js');

    // Get the <span> element that closes the modal
    let modalClose = modal.querySelector('.modal__close-js');

    if (modal && shareButtons && modalClose) {
        // When the user clicks on the button, open the modal
        shareButtons.forEach((btn) => {
            btn.addEventListener('click', function (e) {
                modal.classList.add('modal__open');
                body.classList.add('modal-open');
            })
        })

        // When the user clicks on <span> (x), close the modal
        modalClose.onclick = function () {
            modal.classList.remove('modal__open');
            body.classList.remove('modal-open');
        }

        // When the user clicks anywhere outside the modal, close it
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.classList.remove('modal__open');
                body.classList.remove('modal-open');
            }
        }
    }
}

modalInit();