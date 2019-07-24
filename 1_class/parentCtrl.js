
module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.id = ''
    $scope.name = ''
    $scope.ph = ''
    $scope.getClass = function() {
        if ($scope.id == '' )
            return 'missing'
        return 'ok'
    }
}
