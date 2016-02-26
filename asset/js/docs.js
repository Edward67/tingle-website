jQuery(function() {
    var $ = jQuery;
    console.log($('h1', '.content').html())

    // 添加github地址;
    var list = $('a[href^="http://badge.fury.io/js/tingle"]');

    $.each(list, function(index, item) {
        var name = item.href.slice(31)

        $(item).parent().append('<a class="github-link" target="_blank" href="https://github.com/tinglejs/tingle-' + name + '"><img src="../asset/css/octocat.svg" /></a>')
        //console.log($(item), $(item).parent()[0].appendChild('<a></a>'))
    })

})