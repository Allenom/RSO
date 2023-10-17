
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fieldLogoUpload = document.getElementById('upload-logo');
const logoPreviewContainer = document.querySelector('.logo-add__img');
const editorLogoBox = document.querySelector('.logo-add__input');
const fieldLogoEdit = document.querySelector('.logo-add__label-edit');
const buttonClearLogo = document.querySelector('.logo-add__button-clear');

const fieldBannerUpload = document.getElementById('upload-banner');
const bannerPreviewContainer = document.querySelector('.banner-add__img');
const editorBannerBox = document.querySelector('.banner-add__input');
const fieldBannerEdit = document.querySelector('.banner-add__label-edit');
const buttonClearBanner = document.querySelector('.banner-add__button-clear');
const avatarPreview = document.querySelector('.banner-add__img img');

/*Добавление логотипа отряда*/
const createLogoImage = (fileAddress) => {
    const image = document.createElement('img');
    image.alt = 'Логотип отряда';
    image.style = 'width: 100%; height: 100%; object-fit: cover';
    image.src = fileAddress;

    logoPreviewContainer.append(image);
  };
  
fieldLogoUpload.addEventListener('change', () => {
    const [file] = fieldLogoUpload.files;
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
        logoPreviewContainer.innerHTML = '';
        createLogoImage(URL.createObjectURL(file));
        editorLogoBox.classList.add('file-selected');
    }
});

/*Редактирование логотипа отряда*/
const resetImageLogo = () => {
    editorLogoBox.classList.remove('file-selected');
    logoPreviewContainer.innerHTML = '';
};

buttonClearLogo.onclick = () => {
    resetImageLogo();
};

/*Добавление баннера отряда*/
const createBannerImage = (fileAddress) => {
    const image = document.createElement('img');
    image.alt = 'Баннер отряда';
    image.style = 'width: 100%; height: 100%; object-fit: cover';
    image.src = fileAddress;
  
    bannerPreviewContainer.append(image);
  };
  
fieldBannerUpload.addEventListener('change', () => {
    const [file] = fieldBannerUpload.files;
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
        bannerPreviewContainer.innerHTML = '';
        createBannerImage(URL.createObjectURL(file));
        editorBannerBox.classList.add('file-selected');
    }
});

/*Редактирование баннера отряда*/
const resetImageBanner = () => {
    const avatarPreviewAdd = document.querySelector('.banner-add__img img');
    avatarPreviewAdd.alt = 'Баннер отряда(пусто)';
    avatarPreviewAdd.src = '/static/images/profile-settings/banner-stub.png';
    editorBannerBox.classList.remove('file-selected');
};

buttonClearBanner.onclick = function () {
    resetImageBanner();
};
