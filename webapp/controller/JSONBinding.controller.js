sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
], (Controller, JSONModel, formatter) => {
    "use strict";

    return Controller.extend("sapips.training.fy26q3sapui5basictrainingexercise4jsonbindingbien.controller.JSONBinding", {
        formatter: formatter,
        onInit() {
            const oModel = new JSONModel({
                "EID": "bien.gilzon.c.lara",
                "Enabled": true,
                "Address": {
                    "Street": "123 Main St",
                    "Zip": "90210",
                    "City": "Beverly Hills",
                    "Country": "USA"
                },
                "SalesAmount": 123456.78,
                "CurrencyCode": "USD"
            });

            this.getView().setModel(oModel);    // default model

            const oSelectedProductModel = new JSONModel({
                "ProductID": "",
                "ProductName": "",
                "SupplierID": "",
                "CategoryID": "",
                "QuantityPerUnit": "",
                "UnitPrice": "",
                "UnitsInStock": "",
                "UnitsOnOrder": "",
                "ReorderLevel": "",
                "Discontinued": ""
            });

            // set another view model to contain selected product details                                            
            this.getView().setModel(oSelectedProductModel, "SelectedProductModel");
        },
        onSalesAmountChange(oEvent) {
            // Get the input (in string) from event
            const oInput = oEvent.getSource();
            const sValue = oInput.getValue();

            // Get number of numbers in the input value
            const iDigits = (sValue.match(/\d/g) || []).length;

            // Do validation and set value state
            if (iDigits > 8) {
                oInput.setValueState("Error");
                oInput.setValueStateText("Sales Amount cannot have more than 8 digits.");
            } else {
                oInput.setValueState("None");
                oInput.setValueStateText("");
            }
        },

        onProductPress(oEvent) {
            // Get the selected list item from the event
            const oList = oEvent.getSource();
            const oSelectedItem = oList.getSelectedItem();

            // Get the binding context path of the selected item
            const oSelectedItemPath = oSelectedItem.getBindingContextPath();

            // Get data from ProductsModel based on the selected item path
            const oProductsModel = this.getView().getModel("ProductsModel");
            const oProductData = oProductsModel.getProperty(oSelectedItemPath);

            // Set the selected product data to SelectedProductModel
            const oSelectedProductModel = this.getView().getModel("SelectedProductModel");
            oSelectedProductModel.setData(oProductData);
        }
    });
});