/**
* Post
* @namespace thinkster.posts.directives
*/
(function () {
    'use strict';

    angular
        .module('thinkster.posts.directives')
        .directive('post', post);

    /**
    * @namespace Post
    */
    function post() {
        /**
        * @name directive
        */
        var directive = {
            recstrict: 'E',
            scope: {
                post: '='
            },
            templateUrl: '/static/templates/posts/post.html'
        };

        return directive;
    }

})();
