var targetScrollTop;//滚动条高度
var navBarBigBox = document.getElementsByClassName('navBarBigBox')[0];
var header = document.getElementsByClassName('header')[0];
var afterNavBigBox = document.getElementsByClassName('afterNavBigBox')[0];
var inIndex = document.getElementsByClassName('inIndex')[0];
var afterNavLogoBigBox = document.getElementsByClassName('afterNavLogoBigBox')[0];
var logoBigBox = document.getElementsByClassName('logoBigBox')[0];
// var navScrollTop = navBarBigBox.offsetTop + navBarBigBox.offsetHeight;
var headerScrollTop = header.offsetTop + header.offsetHeight;
var sCroll;
window.onscroll = function(e){
    targetScrollTop = document.documentElement.scrollTop;//当前滚动条参数
    // 开始 顶部导航条是否出现
    if(targetScrollTop>headerScrollTop){
        afterNavBigBox.style.transform = "translate(0,0%)";
    }else{
        afterNavBigBox.style.transform = "translate(0,-100%)";
    }
    // 结束 顶部导航条是否出现
}

inIndex.style.height = "0%";

afterNavLogoBigBox.onclick = function(){
    backToWelcome()
}
logoBigBox.onclick = function(){
    backToWelcome()
}

function backToWelcome(){
    inIndex.style.height = "100%";
    setTimeout(function(){
        window.location.href = "logoIn.html";
    },1000)
}