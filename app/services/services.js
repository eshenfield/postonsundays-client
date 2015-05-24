angular.module('postly.services', [])

.factory('Posts', function ($http) {
  var getAll = function() {
    return $http({
      method: 'GET',
      url: 'http://postonsundays.herokuapp.com/posts'
    });
  };

  var addPost = function(postData) {
    console.log("Posting your message");
    return $http({
      method: 'POST',
      url: 'http://postonsundays.herokuapp.com/posts',
      data: postData
    });
  };

  return {
    getAll: getAll,
    addPost: addPost
  }
});
