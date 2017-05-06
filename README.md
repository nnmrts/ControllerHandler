# ControllerHandler

ControllerHandler is a small JavaScript constructor function for AngularJS.

It simplifies the process of declaring controllers and makes dependency injection a little bit easier.

---

## Example

Normal controller declaring compared to that with ControllerHandler:

Vanilla:

```js

// MyController

MyControllerFunction = function ($scope, $timeout, $window, $http, $q) {

    // $scope.stuff ...

};

MyApp.controller("MyController", ["$scope", "$timeout", "$window", "$http", "$q", MyControllerFunction]);


// MyOtherController

MyOtherControllerFunction = function ($scope, $timeout, $window, $http, $q) {

    // $scope.stuff ...

};

MyApp.controller("MyOtherController", ["$scope", "$timeout", "$window", "$http", "$q", MyOtherControllerFunction]);

```

Using ControllerHandler:

```js

// MyController

MyControllerFunction = function ($scope, $timeout, $window, $http, $q) {

    // $scope.stuff ...
};

MyControllerHandler = new ControllerHandler({
    app: MyApp,
    name: "MyController",
    code: MyControllerFunction,
    debug: true
});

// MyOtherController

MyOtherControllerFunction = function ($scope, $timeout, $window, $http, $q) {

    // $scope.stuff ...
};

MyOtherControllerHandler = new ControllerHandler({
    app: MyApp,
    name: "MyOtherController",
    code: MyOtherControllerFunction
});

```

You can find an example site where ControllerHandler is used in the example folder.

## Features

ControllerHandler manages inline dependency injection for you, so you don't have to write down your depencies twice but at the same time your app still works when minified. Also, it gives you a nice little object to configure your controller and not some confusing arrays or parentheses.

Another feature is the `debug` option. If it is set to true, you can see all information about your controller(s) in your browser console.

## Docs

Download this repository and open the index.html in the docs folder, there is everything explained in detail about how to use ControllerHandler.