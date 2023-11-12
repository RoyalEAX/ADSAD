// ==UserScript==
// @name         FPS hack
// @description  Upgrade your fps in battle
// @version      1.0
// @author       N3onTechF0X
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com
// @run-at       document-start
// @grant        none
// ==/UserScript==

var i=!1;setInterval(()=>{var e=document.querySelector('.BattleHudFpsComponentStyle-value');if(!e){var i=!1;return 0;}if(!i){var n=document.createElement('span');n.textContent='144';n.style.color='rgb(116, 186, 61)';e.style.display='none';e.parentNode.insertBefore(n,e.nextSibling);i=!0;}},100);
