
$(document).ready(function() {
    $('input[type="file"]').on('change', function() {
            const size =
               (this.files[0].size / 1024 / 1024).toFixed(2);
            if (size > 3) {
                alert(size +" размер файла превышен, максимальный размер 3mb");
                $(this).files[0].val("");
                  return false;
            } else {
             alert('Успешно !');
                  return false;
            }
        });
})



// $(document).ready(function(){
//     $('#submit-btn').click(function(){
//         alert('hello');
//         $('input[type="file"]').each(function(){
//             var thisFile = $(this);
//             var fileSize = thisFile[0].files[0].size;
//              var fileType = thisFile[0].files[0].type;
//             //alert(fileSize);
//
//             if(fileSize>1048576){ //do something if file size more than 1 mb (1048576)
//                 // alert(fileSize +" bites\n ukuran gambar terlalu besar");
//                 $(".file-error").innerText = "File size Exceeds 1 mb"
//                 return false;
//             }else{
//                 switch(fileType){
//                     case 'image/png':
//                     case 'image/gif':
//                     case 'image/jpeg':
//                     case 'image/pjpeg':
//                         alert("Acceptable image file!");
//                         break;
//                     default:
//                         alert('Unsupported File!');
//                         return false;
//                 }
//             }
//         });
//         $('form#accordion-form').submit();
//     });
// });


