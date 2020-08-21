var insideLineFill = document.getElementsByClassName('insideLineFill');
var logoFixedBox = document.getElementsByClassName('logoFixedBox')[0];
var loginRelativeBox = document.getElementsByClassName('loginRelativeBox')[0];
var circulationTitleBox = document.getElementsByClassName('circulationTitleBox')[0];
var circulationTitleC = document.getElementsByClassName('circulationTitleC')[0];
var moreFunBigBox = document.getElementsByClassName('moreFunBigBox')[0];
var newsBigBox = document.getElementsByClassName('newsBigBox')[0];
var newsUnderLine = document.getElementsByClassName('newsUnderLine')[0];
var newsUnderLineBox = document.getElementsByClassName('newsUnderLineBox')[0];
var logoBigBox = document.getElementsByClassName('logoBigBox')[0];
var Line1 = document.getElementsByClassName('Line1')[0];
var Line2 = document.getElementsByClassName('Line2')[0];
var Line3 = document.getElementsByClassName('Line3')[0];
var inIndex = document.getElementsByClassName('inIndex')[0];
var clientHeight = document.documentElement.clientHeight;
var targetScrollTop;

window.onload = function(){
    logoFixedBox.style.height = clientHeight + "px";
}
window.onscroll = function(){
    targetScrollTop = document.documentElement.scrollTop;
    if(targetScrollTop <= 10){
        document.body.style.backgroundColor = "#fff";
        loginRelativeBox.style.top = "0px";
        circulationTitleBox.style.opacity = "0";
        // circulationTitleC.style.strokeDashoffset = "153%";
        // circulationTitleC.style.fill = "#1772b4";
        for(var i = 0;i < insideLineFill.length;i++){
            insideLineFill[i].classList.remove('insideLineFillBrightness');
        }
    }else{
        for(var i = 0;i < insideLineFill.length;i++){
        }
        document.body.style.backgroundColor = "#1772b4";
        loginRelativeBox.style.top = "-150px";
        circulationTitleBox.style.opacity = "1";
        circulationTitleC.classList.add('circulationTitleCrunning')
        // circulationTitleC.style.strokeDashoffset = "0%"; 
        // setTimeout(function(){
        //     circulationTitleC.style.fill = "#fff";
        // },3000)
        for(var i = 0;i < insideLineFill.length;i++){
            insideLineFill[i].classList.add('insideLineFillBrightness');
        }
    }
}

var moreFunIsDisplay = false;

//开始右上角更多功能点击事件
moreFunBigBox.onclick = function(){
    moreFunDisplay();
}
function moreFunDisplay(){
    if(moreFunIsDisplay == false){
        Line1.style.top = 20+"px";
        Line1.style.transform = "rotate(45deg)";
        Line1.style.width = "100%";
        Line2.style.top = 20+"px";
        Line2.style.transform = "rotate(45deg)";
        Line2.style.width = "100%";
        Line3.style.top = 20+"px";
        Line3.style.transform = "rotate(-45deg)";
        Line3.style.width = "100%";
        moreFunIsDisplay = true;
    }else{
        Line1.style.top = "";
        Line1.style.transform = "";
        Line2.style.top = "";
        Line2.style.transform = "";
        Line3.style.top = "";
        Line3.style.transform = "";
        Line1.style.width = "";
        Line2.style.width = "";
        Line3.style.width = "";
        moreFunIsDisplay = false;
    }
}
// newsBigBox.onmouseover = function(){
//     newsUnderLineBox.style.left = "0%";
//     newsUnderLine.style.left = "0%";
// }
// newsBigBox.onmouseleave = function(){
//     newsUnderLine.style.left = "100%";
//     newsUnderLineBox.style.left = "0%";
// }
//结束右上角更多功能点击事件

logoBigBox.onclick = function(){
    inIndex.style.top = "0%";
    setTimeout(function(){
        window.location.href = "index.html";
    },1000)
}