// const togglerSwitch = document.querySelector("#nightmode_toggler");
// const nightmode = () => {
//   if (togglerSwitch.checked == true) {
//     document.body.style.backgroundColor = "lightcoral";
//     document.body.style.color = "#000000";

//     console.log("light");
//   } else {
//     document.body.style.backgroundColor = "#171321";
//     document.body.style.color = "#ffffff";
//     console.log("night");
//   }
// };

//nightmode/darkmode/lightmode

let nightMode = () => {
  const bodyStyle = document.body;
  const cardOpac = document.getElementsByClassName("card");
  bodyStyle.classList.toggle("darkMode");

  cardOpac.setAttribute("style", "opacity:1");
};

//typing effect with js
let i = 0;
let txt = [
  ":checking in progress\n",
  "Mission: WEB 5.0 \n",
  "Man responsible: Iulian \n",
  "Ocupation: Frontend Developer\n",
  "Location: Sibiu, Romania\n",
  "\n",
  "Press X to close the window",
];
txt = txt.join(" ");
const speed = 50;
// let txtContainer = document.querySelector("#aboutMeTxt").innerHTML;

const typeWriter = () => {
  if (i < txt.length) {
    document.querySelector("#descriptionTxt").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};
typeWriter();

//close window powershell

const closeWindow = () => {
  const window = document.querySelector(".descriptionContainer");
  window.style.display = "none";
};
document.addEventListener("keypress", function (x) {
  if (x.key === "x" || x.key === "X") {
    closeWindow();
  }
});

//alert when click cant pass card

const cantPassClick = () => {
  alert("This project is not uploaded yet");
};
