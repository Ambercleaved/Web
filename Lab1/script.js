// Обработчик события для формы
document.getElementById('cosine-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    // Получаем введённое значение
    const inputValue = document.getElementById('numberInput').value;

    // Проверяем, что введено число
    if (inputValue === '') {
        alert('Пожалуйста, введите число.');
        return;
    }

    const x = parseFloat(inputValue);

    // Проверка на валидность введённого числа
    if (isNaN(x)) {
        alert('Введено некорректное значение. Пожалуйста, введите числовое значение.');
        return;
    }

    // Вычисление косинуса
    const cosValue = Math.cos(x).toFixed(4); // Косинус и округление до 4 знаков после запятой

    // Выводим результат на страницу
    document.getElementById('result').innerText = `cos(${x}) = ${cosValue}`;
});