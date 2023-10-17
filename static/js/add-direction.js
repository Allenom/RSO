// В работе:
// const inputBox= document.querySelector('.add-direction');
// const addButton = document.querySelector('.add-button');
// const addInput = document.querySelector('.add-input');
// const addText = document.querySelector('.add-text');

// addButton.addEventListener('click', () => {
//     inputBox.classList.remove('no-visible');
//     addInput.focus();
//     addButton.classList.add('no-visible');
// })

// addText.addEventListener('click', () => {
//     if (addInput.value !== "") {
//         const optionDirection = document.querySelector('.select-direction option');
//         const container = document.querySelector(".selectize-dropdown-content");

//         const directionHtml = '<div class="option selected active" data-selectable="" data-value="' + addInput.value + '">' + addInput.value + '</div>';
//         container.insertAdjacentHTML("beforeend", directionHtml);

//         const inputHtml = '<div class="item" data-value="' + addInput.value + '">' + addInput.value +'</div>'
//         const input = document.querySelector('.form-field--direction .selectize-input');
//         input.insertAdjacentHTML("afterbegin", inputHtml);

//         optionDirection.value = addInput.value;
//         optionDirection.innerText = addInput.value;

//         addInput.value = "";
//         inputBox.classList.add('no-visible');
//         addButton.classList.remove('no-visible');
//     }
// });


