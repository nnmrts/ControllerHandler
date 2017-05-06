if (window.angular) {
	/**
	 * @name ControllerHandler
	 * @description The main ControllerHandler object
	 * @constructor
	 * @type {function(new:ControllerHandler, Object)}
	 * 
	 * @param {Object} options - The configuration object.
	 * @param {function(string, ?Array<string>)} options.app - The angular app you want the controller to be attached.
	 * @param {string} options.name - The name you want to give the controller.
	 * @param {function(*)} options.code - The code you want to have inside your controller, packed as a function with your angular dependencies as arguments.
	 * @param {boolean} [options.debug=false] - Determines if you want the ControllerHandler to console.logging some info.
	 * @param {boolean} [options.attachNow=true] - Determines if you want to attach the controller to the app later or now. It
	 */
	ControllerHandler = function (options) {

		this.name = options.name;
		this.code = options.code;
		this.code.$inject = this.dependencies = this.code.toString().slice(this.code.toString().indexOf("(") + 1, this.code.toString().indexOf(")")).split(", ");

		if (options.debug) {
			console.groupCollapsed('%cControllerHandler created a new controller!',
				"font-weight: bold; color: #42a5f5; font-size: 16px;"
			);
			console.log('%chandler: 		', "font-weight: bold; color: #42a5f5; font-size: 12px;", this);
			console.log('%capp:			', "font-weight: bold; color: #42a5f5; font-size: 12px;", options.app);
			console.log('%cname:			', "font-weight: bold; color: #42a5f5; font-size: 12px;", '"' + this.name + '"');
			console.log('%cdependencies:	', "font-weight: bold; color: #42a5f5; font-size: 12px;", this.dependencies);
			console.log('%ccode:			', "font-weight: bold; color: #42a5f5; font-size: 12px;", this.code);
			console.groupEnd();
		}

		if (window.ControllerHandlers) {
			ControllerHandlers.push(this);
		} else {
			ControllerHandlers = [this];
		}

		if (options.attachNow === undefined || options.attachNow === true) {
			options.app.controller(this.name, this.code);
		} else {
			/**
			 * @name ControllerHandler.attach()
			 * @description The attach function of the ControllerHandler object. Attaches the controller to the app you defined at initialization.
			 * @type {function(this:ControllerHandler)}
			 * @memberof ControllerHandler
			 * @this ControllerHandler
			 * 
			 * @return The controller adding function of angular with the set controller name and code.
			 */
			this.attach = function () {
				return options.app.controller(this.name, this.code);
			};
		}
	};
} else {
	console.error("Error: ControllerHandler couldn't find AngularJS");
}