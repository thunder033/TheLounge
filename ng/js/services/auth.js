require('angular').module('ays')
  .factory('AuthService', function ($sails) {
    var AuthService = {
      checkAuth: function () {
        // $http/$sails returns a promise, which has a then function, which also returns a promise
        var promise = $sails.get('/me')
          .then(function (response) {
            return response;
          });
        return promise;
      },
    };
    return AuthService;
  });
