var app = angular.module("zoeFoodGuesser", []);


app.controller("foodItemsCtrl", ($scope) => {
	$scope.showFood = false;
	$scope.buttonLabel = "CLICK TO SEE WHAT SHE WILL EAT!";

	$scope.foodItem = () => {
		$scope.showFood = true;
		$scope.buttonLabel = "A FURRRRRR-ITO";
	};

});