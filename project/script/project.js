$(function () {

    /*ReactDOM.render(React.createElement("div",null,"hello world"),document.getElementById("react"))*/




    var wHeight = $(window).height();
    var wWidth = $(window).width();
    $(".fullHeight").css("height", wHeight);

    $(window).resize(function () {
        var wHeight = $(window).height();
        $(".fullHeight").css("height", wHeight);
    });

    /*navbar overlay*/
    $("#open").click(function () {
        $("#nav").fadeToggle();
        $("#open").css("visibility", "hidden");

    });
    $("#close").click(function () {
        $("#nav").fadeToggle();
        $("#open").css("visibility", "visible");
    });

    $(window).resize(function () {
        if (window.innerWidth >= 769) {
            $("#nav").css("display", "block");
        } else {
            $("#nav").css("display", "none");
            $("#open").css("visibility", "visible");
        }

    });

    $("header h1").lettering();



    //control position  center


    function position(ele) {
        var wHeight = $(window).height();
        var wWidth = $(window).width();
        var lWidth = $(ele).width();
        var lHeight = $(ele).height();
        var top = (wHeight - lHeight) / 2;
        var left = (wWidth - lWidth) / 2;
        $(ele).css("top", top);
        $(ele).css("left", left);
    }

    function poLetter(){
        var hHeight = $("header").height();
        var hWidth = $("header").width();
        var lWidth = $(".letter").width();
        var lHeight = $(".letter").height();
        var top = (hHeight - lHeight) / 2;
        var left = (hWidth - lWidth) / 2;
        $(".letter").css("top", top);
        $(".letter").css("left", left);
       
    }
    
    //----------------position letters-------------------------
    var font = new FontFaceObserver("orbitron", {
        weight: 400
    });

    font.load().then(function () {
        poLetter();

    }, function () {
        poLetter();
        console.log('Font is not available');
    });
    position(".letter");
    $(window).resize(function () {
        poLetter();
    });

    //-----------------match height-------------
    $(".jumbotron").matchHeight();

    //-------------center project block---------
    function centerTop(ele) {
        var wHeight = $(window).height();
        var lHeight = $(ele).height();
        var top = (wHeight - lHeight) / 2;
        $(ele).css("top", top);
    }

    centerTop(".jumbotron");
    //------------animation on scroll--------------
    AOS.init();

    //-------------img overlay---------------
    //---------detect mobile deveice-----------
    function isMobile() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }

    if (isMobile()) {
        $(".imgContainer .overlay").each(function () {
            $(this).on("touchstart", function () {
                if ($(this).css("opacity") == 1) {
                    $(this).css("opacity", 0);
                } else if ($(this).css("opacity") == 0) {
                    $(this).css("opacity", 1);
                }
            });
        });
    }

});
