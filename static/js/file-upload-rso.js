
const statementRSO = document.getElementById("RSO-statement");
const fileChosenRSO = document.getElementById("file-chosen-statement");

const personalData = document.getElementById("personal-data");
const fileChosenPersonal = document.getElementById("file-chosen-personal");


const passUpload = document.getElementById("pass-upload");
const fileChosenPass = document.getElementById("file-chosen-pass");

const passUploadParent = document.getElementById("parrent-pass-upload");
const fileChosenPassParent = document.getElementById("file-chosen-parent-pass");

const snilsUpload = document.getElementById("SNILS-upload");
const fileChosenSnils = document.getElementById("file-chosen-snils");

const militaryUpload = document.getElementById("militaryTicket-upload");
const fileChosenMilitary = document.getElementById("file-chosen-military");

const innUpload = document.getElementById("INN-upload");
const fileChosenINN = document.getElementById("file-chosen-INN");

const foreignPassUpload = document.getElementById("foreign-pass-upload");
const fileChosenforeignPass = document.getElementById("file-chosen-foreign-pass");

const workbookUpload = document.getElementById("workbook-upload");
const fileChosenWorkbook = document.getElementById("file-chosen-workbook");

const childrenData = document.getElementById("children-data");
const fileChosenPersonalChildren = document.getElementById("file-chosen-children");



//upload
statementRSO.addEventListener("change", function (){
  fileChosenRSO.textContent = this.files[0].name;
});

personalData.addEventListener("change", function (){
fileChosenPersonal.textContent = this.files[0].name;
});

childrenData.addEventListener("change", function () {
  fileChosenPersonalChildren.textContent = this.files[0].name;
});

passUpload.addEventListener("change", function () {
  fileChosenPass.textContent = this.files[0].name;
});

passUploadParent.addEventListener("change", function () {
  fileChosenPassParent.textContent = this.files[0].name;
});

snilsUpload.addEventListener("change", function () {
  fileChosenSnils.textContent = this.files[0].name;
});

militaryUpload.addEventListener("change", function () {
  fileChosenMilitary.textContent = this.files[0].name;
});

innUpload.addEventListener("change", function () {
  fileChosenINN.textContent = this.files[0].name;
});

foreignPassUpload.addEventListener("change", function () {
  fileChosenforeignPass.textContent = this.files[0].name;
});

workbookUpload.addEventListener("change", function () {
  fileChosenWorkbook.textContent = this.files[0].name;
});


//yes-rso

const passUploadYes = document.getElementById("pass-upload-yes");
const fileChosenPassYes = document.getElementById("file-chosen-pass-yes");

const passUploadParentYes = document.getElementById("parent-pass-upload-yes");
const fileChosenPassParentYes = document.getElementById("file-chosen-parent-pass-yes");

const snilsUploadYes = document.getElementById("SNILS-yesRSO");
const fileChosenSnilsYes = document.getElementById("file-chosen-SNILS-yesRSO");

const militaryUploadYes = document.getElementById("militaryTicket-upload-yesRSO");
const fileChosenMilitaryYes = document.getElementById("file-chosen-military-yesRSO");

const innUploadYes = document.getElementById("INN-upload-yesRSO");
const fileChosenINNYes = document.getElementById("file-chosen-INN-yesRSO");

const foreignPassUploadYes = document.getElementById("foreignPass-upload-yesRSO");
const fileChosenforeignPassYes = document.getElementById("file-chosen-foreignPass-yesRSO");

const workbookUploadYes = document.getElementById("workbook-upload-yesRSO");
const fileChosenWorkbookYes = document.getElementById("file-chosen-workbook-yesRSO");


passUploadYes.addEventListener("change", function () {
  fileChosenPassYes.textContent = this.files[0].name;
});

passUploadParentYes.addEventListener("change", function () {
  fileChosenPassParentYes.textContent = this.files[0].name;
});

snilsUploadYes.addEventListener("change", function () {
  fileChosenSnilsYes.textContent = this.files[0].name;
});

militaryUploadYes.addEventListener("change", function () {
  fileChosenMilitaryYes.textContent = this.files[0].name;
});

innUploadYes.addEventListener("change", function () {
  fileChosenINNYes.textContent = this.files[0].name;
});

foreignPassUploadYes.addEventListener("change", function () {
  fileChosenforeignPassYes.textContent = this.files[0].name;
});

workbookUploadYes.addEventListener("change", function () {
  fileChosenWorkbookYes.textContent = this.files[0].name;
});

// no-rso-foreign

const statementNoRsoForeign = document.getElementById("RSO-statement-no-RSO-foreign");
const fileChosenNoRsoForeign = document.getElementById("file-chosen-statement-foreign");

const personalDataNoRsoForeign = document.getElementById("personal-data-no-RSO-foreign");
const fileChosenPersonalNoRsoForeign = document.getElementById("file-chosen-personal-foreign");

const passUploadNoRsoForeign = document.getElementById("pass-upload-no-RSO-foreign");
const fileChosenPassNoRsoForeign = document.getElementById("file-chosen-pass-foreign");

const snilsUploadNoRsoForeign = document.getElementById("SNILS-upload-no-RSO-foreign");
const fileChosenSnilsNoRsoForeign = document.getElementById("file-chosen-snils-foreign");

const innUploadNoRsoForeign = document.getElementById("INN-upload-no-RSO-foreign");
const fileChosenINNNoRsoForeign = document.getElementById("file-chosen-INN-foreign");


const workbookUploadNoRsoForeign = document.getElementById("workbook-no-RSO-foreign");
const fileChosenWorkbookNoRsoForeign = document.getElementById("file-chosen-workbook-noRSO-foreign");

statementNoRsoForeign.addEventListener("change", function (){
  fileChosenNoRsoForeign.textContent = this.files[0].name;
});

personalDataNoRsoForeign.addEventListener("change", function (){
fileChosenPersonalNoRsoForeign.textContent = this.files[0].name;
});

passUploadNoRsoForeign.addEventListener("change", function (){
fileChosenPassNoRsoForeign.textContent = this.files[0].name;
});

snilsUploadNoRsoForeign.addEventListener("change", function (){
fileChosenSnilsNoRsoForeign.textContent = this.files[0].name;
});

innUploadNoRsoForeign.addEventListener("change", function (){
fileChosenINNNoRsoForeign.textContent = this.files[0].name;
});

workbookUploadNoRsoForeign.addEventListener("change", function (){
fileChosenWorkbookNoRsoForeign.textContent = this.files[0].name;
});

//yes-rso-foreign

const passUploadYesRsoForeign = document.getElementById("pass-upload-yes-RSO-foreign");
const fileChosenPassYesRsoForeign = document.getElementById("file-chosen-pass-foreign-yesRSO");

const passUploadParentYesRsoForeign = document.getElementById("pass-parent-upload-yes-RSO-foreign");
const fileChosenPassParentYesRsoForeign = document.getElementById("file-chosen-pass-parent-foreign-yesRSO");

const homeUploadYesRsoForeign = document.getElementById("home-yesRSO-foreign");
const fileChosenHomeYesRsoForeign = document.getElementById("file-chosen-home-yesRSO-foreign");

const snilsUploadYesRsoForeign = document.getElementById("SNILS-yesRSO-foreign");
const fileChosenSnilsYesRsoForeign = document.getElementById("file-chosen-SNILS-yesRSO-foreign");

const innUploadYesRsoForeign = document.getElementById("INN-yesRSO-foreign");
const fileChosenINNYesRsoForeign = document.getElementById("file-chosen-INN-yesRSO-foreign");

const workbookUploadYesRsoForeign = document.getElementById("workbook-yesRSO-foreign");
const fileChosenWorkbookYesRsoForeign = document.getElementById("file-chosen-workbook-yesRSO-foreign");

passUploadYesRsoForeign.addEventListener("change", function (){
fileChosenPassYesRsoForeign.textContent = this.files[0].name;
});

passUploadParentYesRsoForeign.addEventListener("change", function (){
fileChosenPassParentYesRsoForeign.textContent = this.files[0].name;
});

snilsUploadYesRsoForeign.addEventListener("change", function (){
fileChosenSnilsYesRsoForeign.textContent = this.files[0].name;
});

innUploadYesRsoForeign.addEventListener("change", function (){
fileChosenINNYesRsoForeign.textContent = this.files[0].name;
});

homeUploadYesRsoForeign.addEventListener("change", function (){
fileChosenHomeYesRsoForeign.textContent = this.files[0].name;
});

workbookUploadYesRsoForeign.addEventListener("change", function (){
fileChosenWorkbookYesRsoForeign.textContent = this.files[0].name;
});
