let detect = new MobileDetect(window.navigator.userAgent)
$(document).ready(function () {
    if (detect.mobile() != null) {
        function reorient(e) {
          var portrait = (window.orientation % 180 == 0);
          $("body").css("-webkit-transform", !portrait ? "rotate(-90deg)" : "");
        }
        window.onorientationchange = reorient;
        window.setTimeout(reorient, 0);
    }
});

// slider
$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:false,
        infinity: true,
		fade: true,
  		cssEase: 'linear',
        autoplay:true,
        autoplaySpeed:2000,
    });
});

// overflow
function showOverflow(blockId) {
    currBlockId = blockId;
    block = document.getElementById(currBlockId);
    iframe = block.firstElementChild.firstElementChild;
    iframe.src = iframe.dataset.src;
    block.classList.remove('hidden'); 
    setTimeout(function(){
        block.classList.remove('transparent')
    }, 20)
};

function hideOverflow() {
    block.classList.add('transparent'); 
    setTimeout(function(){
        block.classList.add('hidden')
        iframe.src = "about:blank";
    }, 500);
}