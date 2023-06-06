class Filter {
    applyFilterOnClick(filters, works) {
        filters.forEach(filter => {
            filter.onclick = event => {
                event.preventDefault();

                works.forEach(work => {
                    const isAll = filter.getAttribute('data-filter') === 'all';
                    const isSelectedCat = work.getAttribute('data-cat') === filter.getAttribute('data-filter');

                    if (!isSelectedCat && !isAll) {
                        work.classList.add('d-none');
                        return;
                    }

                    work.classList.remove('d-none');
                })
            }
        })
    }
}

export default new Filter