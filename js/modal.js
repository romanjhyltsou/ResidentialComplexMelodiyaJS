/* for (let i = 0; i < floor.length; i++) {
    floor[i].onclick = function () {
        document.querySelector('.modal').classList.add('is-open');
    };
};
document.querySelector('.modal-close-button').onclick = function(){
    document.querySelector('.modal').classList.remove('is-open');
} */
let flatsPath = document.querySelectorAll('.flats path');
let modal = document.querySelector('.modal');
let floorCounter = document.querySelector('.floor-counter');
let buttonPrimary = document.querySelector('.button-primary');
let flatItem = document.querySelectorAll('.flat-item');
let flatLink = document.querySelectorAll('.flat-link');

const openModal = ()=> {
    document.querySelector('.modal').classList.add('is-open'); /* открываем modal */
    document.querySelector('.modal-counter').textContent = floorCounter.textContent; /* добавляем в modal номер этажа при его открытии  */
    disableScroll();
};

const closeModal = ()=> {
    document.querySelector('.modal').classList.remove('is-open'); /* закрываеться modal */
    enableScroll();
};

for (let i = 0; i < floor.length; i++) {
    floor[i].addEventListener('click', openModal) /* кликаем на этаж открываеться modal */
};

modal.addEventListener('click', (event)=>{ /* кликаем на крестик или на фон и  закрываеться modal */
    let target = event.target
    console.log(target)
    if(target.classList.contains('modal-close-button')||
    target.classList.contains('modal')){
        closeModal()
        location.reload('counter') /* при закрытии modal перезагрузка счетчика */
    }
});

buttonPrimary.addEventListener('click', openModal) /* кликаем на btn открываеться modal */
       



for (let i = 0; i < flatItem.length; i++) { /* перебераем циклом все flatItem(список) */
    
    flatItem[i].addEventListener('mouseenter', function () { /* когда наводим на один элемент flatItem(списока) */

        for (let i = 0; i < flatsPath.length; i++) { /* перебераем циклом все flatsPath(квартиры на этаже) */
            flatsPath[i].classList.remove('flat-floor-active'); /* удаляем у всех них класс flat-floor-active */
        };

       flatsPath[i].classList.add('flat-floor-active') /* и при наведении на один их них добавляем flat-floor-active */

    });

};

for (let i = 0; i < flatItem.length; i++) { /* перебераем циклом все flatItem(список) */
    
    flatItem[i].addEventListener('mouseleave', function () { /* когда убираем мышь с одном элементе из flatItem(списока) */

       flatsPath[i].classList.remove('flat-floor-active');/* удаляем класс flat-floor-active*/

    });

};






for (let i = 0; i < flatsPath.length; i++) {

    flatsPath[i].addEventListener('mouseenter', function () {

        for (let i = 0; i < flatLink.length; i++) {

            flatLink[i].classList.remove('flat-item-active');

        };

        flatLink[i].classList.add('flat-item-active')

    });


}
 
for (let i = 0; i < flatsPath.length; i++) {

    flatsPath[i].addEventListener('mouseleave', function () {


       flatLink[i].classList.remove('flat-item-active');

    });

}