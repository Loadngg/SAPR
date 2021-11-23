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
    let block = document.getElementById(currBlockId);
    block.classList.add('active'); 
};

function hideOverflow() {
    let block = document.getElementById(currBlockId);
    let iframe = block.firstElementChild.firstElementChild;
    block.classList.remove('active');
    iframe.src = iframe.src;
}