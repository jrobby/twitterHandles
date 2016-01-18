/**
 * Created by robbynewman on 1/15/16.
 */
/**
 * Created by robbynewman on 1/8/16.
 */

var app  = angular.module('myApp', []);
console.log('Connected');
app.controller('myController',["$scope", "$http", function($scope, $http) {
    $scope.fetchNouns = function(){
        $http.get('/nouns').then(function(nounsResponse){
         $scope.nouns = nounsResponse.data.nouns;
        });
    };
    $scope.fetchAdjectives = function(){
        $http.get('/adjectives').then(function(adjResponse){
         $scope.adjectives = adjResponse.data.adjectives;
        });
    };

    $scope.fetchAdjectives();
    $scope.fetchNouns();

    //$scope.handles = [];
    $scope.makeHandles = function(){
        $scope.handles = [];
        shuffleArray($scope.nouns);
        shuffleArray($scope.adjectives);

        for (var i = 0; i<$scope.nouns.length; i++){
            $scope.handles.push($scope.adjectives[i].word + $scope.nouns[i].word);
        }
        return $scope.handles;
    };
    $scope.makeHandles;

}]);

function shuffleArray(array){
    for (var i = array.length - 1; i>0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
    }
