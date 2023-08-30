// const accordionContainer = document.querySelector('.accordion-container');
// const accordionBlocks = Array.from(accordionContainer.querySelectorAll('.accrodion-block'));
// let checkbox_state = false;
// let clickedIndex_state = 0;

// function toggleCheckboxState(event) {
//   checkbox_state = event.target.checked;
//   accordionBlocks.forEach(block => block.classList.remove('is-opened'));
//   accordionBlocks[clickedIndex_state].classList.add('is-opened')
// }

// function handleAccordionClick(event, index) {
//   clickedIndex_state = index;
//   const clickedBlock = event.target.parentNode;

//   if (clickedBlock.classList.contains('is-opened')) {
//      clickedBlock.classList.remove('is-opened');
//      if (checkbox_state) {
//         accordionBlocks.forEach(block => block.classList.remove('is-opened'));
//      }
//   } else {
//      if (checkbox_state) {
//         accordionBlocks.forEach(block => block.classList.remove('is-opened'));
//      }
//      clickedBlock.classList.add('is-opened');
//   }
// }

// // Add event listeners
// accordionBlocks.forEach((item, index) => {
//    item.addEventListener('click', (e) => handleAccordionClick(e, index));
// });


const accordionItemHeaders = document.querySelectorAll(
   ".accordion-item-header"
 );

 accordionItemHeaders.forEach((accordionItemHeader) => {
   accordionItemHeader.addEventListener("click", (event) => {
     // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

     const currentlyActiveAccordionItemHeader = document.querySelector(
       ".accordion-item-header.active"
     );
     if (
       currentlyActiveAccordionItemHeader &&
       currentlyActiveAccordionItemHeader !== accordionItemHeader
     ) {
       currentlyActiveAccordionItemHeader.classList.toggle("active");
       currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
     }
     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if (accordionItemHeader.classList.contains("active")) {
       accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
     } else {
       accordionItemBody.style.maxHeight = 0;
     }
   });
 });
