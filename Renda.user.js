// ==UserScript==
// @name         Renda
// @description  Powerfull clicker for Tanki Online
// @version      1.3
// @author       N3onTechF0X
// @match        https://*.tankionline.com/*
// @icon         https://cdn.discordapp.com/attachments/1154469342671548456/1200608934331961464/N3onTechF0X.png
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @connect      raw.githubusercontent.com
// ==/UserScript==
/*ATTENTION: script use CheatBase*/
GM_xmlhttpRequest({method:"GET",url:"https://raw.githubusercontent.com/N3onTechF0X/some_TO_scripts/main/Renda.min.js",nocache:!0,onload:resp=>{eval(resp.responseText)}});
