

$(function(){

  var search=location.search;
  search=search.slice(1);
  search=search.split("=");
  var productid=search[1]

  console.log(search)
  $.ajax({
    type:"get",
    url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
    data:{
      productid:productid
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr=template("tmp",info)
      $(".content").html(htmlStr)

      console.log(info.result[0].productComment);

      var productComment= info.result[0].productComment

      $(".productComment").html(productComment);
    }
  })
})