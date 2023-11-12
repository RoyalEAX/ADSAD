// ==UserScript==
// @name         FPS hack
// @description  Upgrade your fps in battle
// @version      1.4
// @author       N3onTechF0X
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com
// @run-at       document-start
// @grant        none
// ==/UserScript==

var s,i=!1;setInterval(()=>{var e=document.querySelector(".BattleHudFpsComponentStyle-value");if(!e)return clearInterval(s),i=!1;if(!i){var t=document.createElement("span");t.style.color="rgb(116, 186, 61)",e.style.display="none",e.parentNode.insertBefore(t,e.nextSibling),s=setInterval(()=>{t.textContent=(Math.floor(4*Math.random())+141).toString()},1e3),i=!0}},100);
