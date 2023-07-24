
const DESKTOP = 1200
const TAB = 1024
const MOB = 475
const clientwidth = window.screen.width
const BODY = document.querySelector('body') 

window.addEventListener('resize', () => {
  const clientwidth = window.screen.width

  if (clientwidth >= TAB) {
    descFuntions()

    let modalActive = document.querySelector('modalWrapper.active')

    if(!modalActive) {
      BODY.style.overflow = 'auto';
    }
  }

  if (clientwidth <= TAB) {
    tabFuntions()
    
    let burgeActive = document.querySelector('.modalWrapper.active')

    if(!burgeActive) {
      BODY.style.overflow = 'auto';
    }
  }

  if (clientwidth <= MOB) {
    mobFuntions()
  }


})

function descFuntions() {
  closeBurgerMenu()
}

function tabFuntions() {
}

function mobFuntions() {
  
}


searchOpen()
droplistOpen()
burgerMenu ()
popup()


function burgerMenu () {
  let nav = document.querySelector('.header__nav')
  let burger = document.querySelector('.burger')
  let closeBtn = document.querySelector('.header__close-ico')
  
  burger.addEventListener('click', () => {
    nav.classList.add('active')

    const clientwidth = window.screen.width

    if (clientwidth <= MOB) {
      BODY.style.overflow = 'hidden';
    }
    
  })

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('active')
    BODY.style.overflow = 'auto'
  })
}

function closeBurgerMenu () {
  let nav = document.querySelector('.header__nav')

  nav.classList.remove('active')
}


function droplistOpen() {
  let droplistItems = document.querySelectorAll('.droplist')

  droplistItems.forEach((el) => {
    el.addEventListener('click', (event) => {
      event.stopPropagation();
      el.classList.toggle('active')
    })
  })

  document.addEventListener('click', (event) => {
    droplistItems.forEach((el) => {
      if (!el.contains(event.target)) {
        el.classList.remove('active')
      }
    })
  })
}

function searchOpen() {
  let searchOpenBtn = document.querySelector('.header__search-open')
  let searchCloseBtn = document.querySelector('.header__search-close')
  let searchField = document.querySelector('.search__area')

  searchOpenBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    searchField.classList.add('active')
  })

  searchCloseBtn.addEventListener('click', () => {
    searchField.classList.remove('active')
  })
}


function popup() {
  let testBut = document.querySelectorAll("*[popup-btn]");

  
  testBut.forEach((el) => {
    el.addEventListener('click', (event) => {
      let idPopup = el.getAttribute('data-popup-id');
      openPopup(idPopup)
    })
  })
  
  
  function openPopup(id_popup)  {
      let popupWindow = document.querySelector(id_popup);
      
      if(popupWindow.classList.contains("active")) {
        BODY.style.overflow = 'auto';
        popupWindow.classList.remove('active');
      } else {
        BODY.style.overflow = 'hidden';
        popupWindow.classList.add('active');
      }
  
      let butExit = popupWindow.querySelectorAll('.modal-close-btn');
      
      butExit.forEach((el) => {
        el.addEventListener('click', (event) => {
          BODY.style.overflow = 'auto';
          popupWindow.classList.remove('active');
        })
      })
  
      let backBlack = popupWindow.querySelector('.backBlack');
  
      backBlack.addEventListener('click', () => {
        BODY.style.overflow = 'auto';
        popupWindow.classList.remove('active');
      })
  
  }
}

langChange()
function langChange() {
  let langs = document.querySelectorAll('.header__lng-text')
  
  langs.forEach((el) => {

    el.addEventListener('click', (event) => {
      let curentLang = document.querySelector('.header__lng-text').text

      if (el.text !== curentLang) {
        el.textContent = [langs[0].text, langs[0].text = el.textContent][0];
      }
    })
  })
}
