const sliderCont = document.querySelector(".slidecontainer");
const slider = document.querySelector("#myRange");
const aboutMe = document.querySelector(".aboutMeContainer");
let sliderValue = slider.getAttribute("value");

slider.oninput = function () {
  sliderValue = this.value;
  console.log(sliderValue);

  if (sliderValue === "100") {
    sliderCont.classList.add("hideelement");
    aboutMe.classList.add("displayelem");
  }
};
