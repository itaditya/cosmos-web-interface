angular.module('common').component('sidebar', {
  templateUrl: 'app/common/sidebar/sidebar.template.html',
  controllerAs: 'vm',
  controller(codeService) {
    const vm = this;
    $('.collapsible').collapsible();
    codeService.getCodesList(true).then(res => {
      const codes = res.data.code;
      codeService.syncCodes(codes);
      vm.codes = codes;
    })
  },
})
