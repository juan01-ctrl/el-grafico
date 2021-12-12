
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