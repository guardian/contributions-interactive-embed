import iframeMessenger from 'guardian/iframe-messenger'
import * as helper from 'src/utils/helper'
import $ from '$'


const ACTIVE_CLASS = 'active';
const AMOUNT_CLASS = 'js-amount';
const $AMOUNT_PICKER = $('[data-amount]');
const $SUMBIT = document.querySelector('.js-submit-input');


window.init = function init() {
    iframeMessenger.enableAutoResize();
    $AMOUNT_PICKER.each(el => el.addEventListener('click', ev => {
        let element = ev.currentTarget;
        let amount = element.getAttribute('data-amount');
        select(element);
        setAmount(amount);
    }));
};

function select(el) {
    $(helper.getSpecifiedParent(el, 'js-button-group').querySelectorAll('.js-button')).removeClass(ACTIVE_CLASS);
    $(el).addClass(ACTIVE_CLASS);
}

function setAmount(amount) {
    $('input.' + AMOUNT_CLASS).val(amount);
    $SUMBIT.href = "https://contribute.theguardian.com/uk?INTCMP=co_uk_cobed_like&skipAmount=1&highlight=" + amount.toString();
}

init();