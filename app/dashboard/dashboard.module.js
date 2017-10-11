angular.module('dashboard', []).config($stateProvider => {
  $stateProvider.state('dashboard.algorithm', {
    url: 'algorithm/:root/:child',
    component: 'algorithm',
  })
});
