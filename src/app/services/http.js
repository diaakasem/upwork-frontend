import angular from 'angular';

class HTTPService {

  /** @ngInject */
  constructor($http, $log) {
    this.name = 'HTTP Service';
    $log.warn(this.name);
  }

  getName() {
    return this.name;
  }
}

export default angular.module('services', [])
  .service('http', HTTPService)
  .name;
