/*global QUnit*/

sap.ui.define([
	"logaligroup/Lists/controller/ListType.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ListType Controller");

	QUnit.test("I should test the ListType controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
