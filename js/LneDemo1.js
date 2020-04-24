var onload0to4 = function(){
     var sett = {
    
          dataType: "json",
          type:"get",
          url:"http://47.97.204.234:3000/article/getArticles",
          data:{
              "userId":"5e96e5986dc8847e998b85fb",
              "start":0,
              "stop":4
          },
          async:true,
         
          success:function(result,articles){
     
              var arr = [];
              for(var item in articles){
                  arr.push(articles[item]);
                  
              }
     
              arr.forEach(function(element) {     
                  console.log(element);
     
                  console.log(sett.data.start);
                  sett.data.start = 0;
                  for(var i = 0 ;i < 4;i++){
                      
                      before_title[i].innerHTML = element[i].title;
                      before_userid[i].innerHTML = element[i].nickname + ":";
     
                      after_title[i].innerHTML = element[i].title;
                      after_userid[i].innerHTML = element[i].nickname;
                      // after_img[i].setAttribute("src",element[i].avatar);
                  
                      after_introduce[i].innerHTML = element[i].introduction;
                      after_agree[i].innerHTML = element[i].likeNum + "人赞同了该回答";
                      after_date[i].innerHTML = element[i].issueTime;
                      var array = [];
                      for(var items in element[i].content){
                          array.push(element[i].content[items]);
                  
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
              
                });                           
          }
      }
      myAjax(sett);
      // var html = template("resultTemplate",articles);
      // var one = document.querySelector("#one");
      // one.innerHTML = html;
}
var onload4to8 = function(){
     var sett = {
    
          dataType: "json",
          type:"get",
          url:"http://47.97.204.234:3000/article/getArticles",
          data:{
              "userId":"5e96e5986dc8847e998b85fb",
              "start":4,
              "stop":8
          },
          async:true,
         
          success:function(result,articles){
     
              var arr = [];
              for(var item in articles){
                  arr.push(articles[item]);
                  
              }
     
              arr.forEach(function(element) {     
                  console.log(element);
     
                  console.log(sett.data.start);
                  sett.data.start = 0;
                  for(var i = 0 ;i < 4;i++){
                      
                      before_title[i+4].innerHTML = element[i].title;
                      before_userid[i+4].innerHTML = element[i].nickname + ":";
     
                      after_title[i+4].innerHTML = element[i].title;
                      after_userid[i+4].innerHTML = element[i].nickname;
                      // after_img[i].setAttribute("src",element[i].avatar);
                  
                      after_introduce[i+4].innerHTML = element[i].introduction;
                      after_agree[i+4].innerHTML = element[i].likeNum + "人赞同了该回答";
                      after_date[i+4].innerHTML = element[i].issueTime;
                      var array = [];
                      for(var items in element[i].content){
                          array.push(element[i].content[items]);
                  
                      }
                      before_content[i+4].innerHTML = '';
                      for(var j = 0;j < 3;j++){
                          before_content[i+4].innerHTML += array[j];
                      }
                      before_content[i+4].innerHTML += "...";
                      for(var j = 0;j < array.length;j++){
                           var temp = array[j] + "<br/><br/>";
                           after_content[i+4].innerHTML += temp;
                      }
        
                  }
              
                });                           
          }
      }
      myAjax(sett);
      // var html = template("resultTemplate",articles);
      // var one = document.querySelector("#one");
      // one.innerHTML = html;
}
var onload8to9 = function(){
     var sett = {
    
          dataType: "json",
          type:"get",
          url:"http://47.97.204.234:3000/article/getArticles",
          data:{
              "userId":"5e96e5986dc8847e998b85fb",
              "start":8,
              "stop":9
          },
          async:true,
         
          success:function(result,articles){
     
              var arr = [];
              for(var item in articles){
                  arr.push(articles[item]);
                  
              }
     
              arr.forEach(function(element) {     
                  console.log(element);
     
                  console.log(sett.data.start);
                  sett.data.start = 0;
                  for(var i = 0 ;i < 2;i++){
                      
                      before_title[i+8].innerHTML = element[i].title;
                      before_userid[i+8].innerHTML = element[i].nickname + ":";
     
                      after_title[i+8].innerHTML = element[i].title;
                      after_userid[i+8].innerHTML = element[i].nickname;
                      // after_img[i].setAttribute("src",element[i].avatar);
                  
                      after_introduce[i+8].innerHTML = element[i].introduction;
                      after_agree[i+8].innerHTML = element[i].likeNum + "人赞同了该回答";
                      after_date[i+8].innerHTML = element[i].issueTime;
                      var array = [];
                      for(var items in element[i].content){
                          array.push(element[i].content[items]);
                  
                      }
                      before_content[i+8].innerHTML = '';
                      for(var j = 0;j < 3;j++){
                          before_content[i+8].innerHTML += array[j];
                      }
                      before_content[i+8].innerHTML += "...";
                      for(var j = 0;j < array.length;j++){
                           var temp = array[j] + "<br/><br/>";
                           after_content[i+8].innerHTML += temp;
                      }
        
                  }
              
                });                           
          }
      }
      myAjax(sett);
      // var html = template("resultTemplate",articles);
      // var one = document.querySelector("#one");
      // one.innerHTML = html;
}
var onload10to14 = function(){
     var sett = {
    
          dataType: "json",
          type:"get",
          url:"http://47.97.204.234:3000/article/getArticles",
          data:{
              "userId":"5e96e5986dc8847e998b85fb",
              "start":10,
              "stop":14
          },
          async:true,
         
          success:function(result,articles){
     
              var arr = [];
              for(var item in articles){
                  arr.push(articles[item]);
                  
              }
     
              arr.forEach(function(element) {     
                  console.log(element);
     
                  console.log(sett.data.start);
                  sett.data.start = 0;
                  for(var i = 0 ;i < 4;i++){
                      
                      before_title[i+10].innerHTML = element[i].title;
                      before_userid[i+10].innerHTML = element[i].nickname + ":";
     
                      after_title[i+10].innerHTML = element[i].title;
                      after_userid[i+10].innerHTML = element[i].nickname;
                      // after_img[i].setAttribute("src",element[i].avatar);
                  
                      after_introduce[i+10].innerHTML = element[i].introduction;
                      after_agree[i+10].innerHTML = element[i].likeNum + "人赞同了该回答";
                      after_date[i+10].innerHTML = element[i].issueTime;
                      var array = [];
                      for(var items in element[i].content){
                          array.push(element[i].content[items]);
                  
                      }
                      before_content[i+10].innerHTML = '';
                      for(var j = 0;j < 3;j++){
                          before_content[i+10].innerHTML += array[j];
                      }
                      before_content[i+10].innerHTML += "...";
                      for(var j = 0;j < array.length;j++){
                           var temp = array[j] + "<br/><br/>";
                           after_content[i+10].innerHTML += temp;
                      }
        
                  }
              
                });                           
          }
      }
      myAjax(sett);
      // var html = template("resultTemplate",articles);
      // var one = document.querySelector("#one");
      // one.innerHTML = html;
}
var onload14to18 = function(){
     var sett = {
    
          dataType: "json",
          type:"get",
          url:"http://47.97.204.234:3000/article/getArticles",
          data:{
              "userId":"5e96e5986dc8847e998b85fb",
              "start":14,
              "stop":18
          },
          async:true,
         
          success:function(result,articles){
     
              var arr = [];
              for(var item in articles){
                  arr.push(articles[item]);
                  
              }
     
              arr.forEach(function(element) {     
                  console.log(element);
     
                  console.log(sett.data.start);
                  sett.data.start = 0;
                  for(var i = 0 ;i < 4;i++){
                      
                      before_title[i+14].innerHTML = element[i].title;
                      before_userid[i+14].innerHTML = element[i].nickname + ":";
     
                      after_title[i+14].innerHTML = element[i].title;
                      after_userid[i+14].innerHTML = element[i].nickname;
                      // after_img[i].setAttribute("src",element[i].avatar);
                  
                      after_introduce[i+14].innerHTML = element[i].introduction;
                      after_agree[i+14].innerHTML = element[i].likeNum + "人赞同了该回答";
                      after_date[i+14].innerHTML = element[i].issueTime;
                      var array = [];
                      for(var items in element[i].content){
                          array.push(element[i].content[items]);
                  
                      }
                      before_content[i+14].innerHTML = '';
                      for(var j = 0;j < 3;j++){
                          before_content[i+14].innerHTML += array[j];
                      }
                      before_content[i+14].innerHTML += "...";
                      for(var j = 0;j < array.length;j++){
                           var temp = array[j] + "<br/><br/>";
                           after_content[i+14].innerHTML += temp;
                      }
        
                  }
              
                });                           
          }
      }
      myAjax(sett);
      // var html = template("resultTemplate",articles);
      // var one = document.querySelector("#one");
      // one.innerHTML = html;
}