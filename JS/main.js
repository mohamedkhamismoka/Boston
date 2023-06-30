$("document").ready(function(){
//start loader
setTimeout(function(){$(".centered").fadeOut(500);$("body").css("overflow-y","auto")},3e3);
//end loader
//start counter
function countdown(){var endTime=new Date("25 Mars 2024");endTime=Date.parse(endTime)/1e3;var now=new Date;now=Date.parse(now)/1e3;var timeLeft=endTime-now;var days=Math.floor(timeLeft/86400);var hours=Math.floor((timeLeft-days*86400)/3600);var minutes=Math.floor((timeLeft-days*86400-hours*3600)/60);var seconds=Math.floor(timeLeft-days*86400-hours*3600-minutes*60);if(hours<"10"){hours="0"+hours}if(minutes<"10"){minutes="0"+minutes}if(seconds<"10"){seconds="0"+seconds}document.querySelector(".dd").innerHTML=days;document.querySelector(".hh").innerHTML=hours;document.querySelector(".mm").innerHTML=minutes;document.querySelector(".ss").innerHTML=seconds}setInterval(function(){countdown()},1e3);
//end counter
//navbar
$(window).on("scroll",function(){if($(window).scrollTop()>=200){$(".navbar").addClass("bg")}else{$(".navbar").removeClass("bg")}});$(".navbar-toggler").on("click",function(){$(".navbar-collapse").toggleClass("show")});
///owl carousel
$(".owl-one").owlCarousel({loop:false,margin:10,nav:false,responsiveClass:true,responsiveBaseElement:"body",responsive:{0:{items:1,dots:false},678:{items:2,dots:false},992:{items:3,dots:true}}});$(".owl-two").owlCarousel({loop:true,margin:10,nav:false,autoplay:true,autoplayTimeout:2e3,responsiveClass:true,responsiveBaseElement:"body",responsive:{0:{items:1,dots:true},678:{items:2,dots:true},992:{items:5,dots:true}}});$(".owl-three").owlCarousel({loop:true,margin:10,nav:false,autoplay:true,autoplayTimeout:2e3,responsiveClass:true,responsiveBaseElement:"body",responsive:{0:{items:1,dots:true},678:{items:2,dots:true},992:{items:3,dots:true}}})});