(function ($) {

  "use strict";

  $.fn.filter = function (options) {

      var defaults = {
          nav: '[data-filter]' //
      }

      var $this = this,
          settings = $.extend(defaults, options),
          $target = $(settings.target),
          selected = [];

      return this.each( function() {

          var $element = $(this);

          $(settings.nav).each( function() {

              $(this).click( function(event) {

                  // add selected class
                  $(this).toggleClass('selected');

                  // manipulate selected terms array
                  if ($.inArray($(this).data('filter'), selected) < 0) {
                      selected.push($(this).data('filter'));
                  } else {
                      var index = $.inArray($(this).data('filter'), selected);
                      selected.splice(index, 1);
                  }

                  // show/hide elements
                  $element.find('[data-filter-tags]').each( function() {

                      var terms = $(this).data('filter-tags').split(','),
                          show = null;

                      for (var i=0;i<selected.length;i++) {
                          show = ($.inArray(selected[i], terms) >= 0 && show !== false);
                      }

                      if (show || selected.length == 0) {
                          $(this).fadeIn();
                      } else {
                          $(this).fadeOut();
                      }
                  });

                  event.preventDefault();

              });

          });

      });

  };

}(jQuery));

$('#projets').filter();
