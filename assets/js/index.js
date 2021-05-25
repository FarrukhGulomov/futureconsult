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
    var loader = document.querySelector('.loader');
    setTimeout(function () {
        loader.style.opacity = '0';
        setTimeout(function () {
            loader.style.display = 'none';
        }, 500);
    }, 2000);

    //Hamburg menu //
    var hamburg = document.querySelector('.openBtn');
    var navbar = document.querySelector('.navbar');
    var language = document.querySelector('.multiple-language');
    var logo = document.querySelector('.navbar-brand');
    var navbarNav = document.querySelector('.navbar-nav');
    var closeBtn = document.querySelector('.closeBtn');
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
        console.log('helloooo')
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

 

