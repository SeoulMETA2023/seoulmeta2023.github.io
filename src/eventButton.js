const eventButton = document.getElementsByClassName("eventButton")[0];
const maxButtonShadow = 3;
let buttonShadow = 0;

// mouse auto scroll
eventButton.onclick = function scrollToEvent() {
    const homeHeight = document.getElementsByClassName("home")[0].clientHeight;
    const smallGridHeight = document.getElementsByClassName("smallContentGrid")[0].clientHeight;
    const scroll = homeHeight + (smallGridHeight * 3) - 30;

    window.scrollTo({
    top: scroll,
    left: 0,
    behavior: "smooth"
    });
}
