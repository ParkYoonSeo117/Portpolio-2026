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

    // <intro 가로스크롤> --------------------
let sections = gsap.utils.toArray(".page");
{
    let totalWidth = 0;
    sections.forEach(section => {
        totalWidth += section.offsetWidth;
    });

    let scrollTween = gsap.to(sections, {
        x: -totalWidth + window.innerWidth,
        ease: "none",
        scrollTrigger: {
            trigger: '.scroll-container',
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => "+=" + totalWidth + "px",
            onUpdate: (self) => {
                // 각 섹션의 이미지 회색 처리
                sections.forEach((section, index) => {
                    // 1, 3번째 섹션 (img-box 구조)
                    const imgBoxImg = section.querySelector('.img-box img');
                    // 2번째 섹션 (images 구조)
                    const imagesImgs = section.querySelectorAll('.images img');
                    
                    const sectionProgress = (self.progress - (index / sections.length)) * sections.length;
                    
                    // 해당 섹션이 화면 중앙에 있을 때 (0~1 사이)
                    const isActive = sectionProgress >= 0 && sectionProgress <= 1;
                    
                    // img-box 이미지 처리
                    if (imgBoxImg) {
                        imgBoxImg.style.filter = isActive ? 'grayscale(0)' : 'grayscale(1)';
                    }
                    
                    // images 이미지들 처리
                    if (imagesImgs.length > 0) {
                        imagesImgs.forEach(img => {
                            img.style.filter = isActive ? 'grayscale(0)' : 'grayscale(1)';
                        });
                    }
                });
            },
            onLeave: () => {
                // 스크롤 끝나고 떠날 때 마지막 섹션 회색 처리
                sections.forEach(section => {
                    const imgBoxImg = section.querySelector('.img-box img');
                    const imagesImgs = section.querySelectorAll('.images img');
                    
                    if (imgBoxImg) imgBoxImg.style.filter = 'grayscale(1)';
                    imagesImgs.forEach(img => img.style.filter = 'grayscale(1)');
                });
            },
            onEnterBack: () => {
                // 다시 스크롤 영역으로 돌아올 때 마지막 섹션 활성화
                const lastSection = sections[sections.length - 1];
                const imgBoxImg = lastSection.querySelector('.img-box img');
                const imagesImgs = lastSection.querySelectorAll('.images img');
                
                if (imgBoxImg) imgBoxImg.style.filter = 'grayscale(0)';
                imagesImgs.forEach(img => img.style.filter = 'grayscale(0)');
            }
        }
    });
}


});