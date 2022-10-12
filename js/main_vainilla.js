var $gnb=document.querySelector('#gnb');
    $gnbOST=$gnb.offsetTop;
    $width100=document.querySelector('#gnb .width100')
    $fontC=document.querySelectorAll('.gnb_ul>li>h3>a')
var win=window;
win.addEventListener('scroll',function () {
    var $currentSCT=document.documentElement.scrollTop;
    if($gnbOST<$currentSCT){
        $gnb.classList.add('sticky')
        $width100.classList.add('sticky')
        $fontC[0].classList.add('sticky')
        $fontC[1].classList.add('sticky')
        $fontC[2].classList.add('sticky')
        $fontC[3].classList.add('sticky')
        $fontC[4].classList.add('sticky')
    }else{
        $gnb.classList.remove('sticky')
        $width100.classList.remove('sticky')
        $fontC[0].classList.remove('sticky')
        $fontC[1].classList.remove('sticky')
        $fontC[2].classList.remove('sticky')
        $fontC[3].classList.remove('sticky')
        $fontC[4].classList.remove('sticky')
    }
})

const btn=document.querySelector('#top_button');
window.addEventListener('scroll',function(){
    let scrollAmount=this.scrollY;
    // console.log(scrollAmount);
    if (scrollAmount>=300) {
        btn.classList.add('visible')
    } else {
        btn.classList.remove('visible')
    }
})
btn.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(btn.getAttribute('href')).scrollIntoView({behavior:'smooth'})
})