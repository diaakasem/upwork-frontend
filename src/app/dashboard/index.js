import angular from 'angular';

import {dashboard} from './dashboard';
import {graph} from './graph';

export const dashboardModule = 'dashboard';

angular
  .module(dashboardModule, [])
  .component('dashboard', dashboard)
  .component('graph', graph);
