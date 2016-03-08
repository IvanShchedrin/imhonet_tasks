var inputString = ["Агафья","Агриппина","Акулина","Алевтина","Александра","Алина","Алла","Анастасия","Ангелина","Анжела","Анжелика","Анна","Антонина","Валентина","Валерия","Варвара","Василиса","Вера","Вероника","Виктория","Галина","Глафира","Дана","Дарья","Евгения","Евдокия","Евпраксия","Евфросиния","Екатерина","Елена","Елизавета","Жанна","Зинаида","Злата","Зоя","Иванна","Инга","Инесса","Ираида","Ирина","Ия","Карина","Каролина","Кира","Клавдия","Ксения","Лада","Лариса","Лидия","Лилия","Любовь","Людмила","Майя","Маргарита","Марина","Мария","Марфа","Матрёна","Мирослава","Надежда","Наина","Наталья","Нина","Нонна","Оксана","Октябрина","Ольга","Пелагея","Полина","Прасковья","Раиса","Регина","Светлана","Серафима","Снежана","София","Таисия","Тамара","Татьяна","Ульяна","Фаина","Феврония","Фёкла","Феодора","Целестина","Юлия","Яна","Ярослава"];

createList(inputString);

var listSpans = document.querySelectorAll('.list span');

for (var ii = 0; ii < listSpans.length; ii++) {
    listSpans[ii].onclick = function(event) {
        var nextElem = event.currentTarget.nextElementSibling;
        if (nextElem.tagName !== 'UL') return;
        nextElem.classList.toggle('hidden');
    }
}

function createList(arr) {
    if (!arr || arr.length === 0) return;

    var list = document.querySelector('.list');
    var firstLetter = 'Null';
    var arrElem;

    for (var ii = 0; ii < arr.length; ii++) {
        arrElem = arr[ii];

        if (firstLetter !== arrElem.charAt(0)) {
            firstLetter = arrElem.charAt(0);
            createCategory(firstLetter);
        }

        addElement(arrElem);
    }

    function createCategory(ltr) {
        var span = document.createElement('span');
        var ul = document.createElement('ul');

        span.innerHTML = ltr;
        list.appendChild(span);
        list.appendChild(ul);
    }

    function addElement(str) {
        var lastUL = list.lastElementChild;
        var li = document.createElement('li');

        li.innerHTML = str;
        lastUL.appendChild(li);
    }
}