{
    const hi = () => {
        console.log("hi!")
    };

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("changeBackground");

        themeName.innerHTML = body.classList.contains("changeBackground") ? "ciemne" : "jasne";
    };

    const toggleTextColor = () => {
        const body = document.querySelector(".body");
        const secondThemeName = document.querySelector(".js-secondThemeName");

        body.classList.toggle("changeText");

        secondThemeName.innerText = body.classList.contains("changeText") ? "Wyłącz" : "Włącz";

    };

    const init = () => {
        const button = document.querySelector(".js-button");
        const secondButton = document.querySelector(".js-secondButton");

        button.addEventListener("click", toggleBackground);
        secondButton.addEventListener("click", toggleTextColor);

        hi();
    };
    init();
}