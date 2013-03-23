/*global Handlebars:false */

require.config({
    paths: {
        requireLib: '../components/requirejs/require',
        jquery: '../components/jquery/jquery',
        moment: '../components/moment/moment',
        handlebars: '../components/handlebars/handlebars',
        ajaxTransport: '../components/jQuery-ajaxTransport-XDomainRequest/jQuery.XDomainRequest'
    },
    shim: {
        'ajaxTransport' : ['jquery']
    }
});

require(['jquery', 'moment', 'handlebars', 'ajaxTransport'], function (jQuery, moment) {
    'use strict';
    // Fetch the json of the awards calender
    // Edit (inside firewall only): http://databank-spreadsheets.latimes.com/admin/table_stacker/table/73/
    jQuery.ajax({
        url: 'http://spreadsheets.latimes.com/api/awards-calendar.json',
        cache: false,
        dataType: 'json',
        error: function (jqXHR, textStatus, errorThrown) { console.log(errorThrown); },
        success: function (data) {
            // Iterate over JSON objects
            jQuery.each(data, function () {
                // Handlebars
                var source = jQuery('#awards-template').html();
                var template = Handlebars.compile(source);

                // If  a show's date is greater or equal to -1 (Today)
                // append to the DOM.
                // http://momentjs.com/docs/#/displaying/dif ference/
                if (moment(this.date).diff(moment(), 'days') >= 0) {
                    jQuery('ul').append(template(this));
                }
            }); // .each()
        } // function (data)
    }); // .ajax()

    // Handlebar Helpers
    Handlebars.registerHelper('format-date', function (date) {
        if (moment(date).diff(moment(), 'days') <= 0) {
            // Return conversation style date like 'Today'
            // but remove time generated by Moment.js, e.g., 12:00 AM
            return moment(date).calendar('MMMM').replace(/\sat\s\d+\D\d+\s\w*/, '');
        }
        else {
            // Otherwise, format the day in AP style
            return moment(date).format('MMM D, YYYY');
        }
    });
});