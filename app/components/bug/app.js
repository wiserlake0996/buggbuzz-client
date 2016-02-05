var bugApp = angular.module('bugApp',[])

bugApp.controller('bugDisplayCtrl',['$scope','$stateParams','searchFactory',function($scope, $stateParams, searchFactory){
    
    var bugid = $stateParams.bugid || "no id here";
    
    searchFactory.searchById(bugid)
        .success(function(data){
            console.log("value of data ", data);
            if(data == undefined){
                $scope.bugs = [{
                    name: "empty data",
                    description: "Data is empty"
                }];                
                
            }else{
                $scope.name = data[0].name; 
                $scope.tag = data[0].tag;                   
                $scope.description = data[0].description;                   
                $scope.body = data[0].body;                                                                                     
            }
            
          
        }).error(function(err){
            $scope.bugs = [{
                name: "Error message",
                description: err
            }];
        });
    
}]);

bugApp.controller('bugSubmitCtrl',['$scope', 'submitFactory','$state',function($scope, submitFactory, $state){

    $scope.sendData = function(){
        var pdata = {description:$scope.description, body:$scope.body};
        submitFactory.submitBug(pdata)
            .success(function(resp){
                $state.go('success');
            }).error(function(err){
                console.log("failure response ",err);
                alert( "failure message: " + JSON.stringify({message: err}));
            });    
    };
}]);