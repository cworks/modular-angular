angular.module('coreApp', []);
angular.module('expenseApp', []);
angular.module('invoiceApp', []);
angular.module('reportsApp', []);


angular.module('mainApp', [
  'coreApp',
  'expenseApp',
  'invoiceApp',
  'reportsApp',
  'ui.router'
])
.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    }
  ]
)
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      /////////////////////////////
      // Redirects and Otherwise //
      /////////////////////////////

      // Use $urlRouterProvider to configure any redirects
      // (when) and invalid urls (otherwise).
      $urlRouterProvider
        // If the url is ever invalid, e.g. '/asdf',
        // then redirect to '/' aka the home state
        .otherwise('/');

      //////////////////////////
      // State Configurations //
      //////////////////////////

      // Use $stateProvider to configure your states.
      $stateProvider.state('core', {
          url: '/core',
          //templateUrl: 'app/core/core.html',
          controller: 'CoreController'
      }).state('expense', {
          url: '/expense',
          //templateUrl: 'app/expense/expense.html',
          controller: 'ExpenseController'
      }).state('invoice', {
          url: '/invoice',
          //templateUrl: 'app/invoice/invoice.html',
          controller: 'InvoiceController'
      })
    }
  ]
);
