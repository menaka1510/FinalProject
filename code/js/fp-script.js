window.onload = function() {
  console.log("Testing 1 2 3");

  $(document).ready(function() {
    event.preventDefault();
var myArr = ['I create beautiful interfaces','I build great user experiences','I can make brands interesting','I love grids','I have quirky ideas','I bake tasty cupcakes']; // Categories
for (i = 0; i < myArr.length; i++) { // For loop from position 0 to 6 of the array
$('#make-stuff').append('<option>' + myArr[i] + '</option>'); //appends the categories to the dropdown
}
    $('#make-stuff').change(function(event) { //On selection change
        var selected = $("#make-stuff").val();

      //Multiple cases for each background
      switch (selected) {
        case 'I create beautiful interfaces':
          $('.hero-container').addClass('ui').removeClass('ux','branding','print','illustration','cupcakes','default');
          break;

        case 'I build great user experiences':
          $('.hero-container').addClass('ux').removeClass('ui','branding','print','illustration','cupcakes','default');
          break;

        case 'I can make brands interesting':
          $('.hero-container').addClass('branding').removeClass('ux','ui','print','illustration','cupcakes','default');
          break;

        case 'I love grids':
          $('.hero-container').addClass('print').removeClass('ux','branding','ui','illustration','cupcakes','default');
          break;

        case 'I have quirky ideas':
          $('.hero-container').addClass('illustration').removeClass('ux','branding','print','ui','cupcakes','default');
          break;

        case 'I bake tasty cupcakes':
          $('.hero-container').addClass('cupcakes').removeClass('ux','branding','print','illustration','ui','default');
          break;

        default:
          $('.hero-container').addClass('default').removeClass('ui','ux','branding','print','illustration','cupcakes');
          break;
          }
      })
  })
}
