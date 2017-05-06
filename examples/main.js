MyApp = angular.module('MyApp', []);

// MyController
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

MyControllerFunction = function ($scope) {

	$scope.exampleString = "Yaaay, ControllerHandler works!";

	$scope.controller = MyControllerHandler;
};

MyControllerHandler = new ControllerHandler({
	app: MyApp,
	name: "MyController",
	code: MyControllerFunction,
	debug: true
});

// MyOtherController
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

MyOtherControllerFunction = function ($scope, $sce) {

	$scope.controller = MyOtherControllerHandler;
};

MyOtherControllerHandler = new ControllerHandler({
	app: MyApp,
	name: "MyOtherController",
	code: MyOtherControllerFunction
});