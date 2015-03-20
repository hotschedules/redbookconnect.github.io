$(document).ready(function () {
    var download = $('.download');

    console.log('hello');
    var uA = navigator.userAgent;
    if (uA.indexOf("Firefox/") != -1) {
        var ff = parseInt(uA.split('Firefox/')[1],10);
    }
    else if (uA.indexOf("MSIE") != -1) {
        var i = uA.indexOf("MSIE") + 5;
        var msie = parseInt(uA.substring(i,i+5).split(';')[0],10);
    }

    if (ff < 14 || msie < 10) {
        // console.log(ff,msie);
        $('#upgrade').show();
        $('#valid-browser').hide();
    }
    else {
        // console.log(ff,msie);
        $('#upgrade').hide();
        $('#valid-browser').show();
    }
    /*
        DOWNLOAD BUTTON FUNCTIONALITY 
    */
	if (navigator.appVersion.indexOf("Win") != -1) {
        var b, fi, r, w;
        w = window.navigator.platform;
        fi = function(s) {
            return window.navigator.userAgent.indexOf(s) > -1;
        };

        if (fi('x86_64') || fi('x86-64') || fi('Win64') || fi('x64;') || fi('amd64') || fi('AMD64') || fi('WOW64') || fi('x64_64') || w === 'MacIntel' || w === 'Linux x86_64') {
            b = 64;
        } else if (w === 'Linux armv7l' || w === 'iPad' || w === 'iPhone' || w === 'Android' || w === 'iPod' || w === 'BlackBerry') {
            b = 0;
        } else if (w === 'Linux i686') {
            b = -1;
        }

        if (b !== -1 && b !== 0) {
            var downloadUrl = "http://rbcplatform.artifactoryonline.com/rbcplatform/simple/hotlinik-release/BodhiAgentSetup-x86.exe";
            var text = 'for Windows x86 32 Bit';

            if (b === 64) {
                downloadUrl = "http://rbcplatform.artifactoryonline.com/rbcplatform/simple/hotlinik-release/BodhiAgentSetup-x64.exe";
            	text = 'for Windows x64 64 Bit';            	
            }

            $('.smallNote').html(text);
        }

    } else {
        download.prop('disabled', true);
        download.css('opacity', '0.5');
        $('.largeNote').text('Not supported');
    }

    download.click(function () {
        location.href = downloadUrl;

        $('.first').fadeOut();
        $('.options').fadeOut();
        $('.after').fadeIn();
        $('.footer').css({
            position: 'absolute',
            top: '131.9vh'
        });
    });

    $('.link').click(function () {
        $('.first').fadeOut();
        $('.options').fadeOut();
        $('.after').fadeIn();
    });
});