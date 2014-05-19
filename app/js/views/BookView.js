// file: js/views/BookView.js

//call in any dependencies for this view
define(['jquery', 'underscore', 'backbone', 'collections/CartCollection', 'text!templates/BookViewTpl.html'],
    function($, _, Backbone, CartCollection, BookViewTemplate) {
        var BookView = Backbone.View.extend({
            tagName: 'div',
            className: 'bookContainer col-lg-3 col-md-3 col-sm-12',
            template: _.template(BookViewTemplate),
            attributes: {
                'data-toggle': 'modal',
                'data-target': '#myModal',
                'data-id': ''
            },

            events: {
                //add book to cart
                'click .addToCart': 'addToCartCollection'
            },

            //constructor
            initialize: function() {
                //instantiate our cart
                this.cart = new CartCollection();
                this.listenTo(this.cart, 'add', this.addToCart);
                this.attributes['data-id'] = this.model.get('id');
                this.render();
            },

            render: function() {
                this.$el.html(this.template(this.model.attributes));
                return this;
            },

            addToCartCollection: function(e) {
                e.preventDefault();
                e.stopPropagation();

                if (!this.model.get('inCart')) {
                    this.model.set({
                        inCart: true
                    });
                    this.model.set({
                        addToCart: 'Remove from Cart'
                    });
                    this.render();
                    alert('Added to Cart\n\nOther features not yet implemented');
                } else if (this.model.get('inCart')) {
                    this.model.set({
                        inCart: false
                    });
                    this.model.set({
                        addToCart: 'Add to Cart'
                    });
                    this.render();
                    alert('Removed from Cart');
                }
            },

            addToCart: function(e) {

            },

            showBooksDetails: function() {

            }
        });
        return BookView;
    });