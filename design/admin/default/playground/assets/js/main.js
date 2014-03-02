jQuery(document).ready(function()
{
    'use strict';
    
    if(jQuery('#tabs').size() > 0) {
        $('#tabs').tab();
    }
    
    if(jQuery('.datepicker').size() > 0) {
        $('.datepicker').datepicker({
            dateFormat : 'dd/mm/yy'
        });
    }
    
    if(jQuery('.date').size() > 0) {
        $('.date').datepicker({
            dateFormat : 'dd/mm/yy'
        });
    }
    
    // INIT GRISTER IF EXIST
    if(jQuery('.gridster').size() > 0) {
        jQuery(".gridster ul").gridster({
            widget_margins: [10, 10],
            widget_base_dimensions: [250, 250]
        });
    }
    
    if(jQuery('#answer_entry').size() > 0) {
        var template = $('#answer_entry > fieldset > span');
        var datatemplate = $('#answer_entry > fieldset > span').data('template');
        template.data('template', '<fieldset id="answers__index__">'+datatemplate+'</fieldset>');
        
        $('#answer_entry button').live('click',function(){
            $(this).parent().parent().empty();
            return false;
        });
    }
    
    if(jQuery('#prize_entry button').size() > 0) {
        var template = $('#prize_entry > fieldset > span');
        var datatemplate = $('#prize_entry > fieldset > span').data('template');
        template.data('template', '<fieldset id="prizes__index__">'+datatemplate+'</fieldset>');
        
        $('#prize_entry button').on('click',function()
        {
            $(this).parent().empty();
            return false;
        });
    }

});

$(document).ready(function(){
    
    function loadGallery(percent) {
        $('#gallery-progress .progress-bar').css('width', percent + '%');
        if(percent<100) {
            setTimeout(function() {
                loadGallery(percent+1);
            }, 1);
        }
    }
    loadGallery(0);

/*    var dataSource = new TreeDataSource({
            data: [
                { name: 'Test Folder 1', type: 'folder', additionalParameters: { id: 'F1' } },
                { name: 'Test Folder 2', type: 'folder', additionalParameters: { id: 'F2' } },
                { name: 'Test Item 1', type: 'item', additionalParameters: { id: 'I1' } },
                { name: 'Test Item 2', type: 'item', additionalParameters: { id: 'I2' } }
            ],
            delay: 400
        });


    $('#MyTree').tree({ dataSource: dataSource })*/


    var $container = $('#row');
    
    $container.isotope({
      itemSelector : '.element',
      getSortData : {
        size : function( $elem ) {
          return parseFloat( $elem.find('.size').text());
        },
        name : function ( $elem ) {
          return $elem.find('.name').text();
        }
      }
    });
    
    
    var $optionLinks = $('#media-sorters .btn, .folder-btn');

    var $categoryStorage = '*';
    var $typeStorage = '';

    $optionLinks.click(function(){
        var $this = $(this);
        var $value = '';

        // Gestion des folders
        if($this.hasClass('folder-btn')) {
            $this.parent().find('.folder-' + $this.data('id')).slideToggle('slow');
            if($this.find('.glyphicon').hasClass('glyphicon-folder-close') || $this.find('.glyphicon').hasClass('glyphicon-folder-open')) {
                $this.find('.glyphicon').toggleClass('glyphicon-folder-close').toggleClass('glyphicon-folder-open');
            }
            $categoryStorage = $this.attr('data-option-value');
            $(".folder-btn-active").each(function(){ 
                $(this).removeClass('folder-btn-active');
            });
            $this.addClass('folder-btn-active');

            // dependancy to filter type
            $value = $this.attr('data-option-value') + $typeStorage;
        }

        // Gestion des boutons en haut (filtres photos,vidÃ©os | sort name, size | ASC, DESC)
        if($this.hasClass('btn')) {
            var tmp = $this.data('option-key')
            $("#media-sorters .btn").each(function(){ 
                if($(this).data('option-key')==tmp) {
                    $(this).removeClass('active');
                }
            });
            $this.addClass('active');

            // dependancy to category
            if($this.attr('data-option-key') == 'filter') {
                $typeStorage = $this.attr('data-option-value');
                $value = $categoryStorage + $this.attr('data-option-value');
            }
        }

        
        if($value=='') {
            $value = $this.attr('data-option-value');
        }

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $this.attr('data-option-key'),
            value = $value;
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        $container.isotope( options );
    
        //Affiche de "no-media"
        var cpt = 0;
        $(".isotope .isotope-item").each(function(){ 
            if(!$(this).hasClass('isotope-hidden')) {
                cpt++;
            }
        });
        if(cpt==0) {
            $('#no-media-found').slideDown('slow');
        }
        else {
            $('#no-media-found').slideUp('slow');
        }

        return false;
    });

    $('.show-carrousel').click(function() {
        // place les bons media dans le carrousel
        $('.carousel-inner').empty('');
        var cpt = 0;
        $(".isotope .isotope-item").each(function(){ 
            if(!$(this).hasClass('isotope-hidden')) {
                $('.' + $(this).attr('data-id')).clone().appendTo('.carousel-inner')
                cpt++;
            }
        });

        // Gestion Caroussel OU image
        $('#carousel-example-generic').find('.carousel-control').show();
        if(cpt==1) {
            $('#carousel-example-generic').find('.carousel-control').hide();
        }

        // affiche le bon media en active
        $(".carousel-inner .item").each(function(){ 
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        });

        $('.carousel-inner .' + $(this).attr('data-id')).addClass('active');
    });


    // couper la vidÃ©o
    $('#modal_show').on('hide.bs.modal', function () {
        $(this).find('.carousel-inner').empty();
    })


    setTimeout(function() {
        $('#gallery-progress').slideUp('fast');
        $('#row').fadeIn('slow');
        $('#show-all').trigger('click');
    }, 1000);

    $('#urlform').focusout(function () {
        var value = $(this).val();
        $('#preview-img').attr('src', value);
    });

    $(".toggle-inputs-video-pre").click(function() {
        $(".input-video-pre").toggle();
        $(this).toggleClass("active");
    });

});




function add_answer() {
    var currentCount = $('#answer_entry textarea').length;
    var template = $('#answer_entry > fieldset > span').data('template');
    template = template.replace(/__index__/g, currentCount);
    $('#answer_entry').append(template);
    $('#answer_entry').append('<hr/>');

    return false;
}

function add_prize() {
    var currentCount = $('#prize_entry textarea').length;
    var template = $('#prize_entry > span').data('template');
    template = template.replace(/__index__/g, currentCount);
    $('#prize_entry').append(template);

    return false;
}


$(document).ready(function() {
    $('.multiselect').multiselect({
        enableCaseInsensitiveFiltering: true,
        includeSelectAllOption: true,
        label: function(element) {
        return $(element).html()+' ('+$(element).val()+')';
        }
    });
});