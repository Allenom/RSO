function changeRSOpeople(val) {
  if (val == 1) {
    document.getElementById("yes-RSO").style.display = "block";
    document.getElementById("no-RSO").style.display = "none";
    document.get;
  } else if (val == 2) {
    document.getElementById("yes-RSO").style.display = "none";
    document.getElementById("no-RSO").style.display = "block";
  }
}

const noRSOforeign = document.getElementById('no-RSO-foreign');
const yesRSOforeign = document.getElementById('yes-RSO-foreign');
const noRSO = document.getElementById('no-RSO');
const yesRSO = document.getElementById('yes-RSO');

function handleRadioClick() {
  if (document.getElementById('no-rso-people').checked && document.getElementById('no-pass').checked) {
    noRSOforeign.style.display = 'block';
       noRSO.style.display = 'none'
      yesRSOforeign.style.display = 'none'
  } else if(document.getElementById('no-rso-people').checked && document.getElementById('yes-pass').checked) {
    noRSOforeign.style.display = 'none'
    noRSO.style.display = 'block'
  }
   else if(document.getElementById('yes-rso-people').checked && document.getElementById('no-pass').checked) {
    yesRSOforeign.style.display = 'block'
    noRSOforeign.style.display = 'none'
    yesRSO.style.display = 'none'
  }
   else if(document.getElementById('yes-rso-people').checked && document.getElementById('yes-pass').checked) {
    yesRSOforeign.style.display = 'none'
    yesRSO.style.display = 'block'
  }

}

const radioButtons = document.querySelectorAll('input[name="changeRSOforeign"]');
radioButtons.forEach(radio => {
  radio.addEventListener('click', handleRadioClick);
});

const form = document.getElementById("accordion-form");
const submitButton = document.querySelector(".user-data__btn");
const fileError = document.querySelector(".file-error");

//form.addEventListener("submit", (e) => {
//  e.preventDefault();
//  uploadFiles();
//});

// function add_social_field() {
//   let html = `
//  <div class="form-field">
//  <input
//    type="text"
//    id="socials"
//    class="input-big"
//    placeholder="ваша соцсеть"
//  />
// </div>
//   `;
//   let social = document.querySelector(".add");
//   social.insertAdjacentHTML("beforeend", html);
// }

// function add_education_field() {
//   let educationHTML = `<div class="education-wrapper">
//   <div class="form-field one another-education-field">
//                 <label for="another-education">Дополнительное профессиональное образование</label>
//                 <input
//                   type="text"
//                   id="another-education"
//                   class="input-full"
//                   placeholder="Введите название образовательной организации"
//                 />
//               </div>
//               <div class="form-field another-education-field">
//                 <label for="work-book">Годы обучения </label>
//                 <input
//                   type="date"
//                   id="work-book"
//                   class="input-small"
//                   placeholder="__ __"
//                 />
//               </div>
//               <div class="form-field another-education-field">
//                 <label for="mark">Оценка</label>
//                 <input
//                   type="text"
//                   id="mark"
//                   class="input-small"
//                   placeholder="Отлично"
//                 />
//               </div>
//               <div class="form-field one another-education-field">
//               <label for="quality">Квалификация</label>
//               <input
//                 type="text"
//                 id="quality"
//                 class="input-full"
//                 placeholder="Программист"
//               />
//             </div>
//   </div>`;
//
//   let education = document.querySelector(".addEd");
//   education.insertAdjacentHTML("beforeend", educationHTML);
// }

function add_document_field() {
  let documentsHTML = `<div class="form-field">
  <input
    type="text"
    id="documents"
    class="input-big"
    placeholder="название документа"
  />
 </div>
 <div class="statement-wrapper">
 <div class="statement-item">
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M13.1716 3H9C7.11438 3 6.17157 3 5.58579 3.58579C5 4.17157 5 5.11438 5 7V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V8.82843C19 8.41968 19 8.2153 18.9239 8.03153C18.8478 7.84776 18.7032 7.70324 18.4142 7.41421L14.5858 3.58579C14.2968 3.29676 14.1522 3.15224 13.9685 3.07612C13.7847 3 13.5803 3 13.1716 3Z" stroke="#35383F"/>
 <path d="M9 13L15 13" stroke="#35383F" stroke-linecap="round"/>
 <path d="M9 17L13 17" stroke="#35383F" stroke-linecap="round"/>
 <path d="M13 3V7C13 7.94281 13 8.41421 13.2929 8.70711C13.5858 9 14.0572 9 15 9H19" stroke="#35383F"/>
 </svg>
   <p id="file-chosen-documents">
     Файл в формате pdf, png, jpeg размером не более 7 мб
   </p>
 </div>
 <div class="statement-item">
 <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8355 1.25844C12.6113 1.37294 13.3318 1.73974 13.8824 2.30713C15.2454 3.71146 15.2287 5.94982 13.8449 7.33361L13.5759 7.60259L10.4638 10.7146L6.98631 14.1921C5.66848 15.5099 3.52973 15.503 2.22047 14.1766C0.919578 12.8588 0.930576 10.7367 2.24506 9.43237L7.34427 4.37262C7.90114 3.82005 8.79998 3.82178 9.35473 4.37649C9.91102 4.93275 9.91104 5.83466 9.35476 6.39094L4.00621 11.7395L4.71332 12.4466L10.0619 7.09805C11.0087 6.15124 11.0087 4.61614 10.0618 3.66936C9.11761 2.72522 7.58774 2.72228 6.63991 3.66277L1.5407 8.72253C-0.165097 10.4151 -0.179369 13.169 1.50879 14.8791C3.20781 16.6003 5.98326 16.6093 7.69341 14.8992L11.1709 11.4217L14.283 8.3097L14.552 8.04072C16.3222 6.27052 16.3436 3.40714 14.6 1.61067C13.8612 0.849372 12.8834 0.370366 11.8355 0.25V1.25844Z" fill="#1F7CC0"/>
                                </svg>
     <input type="file" name="file" id="documents-upload" hidden />
     <label for="documents-upload" class="file-choose">Выбрать файл</label>
 </div>
</div>`;

  let documents = document.querySelector(".addDoc");
  documents.insertAdjacentHTML("beforeend", documentsHTML);
}

function  add_document_field_yesRso() {
  let documentsHTML = `<div class="form-field">
  <input
    type="text"
    id="documents"
    class="input-big"
    placeholder="название документа"
  />
 </div>
 <div class="statement-wrapper">
 <div class="statement-item">
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M13.1716 3H9C7.11438 3 6.17157 3 5.58579 3.58579C5 4.17157 5 5.11438 5 7V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V8.82843C19 8.41968 19 8.2153 18.9239 8.03153C18.8478 7.84776 18.7032 7.70324 18.4142 7.41421L14.5858 3.58579C14.2968 3.29676 14.1522 3.15224 13.9685 3.07612C13.7847 3 13.5803 3 13.1716 3Z" stroke="#35383F"/>
 <path d="M9 13L15 13" stroke="#35383F" stroke-linecap="round"/>
 <path d="M9 17L13 17" stroke="#35383F" stroke-linecap="round"/>
 <path d="M13 3V7C13 7.94281 13 8.41421 13.2929 8.70711C13.5858 9 14.0572 9 15 9H19" stroke="#35383F"/>
 </svg>
   <p>
     Файл в формате pdf, png, jpeg размером не более 7 мб
   </p>
 </div>
 <div class="statement-item">
 <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8355 1.25844C12.6113 1.37294 13.3318 1.73974 13.8824 2.30713C15.2454 3.71146 15.2287 5.94982 13.8449 7.33361L13.5759 7.60259L10.4638 10.7146L6.98631 14.1921C5.66848 15.5099 3.52973 15.503 2.22047 14.1766C0.919578 12.8588 0.930576 10.7367 2.24506 9.43237L7.34427 4.37262C7.90114 3.82005 8.79998 3.82178 9.35473 4.37649C9.91102 4.93275 9.91104 5.83466 9.35476 6.39094L4.00621 11.7395L4.71332 12.4466L10.0619 7.09805C11.0087 6.15124 11.0087 4.61614 10.0618 3.66936C9.11761 2.72522 7.58774 2.72228 6.63991 3.66277L1.5407 8.72253C-0.165097 10.4151 -0.179369 13.169 1.50879 14.8791C3.20781 16.6003 5.98326 16.6093 7.69341 14.8992L11.1709 11.4217L14.283 8.3097L14.552 8.04072C16.3222 6.27052 16.3436 3.40714 14.6 1.61067C13.8612 0.849372 12.8834 0.370366 11.8355 0.25V1.25844Z" fill="#1F7CC0"/>
                                </svg>
     <input type="file" name="file" id="actual-btn" hidden />
     <label for="actual-btn" class="file-choose">Выбрать файл</label>
 </div>
</div>`;

  let documents = document.querySelector(".yessRso");
  documents.insertAdjacentHTML("beforeend", documentsHTML);
}

function  add_document_field_noRsoForeign() {
  let documentsHTML = `<div class="form-field">
  <input
    type="text"
    id="documents"
    class="input-big"
    placeholder="название документа"
  />
 </div>
 <div class="statement-wrapper">
 <div class="statement-item">
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M13.1716 3H9C7.11438 3 6.17157 3 5.58579 3.58579C5 4.17157 5 5.11438 5 7V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V8.82843C19 8.41968 19 8.2153 18.9239 8.03153C18.8478 7.84776 18.7032 7.70324 18.4142 7.41421L14.5858 3.58579C14.2968 3.29676 14.1522 3.15224 13.9685 3.07612C13.7847 3 13.5803 3 13.1716 3Z" stroke="#35383F"/>
 <path d="M9 13L15 13" stroke="#35383F" stroke-linecap="round"/>
 <path d="M9 17L13 17" stroke="#35383F" stroke-linecap="round"/>
 <path d="M13 3V7C13 7.94281 13 8.41421 13.2929 8.70711C13.5858 9 14.0572 9 15 9H19" stroke="#35383F"/>
 </svg>
   <p>
     Файл в формате pdf, png, jpeg размером не более 7 мб
   </p>
 </div>
 <div class="statement-item">
 <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8355 1.25844C12.6113 1.37294 13.3318 1.73974 13.8824 2.30713C15.2454 3.71146 15.2287 5.94982 13.8449 7.33361L13.5759 7.60259L10.4638 10.7146L6.98631 14.1921C5.66848 15.5099 3.52973 15.503 2.22047 14.1766C0.919578 12.8588 0.930576 10.7367 2.24506 9.43237L7.34427 4.37262C7.90114 3.82005 8.79998 3.82178 9.35473 4.37649C9.91102 4.93275 9.91104 5.83466 9.35476 6.39094L4.00621 11.7395L4.71332 12.4466L10.0619 7.09805C11.0087 6.15124 11.0087 4.61614 10.0618 3.66936C9.11761 2.72522 7.58774 2.72228 6.63991 3.66277L1.5407 8.72253C-0.165097 10.4151 -0.179369 13.169 1.50879 14.8791C3.20781 16.6003 5.98326 16.6093 7.69341 14.8992L11.1709 11.4217L14.283 8.3097L14.552 8.04072C16.3222 6.27052 16.3436 3.40714 14.6 1.61067C13.8612 0.849372 12.8834 0.370366 11.8355 0.25V1.25844Z" fill="#1F7CC0"/>
                                </svg>
     <input type="file" name="file" id="actual-btn" hidden />
     <label for="actual-btn" class="file-choose">Выбрать файл</label>
 </div>
</div>`;

  let documents = document.querySelector(".noRSOforeign");
  documents.insertAdjacentHTML("beforeend", documentsHTML);
}

function add_document_field_yesRsoForeign() {
  let documentsHTML = `<div class="form-field">
  <input
    type="text"
    id="documents"
    class="input-big"
    placeholder="название документа"
  />
 </div>
 <div class="statement-wrapper">
 <div class="statement-item">
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M13.1716 3H9C7.11438 3 6.17157 3 5.58579 3.58579C5 4.17157 5 5.11438 5 7V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V8.82843C19 8.41968 19 8.2153 18.9239 8.03153C18.8478 7.84776 18.7032 7.70324 18.4142 7.41421L14.5858 3.58579C14.2968 3.29676 14.1522 3.15224 13.9685 3.07612C13.7847 3 13.5803 3 13.1716 3Z" stroke="#35383F"/>
 <path d="M9 13L15 13" stroke="#35383F" stroke-linecap="round"/>
 <path d="M9 17L13 17" stroke="#35383F" stroke-linecap="round"/>
 <path d="M13 3V7C13 7.94281 13 8.41421 13.2929 8.70711C13.5858 9 14.0572 9 15 9H19" stroke="#35383F"/>
 </svg>
   <p>
     Файл в формате pdf, png, jpeg размером не более 7 мб
   </p>
 </div>
 <div class="statement-item">
 <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8355 1.25844C12.6113 1.37294 13.3318 1.73974 13.8824 2.30713C15.2454 3.71146 15.2287 5.94982 13.8449 7.33361L13.5759 7.60259L10.4638 10.7146L6.98631 14.1921C5.66848 15.5099 3.52973 15.503 2.22047 14.1766C0.919578 12.8588 0.930576 10.7367 2.24506 9.43237L7.34427 4.37262C7.90114 3.82005 8.79998 3.82178 9.35473 4.37649C9.91102 4.93275 9.91104 5.83466 9.35476 6.39094L4.00621 11.7395L4.71332 12.4466L10.0619 7.09805C11.0087 6.15124 11.0087 4.61614 10.0618 3.66936C9.11761 2.72522 7.58774 2.72228 6.63991 3.66277L1.5407 8.72253C-0.165097 10.4151 -0.179369 13.169 1.50879 14.8791C3.20781 16.6003 5.98326 16.6093 7.69341 14.8992L11.1709 11.4217L14.283 8.3097L14.552 8.04072C16.3222 6.27052 16.3436 3.40714 14.6 1.61067C13.8612 0.849372 12.8834 0.370366 11.8355 0.25V1.25844Z" fill="#1F7CC0"/>
                                </svg>
     <input type="file" name="file" id="actual-btn" hidden />
     <label for="actual-btn" class="file-choose">Выбрать файл</label>
 </div>
</div>`;

  let documents = document.querySelector(".yesRsoForeign");
  documents.insertAdjacentHTML("beforeend", documentsHTML);
}
function add_document_field_NoPass() {
  let foreignDocs = ` <div class="form-field one">
 <input
   type="text"
   id="document-name"
   class="input-full"
   placeholder="название документа"
 />
</div>
<div class="form-field one">
 <input
   type="text"
   id="another"
   class="input-full"
   placeholder="Номер, дата и т.д"
 />
</div>`

  let foreign = document.querySelector(".NoPass");
  foreign.insertAdjacentHTML("beforeend", foreignDocs);

}


// actualBtn.addEventListener("change", () => {
//   let files = actualBtn.files;
//   if (files[0].size > 1024 * 1024) {
//     fileError.innerText = "File size Exceeds 1 mb";
//     return;
//   }
//   fileError.innerText = "";
// });

// function uploadFiles() {
//   const url = "https://httpbin.org/post";
//   const method = "post";
//
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       // The file has been uploaded successfully
//       console.log("File successfully uploaded!");
//       form.reset();
//     }
//   };
//
//   const data = new FormData(form);
//
//   xhr.open(method, url);
//   xhr.send(data);
// }

function changeBlockPassportParent(val) {
  if (val == 1) {
    document.getElementById("pass-no-addr").style.display = "block";
    document.getElementById("pass-no-pass-id").style.display = "block";
    document.getElementById("pass-no-date").style.display = "block";
    document.getElementById("pass-no-locality").style.display = "block";
    document.getElementById("pass-no-pass").style.display = "block";
           document.getElementById("pass-no-reg").style.display = "block";
    document.getElementById("pass-no-street").style.display = "block";
    // document.getElementById("checkbox-parent-pass").style.display = "block";
    document.getElementById("no-passport-parent").style.display = "none";
    // document.getElementById("passport-parent-yes").style.display= 'grid';
  } else if (val == 2) {
 document.getElementById("pass-no-addr").style.display = "none";
    document.getElementById("pass-no-pass-id").style.display = "none";
    document.getElementById("pass-no-date").style.display = "none";
    document.getElementById("pass-no-locality").style.display = "none";
    document.getElementById("pass-no-pass").style.display = "none";
    document.getElementById("pass-no-street").style.display = "none";
       document.getElementById("pass-no-reg").style.display = "none";
            // document.getElementById("passport-parent-yes").style.display= 'none';
    document.getElementById("no-passport-parent").style.display = "grid";
  }
}

function changeBlockPassport(val) {
  if (val == 1 ) {
    document.getElementById("yes-passport").style.display = "grid";
    document.getElementById("no-passport").style.display = "none";
    document.getElementById("checkbox").style.display = "block";
    document.getElementById("addr-fact").style.display = "block";

  } else if (val == 2) {
    document.getElementById("yes-passport").style.display = "none";
    document.getElementById("no-passport").style.display = "grid";
    document.getElementById("checkbox").style.display = "none";
    document.getElementById("addr-fact").style.display = "none";
  }
}



  function addrFact(val) {
  if (val == 1) {
    document.getElementById("addr-fact").style.display = "none";
  } else if (val == 2) {
    document.getElementById("addr-fact").style.display = "block";
  }
}
window.onload =  function(){
addrFact(val);
}


function checkBox(){
  let button = document.getElementById("submit-btn");
  if(button.disabled) {
  button.disabled = false;
  } else {
  button.disabled = true;
  }
}

