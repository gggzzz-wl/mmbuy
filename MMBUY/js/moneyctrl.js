/**
 * Created by gggzzz on 2018/7/4.
 */




$(function(){

  //省钱控商品列表
  var currentPage=1

  function render(pageid){
    $.ajax({
      type:"get",
      url:"http://127.0.0.1:9090/api/getmoneyctrl",
      data:{
        pageid:pageid
      },
      dataType:"json",
      success:function(info){
        console.log(info);

        totalPage=Math.ceil(info.totalCount/info.pagesize)

        var htmlStr=template("tmp",info);
        $(".infomat").html(htmlStr);
        $(".mui-navigate-right").val(currentPage+"/"+totalPage);
      }
    })
  }
  render(currentPage);


  //点击按钮，分页切换
  $(".next").click(function(){
    if(currentPage>=totalPage){
      return false
    }
    currentPage++;
    render(currentPage)
  })

  $(".prev").click(function(){
    if(currentPage<=0){
      return false
    }
    currentPage--;
    render(currentPage)
  })


//点击向上的箭头返回顶部
  $(".retu ").click(function(){
    $("body,html").animate({
      scrollTop:0
    },1000)
  })






})