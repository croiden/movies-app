/**
 * <Describe file contents>
 * @lobocroiden
 *
 */
(function (W) {
    'use strict';
    define(["hbs!app/templates/card","app/views/modalView"],
        function (Card, ModalView) {
            var CardView = Backbone.View.extend({
                className: "mov-card",
                template: Card,
                /**
                 * @desc Data set passed to the view is pushed to the model and bound to the view.
                 * @method initialize
                 */
                initialize: function (options) {
                    var that = this;
                    _.extend(that, options || {});
                },
                events: {
                    "click img": "quickView"
                },
                /**
                 * @desc This function performs the following tasks define the values of the template,
                 * @desc attach the template to the view element and add the custom class
                 * @method render
                 */
                render: function () {
                    var that = this;
                    if (_.isUndefined(that.model.get('ratingArr'))) {
                        var rating = Math.round(that.model.get("rating"));
                        var ratingArr = [];
                        for(var i=0;i<10;i++){
                            if(i<rating){
                                ratingArr.push(true);
                            }else{
                                ratingArr.push(false);
                            }
                        }
                        that.model.set({
                            "allGenre": that.model.get('genre').join(","),
                            "ratingArr": ratingArr
                        });
                    }
                    that.$el.html(that.template(that.model.toJSON()));
                    return that;
                },
                quickView: function () {
                    var that = this;
                    var modal = new ModalView({
                        model:that.model
                    });
                    modal.render();
                }
            });
            return CardView;
        });
})(window);
