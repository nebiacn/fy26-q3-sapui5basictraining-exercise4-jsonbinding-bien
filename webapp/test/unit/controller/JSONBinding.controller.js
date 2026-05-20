/*global QUnit*/

sap.ui.define([
	"sapips/training/fy26q3sapui5basictrainingexercise4jsonbindingbien/controller/JSONBinding.controller"
], function (Controller) {
	"use strict";

	QUnit.module("JSONBinding Controller");

	QUnit.test("I should test the JSONBinding controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
