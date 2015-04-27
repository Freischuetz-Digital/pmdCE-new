/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 */

Ext.define('pmdCE.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.VBox'
    ],
    xtype: 'layout-vertical-box',
    id: 'cemain',
 
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    
    bodyPadding: 5,
   
    defaults: {
        //frame: true,
        border: true
       // bodyPadding: 3
    },
    
    ceToolbar: null,
    cePanel: null,
    
    startMeasure: null,
    endMeasure: null,
    staffNr: null,
    
    
    
    initComponent: function() {
    
    ceToolbar = new pmdCE.view.main.CEToolbar(),
    cePanel = new pmdCE.view.main.CEPanel(),
     
this.items = [
     ceToolbar,
       cePanel
       ]
 
this.callParent()

    },
       
    setStartMeasure: function(startMeasure){
        this.startMeasure = startMeasure;
    },
    
     setEndMeasure: function(startMeasure){
        this.startMeasure = startMeasure;
    },
    
     setStaffNr: function(staffNr){
        this.staffNr = staffNr;
    },
    
    getStartMeasure: function(){
        return this.startMeasure;
    },
    
     getEndMeasure: function(){
        return this.endMeasure;
    },
    
     getStaffNr: function(){
        return this.staffNr;
    }

    });
    