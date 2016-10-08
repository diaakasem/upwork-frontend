/* exported highcharts */

import _ from 'lodash';
import $ from 'jquery';
import highcharts from 'highcharts';

class GraphController {
  /** @ngInject */
  constructor($timeout, $log) {
    this.$log = $log;
    const that = this;
    $timeout(() => {
      that.$log.debug(that.clouddata);
      that.render('#cloud-graph', that.clouddata);
    }, 1000);
  }

  render(div, data) {
    this.$log.debug("=== Data received ===");
    this.$log.debug(data);
    this.$log.debug("=== ============= ===");
    const chart = new highcharts.Chart({
      chart: {
        renderTo: $(div)[0],
        type: 'bar',
        zoomType: 'xy'
      },
      yAxis: {
        title: {text: 'Ocurrences'}
      },
      xAxis: {
        title: {text: 'Technologies'},
        categories: _.map(data, 'name')
      },

      title: {
        text: 'Upwork technologies'
      },

      series: [{
        name: 'data',
        data: _.map(data, 'value')
      }]
    });
    this.$log.debug(chart);
    // chart();
  }
}

export const graph = {
  template: require('./graph.html'),
  controller: GraphController,
  bindings: {
    clouddata: '<'
  }
};
