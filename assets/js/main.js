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
let currentOverlayId = null;

function showOverflow(blockId) {
    currBlockId = blockId;
    let block = document.getElementById(currBlockId);
    block.classList.remove('hidden'); 
    setTimeout(function(){
        block.classList.remove('transparent')
    }, 20)
};

function hideOverflow() {
    if (currBlockId === null)
        return;
    let block = document.getElementById(currBlockId);
    let iframe = block.firstElementChild.firstElementChild;
    block.classList.add('transparent'); 
    setTimeout(function(){
        block.classList.add('hidden')
        iframe.src = iframe.src;
    }, 500);
    currBlockId = null;
}