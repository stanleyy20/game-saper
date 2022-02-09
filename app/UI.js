export class UI {
    UiSelectors = {
        board: '[data-board]',
        cell: '[data-cell]',
        counter: '[data-counter]',
        timer: '[data-timer]',
        resetButton: '[data-button-reset]',
        easyButton: '[data-button-easy]',
        normalButton: '[data-button-normal]',
        hardButton: '[data-button-hard]',
        modal: '[data-modal]',
        modalButton: '[data-modal-button]',
        modalHeader: '[data-modal-header]',
    };

    getElement(selector) {
        return document.querySelector(selector)
    }

    getElements(selector) {
        return document.querySelectorAll(selector)
    }
}