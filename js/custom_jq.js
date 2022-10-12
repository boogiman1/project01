// tab 기능
var contentMenu2 = $('#content_menu2'), targetLink = contentMenu2.find('.container div ul:first-child li a'), tabContent = contentMenu2.find('.container>div>div>ul');
tabContent.eq(0).show()
targetLink.each(function () {
    var tg = $(this);
    var tgAnc = tg.attr('href')
    tg.click(function (e) {
        e.preventDefault()
        targetLink.removeClass('fontC1 fontC2 fontC3 active')
        tg.addClass('fontC1 fontC2 fontC3 active')
        tabContent.hide()
        $(tgAnc).show()

    })
})
// #content_book tab
var contentBook = $('#content_book'), targetLink2 = contentBook.find('.container ul li a'), tabContent2 = contentBook.find('.container>div>ul');
tabContent2.eq(0).show()
targetLink2.each(function () {
    var tg = $(this);
    var tgAnc = tg.attr('href')
    tg.click(function (e) {
        e.preventDefault()
        targetLink2.removeClass('active')
        tg.addClass('active')
        tabContent2.hide()
        $(tgAnc).show()

    })
})



// 팝업 창 닫기
function header_popup() {
    $('#header_top').hide();
}

// 슬라이드 .#content_calendar>.container>div:nth-child(4)>div:nth-child(1)
$(function () {
    var visualWrap = $('#brandVisual'), slide = visualWrap.find('.visual_slide>li'), slideCount = slide.length, current = 0, stopTimer,
        leftBtn = visualWrap.find('.btnImg>.prev'),
        rightBtn = visualWrap.find('.btnImg>.next'),
        pager = visualWrap.find('.buttonList>li')

    // 슬라이드 위치 설정
    var slidePos = slide.each(function (i/* ,o */) {
        $(this).css('left', i * 100 + '%')
    })
    timer()
    function timer() {
        stopTimer = setInterval(function () {
            var prev = slide.eq(current)
            move(prev, 0, -100 + '%')
            var prevPager = pager.eq(current);
            prevPager.removeClass('on')
            current++;
            if (current == slideCount) {
                current = 0
            }
            var next = slide.eq(current)
            move(next, 100 + '%', 0)
            var nextPager = pager.eq(current)
            nextPager.addClass('on')
            // 카운터 동적 생성
            // cnt(current)
        }, 2000)
    }

    function move(tg, start, end) {
        tg.css('left', start).stop().animate({ left: end }, 1000)
    }

    // 마우스 오버시 정지
    visualWrap.hover(
        function () {
            // 마우스 올릴 때
            $(this).addClass('on')
            clearInterval(stopTimer)
        },
        function () {
            // 마우스 땔 때
            $(this).removeClass('on')
            timer()
        }
    )

    // 좌우 버튼 추가
    rightBtn.click(function () {
        var prev = slide.eq(current) // 0
        var prevPager = pager.eq(current);
        prevPager.removeClass('on')
        move(prev, 0, -100 + '%') // 1
        current++;
        if (current == slideCount) {
            current = 0
        }
        var next = slide.eq(current)
        var nextPager = pager.eq(current)
        nextPager.addClass('on')
        move(next, 100 + '%', 0)
        // cnt(current)
    })
    leftBtn.click(function () {
        var prev = slide.eq(current) // 0
        var prevPager = pager.eq(current);
        prevPager.removeClass('on')
        move(prev, 0, '100%')
        current--;
        if (current < 0) {
            current = slideCount - 1
        }
        var next = slide.eq(current)
        var nextPager = pager.eq(current)
        nextPager.addClass('on')
        move(next, -100 + '%', 0)
        cnt(current)
    })
    pager.click(function () {
        var tg = $(this);
        var i = tg.index()
        pager.removeClass('on')
        tg.addClass('on')
        pagerMove(i);
        cnt(current)
    })
    function pagerMove(i) {
        if (current == i) return; 
        var currentEl = slide.eq(current)
        var nextEl = slide.eq(i)
        currentEl.css('left', '0').stop().animate({ left: '-100%' }, 500)
        nextEl.css('left', '100%').stop().animate({ left: '0%' }, 500)
        current = i;

    }
})
