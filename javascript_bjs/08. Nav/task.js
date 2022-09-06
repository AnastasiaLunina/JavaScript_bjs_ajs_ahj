const menuItem = Array.from(document.getElementsByClassName('menu__item'));
const menuLink = Array.from(document.getElementsByClassName('menu__link'));

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = () => {
        if (menuItem[i].querySelector('.menu_sub') && !menuItem[i].querySelector('.menu_active')) {
            menuItem.forEach((element, index) => {
                if (element.querySelector('.menu_active')) {
                        menuItem[index].querySelector('.menu_sub').classList.remove('menu_active');
                    }
                });
            menuItem[i].querySelector('.menu_sub').classList.add('menu_active');
            return menuItem[i].getAttribute('href') == false;
        } else if (menuItem[i].querySelector('.menu_sub') && menuItem[i].querySelector('.menu_active')) {
            menuItem[i].querySelector('.menu_sub').classList.remove('menu_active');
            return menuItem[i].getAttribute('href') == false;
        }
    };
}
