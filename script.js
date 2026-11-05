const buttons = document.querySelectorAll(".tab-button");
const pages = document.querySelectorAll(".page");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const target = button.dataset.page;

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        pages.forEach(page => {
            page.hidden = true;
            page.classList.remove("active");
        });

        const selectedPage = document.getElementById(target);

        if (selectedPage) {
            selectedPage.hidden = false;
            selectedPage.classList.add("active");
        }
    });
});