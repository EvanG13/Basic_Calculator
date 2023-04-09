const buttons: HTMLElement[] | null[] = [];

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

const commands = new Map<Number, string>();
commands.set(10, 'submit-button');
commands.set(11, '+');
commands.set(12, '-');
commands.set(13, '/');
commands.set(14, '*');
commands.set(15, 'c');
commands.set(16, 'ac');

const numText = document.getElementById('input-text') as HTMLInputElement;

var equation: string = '';

// iterate through all the button adding their specific event listening
buttons.forEach((button: HTMLElement | null, index: number) => {
    // buttons[0-9] : correspond to digits 0-9 on calculator
    // therefore, update the current equation with those digits 
    // index of the foreach loop is used for the correct button digit
    if(button && index < 10) {
        button?.addEventListener('click', () => {
            if (numText) {
                equation += index.toString();
                numText.value = equation;
            }
        }) 
    }
    // button[10] : corresponds to the = button on the calculator
    // therefore, solve the current equation
    else if (button && index === 10) {
        button?.addEventListener('click', () => {
            // TODO
            console.log("TODO : solve equation");
        }) 
    }
    // buttons[11-14] : correspond to the arithmetic operations
    // therefore, add arithmetic operations to the current equation
    else if (button && index >= 11 && index < 15) {
        button?.addEventListener('click', () => {
            if (numText) {
                // update equation
                equation += commands.get(index);

                // update view on calculator of current equation
                numText.value = equation; 
            }
        }) 
    }
    // buttons[15] : corresponds to the clear button, c
    // therefore, remove the right most number or operation from
    // the current equation
    else if (button && index == 15) {
        button?.addEventListener('click', () => {
            if (numText) {
                // remove the rightmost number or operation from
                // the current equation
                equation = equation.slice(0, -1);

                // update view on calculator of current equation
                numText.value = equation;
            }
        }) 
    }
    // buttons[16] : corresponds to the all clear button, ac
    // therefore, clear the entire equation for the current equation
    else if (button && index == 16) {
        button?.addEventListener('click', () => {
            if (numText) {
                // clear equation
                equation = '';

                // update view on calculator of current equation
                numText.value = equation;
            }
        }) 
    }
})