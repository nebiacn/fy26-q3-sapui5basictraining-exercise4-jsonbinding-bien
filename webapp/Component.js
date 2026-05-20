sap.ui.define([
    "sap/ui/core/UIComponent",
    "sapips/training/fy26q3sapui5basictrainingexercise4jsonbindingbien/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("sapips.training.fy26q3sapui5basictrainingexercise4jsonbindingbien.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});