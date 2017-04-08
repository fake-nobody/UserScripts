// ==UserScript==
// @name         HunLiMao-pic
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.hunlimao.com/photoSelector/app?photoFollowOrderId=8946
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //window.onload = function(){
        //document.querySelector('div.big-right-remark-icon').onclick = function(){
            //window.setTimeout(function(){
                //window.open(document.querySelector('img.zoomer-image').src);
                //document.querySelector('div.control-next').click();
                //window.open(document.querySelector('img.zoomer-image').src);
            //}, 1000);
        //};
    //};
    document.querySelector('div.zoomer-holder').onclick = function(){
        window.open(this.querySelector('img.zoomer-image').src);//
    };
})();