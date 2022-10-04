//Constantes para llamar a las partes del formulario

const form = document.querySelector('.container__content__form');
const inputEmail = document.querySelector('.container__content__form__email');
const errorEmail = document.querySelector('.container__content__form__email--error');

form.addEventListener('submit', (event)=>{
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g; //Se considera Objeto

    //Esto es la propiedad del objeto regExp
    if(regExp.test(inputEmail.value)){
        inputEmail.style.border = '1px solid hsl(0, 36%, 70%)';
        inputEmail.style.backgroundImage = '';
        errorEmail.innerHTML = 'Thanks for suscribing';
        errorEmail.style.color = 'hsl(0, 36%, 70%)';
    } else {
        event.preventDefault(); //Evita que el formulario recargue la pag.
        inputEmail.style.border = '1px solid red';
        inputEmail.style.backgroundImage = 'url(images/icon-error.svg)';
        errorEmail.innerHTML = 'Please provide a valid email';
    }
});