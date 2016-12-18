angular.module('myApp').factory('DataStorage', ['$http', '$q', function ($http, $q) {
  var cache

  // Getter used to retrieve the state object
  function getState () {
    return $q(function (res, rej) {
      if (cache) {
        res(cache)
        return
      }

      // return privateState
      $http({
        method: 'GET',
        url: '/members'
      })
      .then(function (payload) {
        console.log('data coming from API:', payload.data)

        cache = payload.data
        res(payload.data)
      })
    })
  }

  // Setter used to alter the state object
  function setState (state) {
    cache = state

    $http.put('/members', state)
      .then(function (payload) {
        console.log('PUT /members', payload)
      })
  }

  // Returns an object with references to private methods (getState & setState)
  return {
    get: getState,
    set: setState
  }
}])
