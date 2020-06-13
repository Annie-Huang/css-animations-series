const html = document.querySelector('html');
const body = document.querySelector('body');

// Reason for clicking on html is because the body has nothing in it so it's super small
html.addEventListener("click", () => {
    // So much easier to do with jquery.
    // body.appendChild('<div class="box">alert!</div>');

    let box1 = document.createElement("div");
    box1.classList.add("box")
    box1.innerHTML = 'alert!'
    body.appendChild(box1);
});
