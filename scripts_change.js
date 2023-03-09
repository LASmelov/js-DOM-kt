// Блок 1
// Содержание элемента InnerHTML

// Получение объекта
// const textElement = document.querySelector('.italic');

// Получаем содержимое объекта "Как есть"

// const textElementContent = textElement.innerHTML;
// console.log(textElementContent);


// Перезаписываем содержимое объекта
// textElement.innerHTML = "легко и просто"


// textElement остается не изменным, что позволяет его изменять
// textElement.innerHTML = '${textElementContent}<p>Легко и просто<span class="bigred">Отлично</span> получилось<p>';

// cosnole.log(textElement.innerHTML);

// Блок 2
// содержимое блока целиком 
// const textElement = document.querySelector('.italic');

// const textElementContent = textElement.outerHTML;
// console.log(textElementContent);

// textElement.outerHTML = '<p>Легко и просто<span class="bigred">Отлично</span> получилось</p>';

// console.log(textElement.outerHTML);

// Блок 3
// просто текс элемента textcontent

// получим объект
// const textElement = document.querySelector('.italic');
// const textElementContent = textElement.textContent;
// console.log(textElementContent);

// попробуем изменить содержание
// textElement.textContent = '<p>Легко и просто<span class="bigred">Отлично</span> получилось</p>';
// console.log(textElement.textContent);

// Блок 4
// Создаем элементы и узлов

// const newElement = document.createElement('div');
// console.log(newElement);

// newElement.innerHTML = 'Опять легко и просто < span class ="bigred" > Отлично</span > получилось</p > ';

// console.log(newElement);

// Создание нового текстого узла
const newText = document.createTextNode('ПРивет');
console.log(newText);