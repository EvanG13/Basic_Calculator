const buttons: HTMLElement[] | null[] = [];

// find the HTML button elements for each number 
// on the calculator
for (let i = 0; i < 10; ++i) {
    buttons[i] = document.getElementById(i.toString());
}

// find the HTML buttons for each command on the 
// calculator
buttons[10] = document.getElementById('submit-button');
buttons[11] = document.getElementById('+');
buttons[12] = document.getElementById('-');
buttons[13] = document.getElementById('/');
buttons[14] = document.getElementById('*');
buttons[15] = document.getElementById('c');
buttons[16] = document.getElementById('ac');

// create a map of all the different operations on the calculator
const operations: Map<Number, string> = new Map([
    [10, 'submit-button'],
    [11, '+'],
    [12, '-'],
    [13, '/'],
    [14, '*'],
    [15, 'c'],
    [16, 'ac']
]);

const equation = document.getElementById('input-text') as HTMLInputElement;

// iterate through all the button adding their specific event listening
buttons.forEach((button: HTMLElement | null, index: number) => {
    // buttons[0-9] : correspond to digits 0-9 on calculator
    // therefore, update the current equation with those digits 
    // index of the foreach loop is used for the correct button digit
    if(button && index < 10) {
        button?.addEventListener('click', () => {
            if (equation) {
                equation.value += index.toString();
            }
        }) 
    }
    // button[10] : corresponds to the = button on the calculator
    // therefore, solve the current equation
    else if (button && index === 10) {
        button?.addEventListener('click', () => {
            try {
                // turn the equation into a function
                var expression = 'return ' + equation.value;
                var result = new Function(expression);

                // return the result of the equation
                equation.value = result();
            }
            catch(e) {
                if (e instanceof SyntaxError) {
                    alert("Illegal expression")
                }
            }
        }) 
    }
    // buttons[11-14] : correspond to the arithmetic operations
    // therefore, add arithmetic operations to the current equation
    else if (button && index >= 11 && index < 15) {
        button?.addEventListener('click', () => {
            if (equation) {
                // update equation
                // equation += commands.get(index);

                // update view on calculator of current equation
                equation.value += operations.get(index); 
            }
        }) 
    }
    // buttons[15] : corresponds to the clear button, c
    // therefore, remove the right most number or operation from
    // the current equation
    else if (button && index == 15) {
        button?.addEventListener('click', () => {
            if (equation) {
                // remove the rightmost number or operation from
                // the current equation
                equation.value = equation.value.slice(0, -1);
            }
        }) 
    }
    // buttons[16] : corresponds to the all clear button, ac
    // therefore, clear the entire equation for the current equation
    else if (button && index == 16) {
        button?.addEventListener('click', () => {
            if (equation) {
                // clear equation
                equation.value = '';
            }
        }) 
    }
})