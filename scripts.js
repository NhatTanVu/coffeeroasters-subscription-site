window.addEventListener("load", function () {
    document.getElementById("burger").onclick = (e) => {
        e.currentTarget.classList.toggle('opened');
        if (e.currentTarget.classList.contains('opened'))
            e.currentTarget.src = './assets/shared/mobile/icon-close.svg';
        else
            e.currentTarget.src = './assets/shared/mobile/icon-hamburger.svg';
        e.currentTarget.previousElementSibling.classList.toggle('hidden');
        e.currentTarget.previousElementSibling.previousElementSibling.classList.toggle('opened');
        e.currentTarget.previousElementSibling.previousElementSibling.previousElementSibling.classList.toggle('opened');
        e.currentTarget.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.toggle('hidden');
        return false;
    };
    let selectionOptions = document.getElementsByClassName("big-selection-option");
    for (let i = 0; i < selectionOptions.length; i++) {
        selectionOptions[i].addEventListener("click", (e) => {
            let isActive = e.currentTarget.classList.contains('active');
            for (child of e.currentTarget.parentElement.getElementsByClassName("big-selection-option"))
                child.classList.remove('active');
            if (!isActive)
                e.currentTarget.classList.add('active');
            return false;
        });
    }
});