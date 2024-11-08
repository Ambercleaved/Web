// Получаем элементы с помощью их id
const form = document.getElementById('squareRootForm');
const numberInput = document.getElementById('numberInput');
const resultMessage = document.getElementById('resultMessage');

// Обработчик события для формы
form.addEventListener('submit', function(event) {
    event.preventDefault(); // предотвращаем перезагрузку страницы

    // Получаем значение из поля ввода
    const inputValue = numberInput.value;

    // Проверяем, что введено корректное число
    if (inputValue && !isNaN(inputValue) && inputValue >= 0) {
        // Вычисляем квадратный корень
        const sqrtValue = Math.sqrt(inputValue).toFixed(2);

        // Отображаем результат
        resultMessage.textContent = `Квадратный корень из ${inputValue} равен: ${sqrtValue}`;
    } else {
        // Если введено не число или оно отрицательное
        resultMessage.textContent = 'Пожалуйста, введите положительное число.';
    }

    // Очищаем поле ввода после обработки
    numberInput.value = '';
});
