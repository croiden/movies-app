/**
 * <Describe file contents>
 * @lobocroiden
 *
 */
(function (W) {
    'use strict';
    define(["app/views/cardView"],
        function (CardView) {
            var AddRuleTupleView = Backbone.View.extend({
                className: "all-cards",
                /**
                 * @desc Data set passed to the view is pushed to the model and bound to the view.
                 * @method initialize
                 */
                initialize: function (options) {
                    var that = this;
                    _.extend(that, options || {});
                },
                events: {
                    "click a.user-profile-clear": "clearEntity"
                },
                /**
                 * @desc This function performs the following tasks define the values of the template,
                 * @desc attach the template to the view element and add the custom class
                 * @method render
                 */
                render: function () {
                    var that = this;
                    _.each(that.collection.models, function (model) {
                        var cardView = new CardView({
                            model:model
                        });
                        that.$el.append(cardView.render().el);
                    });
                    return that;
                }
            });
            return AddRuleTupleView;
        });
})(window);
