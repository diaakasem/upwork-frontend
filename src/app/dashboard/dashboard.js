import _ from 'lodash';

class DashboardController {

  /** @ngInject */
  constructor($http, $log) {
    $http
     .get('api/analysis/cloud')
     .then(response => {
        // this.data = response.data;
       $log.debug(response.data);
       this.cloudData = _(response.data).map((v, k) => {
         return {name: k, value: v};
       }).sortBy('value').reverse().slice(0, 40).value();
     });
  }
}

export const dashboard = {
  template: require('./dashboard.html'),
  controller: DashboardController
};
