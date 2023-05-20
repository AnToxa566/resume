// ==========================
// ========= HEADER =========
// ==========================

const header = document.querySelector("header")

document.addEventListener("scroll", event => {
    if (scrollY != 0) {
        header.classList.add("shadow");
    }
    else {
        header.classList.remove("shadow");
    }
})


// ==========================
// ========= MODALS =========
// ==========================

// ========= SHOW MODAL =========

const addClickListenerToShowModal = (buttons, modal) =>{
    const modals = document.querySelectorAll(".modal");

    buttons.forEach(btn => {
        btn.addEventListener("click", event => {
            event.preventDefault();

            modals.forEach(modal => modal.classList.add("d-none"));

            modal.classList.remove("d-none");
            document.body.classList.add("no-scroll");
        })
    })
}


// ========= MODAL CLOSE BUTTON =========

const closeModalButtons = document.querySelectorAll(".modal__dialog__close-link");
const modals = document.querySelectorAll(".modal");

const closeModals = () => {
    document.body.classList.remove("no-scroll");
    modals.forEach(modal => modal.classList.add("d-none"))
}

closeModalButtons.forEach(closeBtn => {
    closeBtn.addEventListener("click", event => {
        event.preventDefault();
        closeModals();
    })
})

document.addEventListener('keydown', event => {
    if (event.code == 'Escape') {
        closeModals();
    }
});


// ========= HIRE ME MODAL =========

addClickListenerToShowModal(document.querySelectorAll(".hire-me-btn"), document.querySelector("#modal-contact"));


// ========= RESUME MODAL =========

addClickListenerToShowModal(document.querySelectorAll(".resume-btn"), document.querySelector("#modal-resume"));


// ========= WORK MODAL =========

// addClickListenerToShowModal(document.querySelectorAll(".work__item"), document.querySelector("#modal-work"));


// ==========================
// ======== FILTERS =========
// ==========================

const filters = document.querySelectorAll("[data-filter]");
const works = document.querySelectorAll("[data-cat]");

filters.forEach(filter => {
    filter.addEventListener("click", event => {
        event.preventDefault();

        works.forEach(work => {
            if (filter.getAttribute('data-filter') == 'all') {
                work.classList.remove('d-none');
            }
            else if (work.getAttribute('data-cat') != filter.getAttribute('data-filter')) {
                work.classList.add('d-none');
            }
            else {
                work.classList.remove('d-none');
            }
        })
    })
})


// ================================
// ======== DOWNLOAD FILE =========
// ================================

const downloadFile = (url, fileName) => {
    const link = document.createElement('a');

    link.href = url;
    link.download = fileName;
    link.target = '_blank';

    link.click();
};

const downloadResumeButtons = document.querySelectorAll('.download-resume');

downloadResumeButtons.forEach(button => button.addEventListener('click', event => {
    event.preventDefault();
    downloadFile('./assets/files/resume.pdf', 'resume.pdf');
}))


// ====================================
// ======== NAVIGATION TOGGLE =========
// ====================================

const navIconLink = document.querySelector('.nav__icon-link');
const headerNav = document.querySelector('#header__nav');

navIconLink.addEventListener('click', event => {
    event.preventDefault();
    headerNav.style.visibility = headerNav.style.visibility === 'visible' ? 'hidden' : 'visible';
});