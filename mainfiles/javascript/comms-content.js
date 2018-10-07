angular.module("devcontent", [])
  .filter("toArray", function() {
    return function(obj) {
      var result = [];
      angular.forEach(obj, function(val, key) {
        result.push(val);
      });
      return result;
    };
  })
  .controller("dev-control", function($scope) {
    $scope.products = {
      1: {
        prodtitle: "Project Alison",
        proddesc: "Video game I am working on",
        prodid: 1
      },
      2: {
        prodtitle: "GitCMS",
        proddesc: "2nd Video game I am working on",
        prodid: 2
      }
    };
    $scope.gametitles = {
      1: {
        gamethumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNlkRGiOop_M7mpxvfiVT9S8_P0PiBRdHDYl3lQdnO8Y0zWHrSA",
        gametitle: "ProjectEOB",
        gamedesc: "Video game I am working on",
        gamerelease: new Date("November 23, 1980"),
        gameid: 1
      },
      2: {
        gamethumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNlkRGiOop_M7mpxvfiVT9S8_P0PiBRdHDYl3lQdnO8Y0zWHrSA",
        gametitle: "Project Gekisen",
        gamedesc: "Video game I am working on 2",
        gamerelease: new Date("To Be Announced"),
        gameid: 2
      }, //gamerelease: new Date("November 23, 1986")
      3: {
        gamethumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNlkRGiOop_M7mpxvfiVT9S8_P0PiBRdHDYl3lQdnO8Y0zWHrSA",
        gametitle: "Project Solar",
        gamedesc: "Video game I am working on 2",
        gamerelease: new Date("To Be Announced"),
        gameid: 3
      }, //gamerelease: new Date("November 23, 1986")
      4: {
        gamethumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNlkRGiOop_M7mpxvfiVT9S8_P0PiBRdHDYl3lQdnO8Y0zWHrSA",
        gametitle: "Game Title 4",
        gamedesc: "Game Description 4",
        gamerelease: new Date("To Be Announced"),
        gameid: 4
      },
      5: {
        gamethumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNlkRGiOop_M7mpxvfiVT9S8_P0PiBRdHDYl3lQdnO8Y0zWHrSA",
        gametitle: "Game Title 5",
        gamedesc: "Game Description 5",
        gamerelease: new Date("To Be Announced"),
        gameid: 5
      },
      6: {
        gamethumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNlkRGiOop_M7mpxvfiVT9S8_P0PiBRdHDYl3lQdnO8Y0zWHrSA",
        gametitle: "Game Title 6",
        gamedesc: "Game Description 6",
        gamerelease: new Date("To Be Announced"),
        gameid: 6
      },
      7: {
        gamethumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNlkRGiOop_M7mpxvfiVT9S8_P0PiBRdHDYl3lQdnO8Y0zWHrSA",
        gametitle: "Game Title 7",
        gamedesc: "Game Description 7",
        gamerelease: new Date("To Be Announced"),
        gameid: 7
      },
      8: {
        gamethumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNlkRGiOop_M7mpxvfiVT9S8_P0PiBRdHDYl3lQdnO8Y0zWHrSA",
        gametitle: "Game Title 8",
        gamedesc: "Game Description 8",
        gamerelease: new Date("To Be Announced"),
        gameid: 8
      },
      //gamerelease: new Date("November 23, 1986")
    };

    $scope.projects = {
      1: {
        projectstitle: "ProjectEOB",
        projectdesc: "Video game I am working on",
        projid: 1
      },
      2: {
        title: "ProjectEOB 2",
        description: "2nd Video game I am working on",
        projid: 2
      }

    };

    $scope.sortproducts = "prodid";
    $scope.sortgames = "gameid";
    $scope.sortprojects = "projid";
/*
    $scope.nextButton = function() {
      $scope.currentImage++;
      if ($scope.currentImage > ($scope.availableImages.length - 1)) {
        $scope.currentImage = 0;
      }
    }
    $scope.prevButton = function() {
      $scope.currentImage--;
      if ($scope.currentImage < 0) {
        $scope.currentImage = ($scope.availableImages.length - 1);
      }
    }
*/
    $scope.reverse = true;
    $scope.gametitles = gametitle;

    $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;

  });
