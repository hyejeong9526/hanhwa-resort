/**
 * Created by Administrator on 2016-11-17.
 * Design nas.
 */




$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.


    $(".scrollBox").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    // ===========================================================
    //click , mouseenter , mouseleave move event section
    //===========================================================

    $('#header .inner .gnb > li:nth-child(1)').on('mouseenter', function () {
        $('#header .megamenu').fadeIn(700);
        $('#header .megamenu >li').removeClass('on');
        $('#header .megamenu >li:nth-child(1)').addClass('on');
        $('#header .inner .gnb > li').removeClass('on');
        $('#header .inner .gnb > li:nth-child(1)').addClass('on');
    });
    $('#header .inner .gnb > li:nth-child(2)').on('mouseenter', function () {
        $('#header .megamenu').fadeIn(700);
        $('#header .megamenu >li').removeClass('on');
        $('#header .megamenu >li:nth-child(2)').addClass('on');
        $('#header .inner .gnb > li').removeClass('on');
        $('#header .inner .gnb > li:nth-child(2)').addClass('on');
    });
    $('#header .inner .gnb > li:nth-child(3)').on('mouseenter', function () {
        $('#header .megamenu').fadeIn(700);
        $('#header .megamenu >li').removeClass('on');
        $('#header .megamenu >li:nth-child(3)').addClass('on');
        $('#header .inner .gnb > li').removeClass('on');
        $('#header .inner .gnb > li:nth-child(3)').addClass('on');
    });
    $('#header .inner .gnb > li:nth-child(4)').on('mouseenter', function () {
        $('#header .megamenu').fadeIn(700);
        $('#header .megamenu >li').removeClass('on');
        $('#header .megamenu >li:nth-child(4)').addClass('on');
        $('#header .inner .gnb > li').removeClass('on');
        $('#header .inner .gnb > li:nth-child(4)').addClass('on');
    });

    $('#header').on('mouseleave', function () {
        $('#header .megamenu').fadeOut(700);
        $('#header .megamenu >li').removeClass(700);
        $('#header .inner .gnb > li').removeClass('on');
    });







//==============================================================
});

$(function () {
// 메뉴부분
    $('.naviJs > li > a, .topBtn').click(function () {
        var posY = $($(this).attr('href')).position().top;
        var gnbH = $('.gnb').innerHeight();
        $('.scrollBox').stop().animate({'scrollTop': posY - gnbH}, 1200, 'easeInOutExpo');
        return false;
    })

    // 스크롤 이벤트
    $('.scrollBox').scroll(function () {
        var scrollTop = $('.scrollBox').scrollTop();
        $('.posNum').text(scrollTop); // 스크롤값
        if(scrollTop >= 1){  //스크롤 값
            $('#header').addClass('on');

        }else{
            $('#header').removeClass('on');
        }


        // =========================
        // scroll event section
        //==========================


        //===================================================================
        // 메뉴 활성화
        $('.wrap > div').each(function (i) {
            var fastNum = 100; // 메뉴를 빨리 활성화 시키는 값
            var firstY = $('.wrap > div:first').position().top;
            var posY = $(this).position().top;
            if (scrollTop <= firstY - fastNum) {
                $('.naviJs').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollTop >= posY - fastNum) {
                $('.naviJs').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        })

    });
});












