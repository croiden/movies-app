/**
 * <Describe file contents>
 * @lobocroiden
 *
 */
(function (W) {
    'use strict';
    define(["app/views/carouselCardView", "app/views/allCardView", "app/collections/moviesCollection", "hbs!app/templates/home"], function (CarouselCardView, AllCardView, MoviesCollection, Home) {
        var HomeView = Backbone.View.extend({
            template: Home,
            className: "",
            /**
             * @desc Data set passed to the view is pushed to the model and bound to the view.
             * @method initialize
             */
            initialize: function (options) {
                var that = this;
                _.extend(that, options || {});
            },
            events:{
                'click button.mov-recent':'showRecent',
                'click button.mov-title':'showByTitle',
                'click button.mov-rating':'showByRating'
            },
            /**
             * @desc This function performs the following tasks define the values of the template,
             * @desc attach the template to the view element and add the custom class
             * @method render
             */
            render: function () {
                var that = this;
                that.$el.html(that.template());
                that.moviesCollection = new MoviesCollection();
                that.moviesCollection.fetch().done(function () {
                    var carouselCardView = new CarouselCardView({
                        collection: that.moviesCollection
                    });
                    that.$('.top-movies').html(carouselCardView.render().el);
                    that.renderAllView();
                });
                return that;
            },
            renderAllView: function () {
                var that = this;

                var allCardView = new AllCardView({
                    collection: that.moviesCollection
                });
                that.$('.all-movies').html(allCardView.render().el);
            },
            showRecent: function() {
                var that = this;
                that.moviesCollection.sortByProperty("releaseDate");
                that.renderAllView();
            },
            showByTitle: function () {
                var that = this;
                that.moviesCollection.sortByProperty("title");
                that.renderAllView();
            },
            showByRating: function () {
                var that = this;
                that.moviesCollection.sortByProperty("rating");
                that.renderAllView();
            }
        });
        return HomeView;
    });
})(window);
