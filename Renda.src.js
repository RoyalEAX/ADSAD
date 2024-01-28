unsafeWindow.RendaConfig = {
    multiply: 1,
    repair: !1,
    shield: !1,
    damage: !1,
    speed: !1,
    mine: !1,
    rapid: !1
}

const styleElement = document.createElement("style");
document.head.appendChild(styleElement);
styleElement.textContent = `.RendaWindow{display: flex;flex-direction: column;align-items: center;position: fixed;width: 200px;top: 40px;left: 40px;padding: 10px;background: rgba(0,0,0,0.5);backdrop-filter: blur(3px);display: block;border-radius: 15px;z-index: 9999;font-size: 16px;color: white;transition: opacity 0.5s, transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);opacity: 0;user-select: none;transform: scale(0);text-align: center}.RendaTitle{text-align: center}.switch-container{display: flex;justify-content: space-between;width: 100%}.switch:hover{transform: scale(1.1)}.toogle{margin: 2px;width: 194px;height: 30px;border: 2px solid rgba(255, 255, 255, 0.2);border-radius: 10px;text-align: center;cursor: pointer;transition: background-color 0.5s ease-in-out, transform 0.3s ease-in-out;background-repeat: no-repeat;display: flex;justify-content: center;align-items: center}.toogle_off{background-color: transparent}.toogle_on{background-color: rgba(255, 0, 0, 0.4)}.switch{margin: 2px;width: 30px;height: 30px;border: 2px solid rgba(255, 255, 255, 0.2);border-radius: 10px;text-align: center;cursor: pointer;transition: transform 0.3s ease-in-out;background-repeat: no-repeat;display: flex;justify-content: center;align-items: center}.switch img{width: 20px;height: 20px}.switch_off{filter: contrast(0%);transition: filter 0.3s ease-in-out}.switch_on{filter: contrast(100%);transition: filter 0.3s ease-in-out}.multiply_label{text-align: center}.multiply_slider{-webkit-appearance: none;appearance: none;background: rgb(200, 200, 200);margin: 5px;width: 90px;border-radius: 5px;height: 8px}.multiply_slider::-webkit-slider-thumb{-webkit-appearance: none;appearance: none;cursor:pointer;border-radius:50%;background: rgb(30, 30, 30);height: 15px;width: 15px}.svg-repair{fill: rgb(33, 181, 0)}.svg-shield{fill: rgb(150, 70, 9)}.svg-damage{fill: rgb(204, 27, 0)}.svg-speed{fill: rgb(204, 187, 0)}.svg-mine{fill: rgb(0, 71, 2)}.svg-rapid{fill: rgb(252, 140, 3)}`;

const floatingWindow = document.createElement("div");
floatingWindow.classList.add("RendaWindow");

const title = document.createElement("div");
title.classList.add("RendaTitle");
title.textContent = "Renda\x0aclicker";
floatingWindow.appendChild(title);

const switchContainer = document.createElement("div");
switchContainer.classList.add("switch-container");

const createSwitch = (imageSrc, option) => {
    const switchElement = document.createElement("div");
    switchElement.classList.add("switch");

    const imgElement = document.createElement("img");
    imgElement.src = imageSrc;
    imgElement.classList.add(`svg-${option}`, "switch_off");
    switchElement.appendChild(imgElement);

    switchElement.addEventListener("click", () => {
        unsafeWindow.RendaConfig[option] = !unsafeWindow.RendaConfig[option];
        imgElement.classList.toggle("switch_on", unsafeWindow.RendaConfig[option]);
        imgElement.classList.toggle("switch_off", !unsafeWindow.RendaConfig[option]);
    });

    return switchElement;
};

const switches = [{
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNS40OTk1IDEuNUwyMC45OTk1IDZWOEwyNC45OTk1IDEySDI2Ljk5OTVMMzEuNDk5NSA3LjVIMzIuOTk5NVYxMEMzMi45OTk1IDE1LjUyMjggMjguNTIyNCAyMCAyMi45OTk1IDIwQzIxLjUzMjIgMjAgMjAuMTM4NiAxOS42ODQgMTguODgzMyAxOS4xMTYyTDYuOTk5OTMgMzAuOTk5OUM1LjYxOTIyIDMyLjM4MDcgMy4zODA2MSAzMi4zODA3IDEuOTk5ODkgMzFDMC42MTkxOSAyOS42MTkzIDAuNjE5MTc3IDI3LjM4MDcgMS45OTk4NSAyNkwxMy44ODMzIDE0LjExNjJDMTMuMzE1NiAxMi44NjA5IDEyLjk5OTUgMTEuNDY3MyAxMi45OTk1IDEwQzEyLjk5OTUgNC40NzcxNSAxNy40NzY3IDAgMjIuOTk5NSAwSDI1LjQ5OTVWMS41WiIgZmlsbD0iI0JGRTUwMCIvPgo8L3N2Zz4K",
    option: "repair"
}, {
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOS4zNTg1IDIwLjI2MTdDMjYuNjE0MSAyOC45Njc0IDE2IDMyIDE2IDMyQzE2IDMyIDIgMjggMiAxNlY1LjUwODZDMiA0LjYxNTY0IDIuNTkxOTUgMy44MzA4NyAzLjQ1MDU2IDMuNTg1NTVMMTYgMEwyOC41NDk0IDMuNTg1NTVDMjkuNDA4IDMuODMwODcgMzAgNC42MTU2NCAzMCA1LjUwODZWMTJWMTZDMzAgMTYgMzAgMTYgMzAgMTZDMzAgMTcuNTUxNCAyOS43NjYgMTguOTY5MSAyOS4zNTg1IDIwLjI2MTdaTTI2IDEwLjg1NzFWNy4wMTcyMUwxNiA0LjE2MDA2TDYgNy4wMTcyMVYxNkM2IDIwLjIwOTEgOC4zOTA3NCAyMy4xNDkyIDExLjMyNSAyNS4yNDUxQzEyLjc3OTMgMjYuMjgzOSAxNC4yNTk1IDI3LjAyNzIgMTUuMzg4MiAyNy41MTA5QzE1LjYwOSAyNy42MDU1IDE1LjgxNCAyNy42ODkyIDE2IDI3Ljc2MjRMMTYgOEwyNiAxMC44NTcxWiIgZmlsbD0iI0VBREM5OSIvPgo8L3N2Zz4K",
    option: "shield"
}, {
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDEuMzMzMzNMMCAyNkwyMCAxMkw2IDMyTDMwLjY2NjcgMjhMMjAgMjRMMzIgMEw4IDEyTDQgMS4zMzMzM1oiIGZpbGw9IiNGRjMzMzMiLz4KPC9zdmc+Cg==",
    option: "damage"
}, {
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMTMuODM5N0MyIDEyLjY3MiAyLjUxMDI1IDExLjU2MjYgMy4zOTY4MyAxMC44MDI3TDE2IDBMMjguNjAzMiAxMC44MDI3QzI5LjQ4OTcgMTEuNTYyNiAzMCAxMi42NzIgMzAgMTMuODM5N1YyMEwxNiA4TDIgMjBWMTMuODM5N1oiIGZpbGw9IiNGRkZGMDAiLz4KPHBhdGggZD0iTTIgMjUuODM5N0MyIDI0LjY3MiAyLjUxMDI1IDIzLjU2MjYgMy4zOTY4MyAyMi44MDI3TDE2IDEyTDI4LjYwMzIgMjIuODAyN0MyOS40ODk3IDIzLjU2MjYgMzAgMjQuNjcyIDMwIDI1LjgzOTdWMzJMMTYgMjBMMiAzMlYyNS44Mzk3WiIgZmlsbD0iI0ZGRkYwMCIvPgo8L3N2Zz4K",
    option: "speed"
}, {
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDIxLjAwOThWMTAuOTkwMkwxMC45OTAyIDRIMjEuMDA5OEwyOCAxMC45OTAyVjIxLjAwOThMMjEuMDA5OCAyOEgxMC45OTAyTDQgMjEuMDA5OFpNOC43NDc1NSAwLjU4NTc4NkM5LjEyMjYyIDAuMjEwNzEzIDkuNjMxMzMgMCAxMC4xNjE4IDBIMjEuODM4MkMyMi4zNjg3IDAgMjIuODc3NCAwLjIxMDcxNCAyMy4yNTI1IDAuNTg1Nzg3TDMxLjQxNDIgOC43NDc1NUMzMS43ODkzIDkuMTIyNjIgMzIgOS42MzEzMyAzMiAxMC4xNjE4VjIxLjgzODJDMzIgMjIuMzY4NyAzMS43ODkzIDIyLjg3NzQgMzEuNDE0MiAyMy4yNTI1TDIzLjI1MjUgMzEuNDE0MkMyMi44Nzc0IDMxLjc4OTMgMjIuMzY4NyAzMiAyMS44MzgyIDMySDEwLjE2MThDOS42MzEzMyAzMiA5LjEyMjYyIDMxLjc4OTMgOC43NDc1NSAzMS40MTQyTDAuNTg1Nzg2IDIzLjI1MjVDMC4yMTA3MTMgMjIuODc3NCAwIDIyLjM2ODcgMCAyMS44MzgyVjEwLjE2MThDMCA5LjYzMTMzIDAuMjEwNzE0IDkuMTIyNjIgMC41ODU3ODYgOC43NDc1NUw4Ljc0NzU1IDAuNTg1Nzg2Wk0xNiAyM0MxOS44NjYgMjMgMjMgMTkuODY2IDIzIDE2QzIzIDEyLjEzNCAxOS44NjYgOSAxNiA5QzEyLjEzNCA5IDkgMTIuMTM0IDkgMTZDOSAxOS44NjYgMTIuMTM0IDIzIDE2IDIzWiIgZmlsbD0iIzM2QjI0QSIvPgo8L3N2Zz4K",
    option: "mine"
}];

switches.forEach(switchInfo => {
    const {
        src,
        option
    } = switchInfo;
    const switchElement = createSwitch(src, option);
    switchContainer.appendChild(switchElement);
});
floatingWindow.appendChild(switchContainer);

const elm_rapid = document.createElement("div");
elm_rapid.classList.add("toogle");
elm_rapid.textContent = "Rapid update";
elm_rapid.addEventListener("click", () => {
    unsafeWindow.RendaConfig.rapid = !unsafeWindow.RendaConfig.rapid;
    elm_rapid.classList.toggle("toogle_on", unsafeWindow.RendaConfig.rapid);
    elm_rapid.classList.toggle("toogle_off", !unsafeWindow.RendaConfig.rapid);
});
floatingWindow.appendChild(elm_rapid);

const elm_multiply = document.createElement("input");
elm_multiply.classList.add("multiply_slider");
elm_multiply.type = "range";
elm_multiply.min = 1;
elm_multiply.max = 100;
elm_multiply.value = unsafeWindow.RendaConfig.multiply;
elm_multiply.addEventListener("input", (e) => {
    unsafeWindow.RendaConfig.multiply = Math.round(parseInt(e.target.value) / 10);
});

const multiplyLabel = document.createElement("span");
multiplyLabel.textContent = `Multiply: ${unsafeWindow.RendaConfig.multiply}`;
setInterval(() => {
    multiplyLabel.textContent = `Multiply: ${unsafeWindow.RendaConfig.multiply}`
}, 100);
floatingWindow.appendChild(multiplyLabel);

document.body.appendChild(floatingWindow);

function openMenu() {
    floatingWindow.appendChild(elm_multiply);
    floatingWindow.style.display = "block";
    setTimeout(() => {
        floatingWindow.style.opacity = 1;
        floatingWindow.style.transform = "scale(1)";
    }, 1);
}

function closeMenu() {
    floatingWindow.removeChild(elm_multiply);
    floatingWindow.style.opacity = 0;
    floatingWindow.style.transform = "scale(0)";
    setTimeout(() => {
        floatingWindow.style.display = "none";
    }, 5e2);
}

addEventListener("cheat-base-ready", cheatBase => {
    cheatBase.runAfterPhysicsUpdate.push(() => {
        unsafeWindow.RendaConfig.repair && cheatBase.features.supplies.activateSupplyByName("FIRST_AID");
        unsafeWindow.RendaConfig.shield && cheatBase.features.supplies.activateSupplyByName("DOUBLE_ARMOR");
        unsafeWindow.RendaConfig.damage && cheatBase.features.supplies.activateSupplyByName("DOUBLE_DAMAGE");
        unsafeWindow.RendaConfig.speed && cheatBase.features.supplies.activateSupplyByName("NITRO");
        for (let i = 0; i < unsafeWindow.RendaConfig.multiply; i++) {
            unsafeWindow.RendaConfig.rapid && cheatBase.gameClasses.localPlayer.send(new FullStateCorrectionMessage);
            unsafeWindow.RendaConfig.mine && cheatBase.features.supplies.activateSupplyByName("MINE");
        }
    });
    document.addEventListener("keyup", (e) => {
        if (cheatBase.features.battleChat.isInputActive()) return;
        if (e.code === "KeyM") {
            if (floatingWindow.style.opacity === "1") closeMenu();
            else openMenu();
        } else if (e.code === "Quote") {
            unsafeWindow.RendaConfig.mine = !unsafeWindow.RendaConfig.mine;
            document.querySelector(".svg-mine")
                .classList.toggle("toogle_on", unsafeWindow.RendaConfig.mine);
            document.querySelector(".svg-mine")
                .classList.toggle("toogle_off", !unsafeWindow.RendaConfig.mine);
        } else if (e.code === "Semilicon") {
            unsafeWindow.RendaConfig.damage = !unsafeWindow.RendaConfig.damage;
            document.querySelector(".svg-damage").classList.toggle("toogle_on", unsafeWindow.RendaConfig.damage);
            document.querySelector(".svg-damage").classList.toggle("toogle_off", !unsafeWindow.RendaConfig.damage);
            unsafeWindow.RendaConfig.shield = !unsafeWindow.RendaConfig.shield;
            document.querySelector(".svg-shield").classList.toggle("toogle_on", unsafeWindow.RendaConfig.shield);
            document.querySelector(".svg-shield").classList.toggle("toogle_off", !unsafeWindow.RendaConfig.shield);
            unsafeWindow.RendaConfig.speed = !unsafeWindow.RendaConfig.speed;
            document.querySelector(".svg-speed").classList.toggle("toogle_on", unsafeWindow.RendaConfig.speed);
            document.querySelector(".svg-speed").classList.toggle("toogle_off", !unsafeWindow.RendaConfig.speed);
        }
    });
});

let isDragging = false,
    canDrag = true;
let offsetX, offsetY;
floatingWindow.addEventListener("mousedown", (e) => {
    const target = e.target;
    if (target.classList.contains("switch") || target.classList.contains("multiply_slider") || target.classList.contains("toogle")) {
        canDrag = false;
        return;
    }
    canDrag = true, isDragging = true;
    offsetX = e.clientX - floatingWindow.getBoundingClientRect()
        .left, offsetY = e.clientY - floatingWindow.getBoundingClientRect()
        .top;
});
document.addEventListener("mousemove", (e) => {
    if (!isDragging || !canDrag) return;
    floatingWindow.style.left = `${e.clientX - offsetX}px`;
    floatingWindow.style.top = `${e.clientY - offsetY}px`;
});
document.addEventListener("mouseup", () => {
    isDragging = false
});
