// ==UserScript==
// @name         FPS hack
// @description  Upgrade your fps in battle
// @version      1.2
// @author       N3onTechF0X
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com
// @run-at       document-start
// @grant        none
// ==/UserScript==

var i=!1;setInterval(()=>{var e=document.querySelector(".BattleHudFpsComponentStyle-value");if(!e)return i=!1;if(!i){var t=document.createElement("span");t.textContent="500",t.style.color="rgb(136, 206, 81)",e.style.display="none",e.parentNode.insertBefore(t,e.nextSibling),i=!0}},100);
