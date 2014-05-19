// file: js/views/AppView.js
// Module to load the initial state of the app

//call in any dependencies for this view
define(['jquery', 'underscore', 'backbone', 'bootstrap', 'views/CatalogView', 'text!templates/HeaderViewTpl.html', 'text!templates/CatalogViewTpl.html', 'text!templates/FooterViewTpl.html', 'text!templates/BookDetailsViewTpl.html'],
    function($, _, Backbone, Bootstrap, CatalogView, HeaderViewTemplate, CatalogViewTemplate, FooterViewTemplate, BookDetailsViewTemplate) {

        //AppView Class
        var AppView = Backbone.View.extend({

            //this serves as our DOM reference. we'll use this container to
            //add serveral views on app load
            el: '#app',

            events: {
                'click .bookContainer': 'showBooksDetails',
                'click #view_cart': 'viewCart'

            },

            //constructor     
            initialize: function() {
                this.headerView();
                this.catalogView();
                this.footerView();
            },

            //load our app header
            headerView: function() {
                this.$el.append(HeaderViewTemplate);
            },

            //load subview; this will hold our list of books
            catalogView: function() {
                this.$el.append(CatalogViewTemplate);
                new CatalogView();
            },

            //load our app footer
            footerView: function() {
                this.$el.append(FooterViewTemplate);
            },

            showBooksDetails: function() {
                alert('Not yet implemented');
            },


            viewCart: function() {
                alert('Not yet implemented');
            },
        });
        return AppView;
    });