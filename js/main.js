let brandImages = {
  Lenovo: "img/brands/Lenovo.svg",
  Samsung: "img/brands/Samsung.svg",
  Apple: "img/brands/Apple.svg",
  ViewSonic: "img/brands/ViewSonic.svg",
  Bosch: "img/brands/Bosch.svg",
  hp: "img/brands/hp.svg",
  Acer: "img/brands/Acer.svg",
  Sony: "img/brands/Sony.svg",
  Lenovo2: "img/brands/Lenovo2.svg",
  Samsung2: "img/brands/samsung2.svg",
  Apple2: "img/brands/Apple2.svg",
}


document.addEventListener('DOMContentLoaded', function() {
  
  
  let button = document.querySelector('.main-info__button');
  let buttonTxt = button.querySelector('.main-info--batton-txt');
  let mainWrapper = document.querySelector('.main-info__hidden-wrapper');
  let buttonImg = button.querySelector('.main-info__img-button');
  
  button.addEventListener('click', function () {
    if (mainWrapper.classList.contains('main-info__hidden-wrapper--change-height')) {
      mainWrapper.classList.remove('main-info__hidden-wrapper--change-height')
      buttonImg.classList.remove('main-info__img-button--rotate-img')
      buttonTxt.textContent = "Показать все";

    } else {
      mainWrapper.classList.add('main-info__hidden-wrapper--change-height');
      buttonImg.classList.add('main-info__img-button--rotate-img');
      buttonTxt.textContent = "Скрыть";


    }
  });

  let mainInfoListNav = document.querySelector('.main-info__list-nav'); //получили главное меню для того чтобы туда потом добавлять новые элементы
  let newItem = document.querySelector('#main-info__main-menu').content; //получили шаблон template
  let nemItemLi = newItem.querySelector('.main-info__list-item'); // получили сам лист списка из шаблона

  let mainInfoDivSwiper = document.querySelector('.swiper-wrapper'); //получил блок swiper куда буду добавлять новые элементы
  let mainMenuSwiper = document.querySelector('#main-info__swiper-menu').content; //получил шаблон template для swiper
  let newItemSwiper = mainMenuSwiper.querySelector('.swiper-slide'); // получил сам блок  div из шаблона

  function createNewCardSwiper (imgsrc) {
    let ClonednewItemDiv = mainMenuSwiper.cloneNode(true);
    let imgElement = ClonednewItemDiv.querySelector('.main-info__img');
    imgElement.src = imgsrc;
    mainInfoDivSwiper.appendChild(ClonednewItemDiv); 
  }



  function createNewCard (imgsrc) {
    let ClonednemItemLi = nemItemLi.cloneNode(true);
    let imgElement = ClonednemItemLi.querySelector('.main-info__img');
    imgElement.src = imgsrc;
    mainInfoListNav.appendChild(ClonednemItemLi); 
  }


  for (key in brandImages) {
    createNewCard(brandImages[key]);
    createNewCardSwiper(brandImages[key]);
  }



});



