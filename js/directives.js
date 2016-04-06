/**
 * Created by rachelkoldenhoven on 4/6/16.
 */
angular.module('Pokemon').directive('loading', function () {
    return {
      restrict: 'E',
      replace:true,
      template: '<div class="loading"><img src="http://ringophone.com/HDanimWP/Loading-87197.gif"/>LOADING...</div>',
      link: function (scope, element, attr) {
        scope.$watch('loading', function (val) {
          if (val)
            $(element).show();
          else
            $(element).hide();
        });
      }
    }
  });

//
//angular.module('SimpleDirectiveApp').directive('isolateScopeCustomer', function() {
//  return {
//    scope: {
//      customerValues: '=customerValues',
//    },
//    templateUrl: '/templates/isolateScopeTemplate.html',
//    link: function(scope, element, attrs) {
//      scope.clickCount = 0;
//
//      scope.handleClick = function(){
//        scope.clickCount += 1;
//      }
//    }
//  };
//});