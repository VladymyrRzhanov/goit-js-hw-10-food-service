import dishCardsTpl from "./templates/dish-cards.hbs";
import menu from "./menu.json";

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    menu: document.querySelector('.js-menu'),
    checkbox: document.querySelector('#theme-switch-toggle'),
};


const createDishCards = menu => refs.menu.insertAdjacentHTML('beforeend', dishCardsTpl(menu));

createDishCards(menu);

let themeData = '';
const onChangeTheme = () => {
    if (refs.checkbox.checked) {
        themeData = Theme.DARK;
        document.body.classList.remove(Theme.LIGHT);
        document.body.classList.add(Theme.DARK);
    }
    else {
        themeData = Theme.LIGHT;
        document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    };

    localStorage.setItem('theme', themeData);  
};

const savedTheme = () => {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === Theme.DARK) {
        document.body.classList.add(currentTheme);
        refs.checkbox.setAttribute("checked", "checked");
    };
};

savedTheme();

refs.checkbox.addEventListener('change', onChangeTheme);

