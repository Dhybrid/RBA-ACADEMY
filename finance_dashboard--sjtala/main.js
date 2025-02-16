document.addEventListener("DOMContentLoaded", function () {
  // open close menu
  let menuBtn = document.getElementById("menu_btn");
  let closeBtn = document.getElementById("btn_close");
  let menu = document.getElementById("sidebar");
  menuBtn.addEventListener("click", () => {
    menu.classList.add("show_sidebar");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("show_sidebar");
  });

  // form preventdefault submit

  function mySubmitFunction(e) {
    e.preventDefault();
    return false;
  }
    
    
    
    // ///////////////////////////////////////////////////////////
  const topbar = document.querySelector(".topbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // Trigger background change after 50px scroll
      topbar.classList.add("scrolled");
    } else {
      topbar.classList.remove("scrolled");
    }
  });
});
