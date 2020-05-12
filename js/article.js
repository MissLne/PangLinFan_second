// ==========================
// 获取文章及点赞踩文章
// ==========================


//点击阅读全文显示的文章和收起文章
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
//获取文章
$.get(base+"/article/getArticles",
    {"userId":localStorage.getItem('myuserId'),"start":0,"stop":18},
    function(e){
          var array1 = [];
          for(var items in e.articles){
               array1.push(e.articles[items].articleId);
          }
          myarticleId(e.articles);
          myarticleId1(e.articles);
          myarticleId2(e.articles);
          //创建相关元素来接收文章
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
               localStorage.setItem('my_likenum'+i+'',e.articles[i].likeNum);
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
          //点赞之后按钮的颜色
          for(let i = 0;i < e.articles.length;i++){
               if(e.articles[i].liked == true){
                    article_agree[i].style.background = "#0084FF";
                    article_agree[i].style.color = "#fff";
               } else {
                    article_agree[i].style.background = "#E5F2FF";
                    article_agree[i].style.color = "#0084FF";
                       
               }
          }
          //点踩之后按钮的颜色
          for(let i = 0;i < e.articles.length;i++){
               if(e.articles[i].disliked == true){
                    article_disagree[i].style.background = "#0084FF";
                    article_disagree[i].style.color = "#fff";
               } else {
                    article_disagree[i].style.background = "#E5F2FF";
                    article_disagreed[i].style.color = "#0084FF";
               }
          }
})
//点攒文章
function myarticleId(myartiId){
     var myresult = false;
     for(let i = 0;i < article_agree.length;i++){
          article_agree[i].onclick = function(){
         
               axios.post(base+'/article/likeArticle', {
               userId: localStorage.getItem('myuserId'),
               articleId: myartiId[i].articleId,
               like: myresult
               })
     
               .then(function (response) {
               console.log(response);
               if(myresult){
                    myresult = false;
                    article_agree[i].style.background = "#0084FF";
                    article_agree[i].style.color = "#fff";
                    var mynumber = Number(localStorage.getItem('my_likenum'+i+''));
                    article_agree[i].innerHTML ='&#xe61d; 赞同&nbsp;' + mynumber;
               } else {
                    myresult = true;
                    var mynumber1 = Number(localStorage.getItem('my_likenum'+i+''));
                    article_agree[i].innerHTML ='&#xe61d; 赞同&nbsp;' + mynumber1;
                    article_agree[i].style.background = "#E5F2FF";
                    article_agree[i].style.color = "#0084FF";
               }
               localStorage.setItem('my_result'+i+'',myresult);

               })
              .catch(function (error) {
                    console.log(error);
               });
          }
     }
}
//点踩文章
function myarticleId1(myartiId){
     var myresult1 = true;
     for(let i = 0;i < article_disagree.length;i++){
         article_disagree[i].onclick = function(){
     
         axios.post(base+'/article/dislikeArticle', {
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
 
