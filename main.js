/*Comportamiento Menú Lateral*/

$(document).ready(function () {
    $('.menu_on').click(function () {
        $('body').toggleClass('invisible_menu');
    })
});

$(document).ready(function () {
    $('.menu_on').click(function () {
        $('body').toggleClass('topbar-full');
    })
});

$(document).ready(function () {
    $('.menu_off').click(function () {
        $('body').toggleClass('invisible_menu');
    })
});

$(document).ready(function () {
    $('.menu_off').click(function () { 
        $('body').toggleClass('topbar-full');
    })
});


/*Comportamiento General Container*/

$(document).ready(function () {
    $('.menu_on').click(function () {
        $('.general-container').toggleClass('general-container-short');
    })
});

$(document).ready(function () {
    $('.menu_off').click(function () {
        $('.general-container').toggleClass('general-container-short');
    })
});


/*Comportamiento Modales*/

// Localiza el modal
var modal = document.getElementById("myModal");

// Localiza el botón que abre el modal
var btn = document.getElementById("myBtn");

// Localiza el elemento que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic, el modal se abre
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario hace clic en la (x) el modal se cierra
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario hace clic en cualquier lugar que no sea el modal, este se cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}