$(function() {

    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* fixed header */

    checkScroll(scrollOffset);

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){
        
        if ( scrollOffset >= introH ){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(e){
        e.preventDefault()

        let $this = $(this)
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top - 15

        $("#nav a").removeClass("active")
        $this.addClass("active")

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    })


    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(e){
        e.preventDefault()

        $(this).toggleClass("active")
        $("#nav").toggleClass("active")
    })

    /* collapse */
    $("[data-collapse]").on("click", function(e){
        e.preventDefault()

        let $this = $(this)
            blockId = $this.data('collapse')

            $this.toggleClass("active")
            
    })

    /* slider */
    $(".autoplay").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        fade: true,
        speed: 500
    })
});