/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('pmdCE.Application', {
    extend: 'Ext.app.Application',
   
    name: 'pmdCE',
    
    views: [           
       'main.CEToolbar',
       'main.FacsimileView',
       'main.XMLEditorView',
       'main.CETabPanel',  
       'main.CEButtonPanel', 
       'main.VerovioImageStart',
       'main.VerovioImageEnd',
       'main.ChoiceDialog',
       'main.CEGridPanel',
       'main.dynams.DynamsGridPanel',
       'main.dynams.DynamsButtonsPanel',
       'main.hairpins.HairpinsGridPanel',
       'main.hairpins.HairpinsButtonPanel',
       'main.AddObviousElDialog',
       'main.AddAmbiguousElDialog',
       'main.EditDialog',
       'main.ChoiceTstampCard',
       'main.ChoiceTstamp2Card',
       'main.ChoiceStaffCard',
       'main.ChoiceTimeCard',
       'main.ChoiceTstampStaffCard',
       'main.ChoiceTstamp2StaffCard',
       'main.ChoiceTimeStaffCard',
       'main.AddOrigDialog',
       'main.AddRegDialog',
       'main.ObviousCard',
       'main.ChangeToAmDialog',
       'main.ChangeToChoiceTstampCard',
       'main.ChangeToChoiceTstamp2Card',
       'main.ChangeToChoiceStaffCard',
       'main.ChangeToChoiceTimeCard',
       'main.ChangeToChoiceTstampStaffCard',
       'main.ChangeToChoiceTstamp2StaffCard',
       'main.ChangeToChoiceTimeStaffCard',
       'main.AddObviousElDialog',
       'main.ChangeObviousElDialog',
       'main.ControlEventsItem',
       'main.ChangeObviousCard',
       'main.DeleteDialog',
       'main.AfterSaveDialog',
       'main.ChangeToObDialog',
       'main.LeafletFacsimile',
       'main.CEPanel',          
       'main.Main'      
    ],

    models: [
        'Source',
        'Movement',
        'Dynam',
        'Page',
        'Hairpin',
        'Slurs'       
    ],
    
    stores: [
        //'slursStore'
    ],
    
    sourcesStore: null,
    movementsStore: null,
    pagesStore: null,
    extStaff_start: null,
    slursStore: null,
    renderer: null,
    //hairpinsDataStore: null,
    hairpinDataStore: null,
    dynamDataStore: null,
    hairpinStart: null,
    facsimilePath: null,
    saveStore: null,
    facsimileStore: null,
    
    pageNr: null,
    
    storeT: null,
   
    
    launch: function () {
 
    renderer = new verovio.toolkit(),
    
        sourcesStore = Ext.create('Ext.data.Store', {
            model: 'pmdCE.model.Source',
             proxy: {
                 type: 'ajax',
               // url: 'data/pmd_ce_getNavigation.xql',
               url: 'resources/xql/pmd_ce_getNavigation.xql',
                 reader: {
                     type: 'json',
                     rootProperty: 'sigle'
                 }
             },
             autoLoad: true
         });
         
         hairpinDataStore = Ext.create('Ext.data.TreeStore', {
    model: 'pmdCE.model.Hairpin',
  
    extraParams: {path: ''},
             proxy:{
        type: 'ajax',
      url: 'resources/xql/getControlEvents.xql'
       
      // url: 'resources/data/tree/treegrid_1.json'
      
    },
    autoLoad: false
});

 dynamDataStore = Ext.create('Ext.data.TreeStore', {
    model: 'pmdCE.model.Dynam',
  
    extraParams: {path: ''},
             proxy:{
        type: 'ajax',
      url: 'resources/xql/getDynams.xql'
       
     // url: 'resources/data/tree/treegrid_2.json'
      
    },
    autoLoad: false
});


/*facsimileStore= Ext.create('Ext.data.Store', {
            model: 'pmdCE.model.Source',
            extraParams: {path: ''},
             proxy: {
                 type: 'ajax',
                 url: 'data/getZones.xql'
               // url: 'resources/xql/getZones.xql',
//                reader: {
//                     type: 'json',
//                     rootProperty: 'sigle'
//                 }
             },
             autoLoad: true
         });*/
  
       
         sourcesStore.load(); 
    },
    
   
    getSourcesStore: function(){
    return sourcesStore;
    },
    
  /*  getFacsimileStore: function(){
    return facsimileStore;
    },
    */
    getSaveStore: function(){
    return saveStore;
    },
    
     getExtStaffStart: function(){
    return extStaff_start;
    },
    
     getHairpinsStore: function(){
    return slursStore;
    },
    
     getRenderer: function(){
    return renderer;
    },
    
    getHairpinDataStore: function(){
    return hairpinDataStore;
    },
    
    getDynamDataStore: function(){
    return dynamDataStore;
    }
   

});
