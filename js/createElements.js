// ==========================
// 声明变量及创建元素
// ==========================

for(let i = 0;i < 18;i++){
     let str="<div class='article_before'>"+
      "<h3 class='before_title'></h3>"+
      "<span class='before_userid'></span>"+
      "<span class='before_content'></span>"+
      "<span class='before_btn'>阅读全文"+
         "<span class='iconfont'>&#xe502;</span>"+
     "</span>"+
      "</div>";   
  $(".main_article").append(str); 
 
  let str1="<div class='article_after'>"+
      "<h3 class='after_title'></h3>"+
      "<img class='after_img'>"+
      "<span class='after_userid'></span>"+
      "<span class='after_introduce'></span>"+
      "<p class='after_agree'></p>"+
      "<p class='after_content'></p>"+
      "<p class='after_date'></p>"+
      "</div>";   
  $(".main_article").append(str1);
  
  let str2="<div class='article_do'>"+
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
 
     let str3 = "<div class='arcticle_comments'></div>";
     $(".main_article").append(str3); 
}
let base = "http://47.97.204.234:3000";
let before_title = $(".before_title"),
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
let head_sculpture = document.querySelector(".head_sculpture");
let know = document.getElementById("know");
let logon = document.getElementById("logon");
let mybody = document.getElementsByTagName("body");
let logon_account = document.querySelector(".logon_account");
let logon_pd = document.querySelector(".logon_pd");
let logon_password = document.querySelector(".logon_password");
let logon_eye = document.querySelector(".logon_eye");
let flag = 1;
let img1 = head_sculpture.querySelector('img');
let head_container1 = document.querySelector('.head_container1');
let head_container2 = document.querySelector('.head_container2');
let head_input = document.querySelector('.head_input');
let head_button = document.querySelector('.head_button');
let copyright = document.getElementById('copyright');
let massage_box = document.getElementsByClassName('massage_box');
let timer = null; //定义一个定时器
let isTop = true; //定义一个布尔值，用于判断是否到达顶部
let pictrue_btn = document.querySelector('.pictrue_btn');
let pictrue = document.getElementById('pictrue');
let article_after = $(".article_after"),
    article_before = $(".article_before"),
    article_stop = $(".article_stop"),
    article_do = $(".article_do");
let array4 = [];
let mat_update = $(".mat_update");
let mat_name = $(".mat_name");
let tr_input = $(".tr_input"),
    mat_preserve = $(".mat_preserve"),
    mat_cancel = $(".mat_cancel"),
    lastTd = $(".lastTd")
    mat_input = $(".mat_input"),
    mat_update1 = $(".mat_update1");
let theTr = document.querySelector(".myMaterial").querySelectorAll("tr");
let container = document.querySelector("#container");
let material = document.querySelector(".material");
let goback = document.querySelector(".goback");
let myMaterial = $(".myMaterial");
let head_friends = document.querySelector(".head_friends");
let tip_friends = document.querySelector(".tip_friends");
let friend_ul = document.querySelector(".friend_ul");

