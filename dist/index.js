"use strict";
const buttons = [];
buttons[0] = document.getElementById('0');
buttons[1] = document.getElementById('1');
buttons[2] = document.getElementById('2');
buttons[3] = document.getElementById('3');
buttons[4] = document.getElementById('4');
buttons[5] = document.getElementById('5');
buttons[6] = document.getElementById('6');
buttons[7] = document.getElementById('7');
buttons[8] = document.getElementById('8');
buttons[9] = document.getElementById('9');
buttons[10] = document.getElementById('submit-button');
buttons[11] = document.getElementById('+');
buttons[12] = document.getElementById('-');
buttons[13] = document.getElementById('/');
buttons[14] = document.getElementById('*');
buttons[15] = document.getElementById('c');
buttons[16] = document.getElementById('ac');
const commands = new Map();
commands.set(10, 'submit-button');
commands.set(11, '+');
commands.set(12, '-');
commands.set(13, '/');
commands.set(14, '*');
commands.set(15, 'c');
commands.set(16, 'ac');
const numText = document.getElementById('input-text');
var equation = '';
buttons.forEach((button, index) => {
    if (button && index < 10) {
        button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
            if (numText) {
                equation += index.toString();
                numText.value = equation;
            }
        });
    }
    else if (button && index === 10) {
        button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
            console.log("TODO : solve equation");
        });
    }
    else if (button && index >= 11 && index < 15) {
        button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
            if (numText) {
                equation += commands.get(index);
                numText.value = equation;
            }
        });
    }
    else if (button && index == 15) {
        button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
            if (numText) {
                equation = equation.slice(0, -1);
                numText.value = equation;
            }
        });
    }
    else if (button && index == 16) {
        button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
            if (numText) {
                equation = '';
                numText.value = equation;
            }
        });
    }
});
//# sourceMappingURL=index.js.map