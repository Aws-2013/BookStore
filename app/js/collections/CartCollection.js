// file: js/collections/CartCollection.js

define(['jquery', 'underscore', 'backbone', 'models/bookModel'],
    function($, _, Backbone, Books) {
        var CartCollection = Backbone.Collection.extend({
            model: Books
        });
        return CartCollection;

    });