jQuery(function($) {

    function validatePFGForm (selector) {
        $(selector).submit(function (event) {
            var form = $(event.currentTarget);
            var validated;
            $.ajax($('base').attr('href'), {
                async: false,
                cache: false,
                data: $.param([
                    {name: "form.button.validate", value: "Validate"},
                    {name: "ajax_load", value: "1"}].concat(
                        form.serializeArray())),
                success: function(data, textStatus, jqXHR) {
                    validated = $(data)},
                type: 'POST'});
            if ($(selector + ' .field.error', validated)) {
                event.preventDefault();
                form.replaceWith($(selector, validated))};
        })};
    validatePFGForm('form.fgBaseEditForm');

});
