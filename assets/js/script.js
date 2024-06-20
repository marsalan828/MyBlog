window.addEventListener('load', function() {
    console.log('hello');
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        let st = window.scrollY;

        if (st === 0) {
            // At the top
            navbar.classList.add('at-top');
            navbar.classList.remove('scrolling-up');
            navbar.classList.remove('scrolling-down');
        } else if (st < lastScroll) {
            // Scrolling up
            navbar.classList.add('scrolling-up');
            navbar.classList.remove('scrolling-down');
            navbar.classList.remove('at-top');
        } else {
            // Scrolling down
            navbar.classList.add('scrolling-down');
            navbar.classList.remove('scrolling-up');
            navbar.classList.remove('at-top');
        }

        lastScroll = st;
    });
});
