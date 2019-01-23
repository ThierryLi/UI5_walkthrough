sap.ui.define([
	"sap/ui/core/mvc/Controller"
	], function(Controller){
		"use strict";
// The "use strict"; literal expression was introduced by JavaScript 1.8.5 
// (ECMAScript 5). It tells the browser to execute the code in a so called 
// “strict mode”. The strict mode helps to detect potential coding issues at
// an early state at development time, that means, for example, it makes sure 
// that variables are declared before they are used. Thus, it helps to prevent
// common JavaScript pitfalls and it’s therefore a good practice to use strict mode.

		return Controller.extend("sap.ui.demo.walkthrough.controller.App",{
			onShowHello: function() {
				// Show a native javascript alert
				alert("Hello World");
			}
		});
	});