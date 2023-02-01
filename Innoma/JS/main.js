let offset = 0;
const sliderLineContinents = document.quereSelector('.sliderline');

document.querySelector(".bnt-slider-1").addEventListener ("click", function(){
    offset = offset + 1050;
    if (offset > 4666) {
        offset = 0;
    }
    sliderLineContinents.stely.left = -offset + 'px';
});

document.querySelector(".bnt-slider-2").addEventListener ("click", function(){
    offset = offset + 1050;
    if (offset > 4200) {
        offset = 0;
    }
    sliderLineContinents.stely.left = -offset + 'px';
});