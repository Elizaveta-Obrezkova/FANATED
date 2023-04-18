/*Dropdown Menu*/
/* $(".dropdown1").click(function () {
  $(this).attr("tabindex", 1).focus();
  $(this).toggleClass("active");
  $(this).find(".dropdown-menu1").slideToggle(300);
});
$(".dropdown1").focusout(function () {
  $(this).removeClass("active");
  $(this).find(".dropdown-menu1").slideUp(300);
});
$(".dropdown1 .dropdown-menu1 li").click(function () {
  $(this).parents(".dropdown1").find("span").html($(this).html());
  $(this).parents(".dropdown1").find("input").attr("value", $(this).attr("id"));

  Cookies.set('lang', $(this).attr("id"));

  window.location.reload();
}); */

/* $(".dropdown22").click(function () {
  $(this).attr("tabindex", 1).focus();
  $(this).toggleClass("active");
  $(this).find(".dropdown-menu22").slideToggle(300);
});
$(".dropdown22").focusout(function () {
  $(this).removeClass("active");
  $(this).find(".dropdown-menu22").slideUp(300);
});
$(".dropdown22 .dropdown-menu22 li").click(function () {
  $(this).parents(".dropdown22").find("span").html($(this).html());
  $(this).parents(".dropdown22").find("input").attr("value", $(this).attr("id"));

  Cookies.set('lang', $(this).attr("id"));

  window.location.reload();
}); */

$(document).ready(function() {
   
    $(".dropdown1").click(function () {
      $(this).attr("tabindex", 1).focus();
      $(this).toggleClass("active");
      $(this).find(".dropdown-menu1").slideToggle(300);
    });
    $(".dropdown1").focusout(function () {
      $(this).removeClass("active");
      $(this).find(".dropdown-menu1").slideUp(300);
    });
    $(".dropdown1 .dropdown-menu1 li").click(function () {
      $(this).parents(".dropdown1").find("span").html($(this).html());
      $(this).parents(".dropdown1").find("input").attr("value", $(this).attr("id"));
  
      setVersion();
      Cookies.set('lang', $(this).attr("id"), {expires: 360});
  
      window.location.reload();
    });
  
  
  
    $("body").on("click", ".dropdown3", function() {
      $(this).attr("tabindex", 1).focus();
      $(this).toggleClass("active");
      $(this).find(".dropdown-menu3").slideToggle(300);
    });
    $("body").on("focusout", ".dropdown3", function() {
      $(this).removeClass("active");
      $(this).find(".dropdown-menu3").slideUp(300);
    });
    $("body").on("click", ".dropdown3 .dropdown-menu3 li", function() {
      $(this).parents(".dropdown3").find("span").html($(this).html());
      $(this).parents(".dropdown3").find("input").attr("value", $(this).attr("id"));
  
      setVersion();
      Cookies.set('lang', $(this).attr("id"), {expires: 360});
  
      window.location.reload();
    });
  
  
  
  
    $("body").on("click", "#dropdown2", function() {
      $(this).attr("tabindex", 1).focus();
      $(this).toggleClass("active");
      $(this).find("#dropdown-menu2").slideToggle(300);
    });
    $("body").on("focusout", "#dropdown2", function() {
      $(this).removeClass("active");
      $(this).find("#dropdown-menu2").slideUp(300);
    });
    $("body").on("click", "#dropdown2 #dropdown-menu2 li", function() {
      $(this).parents("#dropdown2").find("span").html($(this).html());
      $(this).parents("#dropdown2").find("input").attr("value", $(this).attr("id"));
  
      setVersion();
      Cookies.set('lang', $(this).attr("id"), {expires: 360});
  
      window.location.reload();
    });
  
  });
  
  /*End Dropdown Menu*/
  
  /* $(".dropdown-menu li").click(function () {
    var input =
        "<strong>" +
        $(this).parents(".dropdown").find("input").val() +
        "</strong>",
      msg = '<span class="msg">Hidden input value: ';
    $(".msg").html(msg + input + "</span>");
  }); */
  