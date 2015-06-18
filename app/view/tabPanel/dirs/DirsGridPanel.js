/**
 * Creates class pmdCE.view.tabPanel.hairpins.HairpinsGridPanel that extend from pmdCE.view.tabPanel.DirsGridPanel.
 * @class
 * @classdesc pmdCE.view.tabPanel.hairpins.DirsGridPanel is a class for create
 * table tree in dirs-tab.
 */
Ext.define('pmdCE.view.tabPanel.dirs.DirsGridPanel', {
	extend: 'pmdCE.view.tabPanel.CEGridPanel',
	
	requires:[
	'pmdCE.model.Dir'],
	
	id: 'dirsgridpanel',
	
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
					Ext.getCmp('deleteButton_2').setDisabled(false);
					Ext.getCmp('changetobutton_2').setDisabled(false);
					
					if (selected.selected.items[0].data.obvious) {
						Ext.getCmp('changetobuttonchoice_2').setDisabled(false);
						Ext.getCmp('changetobuttonchoice_2').menu.setDisabled(false);
						Ext.getCmp('changetobuttonhairpin_2').setDisabled(true);
					} else {
						Ext.getCmp('changetobuttonchoice_2').setDisabled(true);
						Ext.getCmp('changetobuttonchoice_2').menu.setDisabled(true);
						Ext.getCmp('changetobuttonhairpin_2').setDisabled(false);
					}
					
					if (selected.selected.items[0].data.obvious) {
						Ext.getCmp('addelementbutton_2').setDisabled(true);
					} else {
						Ext.getCmp('addelementbutton_2').setDisabled(false);
					}
					
					selectedObject = selected.selected.items[0];
				} else if (typeof eOpts[0] !== 'undefined' && eOpts[0].data.depth === 2) {
					Ext.getCmp('deleteButton_2').setDisabled(false);
					Ext.getCmp('addelementbutton_2').setDisabled(true);
					Ext.getCmp('changetobutton_2').setDisabled(true);
					
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
		}, {
			text: 'Staff',
			flex: 1,
			sortable: true,
			dataIndex: 'staff'
		}, {
			text: '2. Staff',
			flex: 1,
			sortable: true,
			dataIndex: 'staff2'
		}, {
			text: 'Measure',
			flex: 1,
			sortable: true,
			dataIndex: 'measurenr'
		}, {
			text: 'Tstamp',
			flex: 1,
			sortable: true,
			dataIndex: 'tstamp'
		}, {
			text: 'Tstamp2',
			flex: 1,
			dataIndex: 'tstamp2',
			sortable: true
		}, {
			text: 'Place',
			flex: 1,
			dataIndex: 'place',
			sortable: true
		}, {
			text: 'Form',
			flex: 1,
			dataIndex: 'form',
			sortable: true
		}, {
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
			var object = $('<dir></dir>', {
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
					var hair = $('<dir></dir>', {
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
					var hair = $('<dir></dir>', {
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
		} else if (selectedObject.data.type === 'dynam') {
			$('#dynamsxmlview-body').html(tmp);
		} else if (selectedObject.data.type === 'dir') {
			$('#dirsxmlview-body').html(tmp);
		}
	}
});