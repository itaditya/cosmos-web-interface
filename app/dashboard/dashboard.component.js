angular.module('dashboard').component('dashboard', {
  templateUrl: 'app/dashboard/dashboard.template.html',
  controller() {
    console.log('dashboard');
  },
}).component('algorithm', {
  templateUrl: 'app/dashboard/algorithm.template.html',
  controllerAs: 'vm',
  controller($stateParams, codeService) {
    const vm = this;
    vm.sourceCodes = [];
    codeService.getCodesList(true).then(res => {
      const codes = res.data.code;
      const programs = Object.entries(codes[$stateParams.root][$stateParams.child]);
      for (let i = programs.length - 1; i >= 0; i -= 1) {
        const key = programs[i][0];
        const url = `/${$stateParams.root}/${$stateParams.child}/${key}`;
        codeService.getCode(url).then(codeRes => {
          vm.sourceCodes.push({
            code: codeRes.data,
            extension: codeService.getFileExtension(key),
            fileName: key,
          })
        })
      }
    })
  },
})

/*
for (const key in programs) {
  if (programs.hasOwnProperty(key)) {
    console.log(key);
    const url = `/${$stateParams.root}/${$stateParams.child}/${key}`;
    codeService.getCode(url).then(codeRes => {
      console.log(codeRes);
      vm.sourceCodes.push({
        code: codeRes.data,
        extension: getFileExtension(key),
        fileName: key,
      })
    })
    // return
  }
}
*/
