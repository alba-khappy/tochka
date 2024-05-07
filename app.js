$(document).ready(function(){
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".nav");
    const btnClose = document.querySelector(".button-close");
    const list = document.querySelector(".header-list");
  
    burger.addEventListener("click", () => {
      menu.classList.add("nav--show");
    });
  
    btnClose.addEventListener("click", () => {
      menu.classList.remove("nav--show");
    });
  
    menu.addEventListener('click', function (event) {
      if(event.target.tagName === "A") {
        menu.classList.remove("nav--show");
      }
    })
      
    $("a[href^='#']").on("click", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top - 64;
      $('body,html').animate({scrollTop: top}, 500);
    });
      // return false;



      const dropdown = document.querySelector(".rules_button");
      const dropdownContent = document.querySelector(".rules_list");
      const rulesArrow = document.querySelector(".rules_arrow");

      dropdown.addEventListener("click", () => {
        dropdownContent.classList.toggle("rules_list--show");
        rulesArrow.classList.toggle("rules_arrow--rotate");
      });
  });

  