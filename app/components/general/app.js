var generalApp = angular.module('generalApp',[])

generalApp.controller('emailSubmitCtrl',['$scope', 'submitFactory','$state',function($scope, submitFactory, $state){

    $scope.sendData = function(){
        var pdata = {email:$scope.email};
        submitFactory.submitEmail(pdata)
            .success(function(resp){
                $state.go('success');
            }).error(function(err){
                console.log("failure response ",err);
            });    
    };
}]);



generalApp.factory('submitFactory', function($http){
    return{
        submitEmail: function(data){
            return $http({
                url:'http://bb-server.azurewebsites.net/submit/email',
                method:'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data:  $.param(data)
            })
        },
        submitBug: function(data){
            return $http({
                url:'http://bb-server.azurewebsites.net/submit/bug',
                method:'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data:  $.param(data)
            })
        }        
    }
});