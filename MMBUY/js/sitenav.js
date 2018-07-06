/**
 * Created by gggzzz on 2018/7/6.
 */


$(function(){

  //获取所有商城导航的列表信息 并渲染到页面上
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getsitenav',
    dataType:"json",
    success:function(info){
      console.log(info);

      var htmlStr=template("tmp",info);
      $(".waterfull").html(htmlStr);
    }
  })
})
