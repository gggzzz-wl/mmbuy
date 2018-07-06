/**
 * Created by gggzzz on 2018/7/5.
 */





$(function () {



  //白菜价标题
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getbaicaijiatitle",
    dataType: 'json',
    success: function (info) {

      var htmlStr = template("tmp", info)
      $(".list").html(htmlStr)

    }
  })


  ////区域滚动
  window.addEventListener("load", function() {
    new IScroll(".ul-wrap", {
      scrollX: true,   // 配置横向区域滚动, 默认值 false
      scrollY: false   // 配置纵向区域滚动, 默认值 true
    });
  });






//白菜价商品列表

  var titleId=0;
  render(titleId);

  $(".list").on("click", "li", function () {

     titleId = $(this).data("id");
    console.log(titleId);
    render()
  })

  //点击li高亮
  $(".list").on("click","a",function(){
    $(this).addClass("current").parents().siblings().find("a").removeClass("current");
  })



function render(){
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getbaicaijiaproduct",
    data: {
      titleid: titleId
    },
    dataType: "json",
    success: function (info) {

      console.log(info);

      var obj = template("tpl", info)

      $(".detail").html(obj)
    }
  })
}





})
