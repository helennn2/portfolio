//click
$( document ).ready( function() {
  $( '.click' ).fadeIn( 5000 );
} );

//click -> 스크롤 이동
$(document).ready(function(){
  $("#header>a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

//휠 이벤트
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

var $html = $("html");
var page = 1;
var lastPage = $(".content").length;
 
$html.animate({scrollTop:0},100);

$(window).on("wheel", function(e){
	if($html.is(":animated")) return;
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
});

//화면전환시 애니메이션 실행
  /* AOS.init(); */

//메뉴 클릭
$('.menu-wrap').each(function(){
  let topDiv=$(this);
  let anchors=topDiv.find('.menu a'); 
  let panelDivs=topDiv.find('.ct-wrap');
  let lastAnchor=null;
  let lastPanel=null;

  lastAnchor=anchors.filter('.on')
  lastPanel=$(lastAnchor.attr('href'));
  panelDivs.hide();
  lastPanel.show();

  anchors.click(function(e){
      e.preventDefault();
      let currentAnchor=$(this);
      let currentPanel=$(currentAnchor.attr('href'));
      lastAnchor.removeClass('on') 
      currentAnchor.addClass('on') 

      lastPanel.hide();
      currentPanel.show(); 

      lastAnchor=currentAnchor; 
      lastPanel=currentPanel;
  })
});

//projects
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });

//스킬바
const bar = document.querySelector("#skill-bar .progress") 
const bar2 = document.querySelector("#skill-bar .progress-bar2") 
const bar3 = document.querySelector("#skill-bar .progress-bar3") 
const bar4 = document.querySelector("#skill-bar .progress-bar4") 

let barHtml = 90, barJs = 70
let t = 0
bar.style.width = 0
const barAnimation = setInterval(() => {
  bar.style.width =  t + '%'
  t++ >= barHtml && clearInterval(barAnimation)
}, 10)

let t2 = 0
const barAnimation2 = setInterval(() => {
  bar2.style.width =  t2 + '%'
  t2++ >= barHtml && clearInterval(barAnimation2)
}, 10)

let t3 = 0
const barAnimation3 = setInterval(() => {
  bar3.style.width =  t3 + '%'
  t3++ >= barJs && clearInterval(barAnimation3)
}, 10)

let t4 = 0
const barAnimation4 = setInterval(() => {
  bar4.style.width =  t4 + '%'
  t4++ >= barJs && clearInterval(barAnimation4)
}, 10)



