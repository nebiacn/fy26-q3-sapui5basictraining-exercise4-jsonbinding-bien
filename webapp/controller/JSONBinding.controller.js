sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("sapips.training.fy26q3sapui5basictrainingexercise4jsonbindingbien.controller.JSONBinding", {
        onInit() {
            const oModel = new JSONModel( {
                "EID": "bien.gilzon.c.lara",
                "Enabled": true,
                "Address": {
                    "Street": "123 Main St",
                    "Zip": "90210",
                    "City": "Beverly Hills",
                    "Country": "USA"
                },
                "SalesAmount": 12345.67,
                "CurrencyCode": "USD"
            } );

            this.getView().setModel(oModel);    // default model
        }
    });
});