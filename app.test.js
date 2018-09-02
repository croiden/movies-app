requirejs.config({
    baseUrl: '../lib',
    paths: {
        app: '../app',
        'homeView': '../test/views/homeView'
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
define(["homeView"], function () {
    mocha.checkLeaks();
    mocha.run();
});
/* define(['jquery', 'underscore', 'backbone', 'bootstrap', 'i18nprecompile',
    'hbs', 'handlebars'
], function ($, _, Backbone, bootstrap, Handlebars) {
    require(["homeView"], function () {
        mocha.checkLeaks();
        mocha.run();
    });
}); */