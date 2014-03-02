(function($) {
    
    $('#civility_field').click(function() {
      $('#single_line_text').trigger('click');
      var li = $('#the_form li:last');
      li.find('.main_label').html('Civility');
      li.find('.form_input').attr('placeholder', 'Your civility...');
    })
              
    $('#firstname_field').click(function() {
      $('#single_line_text').trigger('click');
      var li = $('#the_form li:last');
      li.find('.main_label').html('Firstname');
      li.find('.form_input').attr('placeholder', 'Your firstname...');
    })

    $('#lastname_field').click(function() {
      $('#single_line_text').trigger('click');
      var li = $('#the_form li:last');
      li.find('.main_label').html('Lastname');
      li.find('.form_input').attr('placeholder', 'Your lastname...');
    })

    $('#address_field').click(function() {
      $('#line_paragraph').trigger('click');
      var li = $('#the_form li:last');
      li.find('.main_label').html('Address');
      li.find('.form_input').attr('placeholder', 'Your address...');
    })

    $('#code_field').click(function() {
      $('#single_line_text').trigger('click');
      var li = $('#the_form li:last');
      li.find('.main_label').html('Postal code');
      li.find('.form_input').attr('placeholder', 'Your postal code...');
    })

    $('#city_field').click(function() {
      $('#single_line_text').trigger('click');
      var li = $('#the_form li:last');
      li.find('.main_label').html('City');
      li.find('.form_input').attr('placeholder', 'Your city...');
    })

     $('#country_field').click(function() {
      $('#single_line_text').trigger('click');
      var li = $('#the_form li:last');
      li.find('.main_label').html('Country');
      li.find('.form_input').attr('placeholder', 'Your country...');
    })

    $('#mail_field').click(function() {
      $('#single_line_text').trigger('click');
      var li = $('#the_form li:last');
      li.find('.main_label').html('Mail');
      li.find('.form_input').attr('placeholder', 'Your mail...');
    })

    $('#car_field').click(function() {
      $('#single_line_text').trigger('click');
      var li = $('#the_form li:last');
      li.find('.main_label').html('Car');
      li.find('.form_input').attr('placeholder', 'Your car...');
    })

    $('#dob_field').click(function() {
      $('#line_date').trigger('click');
      var li = $('#the_form li:last');
      li.find('.main_label').html('Date of birth');
      li.find('.form_input').attr('placeholder', 'Your date of birth...');
    })

    $('#optin_field').click(function() {
      $('#line_radio').trigger('click');
      
    })

    $('#conditions_field').click(function() {
      $('#line_checkbox').trigger('click');
      var li = $('#the_form li:last');
      li.find('.main_label').html('Generals conditions');
      li.find('#check_rem0').find('input').removeAttr('checked');
      li.find('#check_rem0').find('label').html('I accept the conditions');
      li.find('#check_rem1').remove();
    })

    $('#dopi_field').click(function() {
      $('#line_date').trigger('click');
      var li = $('#the_form li:last');
      li.find('.main_label').html('Date of purchase intent');
      li.find('.form_input').attr('placeholder', 'Your Date of purchase intent...');
    })

})(jQuery);