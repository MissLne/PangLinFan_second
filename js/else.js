// ==========================
// 其他一些点击鼠标移动事件
// ==========================

head_input.onfocus = function(){
     head_input.style.width = '400px';
     head_input.style.border = '1px solid #444';
     head_button.style.transform = 'scale(0)';
 }
 head_input.onblur = function(){
     head_input.style.width = '300px';
     head_input.style.border = '1px solid #ebe9e9';
     head_button.style.transform = 'scale(1)';
 }
 
 
 window.onscroll = function(){ 
     var t = window.pageYOffset; 
     if(t > 1460){
         massage_box[0].style.transform = 'translateY(0)';
         massage_box[1].style.transform = 'translateY(0)';
     }else if(t < 1460){
         massage_box[0].style.transform = 'translateY(50px)';
         massage_box[1].style.transform = 'translateY(50px)';
     }
     if(t > 859){
         copyright.style.position = 'fixed';
         copyright.style.top = '50px';
     } else if ( t < 859){
             copyright.style.position = 'static';
     }
 }
 
 
 
 massage_box[1].onclick = function(){    //回到顶部按钮点击事件
     //设置一个定时器
     timer = setInterval(function(){
         //获取滚动条的滚动高度
         var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        
         //用于设置速度差，产生缓动的效果
         var speed = Math.floor(-osTop / 6);
         document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
         isTop =true;  //用于阻止滚动事件清除定时器
         if(osTop == 0){
             clearInterval(timer);
         }
     },30);
 }
 
 var scrollFunc = function (e) { 
     e = e || window.event; 
     if (e.wheelDelta) { //先判断浏览器IE，谷歌滑轮事件    
          if (e.wheelDelta > 0) { //当滑轮向上滚动时 
               head_container2.style.transform = 'translateY(0)';
               head_container1.style.transform = 'translateY(0)';
          } 
     if (e.wheelDelta < 0) { //当滑轮向下滚动时 
          head_container2.style.transform = 'translateY(-70px)';
          head_container1.style.transform = 'translateY(-70px)';
     } 
     } else if (e.detail) { //Firefox滑轮事件 
          if (e.detail> 0) { //当滑轮向上滚动时 
              head_container2.style.transform = 'translateY(0)';
              head_container1.style.transform = 'translateY(0)';
          } 
          if (e.detail< 0) { //当滑轮向下滚动时 
              head_container2.style.transform = 'translateY(-70px)';
              head_container1.style.transform = 'translateY(-70px)';
          } 
     }
}
 
if (document.addEventListener) {//firefox 
     document.addEventListener('DOMMouseScroll', scrollFunc, false); 
} 
 
var sTop = document.documentElement.scrollTop || document.body.scrollTop;
    
window.onmousewheel = document.onmousewheel = scrollFunc;
 
 
 
pictrue_btn.onclick = function(){
     pictrue.style.height = '0';
}