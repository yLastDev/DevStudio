// function openNav() {
//   document.getElementById("mySideNav").style.width = "250px";
// }

// function closeNav() {
//   document.getElementById("mySideNav").style.width = "0";
// }

function toggleNav() {
  const sideNav = document.querySelector("#mySideNav");
  if (sideNav.style.width === "0px") {
    sideNav.style.width = "250px";
  } else {
    sideNav.style.width = "0px";
  }
}
function closeNav() {
  const launchedSideNav = document.querySelector("#mySideNav");
  if (launchedSideNav.style.width === "250px") {
    launchedSideNav.style.width = "0px";
  }
}
