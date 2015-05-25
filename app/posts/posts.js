angular.module('postly.posts', [])

.controller('PostsController', function ($scope, Posts) {
  $scope.data = {};
  $scope.post = {};

  $scope.getPosts = function(){
    Posts.getAll()
    .then(function(res) {
      $scope.data = res.data.posts;
    })
    .catch(function(err) {
      console.error(err);
    });
  };

  $scope.addPost = function(){
    $scope.loading = true;
    var sendData = {};
    sendData.post = $scope.post;

    Posts.addPost(JSON.stringify(sendData))
    .then(function(res) {
      console.log("Succesfully sent your message!")
      $scope.post.author_name = "";
      $scope.post.title = "";
      $scope.post.content = "";
      $scope.loading = false;
      $scope.getPosts();
    })
    .catch(function(err) {
      console.error(err);
    });
  }

  $scope.getPosts();

  setInterval($scope.getPosts.bind(this), 5000);

});
