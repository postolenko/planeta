function getRespNavParams() {
    if(bodyWidth <= 1024) {
        $(".main_nav_wrapp").appendTo(".resp_nav");
    } else {
        $(".main_nav_wrapp").appendTo("#nav_col");
    }
    if(bodyWidth <= 767) {
        $(".resp_append").prependTo(".resp_icons_wrapp");
    } else {
        $(".resp_append").prependTo("#respIcons");
    }
    if(bodyWidth <= 1869) {
        $(".side_nav_wrapp").appendTo("#sideNavAppend");
    } else {        
        $(".side_nav_wrapp").prependTo(".catalog_wrapp");
    }

}

function getPromoImgParams() {
    if(bodyWidth > 767) {
        $("#promoImg").css({
            "padding-top" : $(".main_header").height() + "px"
        });
    } else {
        $("#promoImg").css({
            "padding-top" : 0
        });
    }
    if(bodyWidth > 767) {
        $("#setHeight").css({
            "padding-top" : $(".main_header").height() + "px"
        });
    } else {
        $("#setHeight").css({
            "padding-top" : 0
        });
    }
}

function countTotalPrice() {
    if( $(".goods_prices").length > 0 ) {
        priceGood = 0;
        priceValTotal = 0;
        $(".goods_prices [data-price-val]").each(function() {
            priceVal = parseInt( $(this).attr("data-price-val") );
            goodsCount = $(this).closest(".good_price_item").find(".goods_count input").val();
            if(goodsCount == "") {
                goodsCount = 0;
            }
            priceGood = priceVal * goodsCount;
            priceValTotal += priceGood;
        });
        $("#total_price").html(priceValTotal);
    }
}

function getSizeBtnPosition() {
    if( $("#sizeBtn").length> 0 ) {
        parentBlock = $(".sizes_wrapp");
        $("#sizeBtn").offset({top: parentBlock.offset().top});
        $("#sizeBtn").css({
            "height" : parentBlock.height() + "px"
        });
    }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var value,
    activeValue;

$(window).load(function() {

    getSizeBtnPosition();

});

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    getRespNavParams();
    getPromoImgParams();
    getSizeBtnPosition();

});

$(document).scroll(function() {



});

$(document).ready(function() {

    getRespNavParams();
    getPromoImgParams();
    countTotalPrice();

    // -------------------------

    $(".active_val").on("click", function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".dropdown_select");
        if(parentBlock.hasClass("active")) {
            parentBlock.removeClass("active");
        } else {
            $(".dropdown_select").removeClass("active");
            parentBlock.addClass("active");
        }        
    });

    $(".vals_list li").on("click", function(e) {
        e.preventDefault();
        value = $(this).html();
        parentBlock = $(this).closest(".dropdown_select");
        activeValue = parentBlock.find(".active_val");
        if(activeValue.find("input").length > 0) {
        	value = value.replace(/^\s+/g,'').replace(/\s+$/g,'');
        	parentBlock.find("input").attr("value", value);
        } else {
        	activeValue.html(value);
        }
    });

    $(document).mouseup(function (e){
        hide_element = $(".dropdown_select");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            hide_element.removeClass("active");
        }
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            $(".dropdown_select").removeClass("active");
        }
    });

    // ----------------------
    
    $(".count_box button").click(function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".count_box");
        var countInput = parentBlock.find("input");
        var countVal = countInput.val();
        if( $(this).hasClass("minus_btn") && countVal > 1 ) {
            countVal--;
        } else if( $(this).hasClass("plus_btn")) {
            countVal++;
        }
        if(countVal == "") {
            countVal = 1;
        }
        countInput.val(countVal);
    });

    // ----------------

    if( $(".card_slider_big").length > 0 ) {
        $(".card_slider_big").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: ".card_slider_miniatures",
            fade: true,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/down_arrow.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/down_arrow.svg"></button>'
        });

        $(".card_slider_miniatures").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: ".card_slider_big",
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 560,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    }

 	// ----------------

    if($(".rating").length > 0) {
        $(".rating").each(function() {
            var ratingVal = parseFloat($(this).attr("data-rating"));
            $(".rating").rateYo({ 
                rating: ratingVal,
                spacing: "7px", 
                numStars: 5, 
                minValue: 0,
                maxValue: 5, 
                normalFill: 'transparent',
                ratedFill: '#353535',
                starWidth: "33px",
                readOnly: true,
                "starSvg": '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" '
                +' x="0px" y="0px" viewBox="0 0 55.867 55.867" style="enable-background:new 0 0 55.867 55.867;" xml:space="preserve"> '
				+'<path d="M55.818,21.578c-0.118-0.362-0.431-0.626-0.808-0.681L36.92,18.268L28.83,1.876c-0.168-0.342-0.516-0.558-0.896-0.558'
				+'s-0.729,0.216-0.896,0.558l-8.091,16.393l-18.09,2.629c-0.377,0.055-0.689,0.318-0.808,0.681c-0.117,0.361-0.02,0.759,0.253,1.024' 
				+'l13.091,12.76l-3.091,18.018c-0.064,0.375,0.09,0.754,0.397,0.978c0.309,0.226,0.718,0.255,1.053,0.076l16.182-8.506l16.18,8.506'
				+'c0.146,0.077,0.307,0.115,0.466,0.115c0.207,0,0.413-0.064,0.588-0.191c0.308-0.224,0.462-0.603,0.397-0.978l-3.09-18.017'
				+'l13.091-12.761C55.838,22.336,55.936,21.939,55.818,21.578z"/></svg>'
            });
        });

    }

    // ----------------

    $(".respmenubtn").click(function(e) {
        e.preventDefault();
        if( $("#resp_nav").is(":hidden") ) {
            $("#resp_nav").fadeIn(300);
            $(this).addClass("active");
        } else {
            $("#resp_nav").fadeOut(300);
            $(this).removeClass("active");
        }
    });

    $("#resp_nav .close_btn").on("click", function(e) {
        e.preventDefault();
        $("#resp_nav").fadeOut(300);
        $(".respmenubtn").removeClass("active");
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") ) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    // ---------------

    $(".count_box_2 button").click(function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".count_box_2");
        var countInput = parentBlock.find("input");
        var countVal = countInput.val();
        if( $(this).hasClass("minus_btn_2") && countVal > 0 ) {
            countVal--;
        } else if( $(this).hasClass("plus_btn_2")) {
            countVal++;
        }
        if(countVal == "") {
            countVal = 0;
        }
        countInput.val(countVal);
        if(parentBlock.hasClass("goods_count")) {
            countTotalPrice();
        }
    });

    $(".goods_count input").on("keyup", function(e) {
        e.preventDefault();
        countTotalPrice();
    });

    $(".good_price_item .del_btn").on("click", function(e) {
        e.preventDefault();
        $(this).closest(".good_price_item").remove();
        countTotalPrice();
    });

    // ------------------

    $("#sizeBtn").on("click", function(e) {
        e.preventDefault();
        $(".sizes_wrapp").toggleClass("hide");
    });

    // -------------------

    $(".resp_btn").on("click", function(e) {
        e.preventDefault();
        parentBlock = $(this).closest("li");
        var subMenu = parentBlock.children(".sub_menu");
        if(subMenu.is(":hidden")) {
            subMenu.slideDown(300);
            $(this).addClass("active");
        } else {
            subMenu.slideUp(300);
            $(this).removeClass("active");
        }
    });

    // ---------------------

    $("[data-popup-link]").on("click", function(e) {
        e.preventDefault();
        popupName = $(this).attr("data-popup-link");
        div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        scrollWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
        $("body").css({
            "position" : "fixed",
            "top" :  -$(document).scrollTop() + "px",
            "overflow" : "hidden",
            "right" : 0,
            "left" : 0,
            "bottom" : 0,
            "padding-right" : scrollWidth + "px"
        });
        $("body").addClass("fixed");
        $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });

    $(".close_popup").on("click", function(e) {
        e.preventDefault();
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "")
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(this).closest("[data-popup]").fadeOut(300);
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            $("body").attr("style", "")
            $("body").removeClass("fixed");
            $("[data-popup]").fadeOut(300);
        }
    });

});