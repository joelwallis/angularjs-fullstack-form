angular.module('myApp').controller('FormCtrl', ['$scope', 'DataStorage', function ($scope, DataStorage) {
  console.log('FormCtrl running')

  $scope.save = function () {
    if (!angular.isString($scope.memberName) || !$scope.memberName.length) {
      console.log('Please enter your name')
      return
    }

    if (!angular.isString($scope.memberEmail) || !$scope.memberEmail.length) {
      console.log('Please enter your email')
      return
    }

    DataStorage.get().then(function (members) {
      members.push($scope.memberName)
      DataStorage.set(members)

      setTimeout(function () {
        window.location = '#!/overview'
      }, 500)
    })
  }
}])
