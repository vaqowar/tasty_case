$(document).ready(function () {
    $('.header__bottom').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
    });

    $(".header__top_burger").click(function () {
        $(".header__top_burger_item").toggleClass("selected");
    });

    $('.header__top_burger').click(function () {
        $('.header__top_list').slideToggle(500);
    });

    $(".header__top_list li").click(function () {
        if (window.innerWidth < 991) {
            $(".header__top_burger").click();
        }
    });

    $('.header__top_account').click(function () {
        $('.header__top_account_list').slideToggle(500);
        $('.header__top_account_arrow').toggleClass("rotate");
    });

    $(".myacc__answers_info.selected").slideToggle(500);

    $('.myacc__answers_name').click(function () {
        $(this).siblings('.myacc__answers_info').slideToggle(500);
        $(this).siblings('.myacc__answers_info').toggleClass("selected");
        $(this).toggleClass("selected");
    });

    $('.cas__slider_main_cont').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
    });

    $(".cas__slider_settings_cont").children("label").click(function () {
        $(this).children("input[type='radio']").prop("checked", true);

        var index = $(this).index() + 1;

        var way = $(this)
            .parent(".cas__slider_settings_cont")
            .parent(".cas__slider_settings")
            .prev(".cas__slider_main");

        if (index == 1) {
            way.children(".cas__slider_main_cont:nth-child(2)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(3)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(4)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(5)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(6)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(7)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(8)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(9)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(10)").slideUp(1000);
        }
        if (index == 2) {
            way.children(".cas__slider_main_cont:nth-child(2)").slideDown(1000);

            way.children(".cas__slider_main_cont:nth-child(3)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(4)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(5)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(6)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(7)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(8)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(9)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(10)").slideUp(1000);
        }
        if (index == 3) {
            way.children(".cas__slider_main_cont:nth-child(2)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(3)").slideDown(1000);

            way.children(".cas__slider_main_cont:nth-child(4)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(5)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(6)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(7)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(8)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(9)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(10)").slideUp(1000);
        }
        if (index == 4) {
            way.children(".cas__slider_main_cont:nth-child(2)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(3)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(4)").slideDown(1000);

            way.children(".cas__slider_main_cont:nth-child(5)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(6)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(7)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(8)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(9)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(10)").slideUp(1000);
        }
        if (index == 5) {
            way.children(".cas__slider_main_cont:nth-child(2)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(3)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(4)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(5)").slideDown(1000);

            way.children(".cas__slider_main_cont:nth-child(6)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(7)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(8)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(9)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(10)").slideUp(1000);
        }
        if (index == 6) {
            way.children(".cas__slider_main_cont:nth-child(2)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(3)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(4)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(5)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(6)").slideDown(1000);

            way.children(".cas__slider_main_cont:nth-child(7)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(8)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(9)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(10)").slideUp(1000);
        }
        if (index == 7) {
            way.children(".cas__slider_main_cont:nth-child(2)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(3)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(4)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(5)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(6)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(7)").slideDown(1000);

            way.children(".cas__slider_main_cont:nth-child(8)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(9)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(10)").slideUp(1000);
        }
        if (index == 8) {
            way.children(".cas__slider_main_cont:nth-child(2)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(3)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(4)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(5)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(6)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(7)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(8)").slideDown(1000);

            way.children(".cas__slider_main_cont:nth-child(9)").slideUp(1000);
            way.children(".cas__slider_main_cont:nth-child(10)").slideUp(1000);
        }
        if (index == 9) {
            way.children(".cas__slider_main_cont:nth-child(2)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(3)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(4)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(5)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(6)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(7)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(8)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(9)").slideDown(1000);

            way.children(".cas__slider_main_cont:nth-child(10)").slideUp(1000);
        }
        if (index == 10) {
            way.children(".cas__slider_main_cont:nth-child(2)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(3)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(4)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(5)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(6)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(7)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(8)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(9)").slideDown(1000);
            way.children(".cas__slider_main_cont:nth-child(10)").slideDown(1000);
        }
    });

    $(".cas__slider_bottom > button").click(function () {
        $(".caspopup").fadeIn(300);

        $("body").addClass("blur");
        $('.header__bottom').slick('slickPause');
    });
    $(".caspopup__close").click(function () {
        $(".caspopup").fadeOut(300);

        $("body").removeClass("blur");
        $('.header__bottom').slick('slickPlay');
    });
    $(".caspopup__bg").click(function () {
        $(".caspopup").fadeOut(300);

        $("body").removeClass("blur");
        $('.header__bottom').slick('slickPlay');
    });
    $(".caspopup__close").click(function () {
        $(".caspopup").fadeOut(300);

        $("body").removeClass("blur");
        $('.header__bottom').slick('slickPlay');
    });


    $(".header__top_balance").click(function () {
        $(".balancepopup").fadeIn(300);

        $("body").addClass("blur");
        $('.header__bottom').slick('slickPause');
    });
    $(".balancepopup__close").click(function () {
        $(".balancepopup").fadeOut(300);

        $("body").removeClass("blur");
        $('.header__bottom').slick('slickPlay');
    });
    $(".balancepopup__bg").click(function () {
        $(".balancepopup").fadeOut(300);

        $("body").removeClass("blur");
        $('.header__bottom').slick('slickPlay');
    });
    $(".balancepopup__close").click(function () {
        $(".balancepopup").fadeOut(300);

        $("body").removeClass("blur");
        $('.header__bottom').slick('slickPlay');
    });


    $(".myacc__left_string_up").click(function () {
        $(".howpopup").fadeIn(300);

        $("body").addClass("blur");
        $('.header__bottom').slick('slickPause');
    });
    $(".howpopup__close").click(function () {
        $(".howpopup").fadeOut(300);

        $("body").removeClass("blur");
        $('.header__bottom').slick('slickPlay');
    });
    $(".howpopup__bg").click(function () {
        $(".howpopup").fadeOut(300);

        $("body").removeClass("blur");
        $('.header__bottom').slick('slickPlay');
    });
    $(".howpopup__close").click(function () {
        $(".howpopup").fadeOut(300);

        $("body").removeClass("blur");
        $('.header__bottom').slick('slickPlay');
    });


    $(".spin__main_form_inputbox > button").click(function () {
        $(".spinpopup").fadeIn(300);

        $("body").addClass("blur");
        $('.header__bottom').slick('slickPause');
    });
    $(".spinpopup__close").click(function () {
        $(".spinpopup").fadeOut(300);

        $("body").removeClass("blur");
        $('.header__bottom').slick('slickPlay');
    });
    $(".spinpopup__bg").click(function () {
        $(".spinpopup").fadeOut(300);

        $("body").removeClass("blur");
        $('.header__bottom').slick('slickPlay');
    });
    $(".spinpopup__close").click(function () {
        $(".spinpopup").fadeOut(300);

        $("body").removeClass("blur");
        $('.header__bottom').slick('slickPlay');
    });


    $(".contract__create_bottom > button").click(function () {
        $(".contractpopup").fadeIn(300);

        $("body").addClass("blur");
        $('.header__bottom').slick('slickPause');
    });
    $(".contractpopup__close").click(function () {
        $(".contractpopup").fadeOut(300);

        $("body").removeClass("blur");
        $('.header__bottom').slick('slickPlay');
    });
    $(".contractpopup__bg").click(function () {
        $(".contractpopup").fadeOut(300);

        $("body").removeClass("blur");
        $('.header__bottom').slick('slickPlay');
    });
    $(".contractpopup__close").click(function () {
        $(".contractpopup").fadeOut(300);

        $("body").removeClass("blur");
        $('.header__bottom').slick('slickPlay');
    });



    // Select
    $('.topusers__choices_selector').each(function () {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450;

        _this.hide();
        _this.wrap('<div class="topusers__choices_selector"></div>');
        $('<div>', {
            class: 'topusers__choices_selectornew',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.topusers__choices_selectornew');
        $('<div>', {
            class: 'topusers__choices_selectornew_list'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.topusers__choices_selectornew_list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'topusers__choices_selectornew_item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.topusers__choices_selectornew_item');
        selectList.slideUp(0);
        selectHead.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function () {
                    let chooseItem = $(this).data('value');

                    $(this)
                        .parent(".topusers__choices_selectornew_list")
                        .parent(".topusers__choices_selector")
                        .val(chooseItem).attr('selected', 'selected');

                    selectHead.text($(this).find('span').text());
                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });
});


