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
  string = '<p>This is gonna be huge!!!!!!!!</p>';
  $('#summernote').summernote('code',string)
})//end document.ready
// var elem = document.querySelector('#drill');
// var allElems = elem.querySelectorAll('p');
// allElems.parentNode.removeChild(allElems);


// var p = document.querySelectorAll('textarea');

// p.forEach(function(x){
//     x.setAttribute('v-model','message')
//     //x.parentNode.removeChild(x);
// })
//   }
//         }
// );
// var test = document.getElementById('summernote')
// var test2 = test.nextSibling;
//  test2 = test2.nextSibling;
// console.log(test2.nodeName)
// var p = document.querySelectorAll('textarea');

// p.forEach(function(x){
//    // x.setAttribute('v-model','message')
//     x.parentNode.removeChild(x);
// })




// var store = {
//     debug: true,
//     state: {
//       message: 'Hello!'
//     },
//     setMessageAction (newValue) {
//       if (this.debug) console.log('setMessageAction triggered with', newValue)
//       this.state.message = newValue
//     },
//     clearMessageAction () {
//       if (this.debug) console.log('clearMessageAction triggered')
//       this.state.message = ''
//     }
//   }


//var content1 = {message:'This project invoved using an Iframe to deploy tool that allows users to make sense of complicated tariff data'};
//var content1 = '<p>hello world</p>';

//   var app = new Vue({
//     el: '#editor1',
//     data: content1
//   })


  


// var html = $('#editor1').summernote('code');
//   var app = new Vue({
//     el: '#content1',
//     data: {
//         // declare message with an empty value
//         message: ''
//       },
//       template: content1
//   })