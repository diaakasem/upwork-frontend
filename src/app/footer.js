export const footer = {
  template: require('./footer.html'),
  controller: ['$scope', '$log', ($scope, $log) => {
    $log.error("Blah");
  }]
};
