function enterSite() {
    // The #landing section is pushed out of the screen:
    $("#landing").css("transform", "translate(-200vw)");
    // The #dimmed-background is set to visible and come in the screen:
    $("#dimmed-background").css("visibility", "visible");
    $("#dimmed-background").css("transform", "translate(0)");
    // The #full-site is displayed:
    $("#full-site").css("visibility", "visible");
    $("#full-site").css("overflow", "visible");
    $("#full-site").css("max-height", "auto");
  };

  const btnToTop = document.querySelector('.btnToTop');
const fadeIn = {
  "visibility": "visible",
  "opacity": "1", 
};
const fadeOut = {
  "visibility": "hidden",
  "opacity": "0",  
};

// Display button on scroll fadeIn/fadeOut
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    Object.assign(btnToTop.style, fadeIn)
  } else {
    Object.assign(btnToTop.style, fadeOut)
  }
}
/////////////////////////////////////////////

btnToTop.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
})
