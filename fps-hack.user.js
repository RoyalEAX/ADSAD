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

var fpsSet = false;
var pingSet = false;

setInterval(() => {
    var fpsElement = document.querySelector(".BattleHudFpsComponentStyle-value");
    var pingElement = document.querySelector('.BattleHudFpsComponentStyle-row:nth-child(2) .BattleHudFpsComponentStyle-value');

    if (!fpsElement || !pingElement) {
        fpsSet = false;
        pingSet = false;
        return;
    }

    if (!fpsSet) {
        var newFpsElement = document.createElement("span");
        newFpsElement.textContent = "500";
        newFpsElement.style.color = "rgb(136, 206, 81)";
        fpsElement.style.display = "none";
        fpsElement.parentNode.insertBefore(newFpsElement, fpsElement.nextSibling);
        fpsSet = true;
    }

    if (!pingSet) {
        var newPingElement = document.createElement("span");
        newPingElement.textContent = "20";
        newPingElement.style.color = "rgb(136, 206, 81)";
        pingElement.style.display = "none";
        pingElement.parentNode.insertBefore(newPingElement, pingElement.nextSibling);
        pingSet = true;
    }
}, 100);
