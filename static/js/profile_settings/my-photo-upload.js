let image = document.getElementById("image");
let imageUpload = document.getElementById("imageUpload");

file.addEventListener('change', function(){
  image.src = URL.createObjectURL(file.files[0]);
//   image.style.display = "block";
});