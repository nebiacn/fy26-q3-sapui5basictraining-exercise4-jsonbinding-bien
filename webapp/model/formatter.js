sap.ui.define([
	'sap/ui/model/type/Currency',
    'sap/m/library'
], function (Currency, mobileLibrary) {
	'use strict';

	return {
		formatStockValue: function (fUnitPrice, iStockLevel, sCurrCode) {
			var oCurrency = new Currency();
			return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], 'string');
		},

        formatMail: function(sEid) {			
	    var oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();			
        return mobileLibrary.URLHelper.normalizeEmail(
            sEid + oBundle.getText("domain"),	
            oBundle.getText("mailSubject") + " " + sEid,	
            oBundle.getText("mailBody"));
        }

	};
});
