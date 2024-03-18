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

// Botones de direcciónes
const instagram = document.getElementById('ig');
const linkedin = document.getElementById('in');
const whatsapp = document.getElementById('wp');

/* Functions */
spanish.addEventListener('click', () => {
    // Guardando el idioma
    localStorage.setItem('lang', 'es');
    if (italian.className === 'idiom__btn active') {
        italian.classList.remove('active');
    };
    spanish.classList.add('active');

    // Cambiando los textos
    title.textContent = es.title;
    description.innerHTML = es.description;
    description_contact.textContent = es.description_contact;
    send_text.textContent = es.send_text;

    // Redireccionando a redes
    instagram.href = 'https://www.instagram.com/back2italy.la/';
    linkedin.href = 'https://www.linkedin.com/company/back2italy';
    whatsapp.href = 'https://wa.me/3904321510622';
});

italian.addEventListener('click', () => {
    localStorage.setItem('lang', 'it');
    if (spanish.className === 'idiom__btn active') {
        spanish.classList.remove('active');
    };
    italian.classList.add('active');

    title.textContent = it.title;
    description.innerHTML = it.description;
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