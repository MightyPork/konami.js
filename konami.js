// https://github.com/MightyPork/konami.js | MIT License

(function (window) {
    "use strict";

    var d = window.document;
    var keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    var progress = 0;

    window.konami = function (h) {
        var listener = function (e) {
            if (e.keyCode == keys[progress]) {
                if (++progress == keys.length) {
                    console.log('コナミ');

                    if (typeof h == 'function') {
                        h();
                    }

                    progress = 0;
                }
            } else {
                progress = 0;
            }
        };

        if (d.addEventListener) {
            d.addEventListener('keyup', listener);
        } else {
            d.onkeyup = listener;
        }
    };
})(window);
