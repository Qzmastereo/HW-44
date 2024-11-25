//Перше
const selectDrink = document.getElementById('select');

selectDrink.addEventListener('change', () => {
    switch (selectDrink.value) {
        case 'value1':
            alert('Ви обрали каву');
            break;
        case 'value2': 
            alert('Ви обрали чай');
            break;
        case 'value3': 
            alert('Ви обрали сік');
            break;
        default:
            alert('Оберіть напій');
    }
});

//Друге

const inputText = document.getElementById('inputText');

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', () => {
    switch (inputText.value) {
        case 'Понеділок':
            alert('Робочій день');
            break
        case 'Вівторок':
            alert('Робочій день');
            break
        case 'Середа':
            alert('Робочій день');
            break
        case 'Четверг':
            alert('Робочій день');
            break
        case 'Пя`тниця':
            alert('Робочій день');
            break
        case 'Суббота':
            alert('Вихідний день');
            break
        case 'Неділя':
            alert('Вихідний день');
            break
        default:
            alert('Введіть день тижня')
    }
})

//Трєтє

const inputMonth = document.getElementById('inputMonth');
const submitMonth = document.getElementById('submitMonth');

submitMonth.addEventListener('click', () => {
    switch (inputMonth.value) {
        case 'Грудень':
            alert('Зима');
            break
        case 'Січень':
            alert('Зима');
            break
        case 'Лютий':
            alert('Зима');
            break
        case 'Березень':
            alert('Весна');
            break
        case 'Квітень':
            alert('Весна');
            break
        case 'Серпень':
            alert('Весна');
            break
        case 'Червень':
            alert('Літо');
            break
        case 'Липень':
            alert('Літо');
            break
        case 'Серпень':
            alert('Літо');
            break
        case 'Вересень':
            alert('Осінь');
            break
        case 'Жовтень':
            alert('Осінь');
            break
        case 'Листопад':
            alert('Осінь');
            break
        default:
            alert('Введіть місяць');

    }
});

//Четверте

const number = document.getElementById('number');
const submitNumber = document.getElementById('submitNumber');

submitNumber.addEventListener('click', () => {
    switch (number.value) {
        case '1':
            alert('Зима');
            break
        case '2':
            alert('Зима');
            break
        case '3':
            alert('Весна');
            break
        case '4':
            alert('Весна');
            break
        case '5':
            alert('Весна');
            break
         case '6':
            alert('Літо');
            break
        case '7':
            alert('Літо');
            break
        case '8':
            alert('Літо');
            break
        case '9':
            alert('Осінь');
            break
        case '10':
            alert('Осінь');
            break
        case '11':
            alert('Осінь');
            break
        case '12':
            alert('Зима');
            break
    }
})

//П'яте

const color = document.getElementById('color');
const submitColor = document.getElementById('submitColor');

submitColor.addEventListener('click', () => {
    switch (color.value) {
        case 'Червоний':
            alert('стоп');
            break
        case 'Жовтий':
            alert('чекати');
            break
        case 'Зелений':
            alert('йти');
            break
        default:
            alert('Неправильний колір');
    }
})

//Шосте

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateButton = document.getElementById('calculateButton');

calculateButton.addEventListener('click', () => {
    const num1s = parseFloat(num1.value);
    const num2s = parseFloat(num2.value);

    let result;

    switch (operationSelect.value) {
        case '+':
            result = num1s + num2s;
            break;
        case '-':
            result = num1s - num2s;
            break;
        case '*':
            result = num1s * num2s;
            break;
        case '/':
            if (num2s === 0) {
                alert('Ділити на нуль неможна');
            }
            result = num1s / num2s;
            break;
    }

    alert(`Результат: ${result}`);
});
