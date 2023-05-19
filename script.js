let btn = document.querySelector(".press-btn");
let icons = Array.from(document.querySelectorAll(".icon"));
let dailog = document.querySelector(".dailog");
let cross = document.querySelector(".cross");

let iconsWrapper = document.querySelector(".icons");

btn.addEventListener("click", () => {
  btn.setAttribute("src", "/pic/pressed.png");
  btn.style.filter = "grayscale(100%)";
  iconsWrapper.classList.add("rotate");

  //   Selecting a Random Icon

  let random = Math.round(Math.random() * (icons.length - 1));
  let win = icons[random];
  console.log(win);
  setTimeout(() => {
    btn.setAttribute("src", "/pic/press.png");
    iconsWrapper.classList.remove("rotate");
    win.classList.add("win");
  }, 3000);


  setTimeout(() => {
    dailog.style.display = "flex";
    win.classList.remove("win");
  }, 5500);
});

cross.addEventListener("click", () => {
  dailog.style.display = "none";
});
