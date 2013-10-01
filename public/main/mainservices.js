/**
 * Created by Sergio on 1/10/13.
 */

var mainServicesModule = angular.module('mainservices', []);

mainServicesModule.factory('ApplicationInfo', function($rootScope){
    var menuList = [
        {title: 'Cotacao', children: [{title: 'Cotacao', children: [{title:'Cotacao', children:[]}]}]},
        {title:'Tabelas',  children: [{title: 'Cliente', children: []}, {title: 'Fornecedor', children: []}]}
    ];

    var service = {};

    service.getMenuList = function() {
        return menuList;
    }

    return service;
});