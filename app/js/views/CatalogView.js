// file: js/views/CatalogView.js

//call in any dependencies for this view
define(['jquery', 'underscore', 'backbone', 'collections/CatalogCollection', 'views/BookView', 'text!templates/CatalogViewTpl.html', 'text!templates/BookViewTpl.html'],
    function($, _, Backbone, CatalogCollection, BookView, CatalogViewTemplate, BookViewTemplate) {
        var CatalogView = Backbone.View.extend({

            //list of books container
            el: '#bookCatalog',

            //compile HTML template
            bookTemplate: _.template(BookViewTemplate),

            events: {
                'click #bookCatalog': 'showBooksDetails'
            },

            //constructor
            initialize: function() {
                //instantiate our catalog of books
                this.collection = new CatalogCollection();

                //then render
                this.render();
            },

            //render books
            render: function() {
                this.bookView();
            },

            //create our books one at a time
            bookView: function() {
                //get our books
                var books = this.collection.getData();

                //cache this since 'this' change context
                //once in the closure
                var dis = this;

                //iterate our books data and add
                //them to our collection
                _.each(books, function(book) {
                    dis.createBooks({
                        id: book.id,
                        title: book.title,
                        img: book.img,
                        author: book.author,
                        releaseYear: book.releaseYear,
                        pages: book.pages,
                        price: book.price,
                        addToCart: book.addToCart,
                        description: book.description,
                        inCart: book.inCart
                    });
                });

                //render books to page
                this.renderAllBooks();
            },

            renderBook: function(book) {
                var bookView = new BookView({
                    model: book
                });
                this.$('#bookCatalog').append(bookView.render().el);
            },

            renderAllBooks: function() {
                this.collection.each(this.renderBook);
            },

            createBooks: function(book) {
                this.collection.add(book);
            }

            //        showBooksDetails: function(){
            //            alert('show books details')
            //        }
        });
        return CatalogView;
    });