/**
 * Creates class pmdCE.view.tabPanel.slurs.SlursGridPanel that extend from pmdCE.view.tabPanel.CEGridPanel.
 * @class
 * @classdesc pmdCE.view.tabPanel.slurs.SlursGridPanel is a class for create
 * table tree in slurs-tab.
 */
Ext.define('pmdCE.view.tabPanel.slurs.SlursGridPanel', {
	extend: 'pmdCE.view.tabPanel.CEGridPanel',
	
	requires:[ 'pmdCE.model.Dynam'],
	
	id: 'slursgridpanel',
	
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
					/*Ext.getCmp('deleteButton_3').setDisabled(false);
					Ext.getCmp('changetobutton_3').setDisabled(false);
					
					if (selected.selected.items[0].data.obvious) {
						Ext.getCmp('changetobuttonchoice_3').setDisabled(false);
						Ext.getCmp('changetobuttonchoice_3').menu.setDisabled(false);
						Ext.getCmp('changetobuttonhairpin_3').setDisabled(true);
					} else {
						Ext.getCmp('changetobuttonchoice_3').setDisabled(true);
						Ext.getCmp('changetobuttonchoice_3').menu.setDisabled(true);
						Ext.getCmp('changetobuttonhairpin_3').setDisabled(false);
					}
					
					if (selected.selected.items[0].data.obvious) {
						Ext.getCmp('addelementbutton_3').setDisabled(true);
					} else {
						Ext.getCmp('addelementbutton_3').setDisabled(false);
					}*/
					
					selectedObject = selected.selected.items[0];
				} else if (typeof eOpts[0] !== 'undefined' && eOpts[0].data.depth === 2) {
					/*Ext.getCmp('deleteButton_3').setDisabled(false);
					Ext.getCmp('addelementbutton_3').setDisabled(true);
					Ext.getCmp('changetobutton_3').setDisabled(true);*/
					
					selectedObject = selected.selected.items[0].parentNode;
				}
				
				if (typeof selectedObject !== 'undefined') {
					Ext.getCmp('leafletfacsimile').showMeasure(selectedObject);	
					this.showXMLforSelectedElement(selectedObject);
				}
			}
		};
		
		this.editColumn.setDisabled(true);
		
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
			text: 'StartId',
			flex: 1,
			sortable: true,
			dataIndex: 'startid'
		},
		{
			text: 'EndId',
			flex: 1,
			dataIndex: 'endid',
			sortable: true
		},
		{
			text: 'Curvedir',
			flex: 1,
			dataIndex: 'curvedir',
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
			var object = $('<slur></slur>', {
				staff: (selectedObject.data.staff2 !== "" ? (selectedObject.data.staff + ' ' + selectedObject.data.staff2): selectedObject.data.staff),
				curvedir: selectedObject.data.curvedir,
				tstamp: selectedObject.data.tstamp !== "" ? selectedObject.data.tstamp : null,
				tstamp2: selectedObject.data.tstamp2 !== "" ? selectedObject.data.tstamp2 : null,
				startid: selectedObject.data.startid !== "" ? selectedObject.data.startid : null,
				endid: selectedObject.data.endid !== "" ? selectedObject.data.endid : null,
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
					var hair = $('<slur></slur>', {
						staff: (selectedObject.childNodes[j].data.staff2 !== "" ? (selectedObject.childNodes[j].data.staff + ' ' + selectedObject.childNodes[j].data.staff2): selectedObject.childNodes[j].data.staff),
						curvedir: selectedObject.childNodes[j].data.curvedir,
						tstamp: selectedObject.childNodes[j].data.tstamp !== "" ? selectedObject.childNodes[j].data.tstamp : null,
						tstamp2: selectedObject.childNodes[j].data.tstamp2 !== "" ? selectedObject.childNodes[j].data.tstamp2 : null,
						startid: selectedObject.childNodes[j].data.startid !== "" ? selectedObject.childNodes[j].data.startid : null,
						endid: selectedObject.childNodes[j].data.endid !== "" ? selectedObject.childNodes[j].data.endid : null,
						sameas: ""
					});
					
					$(orig).append($(hair));
					$(choice).append($(orig));
				}
				if (selectedObject.childNodes[j].data.tag === 'reg') {
					var reg = $('<reg></reg>');
					var hair = $('<slur></slur>', {
						staff: (selectedObject.childNodes[j].data.staff2 !== "" ? (selectedObject.childNodes[j].data.staff + ' ' + selectedObject.childNodes[j].data.staff2): selectedObject.childNodes[j].data.staff),
						curvedir: selectedObject.childNodes[j].data.curvedir,
						form: selectedObject.childNodes[j].data.form,
						tstamp: selectedObject.childNodes[j].data.tstamp !== "" ? selectedObject.childNodes[j].data.tstamp : null,
						tstamp2: selectedObject.childNodes[j].data.tstamp2 !== "" ? selectedObject.childNodes[j].data.tstamp2 : null,
						startid: selectedObject.childNodes[j].data.startid !== "" ? selectedObject.childNodes[j].data.startid : null,
						endid: selectedObject.childNodes[j].data.endid !== "" ? selectedObject.childNodes[j].data.endid : null,
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