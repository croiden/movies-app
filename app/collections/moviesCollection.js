/**
 * <Describe file contents>
 * @lobocroiden
 *
 */
(function (W) {
    'use strict';
    define([],function () {
        var Movies = Backbone.Collection.extend({
            sort_key: 'releaseDate', // default sort key
            comparator: function (item) {
                if (this.sort_key === 'releaseDate'){
                    return -Date.parse(item.get(this.sort_key));
                } else if (this.sort_key === 'rating') {
                    return -Number(item.get(this.sort_key));
                } else {
                    return item.get(this.sort_key);
                }
            },
            url: 'https://alert-carpenter.glitch.me/api/movies/all',
            parse: function(response) {
                return response.data;
            },
            sortByProperty: function(property){
                this.sort_key = property;
                this.sort();
            }
        });
        return Movies;
    });
})(window);