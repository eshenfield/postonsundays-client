angular.module('postly', [
  'postly.services',
  'postly.posts',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/posts', {
      templateUrl: 'app/posts/posts.html',
      controller: 'PostsController'
    })
    .otherwise({
      redirectTo: '/posts'
    });
});
