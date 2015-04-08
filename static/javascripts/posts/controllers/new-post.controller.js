/**
* NewPostController
* @namespace thinkster.posts.controllers
*/
(function (){
	'use strict';

	angular
		.module('thinkster.posts.controllers')
		.controller('NewPostController', NewPostController);

	NewPostController.$inject = ['$rootScope', '$scope', 'Authentication', 'Snackbar', 'Posts'];

	/**
	* @namespace NewPostController
	*/
	function NewPostController($rootScope, $scope, Authentication, Snackbar, Posts) {
		var vm = this;

		vm.submit = submit;

		/**
		* @name submit
		* @desc Create a new Post
		* @memberOf thinkster.posts.controllers.NewPostController
		*/
		function submit() {
			$rootScope.$broadcast('post.created', {
				content: vm.content,
				author: {
					username: Authentication.getAuthenticatedAccount().username
				}
			});

			$scope.closeThisDialog();

			Posts.create(vm.content).then(createPostSuccessFn, createPostErrorFn);

			/**
			* @name createPostSuccessFn
			* @desc Show snackbar with success message
			*/
			function createPostSuccessFn() {
				Snackbar.show('Success! Post created.');
			}

			/**
			* @name createPostErrorFn
			* @desc Show snackbar with error message
			*/
			function createPostErrorFn() {
				$rootScope.$broadcast('post.created.error');
				Snackbar.error(data.error);
			}
		}
	}
})();