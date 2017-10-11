angular.module('common').component('navbar', {
  templateUrl: 'app/common/navbar/navbar.template.html',
  controller() {
    console.log('navbar');
    $('.sidebar-collapse').sideNav({
      menuWidth: 350,
    });
  },
})
