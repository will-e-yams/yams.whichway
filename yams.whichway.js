
/* ========================================================================
* yams.whichway.js
* version:	1.0
* author:	Brad Williams <brad.lee.williams@gmail.com>
* ======================================================================== */

if (!$.yams) { $.yams = new Object(); }
if (!$.yams.whichway) { $.yams.whichway = new Object(); }

(function ($, $ww) {

    $ww.init = function () {
        window.addEventListener("orientationchange", function () {
            $ww.orient();
        });
    }

    $ww.orient = function () {
        var orientation = $ww._getOrientation();
        switch (orientation) {
            case 'default':
            case 'portrait':
                $('body').addClass("device-portrait");
                $('body').removeClass("device-landscape");
                break;
            case 'landscape':
                $('body').addClass("device-landscape");
                $('body').removeClass("device-portrait");
                break;
        }
    };

    $ww._getOrientation = function () {
        var orientation = 'default';
        switch (Math.abs(window.orientation * 1)) {
            default:
            case 0:
            case 180:
                orientation = "portrait";
                break;
            case 90:
            case 270:
                orientation = "landscape";
                break;
        }
        return orientation;
    }

})(jQuery, $.yams.whichway);

$.yams.whichway.init();