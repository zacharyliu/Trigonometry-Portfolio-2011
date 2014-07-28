function Splash() {
    this.visible = true;
    this.hide = function() {
        $("#splashText").stop().clearQueue().animate({'opacity': '0', 'right': '0px'}, 400).removeClass('hideSlide');
        this.visible = false;
    }
    this.hideNow = function() {
        $("#splashText").stop().clearQueue().css({'opacity': '0', 'right': '0px'}).removeClass('hideSlide');
        this.visible = false;
    }
    this.animateOver = function() {
        $("#splashText").stop().animate({'right': '80px'}, 200);
    }
    this.animateReset = function() {
        $("#splashText").stop().animate({'right': '50px'}, 200);
    }
    this.animateIn = function() {
        $("#splashText.hideSlide").stop().animate({'right': '50px'}, 1000).removeClass('hideSlide');
    }
}
var splash = new Splash();

function Toc() {
    this.animateIn = function() {
        var duration = 400;
        $("#toc li.hideSlide:first").stop().animate({'left': '10px'}, duration, function(){
            $(this).animate({'left': '0px'}, duration/2);
        }).removeClass('hideSlide');
        setTimeout(function() {
            if ($("#toc li.hideSlide").length > 0) {
                toc.animateIn();
            }
        }, duration/3);
    }
    this.click = function(object) {
        if (splash.visible) {
            splash.hide();
        }
        
        // scroll back to top of page
        window.scroll(0, 0);
        
        // load content
        var href = $(object).attr('href');
        href = href.substring(1);
        href = 'content/' + href + '.html';
        href = escape(href);
        $("#content").load(href);
        
        // animate it to the active position and add the 'active' class
        $("#toc li").not($(object).parent('li')).removeClass('active').animate({'left': '0px'}, 150);
        $(object).parent('li').addClass('active');
        
        // if not triggered by an actual click event, then animate to the active position
        if ($(object).parent('li').queue().length == 0) {
            $(object).stop().parent('li').animate({'left': '6px'}, 150);
        }
    }
    this.rewrite = function() {
        // rewrites links to "#" style for the history plugin
        $("#toc li a").each(function(){
            var href = $(this).attr('href');
            href = href.substring(8, href.length-5);
            href = "#" + href;
            $(this).attr('href', href);
        });
    }
}
var toc = new Toc();

function remote() {
    $.getScript('remote/remote.js', function() {
        var remoteClient = new RemoteClient();
        remoteClient.main();
    });
}

$(function(){
    // start remote
    //remote();
    
    // initalize TOC with history plugin
    toc.rewrite();
    $.history.init(function(hash){
        if (hash == "") {
            setTimeout(toc.animateIn, 500);
            setTimeout(splash.animateIn, 2);
        } else {
            splash.hideNow();
            var object = $('#toc li a[href*="' + hash + '"]');
            toc.click(object);
        }
    });
    
    // events
    $("#splashText").mouseover(function(){
        splash.animateOver();
    });
    $("#splashText").mouseout(function(){
        splash.animateReset();
    });
    $("#toc li").mouseover(function(){
        $(this).stop().animate({'left': '6px'}, 150);
    });
    $("#toc li").mouseout(function(){
        if (!$(this).hasClass('active')) {
            $(this).stop().animate({'left': '0px'}, 150);
        }
    });
});