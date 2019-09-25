function configurations(config, models) {
    var config = config;
    var models = models;
}

function panel(){
const editorHTML = `
<div class="split">
<div id="drill">
    <div id='drill2'>
        <p id="paragraph">hello world</p>
    </div>
</div>
<div id="summernote"></div>
<div id="editor1">
</div>
     <div id="editor2">
</div>
<div id=EditorSaveDIV>
<button id="EditorSaveBTN">SAVE</buttn>
</div>
</div>
`
const script = `
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
              $('#content1').trigger('create');

            }
          }
  });
  string = document.getElementById("content1").innerHTML;
  $('#summernote').summernote('code',string)

  $('#EditorSaveDIV').on('click', '#EditorSaveBTN', function () {
      let package = JSON.stringify({content:$('#summernote').summernote('code'),slug:window.location.pathname});
      console.log(package)
    $.ajax({
        url: "/editor",
        data: {package:package},
        type: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    }).done(function (msg) {
        console.log(msg)
    })//end done
        .fail(function (xhr, status, errorThrown) {
            alert("Sorry, there was a problem!");
            console.log("Error: " + errorThrown);
            console.log("Status: " + status);
            console.dir(xhr);
        })


}) //end click save button


})//end document.ready
`

const wrapperClass = "wrapperEditor";

return {wrapperClass:wrapperClass,editorHTML:editorHTML,script:script};
}

async function update(package){
    return new Promise(async(resolve,reject)=> {
        let newPackage = JSON.parse(package);
        let slug = newPackage.slug; 
        let content ={content:newPackage.content};
        console.log(content)
        await models.editor.update(slug,content)
        resolve('hello world');
    })
}

async function readPage(route){
    return models.editor.queryPage(route);
}











const editor = {}
editor.configurations = configurations;
editor.panel = panel;
editor.update = update;
editor.readPage = readPage;

module.exports = editor;