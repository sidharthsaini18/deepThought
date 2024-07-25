let btn = document.getElementById("btn");
let slideBar = document.getElementById("slidebar1");
let blackArea = document.getElementById("blackarea");
let list = document.getElementById("list");
let closeBtn = document.getElementById("closeBtn");

btn.addEventListener("click", () => {
  btn.classList.toggle("hide");
  closeBtn.classList.toggle("show-btn");
  slideBar.classList.toggle("open");
  closeBtn.classList.toggle("hide");
  list.classList.toggle("show-list");
  if (slideBar.classList.toggle("close-btn")) {
    slideBar.classList.remove("close-btn");
  }
});

closeBtn.addEventListener("click", () => {
  slideBar.classList.toggle("open");
  slideBar.classList.toggle("close-btn");
  list.classList.toggle("show-list");
  closeBtn.classList.toggle("show-btn");
  btn.classList.toggle("hide");
});

//  Accesing the json
