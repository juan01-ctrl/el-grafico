(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';


const imgFile = document.getElementById("img1")
function ImageSetter(input,target) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function (e) {
          target.attr('src', e.target.result);
      }
      
      reader.readAsDataURL(input.files[0]);
  }
}

$("#imgInp").change(function(){
  imgFile.classList.remove("none")
var imgDiv=$(this).data('id');  
     imgDiv=$('#' + imgDiv);    
  ImageSetter(this,imgDiv);
});

// Constructor
var Header = function() {
  var header = $('.header');
  var headerAd = $('.header__ad');
  var body = $('body');
  var menuOpen = $('.header__hamburguer');
  var menuClose = $('.header__internal-menu__close');
  var nav = $('.header__bottom');
  var internalMenu = $('.header__internal-menu__wrapper');
  var expandTeams = $('.-expand button');
  var teamsList = $('.escudos');

  menuOpen.on('click', function(){
    header.toggleClass('-open');
    body.toggleClass('-hideOverflow');
    updateNavPos();
  });

  function updateNavPos() {
    var top = header.position().top - $(document).scrollTop() > 0 ? header.position().top - $(document).scrollTop() : 0;
    nav.css('top', top + header.outerHeight());
    internalMenu.css('height', $(window).height() - (top + header.outerHeight()));
  }

  expandTeams.on('click', function(){
    teamsList.toggleClass('-expanded');
  });
 
  menuClose.on('click', function(){
    header.removeClass('-open');
    body.removeClass('-hideOverflow');
  });

  $(document).on('scroll', function() {
    updateNavPos();

    var scroll = $(window).scrollTop();

    if (scroll >= headerAd.outerHeight() - 10 || scroll >= headerAd.outerHeight() + 10) {
      header.addClass('-offtop');
      setTimeout(() => {
        nav.addClass('-offtop');
      }, 500);
    } else {
      nav.removeClass('-offtop');
      header.removeClass('-offtop');
    }
  });


  // Score Board
  var scoreBoard = $('.eg-scoreboard');

  if (scoreBoard) {
    var slideLeft = $('.eg-scoreboard__nav--left');
    var slideRight = $('.eg-scoreboard__nav--right');
    var container = $('.eg-scoreboard__content');
    var list = $('.eg-scoreboard__list');

    slideLeft.on('click', function() {
      console.log('left');
      slide('left');
    });

    slideRight.on('click', function() {
      console.log('right');
      slide('right');
    });

    function slide(direction){
      if(direction == 'left'){
        container.animate({scrollLeft: '-=50'}, 300);
      } else {
        container.animate({scrollLeft: '+=50'}, 300);
      }
    }  
  }

  // Hemeroteca
  var hemeroteca = $('.hemeroteca');
  var hemerotecaNavItems = $('.hemeroteca__item');
  var hemerotecaContents = $('.hemeroteca__content');

  if (hemeroteca) {
    hemerotecaNavItems.on('click', function() {
      var target = $(this).data('index');

      hemerotecaNavItems.removeClass('-active');
      hemerotecaContents.removeClass('-active');

      $(this).addClass('-active');
      hemerotecaContents.filter(function() {
        return $(this).data('hemeroteca') === target
      }).addClass('-active');
    });
  }

  // Gallery

  var egGallery = $('.eg-gallery');
  var egGalleryNavItems = $('[data-for]');
  var egGalleryContents = $('[data-media]');

  if (egGallery) {
    egGalleryNavItems.on('click', function() {
      var target = $(this).data('for');

      egGalleryNavItems.removeClass('js-active');
      egGalleryContents.removeClass('js-active');

      $(this).addClass('js-active');
      egGalleryContents.filter(function() {
        return $(this).data('media') === target
      }).addClass('js-active');

      $('.eg-gallery__media').slick('reinit');
    
      $('.eg-gallery__slides').slick('reinit');
    });

    $('.eg-gallery__media').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.eg-gallery__slides'
    });
  
    $('.eg-gallery__slides').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.eg-gallery__media',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

};

module.exports = Header;

},{}],2:[function(require,module,exports){
'use strict';

// Constructor
var Slider = function() {
    var slider = $('._slider');
    if (slider) {
        slider.each(function(){
            $(this).slick({
                dots: true,
                fade: true,
                arrows:  false,
                autoplay: true
            });
        });
    }
};

module.exports = Slider;

},{}],3:[function(require,module,exports){
(function (global){(function (){
// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery;
//global._ = require('underscore');

var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');

$(function() {

    new Header();
    new Slider();
});

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../_modules/header/header":1,"../_modules/slider/slider":2}]},{},[3])

//# sourceMappingURL=main.js.map

// Navegador de tapas
const formTapas = document.querySelector(".form_tapas")
const categorias = document.querySelector(".categorias_tapas")
const categoriaBtn = [...document.querySelectorAll(".categoria_tapas")]


const dateSlider = document.getElementById('slider-date');

function timestamp(str) {
    return new Date(str).getTime();
}

noUiSlider.create(dateSlider, {
    range: {
        min: timestamp('1920'),
        max: timestamp('2022')
    },

    step: 7 * 24 * 60 * 60 * 1000,

    start: [timestamp('1940'), timestamp('2000')],


    format:wNumb({
        decimals: 0
    })
});


var dateValues = [
    document.getElementById('event-start'),
    document.getElementById('event-end')
];

var formatter = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full'
});

dateSlider.noUiSlider.on('update', function (values, handle) {
  const fecha = new Date(+values[handle]) 
  // dateValues[handle].innerHTML =formatter.format(new Date(+values[handle]));
  let date =  formatter.format(new Date(+values[handle]));
 
 dateValues[handle].innerHTML = (fecha.getMonth(date)+1) + "/" + fecha.getFullYear(date)
 });



categorias.addEventListener('click',(e)=>{
    if(e.target.classList.contains("categoria_tapas")){
        categoriaBtn.forEach(el=>{
            el.classList.remove("active")
        })
        e.target.classList.add("active")
    }
})

formTapas.addEventListener("submit",(e)=>{
  e.preventDefault()
})


(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  'use strict';
  
  // Constructor
  var Header = function() {
    var header = $('.header');
    var headerAd = $('.header__ad');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var menuClose = $('.header__internal-menu__close');
    var nav = $('.header__bottom');
    var internalMenu = $('.header__internal-menu__wrapper');
    var expandTeams = $('.-expand button');
    var teamsList = $('.escudos');
    
  
  
  
    menuOpen.on('click', function(){
      header.toggleClass('-open');
      body.toggleClass('-hideOverflow');
      updateNavPos();
    });
  
    function updateNavPos() {
      var top = header.position().top - $(document).scrollTop() > 0 ? header.position().top - $(document).scrollTop() : 0;
      nav.css('top', top + header.outerHeight());
      internalMenu.css('height', $(window).height() - (top + header.outerHeight()));
    }
    
  
    expandTeams.on('click', function(){
      teamsList.toggleClass('-expanded');
    });
   
    menuClose.on('click', function(){
      header.removeClass('-open');
      body.removeClass('-hideOverflow');
    });
  
    $(document).on('scroll', function() {
      updateNavPos();
  
      var scroll = $(window).scrollTop();
  
      if (scroll >= headerAd.outerHeight() - 10 || scroll >= headerAd.outerHeight() + 10) {
        header.addClass('-offtop');
        setTimeout(() => {
          nav.addClass('-offtop');
        }, 500);
      } else {
        nav.removeClass('-offtop');
        header.removeClass('-offtop');
      }
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  /*
    $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 1000,
      from: 200,
      to: 500,
      paso: 1, // longitud del paso, también se puede configurar como decimal
               onStart: function (data) {// devolución de llamada 
          // fired then range slider is ready
      },
      onChange: function (data) {
          // fired on every range slider update
      },
               onFinish: function (data) {// Arrastra la devolución de llamada final
                     console.log ('Valor inicial:' + data.from)
                     console.log ('Valor de terminación:' + data.from)
      },
      onUpdate: function (data) {
          // fired on changing slider with Update method
      }
  
  });
  */
  
    /* Score Board
    var scoreBoard = $('.eg-scoreboard');
  
    if (scoreBoard) {
      var slideLeft = $('.eg-scoreboard__nav--left');
      var slideRight = $('.eg-scoreboard__nav--right');
      var container = $('.eg-scoreboard__content');
      var list = $('.eg-scoreboard__list');
  
      slideLeft.on('click', function() {
        console.log('left');
        slide('left');
      });
  
      slideRight.on('click', function() {
        console.log('right');
        slide('right');
      });
  
      function slide(direction){
        if(direction == 'left'){
          container.animate({scrollLeft: '-=50'}, 300);
        } else {
          container.animate({scrollLeft: '+=50'}, 300);
        }
      }  
    }
  
    // Hemeroteca
    var hemeroteca = $('.hemeroteca');
    var hemerotecaNavItems = $('.hemeroteca__item');
    var hemerotecaContents = $('.hemeroteca__content');
  
    if (hemeroteca) {
      hemerotecaNavItems.on('click', function() {
        var target = $(this).data('index');
  
        hemerotecaNavItems.removeClass('-active');
        hemerotecaContents.removeClass('-active');
  
        $(this).addClass('-active');
        hemerotecaContents.filter(function() {
          return $(this).data('hemeroteca') === target
        }).addClass('-active');
      });
    }
  
    // Gallery
  
    var egGallery = $('.eg-gallery');
    var egGalleryNavItems = $('[data-for]');
    var egGalleryContents = $('[data-media]');
  
    if (egGallery) {
      egGalleryNavItems.on('click', function() {
        var target = $(this).data('for');
  
        egGalleryNavItems.removeClass('js-active');
        egGalleryContents.removeClass('js-active');
  
        $(this).addClass('js-active');
        egGalleryContents.filter(function() {
          return $(this).data('media') === target
        }).addClass('js-active');
  
        $('.eg-gallery__media').slick('reinit');
      
        $('.eg-gallery__slides').slick('reinit');
      });
  
      $('.eg-gallery__media').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.eg-gallery__slides'
      });
    
      $('.eg-gallery__slides').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.eg-gallery__media',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }
    
    */
  };
  module.exports = Header;
  
  },{}],2:[function(require,module,exports){
  'use strict';
  
  // Constructor
  var Slider = function() {
      var slider = $('._slider');
      if (slider) {
          slider.each(function(){
              $(this).slick({
                  dots: true,
                  fade: true,
                  arrows:  false,
                  autoplay: true
              });
          });
      }
  };
  
  module.exports = Slider;
  

  //
  
  },{}],3:[function(require,module,exports){
  (function (global){(function (){
  // Main javascript entry point
  // Should handle bootstrapping/starting application
  

  
  global.$ = global.jQuery;
  //global._ = require('underscore');
  
  var Header = require('../_modules/header/header');
  var Slider = require('../_modules/slider/slider');
  
  $(function() {
  
      new Header();
      new Slider();
  });
  
  }).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  
  },{"../_modules/header/header":1,"../_modules/slider/slider":2}]},{},[3])
  
  //# sourceMappingURL=main.js.map








