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
        var loader = document.querySelector(".loader");
        setTimeout(function () {
            loader.style.opacity = "0";
            setTimeout(function () {
                loader.style.display = "none";
            }, 500);
        }, 2000);

        //Hamburg menu //
        var hamburg = document.querySelector(".openBtn");
        var navbar = document.querySelector(".navbar");
        var language = document.querySelector(".multiple-language");
        var logo = document.querySelector(".navbar-brand");
        var navbarNav = document.querySelector(".navbar-nav");
        var link = navbarNav.querySelectorAll('li a');
        var closeBtn = document.querySelector(".closeBtn");
        var toggle = false;


        // function Toggle menu
        function navbarFunc() {
            logo.classList.toggle("hide");
            hamburg.classList.toggle("d-none");
            navbar.classList.toggle("slideDown");
            navbarNav.classList.toggle("hide");
            closeBtn.classList.toggle("toggle");
            language.classList.toggle("hide");

        }

        hamburg.addEventListener("click", (e) => {
            e.preventDefault();
            toggle = true;

            if (toggle) {
                navbarFunc();
                toggle = false;
                scrollTop.classList.remove("active-btn");
                navbar.classList.toggle('mainbg');
                // link.style.color = "#fefefe";

            }
        });
        closeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (!toggle) {
                navbarFunc();
                navbar.classList.toggle('mainbg');
            }
        });
        //Multiple language //
        const multiLang = document.querySelector(".multiple-language");
        const mainLang = document.querySelector(".main_lang");
        const langBox = document.querySelector(".lang_Box");
        const langTwo = document.querySelectorAll(".lang_two");

        multiLang.addEventListener("mouseover", () => {

            langBox.classList.add("active-lang_Box");


            langTwo.forEach(value => {
                value.addEventListener("click", () => {

                });

            });


        });

        multiLang.addEventListener("mouseleave", () => {

            setTimeout(() => {

                langBox.classList.remove("active-lang_Box");
            }, 300);


        });

        const scrollTop = document.querySelector(".scrolltop");
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                scrollTop.classList.add("active-btn");
                navbar.classList.add("active-navbar");
            } else {
                scrollTop.classList.remove("active-btn");
                navbar.classList.remove("active-navbar");

            }


        });

        // Filter state universities
        const filter = document.querySelector(".filter");
        var box = document.querySelectorAll(".box");
        var lists = document.querySelectorAll(".list");
        filter.addEventListener("click", (event) => {
            var listState = event.target.getAttribute("data-filter");
            if (event.target.tagName == "LI") {
                box.forEach((card) => {
                    card.classList.remove("d-none");
                    if (!card.classList.contains(listState) && listState != "All")
                        card.classList.add("d-none");
                    lists.forEach((list) => {
                        list.classList.remove("active-state");
                    });
                    event.target.classList.toggle("active-state");
                });
            }
        });


    });



