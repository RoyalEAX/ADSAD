// ==UserScript==
// @name         Renda
// @description  Powerfull clicker for Tanki Online
// @version      0.8
// @author       N3onTechF0X
// @match        https://*.tankionline.com/*
// @icon         https://cdn.discordapp.com/attachments/1154469342671548456/1200608934331961464/N3onTechF0X.png
// @run-at       document-start
// @grant        none
// ==/UserScript==
/*ATTENTION: script use CheatBase*/
window.RendaConfig={multiply:1,repair:!1,shield:!1,damage:!1,speed:!1,mine:!1,rapid:!1};const styleElement=document.createElement("style");document.head.appendChild(styleElement),styleElement.textContent="\n  .RendaWindow {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: fixed;\n    width: 100px;\n    top: 40px;\n    left: 40px;\n    padding: 10px;\n    background: rgba(0,0,0,0.6);\n    backdrop-filter: blur(5px);\n    border: 3px solid rgb(0, 0, 0);\n    display: block;\n    border-radius: 15px;\n    z-index: 9999;\n    font-size: 16px;\n    color: white;\n    transition: opacity 0.5s, transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n    opacity: 0;\n    user-select: none;\n    transform: scale(0);\n    text-align: center;\n  }\n  .RendaTitle {\n    text-align: center;\n  }\n  .switch:hover {\n    transform: scale(1.1);\n  }\n  .switch {\n    margin: 5px;\n    width: 90px;\n    border: 2px solid rgba(255, 255, 255, 0.2);\n    border-radius: 15px;\n    text-align: center;\n    cursor: pointer;\n    transition: background-color 0.5s ease-in-out, transform 0.3s ease-in-out;\n  }\n  .switch_on {\n    background-color: rgba(150, 0, 0, 0.3);\n  }\n  .switch_off {\n    background-color: transparent;\n  }\n  .multiply_label {\n    text-align: center;\n  }\n  .multiply_slider {\n    margin: 5px;\n    width: 90px;\n    cursor: pointer;\n  }\n";const createDivWithClass=(e,n,t)=>{let i=document.createElement("div");return i.classList.add(...e),i.textContent=n,t&&i.addEventListener("click",t),i},floatingWindow=document.createElement("div");floatingWindow.classList.add("RendaWindow");const title=createDivWithClass(["RendaTitle"],"Renda clicker"),toggleElm=(e,n)=>{window.RendaConfig[e]=!window.RendaConfig[e],n.classList.toggle("switch_on",window.RendaConfig[e]),n.classList.toggle("switch_off",!window.RendaConfig[e])},elm_repair=createDivWithClass(["switch","switch_off"],"Repair",()=>toggleElm("repair",elm_repair)),elm_shield=createDivWithClass(["switch","switch_off"],"Shield",()=>toggleElm("shield",elm_shield)),elm_damage=createDivWithClass(["switch","switch_off"],"Damage",()=>toggleElm("damage",elm_damage)),elm_speed=createDivWithClass(["switch","switch_off"],"Speed",()=>toggleElm("speed",elm_speed)),elm_mine=createDivWithClass(["switch","switch_off"],"Mine",()=>toggleElm("mine",elm_mine)),elm_rapid=createDivWithClass(["switch","switch_off"],"Rapid update",()=>toggleElm("rapid",elm_rapid)),elm_multiply=document.createElement("input");elm_multiply.classList.add("multiply_slider"),elm_multiply.type="range",elm_multiply.min=1,elm_multiply.max=10,elm_multiply.value=window.RendaConfig.multiply,elm_multiply.addEventListener("input",e=>{window.RendaConfig.multiply=parseInt(e.target.value)});const multiplyLabel=document.createElement("span");multiplyLabel.textContent=`Multiply: ${window.RendaConfig.multiply}`,setInterval(()=>{multiplyLabel.textContent=`Multiply: ${window.RendaConfig.multiply}`},100),addEventListener("cheat-base-ready",e=>{e.runAfterPhysicsUpdate.push(()=>{window.RendaConfig.repair&&e.features.supplies.activateSupplyByName("FIRST_AID")}),e.runAfterPhysicsUpdate.push(()=>{window.RendaConfig.shield&&e.features.supplies.activateSupplyByName("DOUBLE_ARMOR")}),e.runAfterPhysicsUpdate.push(()=>{window.RendaConfig.damage&&e.features.supplies.activateSupplyByName("DOUBLE_DAMAGE")}),e.runAfterPhysicsUpdate.push(()=>{window.RendaConfig.speed&&e.features.supplies.activateSupplyByName("NITRO")}),e.runAfterPhysicsUpdate.push(()=>{for(let n=0;n<window.RendaConfig.multiply;n++)window.RendaConfig.rapid&&e.gameClasses.localPlayer.send(new FullStateCorrectionMessage),window.RendaConfig.mine&&e.features.supplies.activateSupplyByName("MINE")}),document.addEventListener("keyup",n=>{e.features.battleChat.isInputActive()||77===n.keyCode&&("1"===floatingWindow.style.opacity?closeMenu():openMenu())})});let offsetX,offsetY,isDragging=!1,canDrag=!0;function openMenu(){floatingWindow.appendChild(elm_multiply),floatingWindow.style.display="block",setTimeout(()=>{floatingWindow.style.opacity=1,floatingWindow.style.transform="scale(1)"},1)}function closeMenu(){floatingWindow.removeChild(elm_multiply),floatingWindow.style.opacity=0,floatingWindow.style.transform="scale(0)",setTimeout(()=>{floatingWindow.style.display="none"},500)}floatingWindow.addEventListener("mousedown",e=>{let n=e.target;n.classList.contains("switch")||n.classList.contains("multiply_slider")?canDrag=!1:(canDrag=!0,isDragging=!0,offsetX=e.clientX-floatingWindow.getBoundingClientRect().left,offsetY=e.clientY-floatingWindow.getBoundingClientRect().top)}),document.addEventListener("mousemove",e=>{isDragging&&canDrag&&(floatingWindow.style.left=e.clientX-offsetX+"px",floatingWindow.style.top=e.clientY-offsetY+"px")}),document.addEventListener("mouseup",()=>{isDragging=!1}),floatingWindow.appendChild(title),floatingWindow.appendChild(elm_repair),floatingWindow.appendChild(elm_shield),floatingWindow.appendChild(elm_damage),floatingWindow.appendChild(elm_speed),floatingWindow.appendChild(elm_mine),floatingWindow.appendChild(elm_rapid),floatingWindow.appendChild(multiplyLabel),document.body.appendChild(floatingWindow);
