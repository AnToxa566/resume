class Navigation {
    toggleNavVisibilityOnClick(toggleBtn, nav) {
        toggleBtn.onclick = event => {
            event.preventDefault();
            this.toggleNavVisibility(nav);
        };
    }
    
    toggleNavVisibility(nav) {
        nav.style.visibility = nav.style.visibility === 'visible' ? 'hidden' : 'visible'
    }
}

export default new Navigation