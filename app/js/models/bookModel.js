// file: js/models/book.js

//
define(['underscore', 'backbone'],
function(_, Backbone) {
    var BookModel = Backbone.Model.extend({
        defaults: {
            title: '',
            img: 'images/book.png',
            author: '',
            releaseYear: '',
            pages: '0',
            price: '0',
            addToCart : 'Add to Cart',
            description: '',
            inCart: false
        },
        idAttribute: '_id'
    });
    return BookModel;
});
