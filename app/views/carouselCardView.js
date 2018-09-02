/**
 * <Describe file contents>
 * @lobocroiden
 *
 */
(function (W) {
    'use strict';
    define(["app/views/cardView", "hbs!app/templates/carouselCard"],
        function (CardView, CarouselCard) {
            var AddRuleTupleView = Backbone.View.extend({
                className: "",
                template: CarouselCard,
                /**
                 * @desc Data set passed to the view is pushed to the model and bound to the view.
                 * @method initialize
                 */
                initialize: function (options) {
                    var that = this;
                    _.extend(that, options || {});
                },
                /**
                 * @desc This function performs the following tasks define the values of the template,
                 * @desc attach the template to the view element and add the custom class
                 * @method render
                 */
                render: function () {
                    var that = this;
                    that.$el.html(that.template());
                    var noOfCards = that.getNoOfCardstoShow();
                    var carouselItem = $('<div class="carousel-item active"><div class="mov-flex-items"></div></div>');
                     $.each(that.collection.models, function (index, model) {
                         if (index < 10){
                            var cardView = new CardView({
                                model: model
                            });
                            carouselItem.find('.mov-flex-items').append(cardView.render().el);
                            if ((index + 1) % noOfCards === 0) {
                                that.$('.carousel-inner').append(carouselItem);
                                carouselItem = $('<div class="carousel-item"><div class="mov-flex-items"></div></div>');
                            }
                        }else{
                            return false;
                        }
                     });
                     that.$('.carousel-inner').append(carouselItem);
                    return that;
                },
                getNoOfCardstoShow: function(){
                    if (screen.width < 800) {
                        return 1;
                    }else if(screen.width < 1200){
                        return 2;
                    }else{
                        return 3;
                    }
                }
            });
            return AddRuleTupleView;
        });
})(window);
