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

function add_education_field(){
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
};



function add_document_field(){
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
   <i class="fa-regular fa-file"></i>
   <p>
     Файл в формате pdf, png, jpeg размером не более 7 мб
   </p>
 </div>
 <div class="statement-item">
   <i class="fa-solid fa-download"></i>
     <input type="file" name="file" id="actual-btn" hidden />
     <label for="actual-btn" id="file-choose">Выбрать файл</label>
     <span id="file-chosen">Файл не выбран</span>
 </div>
</div>`


  let documents = document.querySelector(".addDoc");
  documents.insertAdjacentHTML("beforeend", documentsHTML);
}