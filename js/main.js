$(document).ready(function () {
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






    $('#scene01 .book .booking > article:nth-child(1)').on('click', function () {
        $('#scene01 .book .booking_menu > ul').fadeOut(700);
        $('#scene01 .book .booking_menu > ul:nth-child(1)').fadeIn(700);
    });

    $('#scene01 .book .booking > article:nth-child(2)').on('click', function () {
        $('#scene01 .book .booking_menu > ul').fadeOut(700);
        $('#scene01 .book .booking_menu > ul:nth-child(2)').fadeIn(700);
    });

    $('#scene01 .book .booking > article:nth-child(3)').on('click', function () {
        $('#scene01 .book .booking_menu > ul').fadeOut(700);
        $('#scene01 .book .booking_menu > ul:nth-child(3)').fadeIn(700);
    });

    $('#scene01 .book .booking > article:nth-child(4)').on('click', function () {
        $('#scene01 .book .booking_menu > ul').fadeOut(700);
        $('#scene01 .book .booking_menu > ul:nth-child(4)').fadeIn(700);
    });

    $('#scene01 .book .booking_menu .schedule >li:nth-child(1)').on('click', function () {
        $('#scene01 .book .booking_menu .schedule >li:nth-child(1)').addClass('on');
    });
    $('#scene01 .book .booking_menu .schedule >li:nth-child(2)').on('click', function () {
        $('#scene01 .book .booking_menu .schedule >li:nth-child(2)').addClass('on');
    });





    $('#sc01_slides').slidesjs({
        width:1920,
        height:816,
        play: {
            active: false, // play/stop ��ư Ȱ��ȭ , true=Ȱ��ȭ, false=��Ȱ��ȭ
            interval: 3000, // ���ð�, 1000=2��,
            effect: "fade", // ȿ��, slide/fade
            auto: true, // �ڵ�����
            pauseOnHover: false, // ���콺 ������ ����
            restartDelay: 2500 // ���콺 �ƿ��� �絿�� �ð�
        },
        navigation: {// ����/���� ��ư
            active: true, // ��ư Ȱ��ȭ/��Ȱ��ȭ
            effect: "fade"
        },
        pagination: {// ���������̼�, ���� ���õ� �����̵�ǥ��, ��ü ���� ǥ��
            active: true,
            effect: "fade"
        },
        effect: { // ȿ�� �ɼ�
            fade: {
                speed: 800
            },
            slide: {
                speed: 1600
            }
        }
        ,
        callback: {
            loaded: function(number) {
                starList();
            },
            start: function(number) {
                starList();
            },
            complete: function(number) {
            }
        }
    });

    function list01(){
        $('#scene01 .visual .list').removeClass('on');
        $('#scene01 .visual .list:nth-child(1)').addClass('on');
    }

    function list02(){
        $('#scene01 .visual .list').removeClass('on');
        $('#scene01 .visual .list:nth-child(2)').addClass('on');

    }

    function list03(){
        $('#scene01 .visual .list').removeClass('on');
        $('#scene01 .visual .list:nth-child(3)').addClass('on');
    }

    function starList(){

        if($('#sc01_slides .slidesjs-pagination li').eq(0).find('a').hasClass('active')){
            list01();
        }

        if($('#sc01_slides .slidesjs-pagination li').eq(1).find('a').hasClass('active')){
            list02();
        }

        if($('#sc01_slides .slidesjs-pagination li').eq(2).find('a').hasClass('active')){
            list03();
        }
    }

    $('#main_slide').slidesjs({
        width:1202,
        height:520,
        play: {
            active: false, // play/stop ��ư Ȱ��ȭ , true=Ȱ��ȭ, false=��Ȱ��ȭ
            interval: 3000, // ���ð�, 1000=2��,
            effect: "slide", // ȿ��, slide/fade
            auto: true, // �ڵ�����
            pauseOnHover: false, // ���콺 ������ ����
            restartDelay: 2500 // ���콺 �ƿ��� �絿�� �ð�
        },
        navigation: {// ����/���� ��ư
            active: true, // ��ư Ȱ��ȭ/��Ȱ��ȭ
            effect: "slide"
        },
        pagination: {// ���������̼�, ���� ���õ� �����̵�ǥ��, ��ü ���� ǥ��
            active: true,
            effect: "slide"
        },
        effect: { // ȿ�� �ɼ�
            fade: {
                speed: 800
            },
            slide: {
                speed: 1600
            }
        }
    });

    $('#story_menu > li:nth-child(1)').on('click', function () {
        $('#scene04 .story02,#scene04 .story03').fadeOut(700);
        $('#scene04 .story01').fadeIn(700);
        $('#story_menu > li').removeClass('on');
        $('#story_menu > li:nth-child(1)').addClass('on');
    });

    $('#story_menu > li:nth-child(2)').on('click', function () {
        $('#scene04 .story01,#scene04 .story03').fadeOut(700);
        $('#scene04 .story02').fadeIn(700);
        $('#story_menu > li').removeClass('on');
        $('#story_menu > li:nth-child(2)').addClass('on');
    });
    $('#story_menu > li:nth-child(3)').on('click', function () {
        $('#scene04 .story02,#scene04 .story01').fadeOut(700);
        $('#scene04 .story03').fadeIn(700);
        $('#story_menu > li').removeClass('on');
        $('#story_menu > li:nth-child(3)').addClass('on');
    });


    $('#scene01 .book .booking_menu .schedule >li:nth-child(1)').on('click', function () {
        $('#scene01 .book .booking_menu .schedule >li:nth-child(1)').addClass('on');
    });

    $('#scene01 .book .booking_menu .schedule >li:nth-child(2)').on('click', function () {
        $('#scene01 .book .booking_menu .schedule >li:nth-child(2)').addClass('on');
    });


});
$(function () {
    $(".naviJs > li > a, .topBtn").click(function () {
        var b = $($(this).attr("href")).position().top;
        var a = $(".gnb").innerHeight();
        $(".scrollBox").stop().animate({scrollTop: b - a}, 1200, "easeInOutExpo");
        return false
    });
    $(".scrollBox").scroll(function () {
        var a = $(".scrollBox").scrollTop();
        $(".posNum").text(a);
        if (a >= 3600) {
            $("#scene05 .container").addClass("on");

        } else {
            $("#scene05 .container").removeClass("on");

        }



        $(".wrap > div").each(function (c) {
            var d = 100;
            var b = $(".wrap > div:first").position().top;
            var e = $(this).position().top;
            if (a <= b - d) {
                $(".naviJs").each(function () {
                    $("li", this).removeClass("on").eq(0).addClass("on")
                })
            } else {
                if (a >= e - d) {
                    $(".naviJs").each(function () {
                        $("li", this).removeClass("on").eq(c).addClass("on")
                    })
                }
            }
        })
    })
});

