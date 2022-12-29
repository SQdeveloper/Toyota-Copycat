const sliderMove = document.querySelector(".home__slider__sliderMove");
const items = document.querySelectorAll(".slider__sliderMove__item");
const buttons = document.querySelectorAll(".home__button");

// function clickLeft() {
//     let firstElement = docuement.querySelector(".home__slider__sliderMove__item");
//     sliderMove.style
// }
function clickRight() {
    let firstElement = document.querySelector(".home__slider__sliderMove__item");
    sliderMove.style.transition = "transform .6s";
    sliderMove.style.transform = "translateX(calc(-200%/3))";

    setTimeout(()=>{
        sliderMove.style.transition = "none";
        sliderMove.style.transform  = "translateX(calc(-100%/3))"
        sliderMove.insertAdjacentElement("beforeend", firstElement);
    }, 600);
}

function clickLeft() {
    let lastElement = document.querySelectorAll(".home__slider__sliderMove__item")[2];
    sliderMove.style.transition = "transform .6s";
    sliderMove.style.transform = "translateX(0)";

    setTimeout(()=>{
        sliderMove.style.transition = "none";
        sliderMove.style.transform  = "translateX(calc(-100%/3))"
        sliderMove.insertAdjacentElement("afterbegin", lastElement);
    }, 600);
    console.log(lastElement);
}

//button left
buttons[0].addEventListener("click", ()=>{
    clickLeft(); 
});


//button right
buttons[1].addEventListener("click", ()=>{
    clickRight();
});