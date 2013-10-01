/**
 * Created by Sergio on 1/10/13.
 */

var mainapp = angular.module('mainapp', ['mainservices']);

mainapp.controller('MenuController',['$scope', 'ApplicationInfo', function($scope, ApplicationInfo){

    $scope.menuList = ApplicationInfo.getMenuList();

    $scope.openView = function(title) {
        alert(title);
    }
}]);

mainapp.run( function ($rootScope) {
    $rootScope.name = "Sergio";
});

