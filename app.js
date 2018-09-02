requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    },
    hbs: {
        templateExtension: 'html'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);