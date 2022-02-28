const toggleMenu = (menu) => {
  menu.classList.toggle("open");
  document.querySelector(".logo").classList.toggle("logo-display");
  document.querySelector("body").classList.toggle("overflow-hidden");
};
