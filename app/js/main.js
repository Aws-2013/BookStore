//This is our bootstrap/entry point into the app.//

require.config({
    baseURL: '/backbone/js',

    // map alias to dependencies for this application
    paths: {
        jquery: 'libs/jquery/jquery-1.11.0.min',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone-min',
        text: 'libs/require/text',
        bootstrap: 'libs/bootstrap/bootstrap-min',
        storage: 'libs/backbone/backbone.localStorage'
    },

    //bootstrap doesn't currently support AMD(Asynchronous Module Definition)
    //so we need to 'shim' Bootstrap so that Backbone thinks that it does
    shim: {
        'libs/bootstrap/bootstrap-min': {
            exports: 'Bootstrap'
        }
    }
});

//load AppView - initalize the app
require(['backbone', 'views/AppView', 'routers/Router'],
    function(Backbone, AppView, BookRouter) {

        //initalize routing
        new BookRouter();

        //initalize the application view passing in our catalog
        new AppView();
    });