/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 */
Ext.define('pmdCE.view.main.Main', {
	extend: 'Ext.panel.Panel',
	requires:[
	'Ext.layout.container.VBox'],
	xtype: 'layout-vertical-box',
	id: 'cemain',
	
	layout: {
		type: 'vbox',
		pack: 'start',
		align: 'stretch'
	},
		
	bodyPadding: 5,
	
	defaults: {
		border: true
	},
	
	ceToolbar: null,
	cePanel: null,
	
	startMeasure: null,
	endMeasure: null,
	staffNr: null,
	measureid: null,
	verStartId: null,
	verEndId: null,
	card: null,
	elementName: null,
	afterSaveText: null,
	
	initComponent: function () {
		
		this.ceToolbar = new pmdCE.view.toolbar.CEToolbar(),
		this.cePanel = new pmdCE.view.tabPanel.CEPanel(),
		
		this.items =[
		this.ceToolbar,
		this.cePanel]
		
		this.callParent()
	},
	
	setStartMeasure: function (startMeasure) {
		this.startMeasure = startMeasure;
	},
	
	setEndMeasure: function (endMeasure) {
		this.endMeasure = endMeasure;
	},
	
	setStaffNr: function (staffNr) {
		this.staffNr = staffNr;
	},
	
	setMeasureId: function (measureid) {
		this.measureid = measureid;
	},
	
	getStartMeasure: function () {
		return this.startMeasure;
	},
	
	getEndMeasure: function () {
		return this.endMeasure;
	},
	
	getStaffNr: function () {
		return this.staffNr;
	},
	
	getMeasureId: function () {
		return this.measureid;
	},
	
	setVerStartId: function (verStartId) {
		this.verStartId = verStartId;
	},
	
	setVerEndId: function (verEndId) {
		this.verEndId = verEndId;
	},
	
	getVerStartId: function () {
		return this.verStartId;
	},
	
	getVerEndId: function () {
		return this.verEndId;
	},
	
	setCard: function (card) {
		this.card = card;
	},
	
	getCard: function () {
		return this.card;
	},
	
	setComponentType: function (elementName) {
		this.elementName = elementName;
	},
	
	getComponentType: function () {
		return this.elementName;
	},
	
	setAfterSaveText: function (afterSaveText) {
		this.afterSaveText = afterSaveText;
	},
	
	getAfterSaveText: function () {
		return this.afterSaveText;
	}
});