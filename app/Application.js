/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('pmdCE.Application', {
	extend: 'Ext.app.Application',
	
	name: 'pmdCE',
	
	views:[
	'main.Main',
	'toolbar.CEToolbar',
	'toolbar.AfterSaveDialog',
	'facsimileView.FacsimileView',
	'facsimileView.LeafletFacsimile',
	'tabPanel.XMLView',
	'tabPanel.CETabPanel',
	'tabPanel.CEButtonPanel',
	'tabPanel.EditDialog',
	'tabPanel.ControlEventsItem',
	'tabPanel.CEGridPanel',
	'tabPanel.CEPanel',
	'tabPanel.buttonDialogs.VerovioImageStart',
	'tabPanel.buttonDialogs.VerovioImageEnd',
	'tabPanel.buttonDialogs.AddObviousElDialog',
	'tabPanel.buttonDialogs.AddAmbiguousElDialog',
	'tabPanel.buttonDialogs.AddOrigDialog',
	'tabPanel.buttonDialogs.AddRegDialog',
	'tabPanel.buttonDialogs.ChangeObviousElDialog',
	'tabPanel.buttonDialogs.DeleteDialog',
	'tabPanel.buttonDialogs.cards.ChoiceTstampCard',
	'tabPanel.buttonDialogs.cards.ChoiceTstamp2Card',
	'tabPanel.buttonDialogs.cards.ChoiceStaffCard',
	'tabPanel.buttonDialogs.cards.ChoiceTimeCard',
	'tabPanel.buttonDialogs.cards.ChoiceTstampStaffCard',
	'tabPanel.buttonDialogs.cards.ChoiceTstamp2StaffCard',
	'tabPanel.buttonDialogs.cards.ChoiceTimeStaffCard',
	'tabPanel.buttonDialogs.cards.ChoiceCard',
	'tabPanel.buttonDialogs.cards.ObviousCard',
	'tabPanel.buttonDialogs.cards.ChangeObviousCard',
	'tabPanel.dirs.DirsGridPanel',
	'tabPanel.dirs.DirsButtonsPanel',
	'tabPanel.dynams.DynamsGridPanel',
	'tabPanel.dynams.DynamsButtonsPanel',
	'tabPanel.hairpins.HairpinsGridPanel',
	'tabPanel.hairpins.HairpinsButtonPanel'],
	
	models:[
	'Source',
	'Movement',
	'Dynam',
	'Page',
	'Dir',
	'Hairpin',
	'Slurs'],
	
	stores:[],
	
	sourcesStore: null,
	//movementsStore: null,
	//pagesStore: null,
	//slursStore: null,
	renderer: null,
	hairpinDataStore: null,
	dynamDataStore: null,
	dirDataStore: null,
	
	launch: function () {
		
		renderer = new verovio.toolkit(),
		
		sourcesStore = Ext.create('Ext.data.Store', {
			model: 'pmdCE.model.Source',
			proxy: {
				type: 'ajax',
				url: 'data/pmd_ce_getNavigation.xql',
				//   url: 'resources/xql/pmd_ce_getNavigation.xql',
				reader: {
					type: 'json',
					rootProperty: 'sigle'
				}
			},
			autoLoad: true
		});
		
		hairpinDataStore = Ext.create('Ext.data.TreeStore', {
			model: 'pmdCE.model.Hairpin',
			
			extraParams: {
				path: ''
			},
			proxy: {
				type: 'ajax',
				// url: 'resources/xql/getControlEvents.xql'
				
				url: 'data/tree/treegrid_1.json'
			},
			autoLoad: false
		});
		
		dynamDataStore = Ext.create('Ext.data.TreeStore', {
			model: 'pmdCE.model.Dynam',
			
			extraParams: {
				path: ''
			},
			proxy: {
				type: 'ajax',
				// url: 'resources/xql/getDynams.xql'
				
				url: 'data/tree/treegrid_2.json'
			},
			autoLoad: false
		});
		
		dirDataStore = Ext.create('Ext.data.TreeStore', {
			model: 'pmdCE.model.Dir',
			
			extraParams: {
				path: ''
			},
			proxy: {
				type: 'ajax',
				// url: 'resources/xql/getDirs.xql'
				
				url: 'data/tree/treegrid_3.json'
			},
			autoLoad: false
		});
		
		sourcesStore.load();
	},
	
	
	getSourcesStore: function () {
		return sourcesStore;
	},
	
	getRenderer: function () {
		return renderer;
	},
	
	getHairpinDataStore: function () {
		return hairpinDataStore;
	},
	
	getDynamDataStore: function () {
		return dynamDataStore;
	},
	
	getDirDataStore: function () {
		return dirDataStore;
	}
});