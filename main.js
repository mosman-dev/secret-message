const form = document.querySelector('form');
const msgForm = document.querySelector('#msg-form');
const linkForm = document.querySelector('#link-form');
const msgInput = document.querySelector('#msg-input');
const linkInput = document.querySelector('#link-input');
const msgShow = document.querySelector('#msg-show');
const showMsg = document.querySelector('h1');
const { hash }  = window.location;
const decrypted = atob(hash.replace('#', ''));

if (decrypted) {
    msgForm.classList.add('hide');
    msgShow.classList.remove('hide');

    showMsg.innerHTML = decrypted;
}

form.addEventListener('submit', event => {
    event.preventDefault();

    msgForm.classList.add('hide');
    linkForm.classList.remove('hide');
    const encrypted = btoa(msgInput.value);
    

    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
});