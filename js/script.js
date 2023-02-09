let arrow = document.querySelector('.fa-caret-down');

let dropdown = document.querySelector('.dropdown');

arrow.addEventListener('click', function () {
    dropdown.classList.toggle('show-menu');
})

let xmark = document.querySelector('.fa-xmark');
let bars = document.querySelector('.fa-bars');

let navMenu = document.querySelector('nav');

bars.addEventListener('click', function () {
    navMenu.classList.toggle('show');
    bars.classList.toggle('hide');
    xmark.classList.toggle('hide');
})
xmark.addEventListener('click', function () {
    navMenu.classList.toggle('show');
    bars.classList.toggle('hide');
    xmark.classList.toggle('hide');
})

let creditBox = document.querySelector('.credit');
let creditInput = document.getElementById('credit');
let paypalBox = document.querySelector('.paypal');
let PaypalInput = document.getElementById('paypal');

creditInput.addEventListener('click', function () {
    if (paypalBox.style.borderColor === 'var(--main-color)') {
        paypalBox.style.borderColor = '#ebebeb';
    }
    creditBox.style.borderColor = 'var(--main-color)';
})

PaypalInput.addEventListener('click', function () {
    if (creditBox.style.borderColor === 'var(--main-color)') {
        creditBox.style.borderColor = '#ebebeb';
    }
    paypalBox.style.borderColor = 'var(--main-color)';
})

let cardNumbInput = document.getElementById('card-numb');
function myFunction() {
    let index = cardNumbInput.value.lastIndexOf('-');
    let test = cardNumbInput.value.substr(index + 1);
    if (test.length === 4 && cardNumbInput.value.length < 16) {
        cardNumbInput.value = cardNumbInput.value + '-';
    }
}