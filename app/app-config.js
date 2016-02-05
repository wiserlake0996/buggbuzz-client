var configApp = angular.module('bbConfigApp',[])

configApp.config(function($stateProvider, $urlRouterProvider, $locationProvider){
      
    $locationProvider.html5Mode(true);  
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl:'app/components/search/search-home.html'
        })
 
        .state('home.search',{
            url: '/:searchText',
            templateUrl: 'app/components/search/partial-search-results.html',
            controller: 'searchResultCtrl'
        })
    
        .state('bug',{
            url: '/bug/:bugid',
            templateUrl: 'app/components/bug/partial-bug-info.html',
            controller: 'bugDisplayCtrl'
        })

        .state('bug-submit',{
            url: '/bug-submit',
            templateUrl: 'app/components/bug/partial-bug-submit.html',
            controller: 'bugSubmitCtrl'
        })
    
        .state('update-signup',{
            url: '/update-signup',
            templateUrl: 'app/components/general/partial-users-updates.html',
            controller: 'emailSubmitCtrl'
        })
    
      
        .state('success',{
            url:'/success',
            template:'<h3>Thank you! click <a ui-sref="home">here</a> to head back to the homepage</h3>'
        });
});

