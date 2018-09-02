define(['jquery', 'underscore', 'backbone', 'bootstrap', 'i18nprecompile',
            'hbs', 'handlebars'
        ], function ($, _, Backbone, bootstrap, Handlebars) {
    require(["../app/views/homeView"], function (HomeView) {
        var homeView = new HomeView();
        $('.container').html(homeView.render().el);
    });
});