// webp test
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});
// burger
function burgerMenu() {
   const burger = document.querySelector('.burger')
   const menu = document.querySelector('.menu')
   const body = document.querySelector('body')
   burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
         menu.classList.add('active')
         burger.classList.add('active-burger')
         body.classList.add('locked')
      } else {
         menu.classList.remove('active')
         burger.classList.remove('active-burger')
         body.classList.remove('locked')
      }
   })
   window.addEventListener('resize', () => {
      if (window.innerWidth > 767.98) {
         menu.classList.remove('active')
         burger.classList.remove('active-burger')
         body.classList.remove('locked')
      }
   })
}
burgerMenu();
function fixedNav() {
   const nav = document.querySelector('nav')
   const breakpoint = 1
   if (window.scrollY > breakpoint) {
      nav.classList.add('fixed__nav')
   } else {
      nav.classList.remove('fixed__nav')
   }
}
window.addEventListener('scroll', fixedNav)
// home 
function openTab(evt, tabName, boxName) {
   let i, tabcontent, tablinks;
   let box = document.getElementById(boxName)
   tabcontent = box.getElementsByClassName("service__item-img");
   for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
   }
   tablinks = box.getElementsByClassName("service__item-link");
   for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
   document.getElementById(tabName).style.display = "block";
   evt.currentTarget.className += " active";
}
//
function accordion() {
   const items = document.querySelectorAll('.accordion__header')
   items.forEach(item => {
      item.addEventListener('click', () => {
         const parent = item.parentNode
         if (parent.classList.contains('show')) {
            parent.classList.remove('show')
         } else {
            document
               .querySelectorAll('.accordion__item')
               .forEach(child => child.classList.remove('show'))
            parent.classList.add('show')
         }
      })
   })
}
accordion()
// 
const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
   const elementTop = el.getBoundingClientRect().top;
   return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
   );
};
const elementOutofView = (el) => {
   const elementTop = el.getBoundingClientRect().top;
   return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
   );
};
const displayScrollElement = (element) => {
   element.classList.add("scrolled");
};
const hideScrollElement = (element) => {
   element.classList.remove("scrolled");
};
const handleScrollAnimation = () => {
   scrollElements.forEach((el) => {
      if (elementInView(el, 1)) {
         displayScrollElement(el)
      } else if (elementOutofView(el)) {
         hideScrollElement(el)
      }
   })
}
window.addEventListener("scroll", () => {
   handleScrollAnimation();
});
window.addEventListener("load", () => {
   handleScrollAnimation();
});