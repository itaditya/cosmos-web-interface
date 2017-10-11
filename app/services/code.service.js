angular.module('app').service('codeService', function ($http, $q) {
  let codes = [];
  this.attachCallback = () => {
    console.log('test');
  }
  this.syncCodes = (updatedCodes) => {
    codes = updatedCodes;
  }
  this.getCodesList = (cache) => {
    if (cache && codes.length !== 0) {
      return $q((resolve, reject) => {
        resolve({
          data: {
            code: codes,
          },
        })
      })
    }
    console.log('Ajax Request Sent');
    return $http.get('/codes.json');
  }
  this.getCode = (url) => {
    url = `/cosmos/code${url}`;
    return $http.get(url);
  }
  this.getFileExtension = function (filename) {
    return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
  }
});
