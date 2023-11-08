const floatingWindow = document.createElement('div');
floatingWindow.style.cssText = 'position: fixed; top: 20px; left: 20px; background-color: black; padding: 10px; border: 4px solid #8B00FF; display: none; border-radius: 15px; z-index: 9999; color: #8B00FF; font-size: 20px;';
const toggle1 = document.createElement('div');
toggle1.textContent = 'Открыть контейнеры';
toggle1.addEventListener('click', () => {
    floatingWindow.style.display = 'none';
    for (var i = 0; i < 1000; i++) {
        document.querySelector('.ClosedContainerStyle-moreButton')
            ?.click();
    }
});
let conts_interval;
function buy_conts() {
    const texts = ["120 ящиков", "Подтвердить", "Закрыть"];
    document.querySelectorAll('span').forEach(span => {
            if (texts.includes(span.textContent)) {
                span.click();
            }
        });
}
const toggle2 = document.createElement('div');
toggle2.textContent = 'Купить контейнеры';
toggle2.addEventListener('click', () => {
    is_conts_buy = !is_conts_buy;
    if (is_conts_buy) {
        conts_interval = setInterval(buy_conts, 200);
    } else {
        clearInterval(conts_interval);
    }
});
let is_conts_buy = false;
let golds_interval;
function hide_golds() {
    const targetElements = document.querySelectorAll('.ksc-0.BattleMessagesComponentStyle-messageRow');
    targetElements.forEach((element) => {
        const message = element.querySelector('.ksc-0.BattleMessagesComponentStyle-message');
        if (message) {
            const innerHTML = message.innerHTML.toLowerCase();
            if (
                innerHTML.includes('золотой') ||
                innerHTML.includes('ящик') ||
                innerHTML.includes('golden') ||
                innerHTML.includes('box')
            ) {
                element.style.display = 'none';
            } else {
                element.style.display = 'flex';
            }
        }
    });
}
const toggle3 = document.createElement('div');
toggle3.textContent = 'Спрятать голды';
toggle3.addEventListener('click', () => {
    is_golds_hide = !is_golds_hide;
    if (is_golds_hide) {
        golds_interval = setInterval(hide_golds, 10);
    } else {
        clearInterval(golds_interval);
        const targetElements = document.querySelectorAll('.ksc-0.BattleMessagesComponentStyle-messageRow');
        targetElements.forEach((element) => {
            element.style.display = 'flex';
        });
    }
});
let is_golds_hide = false;
document.addEventListener('keydown', (e) => {
    if (e.key === 'p') {
        if (floatingWindow.style.display === 'none') {
            floatingWindow.style.display = 'block';
        } else {
            floatingWindow.style.display = 'none';
        }
    }
});
floatingWindow.appendChild(toggle1);
floatingWindow.appendChild(document.createElement('p'));
floatingWindow.appendChild(toggle2);
floatingWindow.appendChild(document.createElement('p'));
floatingWindow.appendChild(toggle3);
document.body.appendChild(floatingWindow);
