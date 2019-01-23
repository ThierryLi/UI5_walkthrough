sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"	
	], function(Controller,MessageToast,JSONModel,ResourceModel){
		"use strict";
// The "use strict"; literal expression was introduced by JavaScript 1.8.5 
// (ECMAScript 5). It tells the browser to execute the code in a so called 
// “strict mode”. The strict mode helps to detect potential coding issues at
// an early state at development time, that means, for example, it makes sure 
// that variables are declared before they are used. Thus, it helps to prevent
// common JavaScript pitfalls and it’s therefore a good practice to use strict mode.

		return Controller.extend("sap.ui.demo.walkthrough.controller.App",{
			onInit: function(){
				// set data model on view
				var oData = { recipient:{
					name:"World"
				}
			}; 
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			
			// set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName:"sap.ui.demo.walkthrough.i18n.i18n"
			});
			this.getView().setModel(i18nModel,"i18n");
			},
			
			onShowHello: function() {
				// read msg from i18n model
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel().getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);
				
				// show message
				MessageToast.show(sMsg);
			}
		});
	});