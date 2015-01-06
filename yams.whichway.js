
/* ========================================================================
* yams.whichway.js
* version:	1.1
* author:	Brad Williams <brad.lee.williams@gmail.com>
* ======================================================================== */

if (!$.yams) { $.yams = new Object(); }

$.yams.whichway = (function () {
    //private

    var _callbacks = []
    var _lastOrientation = {}

    var _getOrientation = function () {
        var orientation = 'default'
        switch (Math.abs(window.orientation * 1)) {
            default:
            case 0:
            case 180:
                orientation = "portrait"
                break
            case 90:
            case 270:
                orientation = "landscape"
                break
        }
        return orientation;
    }
    var _update = function() {
        var orientation = _getOrientation()

        if (!_lastOrientation
            || _lastOrientation != orientation) {

            // add class
            switch (orientation) {
                case 'default':
                case 'portrait':
                    $('body')
                        .addClass("device-portrait")
                        .removeClass("device-landscape")
                    break
                case 'landscape':
                    $('body')
                        .addClass("device-landscape")
                        .removeClass("device-portrait")
                    break
            }

            // run callback
            if (defaults.enableResizeTracking) {
                for (var i = 0; i < _callbacks.length; i++) {
                    _callbacks[i](orientation)
                }
            }
        }
        _lastOrientation = orientation
    }

    //public
    return {
        addCallback: function (callback) {
            _callbacks.push(callback)
        },
        init: function () {
            window.addEventListener("orientationchange", function () {
                orient()
            });
        },
        getOrientation: function () {
            return _lastOrientation
        },
    }

})(jQuery, $.yams.whichway);

$(function () { 
    $.yams.whichway.init()
})