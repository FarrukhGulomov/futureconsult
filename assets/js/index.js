var ready = function (cb) {
    // Check if the `document` is loaded completely
    document.readyState === "loading"
        ? document.addEventListener("DOMContentLoaded", function (e) {
            cb();
        })
        : cb();
};

// Usage
ready(function () {
    //   Loader //
    const loader = document.querySelector('.loader');
    setTimeout(function () {
        loader.style.opacity = '0';
        setTimeout(function () {
            loader.style.display = 'none';
        }, 500);
    }, 2000);

    //Hamburg menu //
    const hamburg = document.querySelector('.openBtn');
    const navbar = document.querySelector('.navbar');
    const language = document.querySelector('.multiple-language');
    const logo = document.querySelector('.navbar-brand');
    const navbarNav = document.querySelector('.navbar-nav');
    const closeBtn = document.querySelector('.closeBtn');
    var toggle = false;

    // function
    function navbarFunc() {
        logo.classList.toggle('hide');
        hamburg.classList.toggle('d-none');
        navbar.classList.toggle('slideDown');
        navbarNav.classList.toggle('hide');
        closeBtn.classList.toggle('toggle');
        language.classList.toggle('hide');
    }
    hamburg.addEventListener('click', () => {
        toggle = true;
        if (toggle) {
            navbarFunc();
            toggle = false;
        }
    });
    closeBtn.addEventListener('click', () => {
        if (!toggle) {
            navbarFunc();
        }
    });
    //Multiple language //
    var mainLang = document.querySelector('.main-language');
    var langBox = document.querySelector('.second-languages');
    var secondLanguage = document.querySelector('.lang_btn');
    var is = false;

    function languages() {
        if (is) {
            langsBox.classList.add('d-block');
            setTimeout(function () {
                langsBox.style.opacity = '1';
            }, 100);

        } else {
            langsBox.classList.remove('d-block');
        }
    }

    mainLanguage.addEventListener('mouseover', () => {
        is = true;
        languages();
        is = false;
    });

    langsBox.addEventListener('mouseleave', () => {
        languages();
    });


});

 

