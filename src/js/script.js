var listContents = $(".item").length;
$(".item-wrap").each(function () {


    var Num = 9,
        gtNum = Num - 1;


    $(this).find('.more_btn').show();


    $(this).find("a:not(:lt(" + Num + "))").hide();


    $('.more_btn').click(function () {

        Num += 1;
        $(this).parent().find("a:lt(" + Num + ")").slideDown();
        if (listContents <= Num) {
            $('.more_btn').hide();

        }
    });
});
$(function () {
    $(".js-sub-img img").on("click", function () {
        img = $(this).attr("src");
        $(".js-sub-img li").removeClass("current");
        $(this).parent().addClass("current");
        $(".js-main-img img").fadeOut(50, function () {
            $(".js-main-img img")
                .attr("src", img)
                .on("load", function () {
                    $(this).fadeIn();
                });
        });
    });
});
$(document).ready(function () {
    //画像が無い場合にイベント発火
    $('img').error(function () {
        //該当の要素を削除する
        $(this).remove();
    });
});