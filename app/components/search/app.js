var homeApp  = angular.module('searchApp',[]);

homeApp.controller('searchResultCtrl',['$scope','$stateParams','searchFactory',function($scope,$stateParams, searchFactory){
    searchFactory.searchDocument($stateParams.searchText)
        .success(function(data){
            console.log("value of data ", data);
            if(data == undefined){
                $scope.bugs = [{
                    name: "empty data",
                    description: "Data is empty"
                }];                
                
            }else{
                $scope.bugs = data;                   
            }
            
          
        }).error(function(err){
            $scope.bugs = [{
                name: "Error message",
                description: err
            }];
        });
}]);

homeApp.controller('searchController',['$state','$scope','$stateParams',function($state,$scope ,$stateParams){
    $scope.search = function(){
        $state.go('home.search', {"searchText":$scope.searchText});
    };
   
}]);

homeApp.factory('searchFactory', function($http,$q){
    return{
        searchDocument: function(query){
            return $http({
                url: 'http://bb-server.azurewebsites.net/search/q/'+query,
                method: 'GET'
            })
        },
        searchById: function(bid){
            return $http({
                url: 'http://bb-server.azurewebsites.net/search/id/'+bid,
                method: 'GET'
            })
        }        
        
    }
});



