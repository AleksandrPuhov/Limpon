$(document).ready(function () {
    const navbar = $("#navbar");
    const navbarBurger = $("#navbar-burger");
    const navbarActiv = "header-navbar-activ";

    const btnRicardo = $("#btn-ricardo");
    const btnAlberto = $("#btn-alberto");
    const btnThomas = $("#btn-thomas");

    btnRicardo.click(function () {
        btnRicardo.hide();
        $("#i-ricardo-1, #i-ricardo-2, #i-ricardo-3, #i-ricardo-4").show();
    });

    btnAlberto.click(function () {
        $("#i-alberto-1, #i-alberto-2, #i-alberto-3, #i-alberto-4").show();
        btnAlberto.hide();
    });
    btnThomas.click(function () {
        $("#i-thomas-1, #i-thomas-2, #i-thomas-3, #i-thomas-4").show();
        btnThomas.hide();
    });

    $(window).scroll(function () {
        const scrolled = $(this).scrollTop();

        if (scrolled > 0) {
            navbar.css({ backgroundColor: "rgb(245, 250, 255)" });
        } else {
            navbar.css({ backgroundColor: "transparent" });
        }
    });

    navbarBurger.click(function () {
        navbar.toggleClass(navbarActiv);
        $("body").toggleClass("lock");
    });
});
