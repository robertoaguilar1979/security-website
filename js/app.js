//navigation 
const openButton = document.querySelector(".nav-open");
const closeButton = document.querySelector(".nav-close");
const navigation = document.querySelector(".mobile-nav");
//link from navigation
const list = document.querySelectorAll(".nav-item");
//up arrow scroll
const upArrow = document.querySelector(".upScroll");


//removes mobile nav when clicking on link
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", () => {
        navigation.classList.remove("open");
    })
}

//open clicking on hamburger icon
openButton.addEventListener("click", () => {
    navigation.classList.add("open");
});

//removes navigation when clicking X in mobile navigation
closeButton.addEventListener("click", () => {
    navigation.classList.remove("open");
});

// moves view screen to top of website
upArrow.addEventListener("click", () => {
    window.scrollTo(0, 0);
})

//makes up arrow appear when its down 700px
window.addEventListener("scroll", e => {

    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        upArrow.classList.add("visible");
    } else {
        upArrow.classList.remove("visible");
    }
});