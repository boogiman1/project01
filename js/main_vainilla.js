var $gnb=document.querySelector('#gnb');
    $gnbOST=$gnb.offsetTop;
    $width100=document.querySelector('#gnb .width100')
console.log($gnb, $gnbOST);
var win=window;
win.addEventListener('scroll',function () {
    var $currentSCT=document.documentElement.scrollTop;
    if($gnbOST<$currentSCT){
        $gnb.classList.add('sticky')
        $width100.classList.add('sticky')
    }else{
        $gnb.classList.remove('sticky')
        $width100.classList.remove('sticky')
    }
})