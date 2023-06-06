class Header {
    updateHeaderOnScroll(header, className) {
        document.onscroll = () => this.updateHeaderBasedOnScrollY(header, className)
    }

    updateHeaderBasedOnScrollY(header, className) {
        this.isScrollYZero() ? header.classList.remove(className) : header.classList.add(className);
    }

    isScrollYZero = () => scrollY === 0;
}

export default new Header