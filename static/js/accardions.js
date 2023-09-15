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

const form = document.getElementById("accordion-form");
const submitButton = document.querySelector(".user-data__btn");
const fileError = document.querySelector(".file-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  uploadFiles();
});

// делаем по id

let clearSurname = document.getElementById("clear-surname");
let clearSurnameLat = document.getElementById("clear-surname-lat");
let clearName = document.getElementById("clear-name");
let clearNameLat = document.getElementById("clear-name-lat");
let clearPatronomyc = document.getElementById("clear-patronomyc");
let clearPatronomycLat = document.getElementById("clear-patronomyc-lat");
let clearSurnameParent = document.getElementById("clear-surname-parent");
let clearNameParent = document.getElementById("clear-name-parent");
let clearPatronomycParent = document.getElementById("clear-patronomyc-parent");
let clearPhoneParent= document.getElementById("clear-phone-parent");
let clearPassNumParent = document.getElementById("clear-pass-num-parent");
let clearPassIdParent = document.getElementById("clear-pass-id-parent");
let clearLocalityParent = document.getElementById("clear-locality-parent");
let clearAdresParent = document.getElementById("clear-addres-parent");
let clearPassNum = document.getElementById("clear-pass-num");
let clearWorkBook = document.getElementById("clear-work-book");
let clearForeignPass = document.getElementById("clear-foreign-pass");
let clearMilitaryId = document.getElementById("clear-military-id");
let clearPassId = document.getElementById("clear-pass-id");
let clearEducationOrg = document.getElementById("clear-education-org");
let clearFacultet = document.getElementById("clear-facultet");
let clearCourse = document.getElementById("clear-course");
let clearSpeciality = document.getElementById("clear-speciality");


let surnameInput = document.getElementById("surname");
let surnameLatInput = document.getElementById("surname-lat");
let nameInput = document.getElementById("name");
let nameLatInput = document.getElementById("name-lat");
let patronomycInput = document.getElementById("patronomyc");
let patronomycLatInput = document.getElementById("patronomyc-lat");
let surnameParentInput = document.getElementById("surname-parent");
let nameParentInput = document.getElementById("name-parent");
let patronomycParentInput = document.getElementById("patronomyc-parent");
let phoneParentInput = document.getElementById("phone-parent");
let passNumParentInput= document.getElementById("pass-num-parent");
let passIdParentInput = document.getElementById("pass-id-parent");
let localityParentInput = document.getElementById("locality-parent");
let addresParentInput = document.getElementById("addres-parent");
let PassNum = document.getElementById("pass-num");
let WorkBook = document.getElementById("work-book");
let ForeignPass = document.getElementById("foreign-pass");
let MilitaryId = document.getElementById("military-id");
let PassId = document.getElementById("pass-id");
let EducationOrg = document.getElementById("education-org");
let Facultet = document.getElementById("facultet");
let Course = document.getElementById("course");
let Speciality = document.getElementById("speciality");


clearSurname.addEventListener("click", () => {
  surnameInput.value = "";
});

clearSurnameLat.addEventListener("click", () => {
  surnameLatInput.value = "";
});
clearName.addEventListener("click", () => {
  nameInput.value = "";
});
clearNameLat.addEventListener("click", () => {
  nameLatInput.value = "";
});
clearPatronomyc.addEventListener("click", () => {
  patronomycInput.value = "";
});
clearPatronomycLat.addEventListener("click", () => {
  patronomycLatInput.value = "";
});

clearSurnameParent.addEventListener("click", () => {
  surnameParentInput.value = "";
});
clearNameParent.addEventListener("click", () => {
  nameParentInput.value = "";
});
clearPatronomycParent.addEventListener("click", () => {
  patronomycParentInput.value = "";
});
clearPassNumParent.addEventListener("click", () => {
  passNumParentInput.value = "";
});
clearPassIdParent.addEventListener("click", () => {
  passIdParentInput.value = "";
});
clearLocalityParent.addEventListener("click", () => {
  localityParentInput.value = "";
});
clearPhoneParent.addEventListener("click", () => {
  phoneParentInput.value = "";
});
clearAdresParent.addEventListener("click", () => {
  addresParentInput.value = "";
});

clearPassNum.addEventListener("click", () => {
  PassNum.value = "";
});

clearPassId.addEventListener("click", () => {
  PassId.value = "";
});

clearWorkBook.addEventListener("click", () => {
  WorkBook.value = "";
});

clearForeignPass.addEventListener("click", () => {
  ForeignPass.value = "";
});

clearMilitaryId.addEventListener("click", () => {
  MilitaryId.value = "";
});

clearEducationOrg.addEventListener("click", () => {
  EducationOrg.value = "";
});

clearFacultet.addEventListener("click", () => {
  Facultet.value = "";
});

clearCourse.addEventListener("click", () => {
  Course.value = "";
});

clearSpeciality.addEventListener("click", () => {
  Speciality.value = "";
});




function add_social_field() {
  let html = `
 <div class="form-field">
 <input
   type="text"
   id="socials"
   class="input-big"
   placeholder="ваша соцсеть"
 />
</div>
  `;
  let social = document.querySelector(".add");
  social.insertAdjacentHTML("beforeend", html);
}

function add_education_field() {
  let educationHTML = `<div class="education-wrapper">
  <div class="form-field one another-education-field">
                <label for="another-education">Дополнительное профессиональное образование</label>
                <input
                  type="text"
                  id="another-education"
                  class="input-full"
                  placeholder="Введите название образовательной организации"
                />
              </div>
              <div class="form-field another-education-field">
                <label for="work-book">Годы обучения </label>
                <input
                  type="date"
                  id="work-book"
                  class="input-small"
                  placeholder="__ __"
                />
              </div>
              <div class="form-field another-education-field">
                <label for="mark">Оценка</label>
                <input
                  type="text"
                  id="mark"
                  class="input-small"
                  placeholder="Отлично"
                />
              </div>
              <div class="form-field one another-education-field">
              <label for="quality">Квалификация</label>
              <input
                type="text"
                id="quality"
                class="input-full"
                placeholder="Программист"
              />
            </div>
  </div>`;

  let education = document.querySelector(".addEd");
  education.insertAdjacentHTML("beforeend", educationHTML);
}

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
   <p>
     Файл в формате pdf, png, jpeg размером не более 7 мб
   </p>
 </div>
 <div class="statement-item">
 <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8355 1.25844C12.6113 1.37294 13.3318 1.73974 13.8824 2.30713C15.2454 3.71146 15.2287 5.94982 13.8449 7.33361L13.5759 7.60259L10.4638 10.7146L6.98631 14.1921C5.66848 15.5099 3.52973 15.503 2.22047 14.1766C0.919578 12.8588 0.930576 10.7367 2.24506 9.43237L7.34427 4.37262C7.90114 3.82005 8.79998 3.82178 9.35473 4.37649C9.91102 4.93275 9.91104 5.83466 9.35476 6.39094L4.00621 11.7395L4.71332 12.4466L10.0619 7.09805C11.0087 6.15124 11.0087 4.61614 10.0618 3.66936C9.11761 2.72522 7.58774 2.72228 6.63991 3.66277L1.5407 8.72253C-0.165097 10.4151 -0.179369 13.169 1.50879 14.8791C3.20781 16.6003 5.98326 16.6093 7.69341 14.8992L11.1709 11.4217L14.283 8.3097L14.552 8.04072C16.3222 6.27052 16.3436 3.40714 14.6 1.61067C13.8612 0.849372 12.8834 0.370366 11.8355 0.25V1.25844Z" fill="#1F7CC0"/>
                                </svg>
     <input type="file" name="file" id="actual-btn" hidden />
     <label for="actual-btn" id="file-choose">Выбрать файл</label>
     <span id="file-chosen">Файл не выбран</span>
 </div>
</div>`;

  let documents = document.querySelector(".addDoc");
  documents.insertAdjacentHTML("beforeend", documentsHTML);
}

// function add_foreign_document_field() {
//   let foreignDocs = ``
// }

//загрузка файла//

const actualBtn = document.getElementById("actual-btn");
const workBook = document.getElementById("children-data");
const militaryTicket = document.getElementById("personal-data");
const statementRSO = document.getElementById("statementRSO");
const fileChosen = document.querySelector(".file-chosen");

actualBtn.addEventListener("change", function () {
  fileChosen.textContent = this.files[0].name;
});

workBook.addEventListener("change", () => {
  fileChosen.textContent = this.files[0].name;
});

militaryTicket.addEventListener("change", () => {
  fileChosen.textContent = this.files[0].name;
});

statementRSO.addEventListener("change", () => {
  fileChosen.textContent = this.files[0].name;
});

actualBtn.addEventListener("change", () => {
  let files = actualBtn.files;
  if (files[0].size > 1024 * 1024) {
    fileError.innerText = "File size Exceeds 1 mb";
    return;
  }
  fileError.innerText = "";
});

function uploadFiles() {
  const url = "https://httpbin.org/post";
  const method = "post";

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // The file has been uploaded successfully
      console.log("File successfully uploaded!");
      form.reset();
    }
  };

  const data = new FormData(form);

  xhr.open(method, url);
  xhr.send(data);
}

//Скачивание файла//

const filesDownloads = [
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885_1280.jpg&tbnid=aVgXecnmQ_f1MM&vet=12ahUKEwjjgeSxk4-BAxWLlYsKHaekAj4QMygAegQIARBQ..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&docid=Ba_eiczVaD9-zM&w=1280&h=797&q=images&ved=2ahUKEwjjgeSxk4-BAxWLlYsKHaekAj4QMygAegQIARBQ",
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F674010%2Fpexels-photo-674010.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&tbnid=fY9reP86COngJM&vet=12ahUKEwjjgeSxk4-BAxWLlYsKHaekAj4QMygHegQIARBh..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&docid=B51x0PBR9KNzvM&w=500&h=667&q=images&ved=2ahUKEwjjgeSxk4-BAxWLlYsKHaekAj4QMygHegQIARBh",
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1495344517868-8ebaf0a2044a%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhcmNofGVufDB8fDB8fHww%26w%3D1000%26q%3D80&tbnid=0lg4rKAgU2kYvM&vet=12ahUKEwjjgeSxk4-BAxWLlYsKHaekAj4QMygEegQIARBa..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsearch&docid=CuQXfyoMW8xtWM&w=1000&h=1643&q=images&ved=2ahUKEwjjgeSxk4-BAxWLlYsKHaekAj4QMygEegQIARBa",
];

function downloadFile(url, fileName) {
  fetch(url, { method: "get", mode: "no-cors", referrerPolicy: "no-referrer" })
    .then((res) => res.blob())
    .then((res) => {
      const aElement = document.createElement("a");
      aElement.setAttribute("download", fileName);
      const href = URL.createObjectURL(res);
      aElement.href = href;
      // aElement.setAttribute('href', href);
      aElement.setAttribute("target", "_blank");
      aElement.click();
      URL.revokeObjectURL(href);
    });
}
function downloadAll() {
  for (var i = 0; i < filesDownloads.length; i++) {
    downloadFile(
      filesDownloads[i],
      filesDownloads[i].substring(
        filesDownloads[i].lastIndexOf("/") + 1,
        filesDownloads[i].length
      )
    );
  }
}

document.getElementById("statement").onclick = function () {
  downloadFile(
    "https://www.google-analytics.com/analytics.js",
    "gooleAnalytics.js"
  );
};

document.getElementById("consent-personal").onclick = function () {
  downloadFile(
    "https://www.google-analytics.com/analytics.js",
    "gooleAnalytics.js"
  );
};

document.getElementById("consent-child").onclick = function () {
  downloadFile(
    "https://www.google-analytics.com/analytics.js",
    "gooleAnalytics.js"
  );
};

const textarea = document.querySelector(".area");
const counter = document.querySelector(".current");
const maxlength = 200;

textarea.addEventListener("input", onInput);

function onInput(event) {
  event.target.value = event.target.value.substr(0, maxlength); // обрезаем текст до 360 символов
  const length = event.target.value.length;
  counter.textContent = length;
}

function changeBlockPassport(val) {
  if (val == 1) {
    document.getElementById("yes-passport").style.display = "grid";
    document.getElementById("no-passport").style.display = "none";
    document.getElementById("checkbox").style.display = "block";
    document.getElementById("addr-fact").style.display = "block";
    document.querySelector(".parents-wrapper").style.display ="block"

  } else if (val == 2) {
    document.getElementById("yes-passport").style.display = "none";
    document.getElementById("no-passport").style.display = "grid";
    document.getElementById("checkbox").style.display = "none";
    document.getElementById("addr-fact").style.display = "none";
    document.querySelector(".parents-wrapper").style.display ="none"
  }
}

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

function addrFact(val) {
  if (val == 1) {
    document.getElementById("addr-fact").style.display = "none";
  } else if (val == 2) {
    document.getElementById("addr-fact").style.display = "block";
  }
}