const floatingWindow = document.createElement('div');
floatingWindow.style.cssText = 'position: fixed; top: 20px; left: 20px; background-color: rgba(0, 0, 0, 0); padding: 10px; border: 4px solid #8B00FF; display: none; border-radius: 15px;z-index: 9999; font-size: 20px; color: black;flex-direction: column;gap: 10px;';
const toggle1 = document.createElement('div');
toggle1.textContent = 'Открыть контейнеры';
toggle1.style.cssText = "background-color: #8B00FF; border-radius: 5px; text-align: center;";
toggle1.addEventListener('click', () => {
    floatingWindow.style.display = 'none';
    for (var i = 0; i < 1000; i++) {
        document.querySelector('.ClosedContainerStyle-moreButton')?.click();
    }
});
const img_cont = document.createElement('img');
img_cont.src = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDU2IDU2IiB3aWR0aD0iNTYiIGhlaWdodD0iNTYiPgoJPHRpdGxlPmljb25Mb2JieU1lbnVDb250YWluZXJzPC90aXRsZT4KCTxkZWZzPgoJCTxpbWFnZSAgd2lkdGg9IjM2IiBoZWlnaHQ9IjI3IiBpZD0iaW1nMSIgaHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDUUFBQUFiQ0FNQUFBQWo4dDNTQUFBQUFYTlNSMElCMmNrc2Z3QUFBSVJRVEZSRkFGVUFBRlVBQUZVQUFGVUFBRlVBQUFBQUFGVUFBRlVBQUZVQUFGVUFBRlVBQUZVQUFGVUFBRlVBQUZVQUFGVUFBRlVBQUZVQUFGVUFBRlVBQUZVQUFGVUFBRlVBQUZVQUFGVUFBRlVBQUZVQUFGVUFBRlVBQUZVQUFGVUFBRlVBQUZVQUFGVUFBRlVBQUZVQUFGVUFBRlVBQUZVQUFGVUFBRlVBQUZVQUFGVUFBRlVBRE43OENBQUFBQ3gwVWs1VFQ5ai8zaDBBSDlaSjZPQ0E0OXJrZmowM2JGNFhpSGNid3FlUnlKWFB2S0IyRW9sWmJqQkUzKzFPMmRHUENIUlpBQUFBcDBsRVFWUjRuTzJUU1E3RElBeEZYVlBhcFBPVXBITTZqL2UvWDBHS2pTRkU2cktML2hYK2ZzaXl3UUF0cktUYVdxaWp5Tzhta0NLcjF4Y2FPSDhJK0lWK0V1SjIwakExb3N3WWVEQ1RFSnB5eWtGNjVqTnpsNkZ5QzNQT0pKTWJvNkJ5bGJlME4xYU9XZHQ0RTNhM3RlNk9vcjJOeXZvSUR2WlZxYUdqQ1U1WWgvQ3NQVjB3QnVGVk1qZU1RM2Y1VlI0TlVLUCtFSUxZTDIrWXdsZnc1QTErRmZFTmZpY2Y2V1VQVHloSENxNEFBQUFBU1VWT1JLNUNZSUk9Ii8+Cgk8L2RlZnM+Cgk8c3R5bGU+Cgk8L3N0eWxlPgoJPHVzZSBpZD0iTGF5ZXIiIGhyZWY9IiNpbWcxIiB4PSIxMCIgeT0iMTQiLz4KPC9zdmc+';
toggle1.insertBefore(img_cont, toggle1.firstChild);
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
toggle2.style.cssText = "background-color: red; border-radius: 5px; text-align: center;";
toggle2.addEventListener('click', () => {
    is_conts_buy = !is_conts_buy;
    if (is_conts_buy) {
        conts_interval = setInterval(buy_conts, 200);
        toggle2.style.backgroundColor = "green";
    } else {
        clearInterval(conts_interval);
        toggle2.style.backgroundColor = "red";
    }
});
let is_conts_buy = false;
let golds_interval;
function hide_golds() {
    const targetElements = document.querySelectorAll('.BattleMessagesComponentStyle-messageRow');
    targetElements.forEach((element) => {
        const message = element.querySelector('.BattleMessagesComponentStyle-message');
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
toggle3.style.cssText = "background-color: red; border-radius: 5px; text-align: center;";
toggle3.addEventListener('click', () => {
    is_golds_hide = !is_golds_hide;
    if (is_golds_hide) {
        golds_interval = setInterval(hide_golds, 10);
        toggle3.style.backgroundColor = "green";
    } else {
        clearInterval(golds_interval);
        const targetElements = document.querySelectorAll('.BattleMessagesComponentStyle-messageRow');
        targetElements.forEach((element) => {
            element.style.display = 'flex';
        });
        toggle3.style.backgroundColor = "red";
    }
});
let is_golds_hide = false;
document.addEventListener('keydown', (e) => {
    if (!document.querySelector('input') && e.keyCode === 77) {
        if (floatingWindow.style.display === 'none') {
            floatingWindow.style.display = 'flex';
        } else {
            floatingWindow.style.display = 'none';
        }
    }
});

let afk_interval
function anti_afk() {

}
const toggle4 = document.createElement('div');
toggle4.textContent = 'Анти-афк';
toggle4.style.cssText = "background-color: red; border-radius: 5px; text-align: center;";
toggle4.addEventListener('click', () => {
   is_afk = !is_afk;
    if (is_afk) {
        afk_interval = setInterval(anti_afk, 3e4);
        toggle4.style.backgroundColor = "green";
    } else {
        clearInterval(afk_interval);
        toggle4.style.backgroundColor = "red";
    }
});
let is_afk = false
floatingWindow.appendChild(toggle1);
//floatingWindow.appendChild(document.createElement('p'));
floatingWindow.appendChild(toggle2);
floatingWindow.appendChild(toggle3);
floatingWindow.appendChild(toggle4);
document.body.appendChild(floatingWindow);
