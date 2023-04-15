"use strict";
const buttons = [];
for (let i = 0; i < 10; ++i) {
    buttons[i] = document.getElementById(i.toString());
}
buttons[10] = document.getElementById('submit-button');
buttons[11] = document.getElementById('+');
buttons[12] = document.getElementById('-');
buttons[13] = document.getElementById('/');
buttons[14] = document.getElementById('*');
buttons[15] = document.getElementById('c');
buttons[16] = document.getElementById('ac');
const operations = new Map([
    [10, 'submit-button'],
    [11, '+'],
    [12, '-'],
    [13, '/'],
    [14, '*'],
    [15, 'c'],
    [16, 'ac']
]);
const equation = document.getElementById('input-text');
buttons.forEach((button, index) => {
    if (button && index < 10) {
        button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
            if (equation) {
                equation.value += index.toString();
            }
        });
    }
    else if (button && index === 10) {
        button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
            try {
                var expression = 'return ' + equation.value;
                var result = new Function(expression);
                equation.value = result();
            }
            catch (e) {
                if (e instanceof SyntaxError) {
                    alert("Illegal expression");
                }
            }
        });
    }
    else if (button && index >= 11 && index < 15) {
        button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
            if (equation) {
                equation.value += operations.get(index);
            }
        });
    }
    else if (button && index == 15) {
        button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
            if (equation) {
                equation.value = equation.value.slice(0, -1);
            }
        });
    }
    else if (button && index == 16) {
        button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
            if (equation) {
                equation.value = '';
            }
        });
    }
});
//# sourceMappingURL=index.js.map