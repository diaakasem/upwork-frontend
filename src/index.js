import angular from 'angular';

import {dashboardModule} from './app/dashboard/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './app/services/http';

import './index.scss';

angular
  .module('app', [dashboardModule, 'ui.router', 'services'])
  .config(routesConfig)
  .component('app', main)
  .component('mainHeader', header)
  .component('mainTitle', title)
  .component('mainFooter', footer);
