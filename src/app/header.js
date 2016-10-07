class HeaderController {
  /** @ngInject */
  constructor($scope, $log, http) {
    this.blah = 'blah';
    $log.info(this.blah);
    $log.debug(http);
    $log.warn(`Injected ${http.getName()}`);
  }
}
export const header = {
  template: require('./header.html'),
  controller: HeaderController
};
