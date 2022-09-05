$( document ).ready( function() {
    $('#services span').click(function(){
        value = $(this).data('filter');
  
      $('#services span').removeClass('active'),
        $(this).addClass('active');
  
        $('#projets div.projet').each(function(){
            el = $(this);
  
            el.show();
  
            if(!el.hasClass(value) && value != "all" )
                el.hide();
  
        });
    });
  });
  