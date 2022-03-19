// window.addEventListener('DOMContentLoaded', function () {
//     let product = document.querySelectorAll('.product'),
//         buttons = document.querySelectorAll('button'),
//         openBtn = document.querySelector('.open');

//     function yangiCart() {

//         let cart = document.createElement('div'),
//             fild = document.createElement('div'),
//             heading = document.createElement('h2'),
//             closeBtn = document.createElement('button');


//         cart.classList.add('cart')
//         fild.classList.add('cart-field')
//         closeBtn.classList.add('close_1')


//         heading.textContent = 'в нашей корзине'
//         closeBtn.textContent = 'закрить'


//         document.body.appendChild(cart)
//         cart.appendChild(heading)
//         cart.appendChild(fild)
//         cart.appendChild(closeBtn)

//     }

//     yangiCart()


//     let cart = document.querySelector('.cart'),
//         closeBtn = document.querySelector('.close_1'),
//         fild = document.querySelector('.cart-field')

//     openBtn.addEventListener('click', function () {
//         cart.style.display = 'block'

//     })


//     closeBtn.addEventListener('click', function () {
//         cart.style.display = 'none'
//     })



//     buttons.forEach(function (item, i) {
//         item.addEventListener('click', function () {
//             let cloneItem = product[i].cloneNode(true)

//             btn = cloneItem.querySelector('button');




//             btn.remove()
//             fild.appendChild(cloneItem )
//             // product[i].remove()
//         })

//     })

// })
$(document).ready(function () {
    $('.burger').click(function () {
        $('ul').toggleClass('show');
    });
});