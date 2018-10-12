angular.module("support-content", [])
  .filter("toArray", function() {
    return function(obj) {
      var result = [];
      angular.forEach(obj, function(val, key) {
        result.push(val);
      });
      return result;
    };
  })
  .controller("support-control", function($scope) {
    $scope.sl = {
      1: {
        lt: "Issue Tracker",
        ld: "If you want support, the slower response would be to go through the issue tracker, but we will get to you as soon as we can.",
        lg: "<a href='https://github.com/NullProjects/NullProjects.github.io/issues' target='_new'>Follow to go to Issue Tracker</a>">,
        sid: 1
      },
      2: {
        lt: "Discord Support",
        ld: "Video game I am working on",
        lg: "<a href='' target='_new'>Follow to go to Issue Tracker</a>">,
        sid: 2
      },
      3: {
        lt: "Live Chat",
        ld: "Video game I am working on",
        lg: "<a href='' target='_new'>Follow to go to Issue Tracker</a>">,
        sid: 3
      },
    };

    $scope.sort = "sid";
  });
