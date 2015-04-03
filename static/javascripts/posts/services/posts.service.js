/**
* Posts
* @namespace thinkster.posts.services
*/
(function (){
    'user strict';

    angular
        .module('thinkster.posts.services')
        .factory('Posts', Posts);

    Posts.$inject = ['$http'];

    /**
    * @namespace Posts
    * @returns {Factory}
    */
    function Posts($http) {
        var Posts = {
            all: all,
            create: create,
            get: get
        };

        return Posts;

        //////////////////////////////

        /**
        * @name all
        * @desc Get all Posts
        * @return {Promise}
        * @memberOf thinkster.posts.services.Posts
        */
        function all() {
            return $http.get('/api/v1/posts/');
        }

        /**
        * @name create
        * @desc Create new Post
        * @param {string} content The content of the new Post
        * @return {Promise}
        * @memberOf thinkster.posts.services.Posts
        */
        function create(content) {
            return
        }

        /**
        * @name get
        * @desc Get the Posts of a given user
        * @param {string} username The username to get Posts for
        * @return {Promise}
        * @memberOf thinkster.posts.services.Posts
        */
        function get(username) {
            return $http.get('/api/v1/accounts/' + username + '/posts/')
        }
    }
})();
