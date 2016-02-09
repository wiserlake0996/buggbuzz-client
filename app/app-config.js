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
        
        .state('home.sample-search',{
            url: '/sample-search/:q',
            templateUrl: 'app/components/search/partial-search-results.html',
            controller: 'sampleSearchCtrl'
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
        
        .state('redirect',{
            url: '/redirect',
            template: '<h2>Ooops! it seems like there is a problem</h2> <p> so just check out one of the pages that seems to work <a ui-sref="home.sample-search">here</a></p>'
        })
    
      
        .state('success',{
            url:'/success',
            template:'<h3>Thank you! click <a ui-sref="home">here</a> to head back to the homepage</h3>'
        });
});

