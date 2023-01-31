<!-- Upload & Send Files Scripts / Dropzone -->

var currentFile = null;
Dropzone.autoDiscover = false;
//upload documents
var myDropzone = new Dropzone("div#documentFiles", {
    url: "<?php echo $data['baseurl'] ?>upload.php",
    paramName: "file", // The name that will be used to transfer the file
        uploadMultiple: false,
        maxFilesize: 100, // MB
        maxFiles: 1,
        addRemoveLinks: true,
        acceptedFiles: '.csv, .txt, .text, .doc, .DOC, .docx, .DOCX, .pdf, .XLS, .xls, .PPT, .ppt, .pptx, .PPTX , .xlsx, .XLSX',
  init: function() {
      this.on("addedfile", function(file) {
          Dropzone.forElement("div#imageFiles").removeAllFiles(true); 
            Dropzone.forElement("div#videoFiles").removeAllFiles(true); 
      if (currentFile) {
        this.removeFile(currentFile);
      }
      currentFile = file;
    }),
        this.on("success", function(file, response) {
             $('#cap').val('');
            response=JSON.parse(response);
      $('#c_nm').attr('disabled', false);
      $('#sendmedia').removeClass("disabled");
      $('#mes').val( response.file);
    //   $('#type').val(response.type);
      console.log (response);
        })
    }
          
});
//upload videos
var myDropzone = new Dropzone("div#videoFiles", {
    url: "<?php echo $data['baseurl'] ?>upload.php",
  paramName: "file", // The name that will be used to transfer the file
        uploadMultiple: false,
        maxFilesize: 16, // MB
        maxFiles: 1,
        addRemoveLinks: true,
        acceptedFiles: '.mp4, .3gp', 
 init: function() {
     this.on("addedfile", function(file) {
                    Dropzone.forElement("div#imageFiles").removeAllFiles(true); 
            Dropzone.forElement("div#documentFiles").removeAllFiles(true); 
      if (currentFile) {
        this.removeFile(currentFile);
      }
      currentFile = file;
    }),
        this.on("success", function(file, response) {
             $('#cap').val('');
            response=JSON.parse(response);
      $('#c_nm').attr('disabled', false);
      $('#sendmedia').removeClass("disabled");
      $('#mes').val( response.file);
    //   $('#type').val(response.type);
      console.log (response);
        })
    }
          
});

//image upload
var myDropzone = new Dropzone("div#imageFiles", {
    url: "<?php echo $data['baseurl'] ?>upload.php",
  paramName: "file", // The name that will be used to transfer the file
        uploadMultiple: false,
        maxFilesize: 5, // MB
        maxFiles: 1,
        addRemoveLinks: true,
        acceptedFiles: '.png, .jpeg, .jpg',
        init: function() {
          this.on("addedfile", function(file) {
                    Dropzone.forElement("div#videoFiles").removeAllFiles(true); 
            Dropzone.forElement("div#documentFiles").removeAllFiles(true); 
            
      if (currentFile) {
        this.removeFile(currentFile);
      }
      currentFile = file;
    }),
        this.on("success", function(file, response) {
            Dropzone.forElement("div#videoFiles").removeAllFiles(true); 
            $('#cap').val('');
            response=JSON.parse(response);
      $('#c_nm').attr('disabled', false);
      $('#sendmedia').removeClass("disabled");
      $('#mes').val( response.file);
    //   $('#type').val(response.type);
      console.log (response);
        })
    }
          
});


//     Dropzone.options.imageFiles={
//         paramName: "file", // The name that will be used to transfer the file
//         uploadMultiple: false,
//         maxFilesize: 2, // MB
//         maxFiles: 2,
//         addRemoveLinks: true,
//         acceptedFiles: 'image/*',
//         init: function() {
//             this.on("addedfile", function(file) {
//       if (currentFile) {
//         this.removeFile(currentFile);
//       }
//       currentFile = file;
//     }),
//         this.on("success", function(file, response) {
//             $('#cap').val('');
//             response=JSON.parse(response);
//       $('#c_nm').attr('disabled', false);
//       $('#sendmedia').removeClass("disabled");
//       $('#mes').val( response.file);
//     //   $('#type').val(response.type);
//       console.log (response);
//         })
//     }
        
            
        
// }
//  $(document).ready(function(){
    // Document Files
    //  Dropzone.autoDiscover = false;
//     Dropzone.options.documentFiles = {
//         paramName: "file", // The name that will be used to transfer the file
//         uploadMultiple: true,
//         maxFilesize: 2, // MB
//         maxFiles: 2,
//         addRemoveLinks: true,
//         acceptedFiles: 'image/*', //.csv, .txt, .text, .doc, .DOC, .docx, .DOCX, .pdf, .XLS, .xls, .PPT, .ppt, .pptx, .PPTX
        
//     };

//     // Audio Video Files
//     Dropzone.options.audioVideoFiles = {
//         paramName: "file", // The name that will be used to transfer the file
//         uploadMultiple: true,
//         maxFilesize: 5, // MB
//         maxFiles: 5,
//         addRemoveLinks: true,
//         acceptedFiles: 'audio/*,video/*',
//     };

//     // Contact Files
//     Dropzone.options.contactFiles = {
//         paramName: "file", // The name that will be used to transfer the file
//         uploadMultiple: true,
//         maxFilesize: 2, // MB
//         maxFiles: 2,
//         addRemoveLinks: true,
//         acceptedFiles: '.csv, .txt, .text',
//     };
//  });
