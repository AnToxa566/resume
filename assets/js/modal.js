class Modal {
    closeAllModals() {
        document.body.classList.remove("no-scroll");
        document.querySelectorAll(".modal").forEach(modal => modal.classList.add("d-none"))
    }
    
    showModal(modal) {
        this.closeAllModals();

        modal.classList.remove("d-none");
        document.body.classList.add("no-scroll");
    }

    addClickListener(buttons, callback) {
        buttons.forEach(btn => {
            btn.onclick = event => {
                event.preventDefault();
                callback();
            }
        })
    }
    
    addClickListenerToShowModal(buttons, modal) {
        this.addClickListener(buttons, () => this.showModal(modal))
    }

    addClickListenerToCloseAllModals(buttons) {
        this.addClickListener(buttons, this.closeAllModals)
    }

    addKeyDownListenerToCloseAllModals(keycode) {
        document.onkeydown = event => {
            if (event.code === keycode) {
                this.closeAllModals();
            }
        }
    }
}

export default new Modal