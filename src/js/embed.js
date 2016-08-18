import iframeMessenger from 'guardian/iframe-messenger'
import reqwest from 'reqwest'
import embedHTML from './text/embed.html!text'
import * as helper from 'src/utils/helper'
import $ from '$'


const CUSTOM_AMOUNT = document.querySelector('.js-amount-field');
const ACTIVE_CLASS = 'active';
const AMOUNT_CLASS = 'js-amount';
const $AMOUNT_PICKER = $('[data-amount]');
const $SUMBIT = document.querySelector('.js-submit-input');


window.init = function init() {
    iframeMessenger.enableAutoResize();
    console.log("start init");
    console.log($AMOUNT_PICKER);
    $AMOUNT_PICKER.each(el => el.addEventListener('click', ev => {
        console.log(el, ev);
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
    $SUMBIT.href = "https://contribute.theguardian.com?amount=" + amount.toString();
}


init();