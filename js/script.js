//01.a속성제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
})

//02.scrolla.js
$(function(){
    $('.animate').scrolla({
        moblie:true,
        once:false
    })
})

//03.splitting
$(function(){Splitting();})

//04.scrollTrigger
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    
});