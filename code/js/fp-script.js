window.onload = function() {
  console.log("Testing 1 2 3");

  $(document).ready(function() {
    event.preventDefault();
    var myArr = ['I create beautiful interfaces','I build great user experiences','I can make brands interesting','I love grids','I have quirky ideas','I bake tasty cupcakes']; // Categories

    for (i = 0; i < myArr.length; i++) { // For loop from position 0 to 5 of the array
      $('#make-stuff').append('<option>' + myArr[i] + '</option>'); //appends the categories to the dropdown
    }

    $('#make-stuff').change(function(event) {
      var selected = $("#make-stuff").val();

      //Multiple cases for each background
      switch (selected) {
        case 'I create beautiful interfaces':
          $('.hero-container').attr('class','ui');
          break;

        case 'I build great user experiences':
          $('.hero-container').attr('class','ux');
          break;

        case 'I can make brands interesting':
          $('.hero-container').attr('class','branding');
          break;

        case 'I love grids':
          $('.hero-container').attr('class','print');
          break;

        case 'I have quirky ideas':
          $('.hero-container').attr('class','illustration');
          break;

        case 'I bake tasty cupcakes':
          $('.hero-container').attr('class','cupcakes');
          break;

        default:
          $('.hero-container').attr('class','default');
          break;

      }

    })
  })
}
