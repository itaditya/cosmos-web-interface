angular.module('app', ['ui.router', 'ng-code-mirror', 'common', 'dashboard']).config(($stateProvider, $urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $stateProvider.state('dashboard', {
    url: '/',
    component: 'dashboard',
  });
}).run(() => {
  console.log('module');
});
