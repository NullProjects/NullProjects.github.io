angular.module("urlinclude", [])
  .filter("toArray", function() {
    return function(obj) {
      var result = [];
      angular.forEach(obj, function(val, key) {
        result.push(val);
      });
      return result;
    };
  })
  .controller("urlcontrol", function($scope) {
    $scope.urlnames = {
      1: {
        turl: "../index.html",
        tname: "HOME",
        urlid: 1
      },
      2: {
        turl: "../dev/",
        tname: "DEVELOPMENT",
        urlid: 2
      },
      3: {
        turl: "#",
        tname: "SHOP",
        urlid: 3
      },
      4: {
        turl: "../broadcasting/",
        tname: "BROADCASTING",
        urlid: 4
      },
      5: {
        turl: "../community/",
        tname: "COMMUNITY",
        urlid: 5
      },
      6: {
        turl: "../about/",
        tname: "ABOUT US",
        urlid: 6
      },
      7: {
        turl: "../contact/",
        tname: "CONTACT US",
        urlid: 7
      },
      8: {
        turl: "../donate/",
        tname: "DONATE",
        urlid: 8
      },

    };

    $scope.sorturlnames = "urlid";
  });
