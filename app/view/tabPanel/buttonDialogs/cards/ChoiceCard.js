/**
 * Creates class pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceCard that extend from Ext.panel.Panel.
 * @class
 * @classdesc pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceCard is a help class for create
 * two cards for 'create'- and 'change to...'-dialogs.
 */
Ext.define('pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceCard', {
	extend: 'Ext.panel.Panel',
	requires:[
	'Ext.layout.container.Card'],
	
	layout: 'card',
	
	defaults: {
		border: false,
		autoScroll: true,
		bodyPadding: 10
	},
	
	defaultListenerScope: true,
	border: false,
	autoScroll: true,
	
	/**
	 * Create a navigation button for card.
	 * @param {string} navItemId - button id.
	 * @param {string} navText - button name.
	 * @param {object} navHandler - handler for button.
	 */
	createNavigationButton: function (navItemId, navText, navHandler) {
		var navButton = Ext.create('Ext.button.Button', {
			itemId: navItemId,
			text: navText,
			handler: navHandler,
			disabled: true
		})
		return navButton;
	},
	
	/**
	 * Handle function for switch previous-button
	 * @param {object} btn - previous-button.
	 */
	showPrevious: function (btn) {
		this.doCardNavigation(-1);
	},
	
	/**
	 * Switch to next or prev. card
	 * @param {int} incr - number.
	 */
	doCardNavigation: function (incr) {
		var me = this;
		var l = me.getLayout();
		var i = l.activeItem.id.split('card-')[1];
		var next = parseInt(i, 10) + incr;
		l.setActiveItem(next);
		me.down('#card-prev').setDisabled(next === 0);
		me.down('#card-next').setDisabled(next === 1);
	},
	
	/**
	 * Create a mandatory, not editable combo box and store dependent from combo type.
	 * @param {string} fieldName - combo name.
	 * @param {string} fieldId - combo id and type definition.
	 */
	createComboBox: function (fieldName, fieldId) {
		var me = this;
		var storeField = null;
		
		if (fieldId.indexOf('staff') > -1) {
			var pageStaffMap = Ext.getCmp('cetoolbar').staffNr;
			var selectedPage = Ext.getCmp('pages').getText();
			
			var test = pageStaffMap[selectedPage];
			
			var storeField = new Array(test.length);
			var value = test[0];
			for (var i = 0; i < test.length; i++) {
				storeField[i] = value++;
			}
		}
		if (fieldId === 'startmeasure' || fieldId === 'endmeasure') {
			var pageMeasuresMap = Ext.getCmp('cetoolbar').pageMeasuresMap;
			var selectedPage = Ext.getCmp('pages').getText();
			
			var test = pageMeasuresMap[selectedPage];
			
			storeField = new Array(test.length);
			var value = test[0];
			for (var i = 0; i < test.length; i++) {
				storeField[i] = value++;
			}
		}
		if (fieldId.indexOf('place') > -1) {
			storeField = new Array("above", "below");
		}
		if (fieldId.indexOf('p3states') > -1) {
			storeField = new Array("above", "below", "between");
		}
		if (fieldId.indexOf('form') > -1) {
			storeField = new Array("cres", "dim");
		}
		
		var combo = Ext.create('Ext.form.ComboBox', {
			fieldLabel: fieldName,
			id: fieldId,
			store: storeField,
			queryMode: 'local',
			displayField: 'name',
			editable: false,
			allowBlank: false,
			invalidCls: '',
			listeners: {
				select: function (combo, record, index) {
					if (combo.id.indexOf('staff') > -1) {
						me.handleStaffField(combo);
					}
					if (combo.id === 'startmeasure' || combo.id === 'endmeasure') {
						me.handleMeasureField(combo);
					}
					if (fieldId.indexOf('place') > -1 || fieldId.indexOf('p3') > -1) {
						me.handlePlaceField(combo);
					}
					if (fieldId.indexOf('form') > -1) {
						me.handleFormField(combo);
					}
				}
			}
		});
		return combo;
	},
	
	/**
	 * Create a check box.
	 * @param {string} fieldName - check box name.
	 * @param {string} fieldId - check box id.
	 */
	createCheckBox: function (fieldName, filedid) {
		var me = this;
		var ceCheckBox = Ext.create('Ext.form.field.Checkbox', {
			fieldLabel: fieldName,
			id: filedid,
			listeners: {
				change: function (cb, checked) {
					me.changeSelection(cb, checked);
				}
			}
		});
		return ceCheckBox;
	},
	
	
	/**
	 * Create optional text field.
	 * @param {string} fieldName - text name and id.
	 * @param {string} fieldLabel - field label.
	 */
	createOptionalTextField: function (fieldName, fieldLabel) {
		var me = this;
		var ceTextField = Ext.create('Ext.form.field.Text', {
			name: fieldName,
			id: fieldName,
			fieldLabel: fieldLabel,
			listeners: {
				focus: function (e, eOpts) {
					me.selectedFieldId = fieldName;
					me.handleTextField();
				},
				render: function (c) {
					me.selectedFieldId = fieldName;
					c.getEl().on('keyup', function () {
						me.handleTextField();
					},
					c);
				}
			}
		});
		return ceTextField;
	},
	
	/**
	 * Create mandatory text field.
	 * @param {string} fieldName - text name and id.
	 * @param {string} fieldLabel - field label.
	 */
	createMandatoryTextField: function (fieldName, fieldLabel) {
		var me = this;
		var ceTextField = Ext.create('Ext.form.field.Text', {
			name: fieldName,
			id: fieldName,
			allowBlank: false,
			invalidCls: '',
			fieldLabel: fieldLabel,
			listeners: {
				focus: function (e, eOpts) {
					me.selectedFieldId = fieldName;
					me.handleTextField();
				},
				render: function (c) {
					c.getEl().on('keyup', function () {
						me.selectedFieldId = fieldName;
						me.handleTextField();
					},
					c);
				}
			}
		});
		return ceTextField;
	},
	
	/**
	 * Get selected tstamp- or tstamp2- textfield for verovio.
	 */
	getSelectedFieldId: function () {
		return this.selectedFieldId;
	}
});