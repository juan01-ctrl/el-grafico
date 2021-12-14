

const contenedorElementos = document.querySelector(".contenedor-elementos")
// const closeBtn = document.querySelector(".close-btn")
const sliderTapas = document.querySelector(".slider-tapas")
const imgSlider = document.querySelector(".img-slider")
const sliderFecha = document.querySelector(".slider-tapas .fecha")


contenedorElementos.addEventListener("click",(e)=>{
  if(e.target.classList.contains("close-btn") || e.target.classList.contains("fas")){
    sliderTapas.classList.add("none")
  }
  if(e.target.classList.contains("img")){
    sliderTapas.classList.remove("none")
    imgSlider.setAttribute("src",e.target.getAttribute("src"))  
    // sliderFecha.textContent = 
    sliderFecha.textContent = e.target.parentNode.previousElementSibling.firstElementChild.textContent
  }

})




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


 



 


// const dateSlider = document.getElementById('slider-date');

// function timestamp(str) {
//     return new Date(str).getTime();
// }

// noUiSlider.create(dateSlider, {
//     range: {
//         min: timestamp('1920'),
//         max: timestamp('2022')
//     },

//     step: 7 * 24 * 60 * 60 * 1000,

//     start: [timestamp('1940'), timestamp('2000')],


//     format:wNumb({
//         decimals: 0
//     })
// });


// var dateValues = [
//     document.getElementById('event-start'),
//     document.getElementById('event-end')
// ];

// var formatter = new Intl.DateTimeFormat('en-GB', {
//     dateStyle: 'full'
// });

// dateSlider.noUiSlider.on('update', function (values, handle) {
//   const fecha = new Date(+values[handle]) 
//   // dateValues[handle].innerHTML =formatter.format(new Date(+values[handle]));
//   let date =  formatter.format(new Date(+values[handle]));
 
//  dateValues[handle].innerHTML = (fecha.getMonth(date)+1) + "/" + fecha.getFullYear(date)
//  });






  
  
  
  
  
  
  
  
  
  
  
  
    
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
  

