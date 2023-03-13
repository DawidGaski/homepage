{
    const hi = () => {
        console.log("hi!")
    };

    hi();

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const header__themeName = document.querySelector(".js-themeName");
        body.classList.toggle("changeBackground");
        if (body.classList.contains("changeBackground")) {
            header__themeName.innerText = "ciemne";
        } else {
            header__themeName.innerText = "jasne";
        }
    };

    const toggleTextColor = () => {
        const body = document.querySelector(".body");
        const header__secondThemeName = document.querySelector(".js-secondThemeName");
        body.classList.toggle("changeText");

        header__secondThemeName.innerText = body.classList.contains("changeText") ? "Wyłącz" : "Włącz";

    };

    const init = () => {
        const header__button = document.querySelector(".js-button");
        const header__secondButton = document.querySelector(".js-secondButton");

        header__button.addEventListener("click", toggleBackground);
        header__secondButton.addEventListener("click", toggleTextColor);
    };
    init();
}