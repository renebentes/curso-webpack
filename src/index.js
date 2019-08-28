import { abc } from './my-file';
import jsLogo from './js-logo.png';
import $ from 'jquery';

const imgElement = document.querySelector('#my-image');
imgElement.setAttribute('src', jsLogo);

$(imgElement).on('click', () => {
  $(this).hide();
});

console.log('mensagem do index');

abc();
