/**
 * Creates class pmdCE.view.tabPanel.EditDialog that extend from Ext.window.Window.
 * @class
 * @classdesc pmdCE.view.tabPanel.EditDialog is a class for change values in control events.
 */
Ext.define('pmdCE.view.tabPanel.EditDialog', {
	extend: 'Ext.window.Window',
	title: 'Edit Values',
	flex: 1,
	modal: true,
	bodyPadding: 10,
	
	staffField: null,
	staffField2: null,
	placeField: null,
	formField: null,
	tstampField: null,
	tstampField2: null,
	rend: null,
	measureField: null,
	
	selection: null,
	selectedNode: null,
	parentNode: null,
	
	/**
	 * Create all fields and navigation buttons
	 * @overrides
	 */
	initComponent: function () {
	
		var me = this;
		
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			me.selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
		} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
			me.selection = Ext.getCmp('dynamsgridpanel').getSelectionModel().getSelection()[0];
		} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
			me.selection = Ext.getCmp('dirsgridpanel').getSelectionModel().getSelection()[0];
		}
		
		var vordStaff = null;
		var vordStaff2 = null;
		var vordForm =  null;
		var vordPlace = null;
		var vordTStamp = null;
		var vordTStamp2 = null;
		var vordStartMeasure = null;
		var vordEndMeasure = null;
		
		if (me.selection.data.depth === 1) {
			me.selectedNode = me.selection;
			
			vordStaff = me.selectedNode.data.staff;
			vordStaff2 = me.selectedNode.data.staff2;
			vordStartMeasure = me.selectedNode.data.measurenr;
			vordForm = me.selectedNode.data.form;
			vordPlace = me.selectedNode.data.place;
			vordTStamp = me.selectedNode.data.tstamp;
			vordTStamp2 = me.selectedNode.data.tstamp2;
			Ext.getCmp('cemain').setStartMeasure(me.selectedNode.data.measurenr);
			Ext.getCmp('cemain').setStaffNr(vordStaff);
			
			if (typeof vordTStamp2 !== 'undefined' && typeof vordStartMeasure !== 'undefined') {
				var prefix = vordTStamp2.substring(0, 1);
				if (prefix !== 'm') {
					vordEndMeasure = parseInt(vordStartMeasure) + parseInt(prefix);
				} else {
					vordEndMeasure = parseInt(vordStartMeasure) + 1;
				}
				Ext.getCmp('cemain').setEndMeasure(vordEndMeasure);
			}
			
			if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
				vordRend = me.selectedNode.data.rend;
			} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
				vordRend = me.selectedNode.data.rend;
			}
			
			var movement = Ext.getCmp('movement').getText();
			Ext.getCmp('cemain').setMeasureId(movement + "_measure" + vordStartMeasure);
		} else if (me.selection.data.depth === 2) {
			me.selectedNode = me.selection;
			me.parentNode = me.selection.parentNode;
			me.vordStartMeasure = me.parentNode.data.measurenr;
			Ext.getCmp('cemain').setStartMeasure(me.parentNode.data.measurenr);
			var movement = Ext.getCmp('movement').getText();
			Ext.getCmp('cemain').setMeasureId(movement + "_measure" + vordStartMeasure);
			if (typeof vordTStamp2 !== 'undefined' && typeof vordStartMeasure !== 'undefined') {
				var prefix = vordTStamp2.substring(0, 1);
				if (prefix !== 'm') {
					vordEndMeasure = parseInt(vordStartMeasure) + parseInt(prefix);
				} else {
					vordEndMeasure = parseInt(vordStartMeasure) + 1;
				}
				Ext.getCmp('cemain').setEndMeasure(vordEndMeasure);
			}
			
			vordStaff = me.selectedNode.data.staff;
			Ext.getCmp('cemain').setStaffNr(vordStaff);
			vordStaff2 = me.selectedNode.data.staff2;
			
			vordForm = me.selectedNode.data.form;
			vordPlace = me.selectedNode.data.place;
			vordTStamp = me.selectedNode.data.tstamp;
			vordTStamp2 = me.selectedNode.data.tstamp2;
			
			if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
				vordRend = me.selectedNode.data.rend;
			} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
				vordRend = me.selectedNode.data.rend;
			}
		}
		
		
		// common
		me.staffField = me.createTextField('staffField', 'Staff');
		me.staffField.setValue(vordStaff);
		
		me.staffField2 = me.createTextField('secondStaffField', 'Second staff');
		me.staffField2.setValue(vordStaff2);
		
		me.measureField = me.createTextField('measureField', 'Measure');
		me.measureField.setValue(vordStartMeasure);
		
		me.placeField = me.createComboBox('Place', 'p3states');
		me.placeField.setValue(vordPlace);
		me.tstampField = me.createTextField('tstampField', 'Tstamp');
		me.tstampField.setValue(vordTStamp);
		
		// hairpin
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			me.formField = me.createComboBox('Form', 'form');
			me.tstampField2 = me.createTextField('tstampField2Obv', 'Tstamp2');
		} else {
			// dynams
			me.formField = me.createTextField('formOrig', 'Form');
			me.tstampField2 = me.createTextField('tstampField2', 'Tstamp2');
			me.rend = me.createTextField('rendOrig', 'Rend');
			me.rend.setValue(vordRend);
		}
		me.tstampField2.setValue(vordTStamp2);
		me.formField.setValue(vordForm);
		me.items = Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ?[
		me.staffField,
		me.staffField2,
		me.measureField,
		me.tstampField,
		me.tstampField2,
		me.placeField,
		me.formField]:[
		me.staffField,
		me.staffField2,
		me.measureField,
		me.tstampField,
		me.tstampField2,
		me.placeField,
		me.formField,
		me.rend]
		
		me.buttons =[ {
			text: 'Update',
			handler: function () {
				if (me.measureField.getValue() !== "") {
					Ext.getCmp('cemain').setStartMeasure(me.measureField.getValue());
					var movement = Ext.getCmp('movement').getText();
					Ext.getCmp('cemain').setMeasureId(movement + "_measure" + me.measureField.getValue());
				}
		
				if (typeof me.parentNode !== 'undefined' && me.parentNode !== null) {
					me.parentNode.set('operation', 'change');
					me.parentNode.set('measureid', Ext.getCmp('cemain').getMeasureId());
					me.parentNode.set('measurenr', Ext.getCmp('cemain').getStartMeasure());
				} else {
					me.selectedNode.set('operation', 'change');
					me.selectedNode.set('measureid', Ext.getCmp('cemain').getMeasureId());
					me.selectedNode.set('measurenr', Ext.getCmp('cemain').getStartMeasure());
				}
				
				if (me.staffField.getValue() !== "") {
					me.selectedNode.set('staff', me.staffField.getValue());
				}
				//if(staffField2.getValue() !== ""){
				me.selectedNode.set('staff2', me.staffField2.getValue());				
				//}
				
				if (me.tstampField.getValue() !== "") {
					me.selectedNode.set('tstamp', me.tstampField.value);
				}
				if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1 || me.tstampField2.getValue() !== "" 
						|| Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
					me.selectedNode.set('tstamp2', me.tstampField2.getValue());
				}
				
				if (me.placeField.getValue() !== null) {
					me.selectedNode.set('place', me.placeField.getValue());
				}
				if (me.formField.getValue() !== null) {
					me.selectedNode.set('form', me.formField.getValue());
				}
				if (typeof me.rend !== 'undefined' && me.rend !== null) {
					me.selectedNode.set('rend', me.rend.getValue());
				}
				
				if (typeof me.parentNode !== 'undefined' && me.parentNode !== null) {
					me.parentNode.expand();
					
					if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
						Ext.getCmp('cegridpanel').setSelection(me.parentNode);
						Ext.getCmp('cegridpanel').showXMLforSelectedElement(me.parentNode);
						Ext.getCmp('addelementbutton').setDisabled(false);
					} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
						Ext.getCmp('dynamsgridpanel').setSelection(me.parentNode);
						Ext.getCmp('addelementbutton_1').setDisabled(false);
						Ext.getCmp('dynamsgridpanel').showXMLforSelectedElement(me.parentNode);
					} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
						Ext.getCmp('dirsgridpanel').setSelection(me.parentNode);
						Ext.getCmp('addelementbutton_2').setDisabled(false);
						Ext.getCmp('dirsgridpanel').showXMLforSelectedElement(me.parentNode);
					}
				} else {
					
					if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
						Ext.getCmp('cegridpanel').setSelection(me.selectedNode);
						Ext.getCmp('cegridpanel').showXMLforSelectedElement(me.selectedNode);
					} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
						Ext.getCmp('dynamsgridpanel').setSelection(me.selectedNode);
						Ext.getCmp('dynamsgridpanel').showXMLforSelectedElement(me.selectedNode);
					} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
						Ext.getCmp('dirsgridpanel').setSelection(me.selectedNode);
						Ext.getCmp('dirsgridpanel').showXMLforSelectedElement(me.selectedNode);
					}
				}
								
				Ext.getCmp('saveButton').setDisabled(false);
								
				this.up('window').close();
			}
		}, {
			text: 'Cancel',
			handler: function () {
				this.up('window').close();
			}
		}],
		
		
		this.callParent()
	},
	
	/**
	 * Create optional text field.
	 * @param {string} fieldName - text name and id.
	 * @param {string} fieldLabel - field label.
	 */
	createTextField: function (fieldName, fieldLabel) {
		var ceTextField = Ext.create('Ext.form.field.Text', {
			name: fieldName,
			width: 285,
			fieldLabel: fieldLabel,
			listeners: {
				focus: function (e, eOpts) {
				},
				render: function (c) {
					c.getEl().on('keyup', function () {
					},
					c);
				}
			}
		});
		
		return ceTextField;
	},
	
	/**
	 * Create not editable combo box and store dependent from combo type.
	 * @param {string} fieldName - combo name.
	 * @param {string} fieldId - combo id and type definition.
	 */
	createComboBox: function (fieldName, fieldId) {
		var storeField = null;
		
		if (fieldId.indexOf('p3states') > -1) {
			storeField = new Array("above", "below", "between");
		}
		if (fieldId.indexOf('form') > -1) {
			storeField = new Array("cres", "dim");
		}		
		var combo = Ext.create('Ext.form.ComboBox', {
			fieldLabel: fieldName,
			store: storeField,
			width: 285,
			queryMode: 'local',
			displayField: 'name',
			editable: false,
			listeners: {
				select: function (combo, record, index) {
				}
			}
		});
		
		return combo;
	}
	
});