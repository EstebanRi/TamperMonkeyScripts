// ==UserScript==
// @name         Junar instance indicator
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Add Staging tag
// @author       EstebanR
// @match        http://workspace.staging.azure.junar.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload=function(){document.getElementsByTagName('body')[0].innerHTML += '<div style="position: fixed;top: 0;left: 50%;background-color: orange;z-index: 900;text-align: center;padding: 1em;border: 1px solid black;border-radius: .3em;transform: translate(-50%, 0%);box-shadow: 2px 3px 10px #232831ab;"><span style="">STAGING</span></div>'
}
})();

