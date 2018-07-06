/**
 * Created by gggzzz on 2018/7/3.
 */

$(function () {

  var category;

  function getSearch(name) {
    var search = location.search;
    // 中文解码
    search = decodeURI(search);
    search = search.slice(1);
    var arr = search.split("&");  //  ["categoryId=1", "category=空调"]
    var obj = {};
    arr.forEach(function (v, i) {
      var key = v.split("=")[0];  // categoryId
      var value = v.split("=")[1]; // 1
      obj[key] = value;
    });
    return obj[name];
  }


  //通过地址栏传参方法获取category后面的id
  var id = getSearch('categoryId');
  console.log(id);


  //根据分类id获取分类名称
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getcategorybyid",
    data: {
      categoryid: id
    },
    dataType: "json",
    success: function (info) {
      //console.log(info);

     category = info.result[0].category;
      console.log(category);

      var obj = template("tpl", info)
      $(".productList-header").html(obj);
    }
  })


  //获取商品列表信息

  var currentPage = 1;

  function render(pageid) {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getproductlist",
      data: {
        categoryid: id,
        pageid: pageid
      },
      dataType: "json",
      success: function (info) {
        console.log(info);

        info.category=category
        console.log(info);

        totalPage = Math.ceil(info.totalCount / info.pagesize);


        var htmlStr = template("tmp", info);
        $(".productList-main").html(htmlStr);
        $(".mui-navigate-right").val(currentPage + "/" + totalPage);

      }
    })
  }

  render(currentPage);

  //点击下一页渲染
  $(".next").click(function(){
    if(currentPage>=totalPage){
      return false
    }
    currentPage++;
    render(currentPage);
  })

  //点击上一页渲染
  $(".prev").click(function(){
    if(currentPage<=0){
      return false
    }
    currentPage--;
    render(currentPage);
  })


})
