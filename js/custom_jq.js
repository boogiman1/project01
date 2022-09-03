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

// 슬라이드 .#content_calendar>.container>div:nth-child(4)>div:nth-child(1)
$(function(){
    var visualWrap=$('#brandVisual'), slide=visualWrap.find('.visual_slide>li'), slideCount=slide.length, current=0, stopTimer,
    leftBtn=visualWrap.find('.btnImg>.prev'),
    rightBtn=visualWrap.find('.btnImg>.next'),
    pager=visualWrap.find('.buttonList>li')

    // 슬라이드 위치 설정
    var slidePos=slide.each(function(i/* ,o */){
        // each 를 쓸 때 값을 꺼내기 위해 i, o 사용 / i번 째를 꺼낸다 i=index번호 자리임 / o는 여기서 안씀
        $(this).css('left', i*100+'%')
    })
    // 슬라이드 이미지 부분 - setInterval : 시간마다 돌리기
    // auto play
    timer()
    function timer(){ //인덱스 번호를 만들어줌
        stopTimer=setInterval(function(){
            var prev=slide.eq(current)
            console.log(prev);
            move(prev,0,-100+'%')
            var prevPager=pager.eq(current);
            prevPager.removeClass('on')            
            current++;
            if(current == slideCount){
                current=0
            }
            var next=slide.eq(current)
            move(next,100+'%',0)
            var nextPager=pager.eq(current)
            nextPager.addClass('on')
        },2000)
    }
 
    // 움직이는 함수 슬라이드 애니메이트
    // function move(대상, 출발, 도착){
    //     대상.css('left',출발).stop().animate({left:도착},1000)
    // }
    function move(tg, start, end){
        tg.css('left',start).stop().animate({left:end},1000)
    }
    
    // 마우스 오버시 정지
visualWrap.hover(
    function(){
        // 마우스 올릴 때
        $(this).addClass('on')
        clearInterval(stopTimer)
    },
    function(){
        // 마우스 땔 때
        $(this).removeClass('on')
        timer()
    }
  )

  // 좌우 버튼 추가
  rightBtn.click(function(){
      var prev=slide.eq(current) // 0
      var prevPager=pager.eq(current);
      prevPager.removeClass('on')
      console.log(prev);
      move(prev,0,-100+'%') // 1
      current++;
      if(current == slideCount){
          current=0
      }
      var next=slide.eq(current)            
      var nextPager=pager.eq(current)
      nextPager.addClass('on')
      move(next,100+'%',0)
  })
  leftBtn.click(function(){
    var prev=slide.eq(current) // 0
    var prevPager=pager.eq(current);
    prevPager.removeClass('on')
    console.log(prev);
    move(prev,0,'100%')
    current--;
    if(current < 0){
        current=slideCount-1
    }
    var next=slide.eq(current)
    var nextPager=pager.eq(current)
    nextPager.addClass('on')
    move(next,-100+'%',0)
  })
//   ㅈㄴ 어려움
  pager.click(function () {
    var tg=$(this);
    var i=tg.index()
    pager.removeClass('on')
    tg.addClass('on')
    pagerMove(i);
  })
  function pagerMove(i){
    //i 쓰는 이유는 호줄 하는 곳에서 불러 오려고 하기 때문 여기선 pager에 click에서 태어난 아이 click을 하면 태어난다 var는 변수를 생성하는데 i를 만들었다. 그 i를 가져오는 것 -> 다른 함수에 전달하기 위해 만듬
    if(current==i) return; // 같은 버튼 누르면 다시 나오는데 그거 안하게함
    var currentEl=slide.eq(current)
    var nextEl=slide.eq(i)
    currentEl.css('left','0').stop().animate({left:'-100%'},500)
    nextEl.css('left','100%').stop().animate({left:'0%'},500)
    current=i;
    
}
// 카운터 동적 생성
var counterEl="<div class='counter'>1"
$('#wrap').append(counterEl)
})
