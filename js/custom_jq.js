// tab 기능
var contentMenu2=$('#content_menu2'), targetLink=contentMenu2.find('.container div ul:first-child li a'),tabContent=contentMenu2.find('.container>div>div>ul');
tabContent.eq(0).show()
targetLink.each(function () {
    var tg=$(this);
    var tgAnc=tg.attr('href')
    tg.click(function (e) {
        e.preventDefault()
        targetLink.removeClass('fontC1 fontC2 fontC3 active')
        tg.addClass('fontC1 fontC2 fontC3 active')
        tabContent.hide()
        $(tgAnc).show()

    })
})

// 팝업 창 닫기
function header_popup(){
    $('#header_top').hide();
}
