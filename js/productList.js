//console.log($$.getQueryString("search_text"));
(function() {
  var search_text = $$.getQueryString('search_text');
  var number = 1;
  $('#product-list-title-txt').html(search_text);

  function searchProductData(page, pagesize) {
    $$.Ajax.searchProduct(page, search_text, pagesize, function(data) {
      var dataArr = data['data'];
      for (var i = 0; i < dataArr.length; i++) {
        $('#pro-list').append($$.createDom(dataArr[i]));
      }

      $('#click-add-more').css({
        'margin-top': 10,
      });
    });
  }

  searchProductData(1, 10);

  $('#click-add-more').on('touchstart', function() {
    number++;
    searchProductData(number, 10);
  });

})();

