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
                
                $scope.queryText = $stateParams.searchText;             
                
            }else if(data.length <= 0){
                $scope.bugs = [{
                    name: "not found",
                    description: "No bugs or solutions found",
                    tag:"nothing"
                }];
                
                $scope.queryText = $stateParams.searchText;                    
            }else{
                $scope.bugs = data; 
                $scope.queryText = $stateParams.searchText;                   
            }
            
          
        }).error(function(err){
            $scope.bugs = [{
                name: "Error message",
                description: err
            }];
            
            $scope.queryText = $stateParams.searchText; 
        });
}]);

homeApp.controller('searchCtrl',['$state','$scope','$stateParams',function($state,$scope ,$stateParams){
    $scope.search = function(){
        
        $state.go('home.search', {"searchText":$scope.searchText});
    };
    

}]);

homeApp.controller('sampleSearchCtrl',['$scope','searchFactory','$controller',function($scope, searchFactory, $controller){
    
    
    var sampleQueries = ['ios bugs','windows bugs','android bugs','battery ios'];
    var randomnumber=Math.floor(Math.random()*4)

    console.log("the random value query ", randomnumber);
    
    searchFactory.searchDocument(sampleQueries[randomnumber])
        .success(function(data){
            console.log("value of sample search data ", data);
            if(data == undefined){
                $scope.bugs = [{
                    name: "empty data",
                    description: "Data is empty"
                }];     
                
                $scope.queryText = sampleQueries[randomnumber];            
                
            }else if(data.length <= 0){
                $scope.bugs = [{
                    name: "not found",
                    description: "No bugs or solutions found",
                    tag:"nothing"
                }];    
                
                $scope.queryText = sampleQueries[randomnumber];                
            }else{
                $scope.bugs = data;
                $scope.queryText = sampleQueries[randomnumber];                  
            }
            
          
        }).error(function(err){
            $scope.bugs = [{
                name: "Error collecting data",
                description: err
            }];
            $scope.queryText = sampleQueries[randomnumber]; 
        });    
}]);

homeApp.factory('searchFactory', function($http,$q){
    return{
        searchDocument: function(query){
            console.log("query value ",query);
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



