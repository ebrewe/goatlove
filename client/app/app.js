import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import NavigationComponent from './components/navigation/navigation';

//default styles
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

angular.module('app', [
  uiRouter,

  //inject the .name property of our import
  NavigationComponent.name
])

.config(($locationProvider, $stateProvider, $urlRouterProvider)=>{
  "ngInject";

  //define app routing.
  //main route is abstract and cannont be viewed without children.
  $stateProvider
    .state('app', {
      url:'/app',
      abstract: true,
      template: "<app></app>"
    })

    //dashboard page
    .state('app.home', {
      url:'/home',
      template: 'Home page'
    })

    //route for goat listing creator
    .state('app.create', {
      url:"/create",
      template: 'Create Page'
    });

    //default state
    $urlRouterProvider.otherwise('/app/home');
})
.component('app', AppComponent);
