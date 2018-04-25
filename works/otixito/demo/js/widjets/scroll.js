// плавная навигация
var j = jQuery.noConflict();

j(function () {
    j('a[href^="#"]').on('click', function (event) {

        var target = j(j(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            j('html, body').animate({
                scrollTop: target.offset().top
            }, 700);
        }

    })
})