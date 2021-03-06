$(function () {
  autosize(document.getElementById('note'));

  var eventInited = false;
  _initInputLabels();
  _events();

  $('#textarea-length').text($('#note').val().length +'/200')

  function _events() {
    if(eventInited) return;
    eventInited = true;
    $(document).on('change blur', '.form-control', e => {
      checkInputLabel(e.currentTarget);
    });

    $(document).on('click', '.show-password', e => {
      $(e.currentTarget).toggleClass('show');
      let $input =$(e.currentTarget).closest('.form-label').find('input');

      if( $input.attr('type') === 'text' ){
        $input.attr('type', 'password');
      } else {
        $input.attr('type', 'text');
      }

      $(e.currentTarget).toggleClass('visible');
    });

    $('#note').on('keypress', function(e){
      $('#textarea-length').text($(e.target).val().length +'/200')
    });
  }

  function _initInputLabels() {
    $('.form-control').each((i, elem) => {
      checkInputLabel(elem);
    });
  }

  function checkInputLabel(elem) {
    if(!elem.value || elem.value === '') {
      $(elem).removeClass('form-control-not-empty');
    }
    else {
      $(elem).addClass('form-control-not-empty');
    }
  }
});