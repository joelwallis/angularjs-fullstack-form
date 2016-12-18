angular.module('myApp').controller('OverviewCtrl', ['$scope', 'DataStorage', function ($scope, DataStorage) {
  console.log('OverviewCtrl running')

  DataStorage.get().then(function (members) {
    $scope.members = members
  })
}])
