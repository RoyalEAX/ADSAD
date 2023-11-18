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

// ==UserScript==
// @name         Utilities
// @description  Some of functions
// @version      1.5
// @author       N3onTechF0X, tdsrse
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com
// @run-at       document-start
// @grant        none
// ==/UserScript==

// Основное окно
const floatingWindow = document.createElement("div");
floatingWindow.classList.add("UtilitiesWindow");
floatingWindow.style.cssText = "position: fixed; top: 20px; left: 20px; background: linear-gradient(to bottom right, rgba(95,7,239, 0.2), rgba(0, 0, 0, 0.2)); padding: 10px; backdrop-filter: blur(3px); border: 2px solid rgba(255, 255, 255, 0.2); display: block; border-radius: 15px; z-index: 9999; font-size: 17px; color: white; transition: opacity 0.5s ease-in-out; opacity: 0; user-select: none;";
// Открытие контейнеров
const elm_open_conts = document.createElement("div");
elm_open_conts.classList.add("button", "OpenContainers", "general");
elm_open_conts.textContent = "Open Containers",
    elm_open_conts.addEventListener("click", () => {
        floatingWindow.style.opacity = 0,
            setTimeout(() => {
                    for (var e = 0; e < 1e3; e++) document.querySelector(".ClosedContainerStyle-moreButton")?.click();
                    floatingWindow.style.opacity = 1
                },
                500)
    });
// Покупка контейнеров
let conts_interval, is_conts_buy = !1;

function buy_conts() {
    let e = ["120 ящиков", "Подтвердить", "Закрыть"];
    document.querySelectorAll("span").forEach(t => {
        e.includes(t.textContent) && t.click()
    })
}
const elm_buy_conts = document.createElement("div");
elm_buy_conts.classList.add("toogle", "BuyContainers", "general");
elm_buy_conts.textContent = "Buy Containers",
    elm_buy_conts.addEventListener("click", () => {
        (is_conts_buy = !is_conts_buy) ? (conts_interval = setInterval(buy_conts, 200), elm_buy_conts.style.backgroundColor = "rgb(66 150 66/30%)") : (clearInterval(conts_interval), elm_buy_conts.style.backgroundColor = "transparent")
    });
// Скрытие голдов
let golds_interval, is_golds_hide = !1;

function hide_golds() {
    document.querySelectorAll(".BattleMessagesComponentStyle-messageRow").forEach(e => {
        let t = e.querySelector(".BattleMessagesComponentStyle-message");
        if (t) {
            let o = t.innerHTML.toLowerCase();
            o.includes("золотой") || o.includes("ящик") || o.includes("golden") || o.includes("box") ? e.style.display = "none" : e.style.display = "flex"
        }
    })
}
const elm_hide_golds = document.createElement("div");
elm_hide_golds.classList.add("toogle", "HideGolds", "general");
elm_hide_golds.textContent = "Hide Golds",
    elm_hide_golds.addEventListener("click", () => {
        (is_golds_hide = !is_golds_hide) ? (golds_interval = setInterval(hide_golds, 10), elm_hide_golds.style.backgroundColor = "rgb(66 150 66/30%)") : (clearInterval(golds_interval), document.querySelectorAll(".BattleMessagesComponentStyle-messageRow").forEach(e => {
            e.style.display = "flex"
        }), elm_hide_golds.style.backgroundColor = "transparent")
    });
// Анти афк
let anti_afk_interval, is_anti_afk = !1;

function anti_afk() {
    console.log("anti-afk") /* == TODO == */
}
const elm_anti_afk = document.createElement("div");
elm_anti_afk.classList.add("toogle", "AntiAFK", "general");
elm_anti_afk.textContent = "Anti-AFK",
    elm_anti_afk.addEventListener("click", () => {
        (is_anti_afk = !is_anti_afk) ? (anti_afk_interval = setInterval(anti_afk, 30e3), elm_anti_afk.style.backgroundColor = "rgb(66 150 66/30%)") : (clearInterval(anti_afk_interval), elm_anti_afk.style.backgroundColor = "transparent")
    });
// ФПС хак
let fps_hack_interval, is_fps_hack = !1;
let fps_inner_interval, TO_fps_elm, fake_fps_elm = document.createElement("span");
fake_fps_elm.classList.add("fake_fps");
fake_fps_elm.style.color = "rgb(116, 186, 61)";
fake_fps_elm.style.display = "none";

function fps_hack() {
    TO_fps_elm = document.querySelector(".BattleHudFpsComponentStyle-value");
    if (!TO_fps_elm) {
        fake_fps_elm.style.display = "none";
        return clearInterval(fps_inner_interval);
    }
    TO_fps_elm.style.display = "none";
    fake_fps_elm.style.display = "flex";
    if (!document.querySelector(".fake_fps")) {
        TO_fps_elm.parentNode.insertBefore(fake_fps_elm, TO_fps_elm.nextSibling)
        fps_inner_interval = setInterval(() => {
            fake_fps_elm.textContent = (Math.floor(3 * Math.random()) + current_fps - 3).toString()
        }, 1e3);
    };
}
const elm_fps_hack = document.createElement("div");
elm_fps_hack.classList.add("toogle", "FPSHack", "general");
elm_fps_hack.textContent = "FPS hack";
elm_fps_hack.addEventListener("click", () => {
    is_fps_hack = !is_fps_hack
    if (is_fps_hack) {
        fps_hack_interval = setInterval(fps_hack, 1e3);
        elm_fps_hack.style.backgroundColor = "rgb(66 150 66/30%)";
    } else {
        const originalFPS = document.querySelector(".BattleHudFpsComponentStyle-value");
        if (originalFPS) {
            originalFPS.style.display = "flex";
        }
        fake_fps_elm.style.display = "none";
        clearInterval(fps_hack_interval);
        elm_fps_hack.style.backgroundColor = "transparent";
    }
});
let current_fps = 60;
const elm_fps_60 = document.createElement("div")
elm_fps_60.classList.add("switch", "switch_on")
elm_fps_60.style.cssText = "margin-left: auto; border-radius: 15px 0px 0px 15px;";
elm_fps_60.textContent = "60";
elm_fps_60.addEventListener("click", () => {
    if (current_fps === 144) {
        elm_fps_60.classList.add("switch_on")
        elm_fps_60.classList.remove("switch_off")
        elm_fps_144.classList.add("switch_off")
        elm_fps_144.classList.remove("switch_on")
        current_fps = 60;
        document.querySelector(".switch_on").style.backgroundColor = "rgb(66 150 150/30%)";
        document.querySelector(".switch_off").style.backgroundColor = "transparent";
    }
});
const elm_fps_144 = document.createElement("div")
elm_fps_144.classList.add("switch", "switch_off")
elm_fps_144.style.cssText = "margin-right: auto; border-radius: 0px 15px 15px 0px;";
elm_fps_144.textContent = "144";
elm_fps_144.addEventListener("click", () => {
    if (current_fps === 60) {
        elm_fps_144.classList.add("switch_on")
        elm_fps_144.classList.remove("switch_off")
        elm_fps_60.classList.add("switch_off")
        elm_fps_60.classList.remove("switch_on")
        current_fps = 144;
        document.querySelector(".switch_on").style.backgroundColor = "rgb(66 150 150/30%)";
        document.querySelector(".switch_off").style.backgroundColor = "transparent";
    }
});
const fps_container = document.createElement("div");
fps_container.style.display = "flex";
fps_container.appendChild(elm_fps_60),
    fps_container.appendChild(elm_fps_144),
    // Открытие меню
    document.addEventListener("keydown", e => {
        77 !== e.keyCode || document.querySelector("input") || (floatingWindow.style.opacity ^= 1)
    });
// Элементы
floatingWindow.appendChild(elm_open_conts),
    floatingWindow.appendChild(document.createElement("p")),
    floatingWindow.appendChild(elm_buy_conts),
    floatingWindow.appendChild(document.createElement("p")),
    floatingWindow.appendChild(elm_hide_golds),
    floatingWindow.appendChild(document.createElement("p")),
    floatingWindow.appendChild(elm_anti_afk),
    floatingWindow.appendChild(document.createElement("p")),
    floatingWindow.appendChild(elm_fps_hack),
    floatingWindow.appendChild(document.createElement("p")),
    floatingWindow.appendChild(fps_container);
document.body.appendChild(floatingWindow);
// CSS
document.querySelectorAll('.general').forEach(e => {
    e.style.cssText = "width: 160px; background-color: transparent; border: 2px solid rgba(255, 255, 255, 0.2); border-radius: 15px; text-align: center; cursor: pointer; transition: transform 0.3s ease-in-out;";
    e.addEventListener('mouseover', () => {
        e.style.transform = 'scale(1.05)';
    });
    e.addEventListener('mouseout', () => {
        e.style.transform = 'scale(1)';
    });
});
document.querySelectorAll('.toogle').forEach(e => {
    e.style.transition += ", background-color 0.5s ease-in-out";
});
document.querySelectorAll('p').forEach(e => {
    e.style.margin = '10px';
});
document.querySelectorAll('.switch').forEach(e => {
    e.style.cssText += "width: 60px; background-color: transparent; border: 2px solid rgba(255, 255, 255, 0.2); text-align: center; cursor: pointer; transition: background-color 0.5s ease-in-out";
});
document.querySelector(".switch_on").style.backgroundColor = "rgb(66 150 150/30%)";
document.querySelector(".switch_off").style.backgroundColor = "transparent";
