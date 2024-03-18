import { data } from './data.js';
const { es, it } = data;

/* Variables */

// Botones de Idioma
const spanish = document.getElementById('es');
const italian = document.getElementById('it');

// Textos a cambiar
const title = document.querySelector('.info__title');
const description = document.querySelector('.info__description');
const description_contact = document.querySelector('.info__description.contact');
const send_text = document.querySelector('.form__right button');

console.log(italian.className);

/* Functions */
spanish.addEventListener('click', () => {
    localStorage.setItem('lang', 'es');
    if (italian.className === 'idiom__btn active') {
        italian.classList.remove('active');
    };
    spanish.classList.add('active');

    title.textContent = es.title;
    description.textContent = es.description;
    description_contact.textContent = es.description_contact;
    send_text.textContent = es.send_text;
});

italian.addEventListener('click', () => {
    localStorage.setItem('lang', 'it');
    if (spanish.className === 'idiom__btn active') {
        spanish.classList.remove('active');
    };
    italian.classList.add('active');

    title.textContent = it.title;
    description.textContent = it.description;
    description_contact.textContent = it.description_contact;
    send_text.textContent = it.send_text;
});

/* Obteniendo el idioma del localStorage */
const lang = localStorage.getItem('lang');

if (lang) {
    if (lang === 'es') {
        spanish.click();
    } else if (lang === 'it') {
        italian.click();
    }
};