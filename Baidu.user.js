// ==UserScript==
// @name         baidu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.baidu.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.querySelector('div#lg img').onclick = function(){
        window.open(this.src);
    };
})();