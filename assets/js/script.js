$(function(){
    $(window).scroll(function () {
        const curr = $(this).scrollTop(); /* 스크롤 했을 때 */
        const header = $('.header');
        // 조건문 커런트가 0보다 크다면!    간단한 조건일 때 사용
        (curr > 0) ? header.addClass('on'): header.removeClass('on');

    });
    

    // const scrollEvents = () => {
    //     window.onscroll = function () {
    //       const curr = $(this).scrollTop();
    //       const header = $('.header');

    //       if (!!header) {
    //         if (curr > 100) {
    //           header.classList.add('on');
    //         } else {
    //           header.classList.remove('on');
    //         }
    //       } // if(header)

          
    //     }; // window.onscroll
    //   }; // scrollEvents


    $('.download-wrap .button.pc').click(function(){
        $('.download-box').toggleClass('show');
    })



    let linkPolicy = $('.checkbox-wrap.policy .checkbox-title p')
    $(linkPolicy).click(function(){
        $('.policy-wrap').toggleClass('show');
    })


    $('.btn-site').click(function(){
        $('.site-wrap').toggleClass('active')
    })
})