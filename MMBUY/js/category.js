/**
 * Created by gggzzz on 2018/7/3.
 */



$(function () {
  //分类标题


  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getcategorytitle",
    dataType: 'json',
    success: function (info) {
      console.log(info);

      var htmlStr = template("tmp", info);
      $(".category").html(htmlStr);
    }
  })



//  分类列表
  $(".category").on("click",".title1",function(){

    var id=$(this).data("id");
    var ul=$(this).find("ul");
    console.log(id)
    $.ajax({
      type:'get',
      url:"http://127.0.0.1:9090/api/getcategory",
      data:{
        titleid:id
      },
      dataType:"json",
      success:function(info){
        console.log(info);

        ul = $("a[index=" + id + "]").next();

        var obj=template("tpl",info);
       ul.html(obj);

        //ul=$("#title1").next();
        //var obj=template("tpl",info);
        //ul.html(obj)

        ul.slideToggle();

      }
    })
  })



})
