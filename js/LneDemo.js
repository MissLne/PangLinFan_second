function myAjax(obj) {

    var defaults = {
        type: "get",
        url: "#",
        dataType: "json",
        data: {},
        async: true,
        success: function (result,articles) {
        }
    };

    for (var key in obj) {
        defaults[key] = obj[key];
    }

    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }


    var params = '';
    for (var attr in defaults.data) {
        params += attr + "=" + defaults.data[attr] + "&";
    }
    if (params) {
        params = params.substring(0, params.length - 1);
    }
    if (defaults.type == 'get') {
        defaults.url += "?" + params;
    }
    xhr.open(defaults.type, defaults.url, defaults.async);

    if (defaults.type == 'get') {
        xhr.send(null);
    } else if (defaults.type == 'post') {
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }

    if (defaults.async) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {

                var result = null;
                var articles = null;
                if (defaults.dataType == 'json') {
                    result = xhr.responseText;
                    result = JSON.parse(result);
                    articles = xhr.responseText;
                    articles = JSON.parse(articles);
                } else if (defaults.dataType == 'xml') {
                    result = xhr.responseXML;
                    articles = xhr.responseXML;
                } else {
                    articles = xhr.responseText;
                    result = xhr.responseText;
                }
                defaults.success(result,articles);
            }
        }
    } else {
        if (xhr.readyState == 4 && xhr.status == 200) {

            var result = null;
            var articles = null;
            if (defaults.dataType == 'json') {
                result = xhr.responseText;
                articles = xhr.responseText;
                result = JSON.parse(result);
                articles = JSON.parse(articles);
            } else if (defaults.dataType == 'xml') {
                result = xhr.responseXML;
            } else {
                result = xhr.responseText;
            }
            defaults.success(result,articles);
        }
    }
}


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
   window.onmousewheel = document.onmousewheel = scrollFunc;


var pictrue_btn = document.querySelector('.pictrue_btn');
var pictrue = document.getElementById('pictrue');

pictrue_btn.onclick = function(){
    pictrue.style.height = '0';
}

let logon_account = document.querySelector(".logon_account");
let logon_pd = document.querySelector(".logon_pd");
let logon_password = document.querySelector(".logon_password");
let logon_eye = document.querySelector(".logon_eye");


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


var flag = 1;
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
let logon_button = document.querySelector(".logon_button");

let know = document.getElementById("know");
let logon = document.getElementById("logon");






// function myAjax(obj) {

//     var defaults = {
//         type:"get",
//         url:"#",
//         dataType:"json",
//         data:{},
//         async:true,
//         success:function(result){console.log(result);}
// };

//     for(var key in obj){
//         defaults[key] = obj[key];
//     }

//     var xhr = null;
//     if(window.XMLHttpRequest) {
//          xhr = new XMLHttpRequest();
//     } else {
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }


//     var params = '';
//     for(var attr in defaults.data){
//         params += attr + "=" + defaults.data[attr] + "&";
//     }
//     if(params){
//         params = params.substring(0,params.length - 1);
//     }
//     if(defaults.type == 'get'){
//         defaults.url += "?" + params;
//     }
//     xhr.open(defaults.type,defaults.url,defaults.async);

//     if(defaults.type == 'get'){
//         xhr.send(null);
//     } else if(defaults.type == 'post') {
//         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//         xhr.send(params);
//     }

//     if(defaults.async){
//         xhr.ajax.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
            
//             var result = null;
//             if(defaults.dataType == 'json'){
//                 result = xhr.responseText;
//                 result = JSON.parse(result);
//             } else if(defaults.dataType == 'xml') {
//                 result = xhr.responseXML;
//             } else {
//                 result = xhr.responseText;
//             }
//             defaults.success(result);
//         }
//         }
//     }else{
//         if (xhr.readyState == 4 && xhr.status == 200) {
            
//             var result = null;
//             if(defaults.dataType == 'json'){
//                 result = xhr.responseText;
//                 result = JSON.parse(result);
//             } else if(defaults.dataType == 'xml') {
//                 result = xhr.responseXML;
//             } else {
//                 result = xhr.responseText;
//             }
//             defaults.success(result);
//         }
//     }
// }


// logon_button.onclick = function(){
//     var logonm = {
//         type:"post",
//         url:"http://47.97.204.234:3000/user/login",
//         dataType:"json",
//         data:{
//             "username": "null",
//             "password": "null"
//         },
//         async:true,
//         success:function(result){console.log(result);}
//     };
//     logonm.data.username = logon_account.value;
//     logonm.data.password = logon_password.value;
//     myAjax(logonm);
// }
var mybody = document.getElementsByTagName("body");
logon_button.addEventListener("click", function () {
    let setting = {
        type: "post",
        url: "http://47.97.204.234:3000/user/login",
        dataType: "json",
        data: {
            "username": "null",
            "password": "null"
        }, 
        async: true,
        success: function (result) {
            console.log(result);
            if(result.result == 'success'){
                know.style.display = 'block';
                logon.style.display = 'none';
                mybody[0].style.background = '#f6f6f6';

            }
        }

    }
    setting.data.username=logon_account.value;
    setting.data.password=logon_password.value;
    myAjax(setting);
})
let before_title = document.getElementsByClassName('before_title');
let before_userid = document.getElementsByClassName('before_userid');
let before_content = document.getElementsByClassName('before_content');
let before_btn = document.getElementsByClassName('before_btn');

let after_title = document.getElementsByClassName('after_title');
let after_userid = document.getElementsByClassName('after_userid');
let after_img = document.getElementsByClassName('after_img');
let after_introduce = document.getElementsByClassName('after_introduce');
let after_agree = document.getElementsByClassName('after_agree');
let after_content = document.getElementsByClassName('after_content');
let after_date = document.getElementsByClassName('after_date');

let main_article = document.getElementsByClassName('main_article');

window.onload = function(){
    onload0to4();
    onload4to8();
    onload8to9();
    onload10to14();
    onload14to18();
    }
   



var article_stop = document.querySelectorAll(".article_stop");
var article_after = document.querySelectorAll(".article_after");
var article_before = document.querySelectorAll(".article_before");
for(let a = 0;a < before_btn.length;a++){
    before_btn[a].onclick = function(){
        article_before[a].style.display = 'none';
        article_after[a].style.display = 'block';
        article_stop[a].style.display = 'block';
    }
}
for(let b = 0;b < article_stop.length;b++){
    article_stop[b].onclick = function(){
        article_before[b].style.display = 'block';
        article_after[b].style.display = 'none';
        article_stop[b].style.display = 'none';
    }
}

