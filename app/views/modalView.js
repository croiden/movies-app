/**
 * <Describe file contents>
 * @lobocroiden
 *
 */
(function (W) {
    'use strict';
    define(["hbs!app/templates/modal"],
        function (Modal) {
            var ModalView = Backbone.View.extend({
                className: "modal fade",
                template: Modal,
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
                    that.$el.html(that.template(that.model.toJSON()));
                    that.$el.modal('show');
                    return that;
                }
            });
            return ModalView;
        });
})(window);
