/**
 * Creates class pmdCE.view.tabPanel.hairpins.HairpinsGridPanel that extend from pmdCE.view.tabPanel.CEGridPanel.
 * @class
 * @classdesc pmdCE.view.tabPanel.hairpins.HairpinsGridPanel is a class for create
 * table tree in hairpins-tab.
 */
Ext.define('pmdCE.view.tabPanel.hairpins.HairpinsGridPanel', {
	extend: 'pmdCE.view.tabPanel.CEGridPanel',
	
	requires:[
	'pmdCE.model.Hairpin'],
	
	id: 'cegridpanel',
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
					Ext.getCmp('deleteButton').setDisabled(false);
					Ext.getCmp('changetobutton').setDisabled(false);
					
					if (selected.selected.items[0].data.obvious) {
						Ext.getCmp('changetobuttonchoice').setDisabled(false);
						Ext.getCmp('changetobuttonchoice').menu.setDisabled(false);
						Ext.getCmp('changetobuttonhairpin').setDisabled(true);
					} else {
						Ext.getCmp('changetobuttonchoice').setDisabled(true);
						Ext.getCmp('changetobuttonchoice').menu.setDisabled(true);
						Ext.getCmp('changetobuttonhairpin').setDisabled(false);
					}
					
					if (selected.selected.items[0].data.obvious) {
						Ext.getCmp('addelementbutton').setDisabled(true);
					} else {
						Ext.getCmp('addelementbutton').setDisabled(false);
					}
					
					selectedObject = selected.selected.items[0];
				} else if (typeof eOpts[0] !== 'undefined' && eOpts[0].data.depth === 2) {
					Ext.getCmp('deleteButton').setDisabled(false);
					Ext.getCmp('addelementbutton').setDisabled(true);
					Ext.getCmp('changetobutton').setDisabled(true);
					
					selectedObject = selected.selected.items[0].parentNode;
				}
				
				if (typeof selectedObject !== 'undefined') {					
					Ext.getCmp('leafletfacsimile').showMeasure(selectedObject);					
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
		}, {
			text: 'Form',
			flex: 1,
			dataIndex: 'form',
			sortable: true
		},
		this.editColumn]
		this.callParent()
	},
	
	/**
	 * Create xml-fragment for xml view
	 */
	showXMLforSelectedElement: function (selectedObject) {
		var elementType = null;
		if (selectedObject.data.type === 'hairpin') {
			elementType = '<hairpin></hairpin>';
		} else {
			elementType = '<dynam></dynam>';
		}
				
		var objects = $('<div></div>');
		if (selectedObject.data.obvious) {
			var object = $(elementType, {
				staff: (selectedObject.data.staff2 !== "" ? (selectedObject.data.staff + ' ' + selectedObject.data.staff2): selectedObject.data.staff),
				place: selectedObject.data.place,
				form: selectedObject.data.form,
				tstamp: selectedObject.data.tstamp,
				tstamp2: selectedObject.data.tstamp2,
				'xml:id': selectedObject.data.id,
				xmlns: "http://www.music-encoding.org/ns/mei",
				sameas: ""
			});
			
			$(objects).append($(object));
		} else {
			
			var choice = $('<choice></choice>', {
				'xml:id': selectedObject.data.id,
				xmlns: "http://www.music-encoding.org/ns/mei"
			});
			for (var j = 0; j < selectedObject.childNodes.length; j++) {
				if (selectedObject.childNodes[j].data.tag === 'orig') {
					var orig = $('<orig></orig>');
					var hair = $(elementType, {
						staff: (selectedObject.childNodes[j].data.staff2 !== "" ? (selectedObject.childNodes[j].data.staff + ' ' + selectedObject.childNodes[j].data.staff2): selectedObject.childNodes[j].data.staff),
						place: selectedObject.childNodes[j].data.place,
						form: selectedObject.childNodes[j].data.form,
						tstamp: selectedObject.childNodes[j].data.tstamp,
						tstamp2: selectedObject.childNodes[j].data.tstamp2,
						sameas: ""
					});
					
					$(orig).append($(hair));
					$(choice).append($(orig));
				}
				if (selectedObject.childNodes[j].data.tag === 'reg') {
					var reg = $('<reg></reg>');
					var hair = $(elementType, {
						staff: (selectedObject.childNodes[j].data.staff2 !== "" ? (selectedObject.childNodes[j].data.staff + ' ' + selectedObject.childNodes[j].data.staff2): selectedObject.childNodes[j].data.staff),
						place: selectedObject.childNodes[j].data.place,
						form: selectedObject.childNodes[j].data.form,
						tstamp: selectedObject.childNodes[j].data.tstamp,
						tstamp2: selectedObject.childNodes[j].data.tstamp2,
						sameas: ""
					});
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
		}else if (selectedObject.data.type === 'slur') {
			$('#slursxmlview-body').html(tmp);
		}
	}
});