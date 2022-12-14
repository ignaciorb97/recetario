let mybutton = document.getElementById("Button");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1000) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


  
  function topFunction() {
    document.body.scrollTop = 0; //  Safari
    document.documentElement.scrollTop = 0; //  Chrome, Firefox, IE  Opera
  }