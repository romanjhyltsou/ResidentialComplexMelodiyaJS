let counterUpDown = 2; // переменная, где храниться текущий этаж

document.querySelector('.counter-up').onclick = counterUp; // кнопка увеличения этажа 
document.querySelector('.counter-down').onclick = counterDown; // кнопка уменьшения  этажа 

let floor = document.querySelectorAll('.home-image path');

for (let i = 0; i < floor.length; i++) {
    // функция при наведении мышью на этаж
    floor[i].addEventListener('mouseenter', function () {

        for (let i = 0; i < floor.length; i++) {
            floor[i].classList.remove('current-floor'); // удаляем активный класс у этажей при навед.
        }

        let currentFloor = this.getAttribute('data-floor'); // получаем значение текущего этажа

        document.querySelector('.counter').textContent = currentFloor;// записывем значение этажа в счетчик справо 

        counterUpDown = +currentFloor; // записывем значение этажа в счетчик

    });

};

function counterUp() { // отслеживаем клик по кнопки вверх

    counterUpDown++ // прибавляем 1 этаж

    if (counterUpDown <= 18) { // проверяем значение этажа, оно не должно быть больше 18

        if (counterUpDown < 10) {

            document.querySelector('.counter').textContent = `0${counterUpDown}`;

        } else {
            document.querySelector('.counter').textContent = counterUpDown;

        };

    };
    if (counterUpDown === 19) { // проверяем значение индекса, оно не должно быть больше 18
        counterUpDown = 18
    }
    for (let i = 0; i < floor.length; i++) {
        floor[i].classList.remove('current-floor'); // удаляем активный класс у этажей при клике
    }
    if (floor[counterUpDown - 2].classList.contains('current-floor')) {
        console.log('1')
    } else {
        floor[counterUpDown - 2].classList.add('current-floor')
    }

};


function counterDown() {

    counterUpDown-- // уменьшаем 1 этаж

    if (counterUpDown >= 2) {

        if (counterUpDown < 10) {

            document.querySelector('.counter').textContent = `0${counterUpDown}`;

        } else {

            document.querySelector('.counter').textContent = counterUpDown;

        };

    };

    if (counterUpDown === 01) {
        counterUpDown = 02
    };

    for (let i = 0; i < floor.length; i++) {
        floor[i].classList.remove('current-floor');
    }
    if (floor[counterUpDown - 2].classList.contains('current-floor')) {
        console.log('1')
    } else {
        floor[counterUpDown - 2].classList.add('current-floor');
    }
};

