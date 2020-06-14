// <!-- Section 1 - Notification-->
// $('.nav li').click(function(){
//     $(this).addClass('is-active').siblings().removeClass('is-active');
// });

const menuItems = document.querySelectorAll('.nav li');
menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener("click", () => {
        selectMenuItem(index);
    })
})
function selectMenuItem(selectedIndex) {
    menuItems.forEach((menuItem, index) => {
        selectedIndex === index ? menuItem.classList.add("is-active") : menuItem.classList.remove("is-active")
    })
}

// <!-- Section 2 - Alert-->
// $('.grid .item').click(function(){
//     $('.website .alert-element').toggleClass('is-active');
// });

const gridItems = document.querySelectorAll('.grid .item');
const alertElement = document.querySelector('.website .alert-element');
gridItems.forEach((gridItem, index) => {
    gridItem.addEventListener("click", () => {
        alertElement.classList.toggle("is-active");
    })
})


// <!-- Section 3 - Modal-->
// $('.section-modal .profile').click(function(){
//     $('.overlay').addClass('is-active');
//     setTimeout(function(){
//         $('.overlay').removeClass('is-active');
//     }, 5000);
// });

const profile = document.querySelector('.section-modal .profile');
const overlay = document.querySelector('.overlay');
profile.addEventListener("click", () => {
    overlay.classList.add("is-active");
    setTimeout(() => {
        overlay.classList.remove("is-active");
    }, 5000);
})





















