$(document).ready(function() {
 
    $('#summernote').summernote({
        tabsize:2,
        height:100,
        toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height','hr','fontname','fontcolor','codeview','fullscreen']]
          ],
        callbacks: {
            onChange: function(contents, $editable) {
              document.getElementById('content1').innerHTML = contents;
            }
          }
  });
  string = '<p>This is gonna be huge!!!!!!!!</p><p>ffff</p>';
  $('#summernote').summernote('code',string)
})//end document.ready
