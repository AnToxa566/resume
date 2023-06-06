import headerShadow from './header.js'
import navigation from './nav.js'
import filter from './filter.js'
import modal from './modal.js'
import downloadFile from './downloadFile.js'


// Header

headerShadow.updateHeaderOnScroll(document.querySelector(".header"), 'shadow')


// Modals

modal.addClickListenerToShowModal(document.querySelectorAll(".hire-me-btn"), document.querySelector("#modal-contact"));
modal.addClickListenerToShowModal(document.querySelectorAll(".resume-btn"), document.querySelector("#modal-resume"));

modal.addClickListenerToCloseAllModals(document.querySelectorAll(".modal__dialog__close-link"));
modal.addKeyDownListenerToCloseAllModals('Escape');


// Download Resume

downloadFile.addClickListenerToDownloadFile(document.querySelectorAll('.download-resume'), './assets/files/resume.pdf', 'resume.pdf')


// Navigation

navigation.toggleNavVisibilityOnClick(document.querySelector('.nav__icon-link'), document.querySelector('#header__nav'));


// Filter

filter.applyFilterOnClick(document.querySelectorAll("[data-filter]"), document.querySelectorAll("[data-cat]"))