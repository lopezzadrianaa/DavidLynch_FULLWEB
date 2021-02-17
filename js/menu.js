
        let menu = document.querySelector('#menuLineas');
        let items = document.querySelector('#menuItems');
        let linea1 = document.querySelector('#linea1');
        let linea2 = document.querySelector('#linea2');
        let linea3 = document.querySelector('#linea3');
        let header2 = document.querySelector('#header2');
        let animate = document.querySelector('#animate');

        menu.addEventListener('click', function (){
            items.classList.toggle('visible');
            linea1.classList.toggle('menu__lineas__linea1B');
            linea2.classList.toggle('menu__lineas__linea2B');
            linea3.classList.toggle('menu__lineas__linea3B');
            header2.classList.toggle('header__2');
            animate.classList.toggle('h2__oculto')
        })

