import dishCardsTpl from "./templates/dish-cards.hbs";
import menu from "./menu.json";
console.log(dishCardsTpl)
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    menu: document.querySelector('.js-menu'),
    checkbox: document.querySelector('#theme-switch-toggle'),
};


const createDishCards = menu => refs.menu.insertAdjacentHTML('beforeend', dishCardsTpl(menu));

const makedMenu = createDishCards(menu);

const themeData = {};
const onChangeTheme = () => {
    if (refs.checkbox.checked) {
        themeData.Theme = Theme.DARK;
        themeData.checked = true;
        document.body.classList.remove(Theme.LIGHT);
        document.body.classList.add(Theme.DARK);
    }
    else {
        themeData.Theme = Theme.LIGHT;
        themeData.checked = false;
        document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    };

    localStorage.setItem('theme', JSON.stringify(themeData));  
};

const savedTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    const currentThemeParse = JSON.parse(currentTheme);

    if (currentTheme) {
        document.body.classList.add(currentThemeParse.Theme);
        refs.checkbox.checked = currentThemeParse.checked;
    };
};

savedTheme();

refs.checkbox.addEventListener('change', onChangeTheme);

