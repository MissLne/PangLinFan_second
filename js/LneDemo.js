for(var i = 0;i < 18;i++){
    var str="<div class='article_before'>"+
     "<h3 class='before_title'></h3>"+
     "<span class='before_userid'></span>"+
     "<span class='before_content'></span>"+
     "<span class='before_btn'>阅读全文"+
        "<span class='iconfont'>&#xe502;</span>"+
    "</span>"+
     "</div>";   
 $(".main_article").append(str); 

 var str1="<div class='article_after'>"+
     "<h3 class='after_title'></h3>"+
     "<img class='after_img'>"+
     "<span class='after_userid'></span>"+
     "<span class='after_introduce'></span>"+
     "<p class='after_agree'></p>"+
     "<p class='after_content'></p>"+
     "<p class='after_date'></p>"+
     "</div>";   
 $(".main_article").append(str1);
 
 var str2="<div class='article_do'>"+
     "<span class='article_agree iconfont'>&#xe61d; 赞同</span>"+
     '<span class="article_disagree iconfont">&#xe640;</span>'+
     '<span class="article_comment iconfont">&#xe650;</span>'+
     '<span class="article_share iconfont">&#xe505; 分享</span>'+
     '<span class="article_collect iconfont">&#xe604; 收藏</span>'+
     '<span class="article_like">'+
         '<span class="iconfont">&#xe51a;</span>喜欢'+
     '</span>'+
    '<span class="article_more iconfont">&#xe66a;</span>'+

    '<span class="article_stop floatR">收起'+
         '<span class="iconfont">&#xe646;</span>'+
    '</span>'+
     "</div>";
 $(".main_article").append(str2); 
    }
var before_title = $(".before_title"),
    after_title = $(".after_title"),
    before_userid = $(".before_userid"),
    after_userid = $(".after_userid"),
    after_img = $('.after_img'),
    after_introduce = $('.after_introduce'),
    after_agree = $('.after_agree'),
    after_date = $('.after_date'),
    before_content = $(".before_content"),
    after_content = $(".after_content"),
    article_agree = $(".article_agree"),
    article_disagree = $(".article_disagree");

let tip_logout = document.querySelector(".tip_logout");
// let logout = document.querySelector(".logout");
let head_sculpture = document.querySelector(".head_sculpture");
// let logon_button = document.querySelector(".logon_button");
let know = document.getElementById("know");
let logon = document.getElementById("logon");
var mybody = document.getElementsByTagName("body");
let logon_account = document.querySelector(".logon_account");
let logon_pd = document.querySelector(".logon_pd");
let logon_password = document.querySelector(".logon_password");
let logon_eye = document.querySelector(".logon_eye");
var flag = 1;
var img1 = head_sculpture.querySelector('img');
head_sculpture.addEventListener('click',function(){
    if(flag){
        tip_logout.style.display = 'block';
        flag = 0;
    } else {
        tip_logout.style.display = 'none';
        flag = 1;
    }
    
})

var head_container1 = document.querySelector('.head_container1');
var head_container2 = document.querySelector('.head_container2');
var head_input = document.querySelector('.head_input');
var head_button = document.querySelector('.head_button');

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
var copyright = document.getElementById('copyright');
var massage_box = document.getElementsByClassName('massage_box');


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
var timer = null; //定义一个定时器
var isTop = true; //定义一个布尔值，用于判断是否到达顶部


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

var pictrue_btn = document.querySelector('.pictrue_btn');
var pictrue = document.getElementById('pictrue');

pictrue_btn.onclick = function(){
    pictrue.style.height = '0';
}




logon_account.onfocus = function(){
    if(this.value == '手机号或邮箱' || this.value == '请输入手机号或邮箱'){
        this.value = '';
        this.style.color = '#2b2b2b';
    }
}
logon_account.onblur = function(){
    if(this.value == ''){
        this.value = '请输入手机号或邮箱';
        this.style.color = '#f00';
    }
}
logon_password.onfocus = function(){
    if(logon_pd.innerHTML == '密码' || logon_pd.innerHTML == '请输入密码'){
        logon_pd.innerHTML = '';
        logon_pd.style.color = '#2b2b2b';
    }
}
logon_password.onblur = function(){
    if(this.value == ''){
        logon_pd.innerHTML = '请输入密码';
        logon_pd.style.color = '#f00';
    }
}



logon_eye.onclick = function(){
    if(flag){
        this.innerHTML = '&#xe6a0;';
        this.style.right = '.5vw';
        logon_password.type = 'text';
        flag = 0;
    } else {
        this.innerHTML = '&#xe503;';
        this.style.right = '0';
        logon_password.type = 'password';
        flag = 1;
    }
}




var article_after = $(".article_after"),
    article_before = $(".article_before"),
    article_stop = $(".article_stop"),
    article_do = $(".article_do");;
for(let i = 0;i < article_before.length;i++){
    article_stop[i].style.display = 'none';
}

for(let i = 0;i < article_before.length;i++){
    
    $(article_before[i]).on('click','.before_btn',function(){
    article_after[i].style.display = 'block';
    article_stop[i].style.display = 'block';
    article_before[i].style.display = 'none';
})
}
for(let i = 0;i < article_before.length;i++){

    $(article_do[i]).on('click','.article_stop',function(){
        article_stop[i].style.display = 'none';
        article_after[i].style.display = 'none';
        article_before[i].style.display = 'block';
    })

}

$(".logon_button").click(function(){  
    $.ajax({
        type: 'post',
        url: 'http://47.97.204.234:3000/user/login',
        data: {"username":$('.logon_account').val(),"password":$('.logon_password').val()},
        xhrFields:{withCredentials:true},
        success: function(e){
            if(e.result == 'success' ){
                localStorage.setItem('myuserId',e.userId);
                localStorage.setItem('username', $('.logon_account').val());
                localStorage.setItem('password', $('.logon_password').val());
                know.style.display = 'block';
                logon.style.display = 'none';
                mybody[0].style.background = '#f6f6f6';
                location.reload();
            
            }
            
        }
     })
})

$(".logout").click(function(){
    tip_logout.style.display = 'none';
    $.post("http://47.97.204.234:3000/user/logout",
       {"username":localStorage.getItem('username'),"password":localStorage.getItem('password')},
       function(e){
       console.log(e);
       if(e.result == 'success' ){
           know.style.display = 'none';
           logon.style.display = 'block';
           mybody[0].style.background = '#B8E5F8';
           localStorage.setItem('myuserId',"undefined");
         }
    })
})

if(localStorage.getItem('myuserId') == 'undefined'){
    know.style.display = 'none';
    logon.style.display = 'block';
    mybody[0].style.background = '#B8E5F8';
    } else {
    know.style.display = 'block';
    logon.style.display = 'none';
    mybody[0].style.background = '#f6f6f6';
}


    $.get("http://47.97.204.234:3000/article/getArticles",
    {"userId":localStorage.getItem('myuserId'),"start":0,"stop":18},
    function(e){
                console.log(e);
                var array1 = [];
                for(var items in e.articles){
                    array1.push(e.articles[i].articleId);
                }
                myarticleId(e.articles);
                myarticleId1(e.articles);
                for(let i = 0;i < before_title.length;i++){

                before_title[i].innerHTML = e.articles[i].title;
                before_userid[i].innerHTML = e.articles[i].nickname + ":";
                after_title[i].innerHTML = e.articles[i].title;
                after_userid[i].innerHTML = e.articles[i].nickname;
                after_img[i].src = e.articles[i].avatar;
                after_introduce[i].innerHTML = e.articles[i].introduction;
                after_agree[i].innerHTML = e.articles[i].likeNum + "人赞同了该回答";
                article_agree[i].innerHTML ='&#xe61d; 赞同&nbsp;' + e.articles[i].likeNum;
                after_date[i].innerHTML = e.articles[i].issueTime;

                var array = [];
                for(var items in e.articles[i].content){
                    array.push(e.articles[i].content[items]);
                }
                before_content[i].innerHTML = '';

                for(var j = 0;j < 3;j++){
                    before_content[i].innerHTML += array[j];
                }
                before_content[i].innerHTML += "...";

                for(var j = 0;j < array.length;j++){
                     var temp = array[j] + "<br/><br/>";
                     after_content[i].innerHTML += temp;
                }
            }
        })



localStorage.setItem('clickAfter',"#0084FF");
localStorage.setItem('clickBefore',"#E5F2FF");
localStorage.setItem('textAfter',"#fff");



function myarticleId(myartiId){
var myresult = true;
for(let i = 0;i < article_agree.length;i++){
article_agree[i].onclick = function(){

axios.post('http://47.97.204.234:3000/article/likeArticle', {
    userId: localStorage.getItem('myuserId'),
    articleId: myartiId[i].articleId,
    like: myresult
})
.then(function (response) {
    console.log(response);
    if(myresult){
        myresult = false;
        article_agree[i].style.background = localStorage.getItem('clickAfter');
        article_agree[i].style.color = localStorage.getItem('textAfter');
        } else {
            myresult = true;
            article_agree[i].style.background = localStorage.getItem('#E5F2FF');
            article_agree[i].style.color = localStorage.getItem('clickAfter');
        }
})
.catch(function (error) {
    console.log(error);
});
        
        }
    }
}


function myarticleId1(myartiId){
    var myresult1 = true;
    for(let i = 0;i < article_disagree.length;i++){
        article_disagree[i].onclick = function(){
    
    axios.post('http://47.97.204.234:3000/article/dislikeArticle', {
        userId: localStorage.getItem('myuserId'),
        articleId: myartiId[i].articleId,
        dislike: myresult1
    })
    .then(function (response) {
        console.log(response);
        if(myresult1){
            myresult1 = false;
            article_disagree[i].style.background = '#0084FF';
            article_disagree[i].style.color = '#fff';
            } else {
                myresult1 = true;
                article_disagree[i].style.background = '#E5F2FF';
                article_disagree[i].style.color = '#0084FF';
            }
    })
    .catch(function (error) {
        console.log(error);
    });
            
            }
        }
    }

var mat_update = $(".mat_update");
var mat_name = $(".mat_name");
var tr_input = $(".tr_input"),
mat_preserve = $(".mat_preserve"),
mat_cancel = $(".mat_cancel"),
lastTd = $(".lastTd")
mat_input = $(".mat_input"),
mat_update1 = $(".mat_update1");

var theTr = document.querySelector(".myMaterial").querySelectorAll("tr");
theTr[0].addEventListener('mouseenter',function(){
    mat_update[0].style.opacity = '1';
})
theTr[0].addEventListener('mouseleave',function(){
    mat_update[0].style.opacity = '0';
}) 
mat_update1[0].addEventListener('click',function(){
    tr_input[0].style.display = 'block';
    this.style.display = 'none';
})
mat_preserve[0].addEventListener('click',function(){
    mat_update[0].style.display = 'block';
    tr_input[0].style.display = 'none';
})
mat_cancel[0].addEventListener('click',function(){
    mat_update[0].style.display = 'block';
    tr_input[0].style.display = 'none';
})

for(let i = 1;i < theTr.length;i++){
    
    mat_update[i].addEventListener('click',function(){
        lastTd[i-1].style.display = 'none';
        tr_input[i].style.display = 'block';
        this.style.display = 'none';
    })
    mat_preserve[i].addEventListener('click',function(){
        mat_update[i].style.display = 'block';
        lastTd[i-1].style.display = 'block';
        tr_input[i].style.display = 'none';
    })
    mat_cancel[i].addEventListener('click',function(){
        mat_update[i].style.display = 'block';
        tr_input[i].style.display = 'none';
        lastTd[i-1].style.display = 'block';
    })     
   
}




mat_preserve[0].addEventListener('click',function(){
    axios.post('http://47.97.204.234:3000/user/alterInfo', {
    userId:localStorage.getItem('myuserId'),
    direction:0,
    content:$(".mat_input0").val()
    })
    .then(function (response) {
        location.reload();
       
    })
    .catch(function (error) {
        console.log(error);
    });

    
    
})
mat_preserve[1].addEventListener('click',function(){
    axios.post('http://47.97.204.234:3000/user/alterInfo', {
    userId:localStorage.getItem('myuserId'),
    direction:1,
    content:$(".mat_input1").val()
    })
    .then(function (response) {
        location.reload();
       
    })
    .catch(function (error) {
        console.log(error);
    });

    
    
})
mat_preserve[2].addEventListener('click',function(){
    axios.post('http://47.97.204.234:3000/user/alterInfo', {
    userId:localStorage.getItem('myuserId'),
    direction:2,
    content:$(".mat_input2").val()
    })
    .then(function (response) {
        location.reload();
       
    })
    .catch(function (error) {
        console.log(error);
    });

    
    
})
mat_preserve[3].addEventListener('click',function(){
    axios.post('http://47.97.204.234:3000/user/alterInfo', {
    userId:localStorage.getItem('myuserId'),
    direction:3,
    content:$(".mat_input3").val()
    })
    .then(function (response) {
        location.reload();
       
    })
    .catch(function (error) {
        console.log(error);
    });

    
    
})
mat_preserve[4].addEventListener('click',function(){
    axios.post('http://47.97.204.234:3000/user/alterInfo', {
    userId:localStorage.getItem('myuserId'),
    direction:4,
    content:$(".mat_input4").val()
    })
    .then(function (response) {
        location.reload();
       
    })
    .catch(function (error) {
        console.log(error);
    });

    
    
})


$.get("http://47.97.204.234:3000/user/getInfo",
    {"userId":localStorage.getItem('myuserId')},
    function(e){
        img1.src = e.info.avatar;
        mat_name[0].innerHTML = e.info.nickname;
        console.log(e.info);
        lastTd[0].innerHTML = e.info.gender;
        lastTd[1].innerHTML = e.info.introduction;
        lastTd[2].innerHTML = e.info.trade;
        lastTd[3].innerHTML = e.info.resume;

})


$("#myBtn").on('click',function(){
    var file = $("#myfile").get(0).files[0];
    console.log(file);
    var formData = new FormData();//*
    formData.append("image1",file);//*
    console.log(formData.get("image1"));
    $.ajax({
        type: 'post',
        url: 'http://47.97.204.234:3000/user/alterAvatar',
        data: formData,
        processData: false,//*
        contentType: false,//*
        xhrFields:{withCredentials:true},
        success: function(data){
            console.log(data);
            
        }
     })
})
var container = document.querySelector("#container");
var material = document.querySelector(".material");
var goback = document.querySelector(".goback");
var myMaterial = $(".myMaterial");
material.addEventListener('click',function(){
    tip_logout.style.display = 'none';
    container.style.display = 'none';
    myMaterial[0].style.display = 'block';
})
goback.addEventListener('click',function(){
    container.style.display = 'block';
    myMaterial[0].style.display = 'none';
})


