jQuery(function($) {

    function validatePFGForm(selector) {
        function handler() {
            var validated;
            $.ajax($('base').attr('href'), {
                async: false,
                cache: false,
                data: $.param([
                    {name: "form.button.validate", value: "Validate"},
                    {name: "ajax_load", value: "1"}].concat(
                        $(this).serializeArray())),
                success: function(data, textStatus, jqXHR) {
                    validated = $(data)},
                type: 'POST'});
            var new_form = $(selector, validated);
            if ($('.field.error', new_form).length) {
                new_form.submit(handler);
                $(this).replaceWith(new_form);
                return false;
                }};
        $(selector).submit(handler)};
 
   validatePFGForm('form.fgBaseEditForm');
});
