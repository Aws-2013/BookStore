// file: js/collections/CatalogCollection.js

//
define(['underscore', 'backbone', 'models/bookModel'],
    function(_, Backbone, BookModel) {
        var CatalogCollection = Backbone.Collection.extend({
            model: BookModel,
            //url: '/api/books',

            getData: function() {
                //some data to work with locally
                //in production a 'collection' would make an api call to the server
                var b = [{
                    id: 1,
                    title: 'Alegbra',
                    img: 'assets/images/book.png',
                    author: 'Francis David',
                    releaseYear: '2001',
                    pages: '489',
                    price: '55.99',
                    description: 'Sed at massa sit amet justo iaculis condimentum sed a sem. Praesent eu mattis metus, commodo malesuada nibh. Nulla eget libero mauris.'
                }, {
                    id: 2,
                    title: 'Alegbra II',
                    img: 'assets/images/book.png',
                    author: 'Sam Jackson Jr.',
                    releaseYear: '2001',
                    pages: '489',
                    price: '49.99',
                    description: 'Sed at massa sit amet justo iaculis condimentum sed a sem. Praesent eu mattis metus, commodo malesuada nibh. Nulla eget libero mauris.'
                }, {
                    id: 3,
                    title: 'Alegbra III',
                    img: 'assets/images/book.png',
                    author: 'Sam Jackson Jr.',
                    releaseYear: '2001',
                    pages: '489',
                    price: '49.99',
                    description: 'Sed at massa sit amet justo iaculis condimentum sed a sem. Praesent eu mattis metus, commodo malesuada nibh. Nulla eget libero mauris.'
                }, {
                    id: 4,
                    title: 'Business Management',
                    img: 'assets/images/book.png',
                    author: 'Sam Jackson Jr.',
                    releaseYear: '2001',
                    pages: '489',
                    price: '49.99',
                    description: 'Sed at massa sit amet justo iaculis condimentum sed a sem. Praesent eu mattis metus, commodo malesuada nibh. Nulla eget libero mauris.'
                }, {
                    id: 5,
                    title: 'Alegbra II',
                    img: 'assets/images//book.png',
                    author: 'Sam Jackson Jr.',
                    releaseYear: '2001',
                    pages: '489',
                    price: '49.99',
                    description: 'Sed at massa sit amet justo iaculis condimentum sed a sem. Praesent eu mattis metus, commodo malesuada nibh. Nulla eget libero mauris.'
                }, {
                    id: 6,
                    title: 'Business Management II',
                    img: 'assets/images/book.png',
                    author: 'Sam Jackson Jr.',
                    releaseYear: '2001',
                    pages: '489',
                    price: '49.99',
                    description: 'Sed at massa sit amet justo iaculis condimentum sed a sem. Praesent eu mattis metus, commodo malesuada nibh. Nulla eget libero mauris.'
                }, {
                    id: 7,
                    title: 'Business Management II',
                    img: 'assets/images/book.png',
                    author: 'Sam Jackson Jr.',
                    releaseYear: '2001',
                    pages: '489',
                    price: '49.99',
                    description: 'Sed at massa sit amet justo iaculis condimentum sed a sem. Praesent eu mattis metus, commodo malesuada nibh. Nulla eget libero mauris.'
                }, {
                    id: 8,
                    title: 'Business Management II',
                    img: 'assets/images/book.png',
                    author: 'Sam Jackson Jr.',
                    releaseYear: '2001',
                    pages: '489',
                    price: '49.99',
                    description: 'Sed at massa sit amet justo iaculis condimentum sed a sem. Praesent eu mattis metus, commodo malesuada nibh. Nulla eget libero mauris.'
                }, {
                    id: 9,
                    title: 'Business Management II',
                    img: 'assets/images/book.png',
                    author: 'Sam Jackson Jr.',
                    releaseYear: '2001',
                    pages: '489',
                    price: '49.99',
                    description: 'Sed at massa sit amet justo iaculis condimentum sed a sem. Praesent eu mattis metus, commodo malesuada nibh. Nulla eget libero mauris.'
                }];
                return b;
            }
        });
        return CatalogCollection;
    });