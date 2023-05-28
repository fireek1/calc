let firstNumber = '';
let secondNumber = '';
let sign = '';
let finish = false;


//массивы значений кнопок
const buttonNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const buttonSign = ['-', '+', '/', 'X'];


//получение дисплея
const display = document.querySelector('.calc-screen p');


//основа калькулятора
document.querySelector('.calc-buttons').onclick = () => {

    //создание функции удаления
    if (event.target.classList.contains('ac')) {
        firstNumber = '';
        secondNumber = '';
        sign = '';
        finish = false;
        display.textContent = '0';
    }
    

    //получение значения кнопки
    const key = event.target.textContent;
    

    //если нажато число или . 
    if (buttonNumber.includes(key)) {

        //заполнение первого числа
        if (secondNumber === '' && sign === '') {
            firstNumber += key;
            
            display.textContent = firstNumber;
        } 
        
        //вычисления
        else if (firstNumber !== '' && secondNumber !== '' && finish) {

        } 
        
        //заполнение второго числа
        else {
            secondNumber += key;
            display.textContent = secondNumber;
        }
        console.log(firstNumber, sign, secondNumber);
        return;
    }

    //если нажат знак
    if (buttonSign.includes(key)) {
        sign = key;
        display.textContent = sign;
        return;
    }


    if (key === '=') {
        switch(sign) {
            case '+':
                firstNumber = (+firstNumber) + (+secondNumber);
                break;
            case '-':
                firstNumber = (+firstNumber) - (+secondNumber);
                break;
            case 'X':
                firstNumber = (+firstNumber) * (+secondNumber);
                break;
            case '/':
                firstNumber = (+firstNumber) / (+secondNumber);
                break;
        }
        display.textContent = firstNumber;
        secondNumber = '';
    }

    if (key === '%') {
        firstNumber = +firstNumber / 100;
        display.textContent = firstNumber
    }

    if(isNaN(firstNumber) || !isFinite(firstNumber)) display.textContent = 'Уебок';
    
}
