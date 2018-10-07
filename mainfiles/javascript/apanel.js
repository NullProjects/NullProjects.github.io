angular.module("admin-panel-main", [])
  .filter("toArray" , function() {
    return function(obj){
      var result = [];
      angular.forEatch(obj, function(val, key){
        reult.push(val);

      });
      return result;

    };

  })
  .controller("ticket-control", function($scope){
    $scope.tickets = {
      1{}
    }
  }
