$(document).ready(function(){
  window.addEventListener('message', function(event) {
      if (event.data.action == 'open') {
        $('#wrapper').show();
      } else if (event.data.action == 'close') {
        $('#wrapper').hide();
      }
  });

  $('button').click(function() {
    if ($('#lastname').val() != '' && $('#firstname').val() != '' && $('#dateofbirth').val() != '' && $('#sex').val() != '' && $('#height').val() != '') {
      if ($('#height').val().length > 1 && $('#sex').val().length == 1 && $('#dateofbirth').val().length == 10) {
        var dob = $('#dateofbirth').val();
        
        if (dob.includes('/')) {
        	dob = dob.replace(/\//g, '-');
        }
        $.post('http://jsfour-register/register', JSON.stringify({
            firstname: $("#firstname").val(),
            lastname: $("#lastname").val(),
            dateofbirth: $("#dateofbirth").val(),
            sex: $("#sex").val(),
            height: $("#height").val()
        }));
      }
    }
  });

  // Disable space on the input
  $("form").on({
	  keydown: function(e) {
	    if (e.which === 32)
	      return false;
	  },
	});
  // Disable form submit
  $("form").submit(function() {
		return false;
	});
});
