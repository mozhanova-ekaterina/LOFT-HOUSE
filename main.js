const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const headerTop = document.querySelector(".header__top");

navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  headerTop.classList.toggle("header__top--mobile");
  document.body.classList.toggle("no-scroll");
};

//Phone mask

const phoneInputs = document.querySelectorAll("[data-tel-input]");

const maskOptions = {
  mask: "+{7}(000)000-00-00",
};

phoneInputs.forEach((element) => {
  const mask = new IMask(element, maskOptions);
});

//Map

let map;

main();
async function main() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты API
  await ymaps3.ready;

  // Создание карты
  map = new ymaps3.YMap(document.getElementById("map"), {
    location: {
      // Координаты центра карты
      // Порядок по умолчанию: «долгота, широта»
      center: [30.338928, 59.943543],

      // Уровень масштабирования
      // Допустимые значения: от 0 (весь мир) до 21.
      zoom: 16,
    },
  });

  // Добавляем слой для отображения схематической карты
  map.addChild(new ymaps3.YMapDefaultSchemeLayer());

}
