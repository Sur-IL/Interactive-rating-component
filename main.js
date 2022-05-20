'use strict';

const estimationEls = document.querySelectorAll('.estimation')
const containerEl = document.querySelector('.container');
const containerSelectedEl = document.querySelector('.container-selected');
const selectedEstimation = document.querySelector('.selected-estimation');

document.querySelector('.estimation-box').addEventListener('click', event => {
    if (!event.target.classList.contains('estimation')) {
        return;
    }
    estimationEls.forEach(el => {
        el.classList.remove('active');
    })
    event.target.classList.add('active');
});

document.querySelector('.button').addEventListener('click', () => {
    containerEl.classList.add('hidden');
    setTimeout(() => {
        containerSelectedEl.classList.remove('hidden');
    }, 1000);

    let activeEl = document.querySelector('.active');

    selectedEstimation.textContent = activeEl.textContent;
});