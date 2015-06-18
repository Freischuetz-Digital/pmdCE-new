/**
 * Creates class pmdCE.view.tabPanel.hairpins.DynamsGridPanel that extend from pmdCE.view.tabPanel.CEGridPanel.
 * @class
 * @classdesc pmdCE.view.tabPanel.hairpins.DynamsGridPanel is a class for create
 * table tree in dynams-tab.
 */
Ext.define('pmdCE.view.tabPanel.dynams.DynamsGridPanel', {
	extend: 'pmdCE.view.tabPanel.CEGridPanel',
	
	requires:[ 'pmdCE.model.Dynam'],
	
	id: 'dynamsgridpanel',
	
	editColumn: null,
	
	/**
	 * Create table tree columns and selection listener
	 * @overrides
	 */
	initComponent: function () {
		
		this.editColumn = this.createEditColumn();
		
		this.listeners = {
			
			selectionchange: function (selected, eOpts) {
				
				var selectedObject;
				
				if (typeof eOpts[0] !== 'undefined' && eOpts[0].data.depth === 1) {
					Ext.getCmp('deleteButton_1').setDisabled(false);
					Ext.getCmp('changetobutton_1').setDisabled(false);
					
					if (selected.selected.items[0].data.obvious) {
						Ext.getCmp('changetobuttonchoice_1').setDisabled(false);
						Ext.getCmp('changetobuttonchoice_1').menu.setDisabled(false);
						Ext.getCmp('changetobuttonhairpin_1').setDisabled(true);
					} else {
						Ext.getCmp('changetobuttonchoice_1').setDisabled(true);
						Ext.getCmp('changetobuttonchoice_1').menu.setDisabled(true);
						Ext.getCmp('changetobuttonhairpin_1').setDisabled(false);
					}
					
					if (selected.selected.items[0].data.obvious) {
						Ext.getCmp('addelementbutton_1').setDisabled(true);
					} else {
						Ext.getCmp('addelementbutton_1').setDisabled(false);
					}
					
					selectedObject = selected.selected.items[0];
				} else if (typeof eOpts[0] !== 'undefined' && eOpts[0].data.depth === 2) {
					Ext.getCmp('deleteButton_1').setDisabled(false);
					Ext.getCmp('addelementbutton_1').setDisabled(true);
					Ext.getCmp('changetobutton_1').setDisabled(true);
					
					selectedObject = selected.selected.items[0].parentNode;
				}
				
				if (typeof selectedObject !== 'undefined') {
					this.showXMLforSelectedElement(selectedObject);
				}
			}
		};
		
		this.columns =[ {
			xtype: 'treecolumn',
			text: 'Name/Orig/Reg',
			flex: 3,
			sortable: true,
			dataIndex: 'name'
		},
		{
			text: 'Staff',
			flex: 1,
			sortable: true,
			dataIndex: 'staff'
		},
		{
			text: '2. Staff',
			flex: 1,
			sortable: true,
			dataIndex: 'staff2'
		},
		{
			text: 'Measure',
			flex: 1,
			sortable: true,
			dataIndex: 'measurenr'
		},
		{
			text: 'Tstamp',
			flex: 1,
			sortable: true,
			dataIndex: 'tstamp'
		},
		{
			text: 'Tstamp2',
			flex: 1,
			dataIndex: 'tstamp2',
			sortable: true
		},
		{
			text: 'Place',
			flex: 1,
			dataIndex: 'place',
			sortable: true
		},
		{
			text: 'Form',
			flex: 1,
			dataIndex: 'form',
			sortable: true
		},
		{
			text: 'Rend',
			flex: 1,
			dataIndex: 'rend',
			sortable: true
		},
		
		this.editColumn]
		this.callParent()
	},
	
	/**
	 * Create xml-fragment for xml view
	 */
	showXMLforSelectedElement: function (selectedObject) {
		var objects = $('<div></div>');
		if (selectedObject.data.obvious) {
			var object = $('<dynam></dynam>', {
				staff: (selectedObject.data.staff2 !== "" ? (selectedObject.data.staff + ' ' + selectedObject.data.staff2): selectedObject.data.staff),
				place: selectedObject.data.place,
				tstamp: selectedObject.data.tstamp,
				tstamp2: selectedObject.data.tstamp2 !== "" ? selectedObject.data.tstamp2 : null,
				'xml:id': selectedObject.data.id,
				xmlns: "http://www.music-encoding.org/ns/mei",
				sameas: ""
			});
			if (selectedObject.data.rend !== '') {
				var rend = $('<rend></rend>', {
					rend: selectedObject.data.rend
				});
				$(rend).append(selectedObject.data.form);
				$(object).append($(rend));
			} else {
				$(object).append(selectedObject.data.form);
			}
			$(objects).append($(object));
		} else {
			
			var choice = $('<choice></choice>', {
				'xml:id': selectedObject.data.id,
				xmlns: "http://www.music-encoding.org/ns/mei"
			});
			console.log('***************');
			console.log(selectedObject);
			for (var j = 0; j < selectedObject.childNodes.length; j++) {
				if (selectedObject.childNodes[j].data.tag === 'orig') {
					var orig = $('<orig></orig>');
					var hair = $('<dynam></dynam>', {
						staff: (selectedObject.childNodes[j].data.staff2 !== "" ? (selectedObject.childNodes[j].data.staff + ' ' + selectedObject.childNodes[j].data.staff2): selectedObject.childNodes[j].data.staff),
						place: selectedObject.childNodes[j].data.place,
						tstamp: selectedObject.childNodes[j].data.tstamp,
						tstamp2: selectedObject.childNodes[j].data.tstamp2 !== "" ? selectedObject.childNodes[j].data.tstamp2 : null,
						sameas: ""
					});
					if (selectedObject.childNodes[j].data.rend !== '') {
						var rend = $('<rend></rend>', {
							rend: selectedObject.childNodes[j].data.rend
						});
						$(rend).append(selectedObject.childNodes[j].data.form);
						$(hair).append($(rend));
					} else {
						$(hair).append(selectedObject.childNodes[j].data.form);
					}
					$(orig).append($(hair));
					$(choice).append($(orig));
				}
				if (selectedObject.childNodes[j].data.tag === 'reg') {
					var reg = $('<reg></reg>');
					var hair = $('<dynam></dynam>', {
						staff: (selectedObject.childNodes[j].data.staff2 !== "" ? (selectedObject.childNodes[j].data.staff + ' ' + selectedObject.childNodes[j].data.staff2): selectedObject.childNodes[j].data.staff),
						place: selectedObject.childNodes[j].data.place,
						form: selectedObject.childNodes[j].data.form,
						tstamp: selectedObject.childNodes[j].data.tstamp,
						tstamp2: selectedObject.childNodes[j].data.tstamp2 !== "" ? selectedObject.childNodes[j].data.tstamp2 : null,
						sameas: ""
					});
					if (selectedObject.childNodes[j].data.rend !== '') {
						var rend = $('<rend></rend>', {
							rend: selectedObject.childNodes[j].data.rend
						});
						$(rend).append(selectedObject.childNodes[j].data.form);
						$(hair).append($(rend));
					} else {
						$(hair).append(selectedObject.childNodes[j].data.form);
					}
					$(reg).append($(hair));
					$(choice).append($(reg));
				}
			}
			
			$(objects).append($(choice));
		}
		
		var tmp = hljs.highlightAuto($(objects).html()).value;
		
		if (selectedObject.data.type === 'hairpin') {
			$('#xmleditorview-body').html(tmp);
		} else {
			$('#dynamsxmlview-body').html(tmp);
		}
	}
});