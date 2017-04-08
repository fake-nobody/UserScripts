// ==UserScript==
// @name         HunLiMao-Qiniu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://pub.xitaoinfo.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // var url = location.href;
    // location.href = url;
    if (location.search) {
        location.href = location.origin + location.pathname;
    } else {
        //window.setTimeout(down, 1000);
    //    down();
        //window.frames("myiframe").document.execCommand("SaveAs");
        //window.document.execCommand("SaveAs");
        save();
    }

    function save() {
        //var img = document.getElementById("testImg");
        var img = document.getElementsByTagName("img")[0];
        //var alink = document.createElement("a");
        var a = document.createElement("a");
        a.href = img.src;
        document.body.appendChild(a);
        a.download = location.pathname.substr(1);
        a.click();

        //close tab
        //window.setTimeout(function(){
            //window.opener = null;
            //window.open('', '_self', '');
            //window.close();
        //}, 1000);
        //window.location.href = 'about:blank ';
        //window.close();
    }

    function down(){
        var elemIF = document.createElement("iframe");
        elemIF.name = "myiframe";
        elemIF.src = location.href;
        elemIF.style.display = "none";
        document.body.appendChild(elemIF);
    }
})();