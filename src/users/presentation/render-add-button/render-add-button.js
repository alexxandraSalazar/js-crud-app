import './render-add-button.css';
import {showModal} from '../render-modal/render-modal.js'

/**
 * @param {HTMLDivElement} element
 */
export const renderAddButton = (element, callback) => {
    
    const fabButton = document.createElement('button');
    fabButton.classList.add('fab-button');
    fabButton.innerText = '+';

    element.append(fabButton)

    fabButton.addEventListener('click', () => {
        showModal()
    })
}