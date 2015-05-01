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
       'main.SlursItem',
       'main.HairpinsItem',
       'main.DynamsItem',
       'main.DirsItem',
       'main.VerovioView', 
       'main.VerovioImageStart',
       'main.VerovioImageEnd',
       'main.ChoiceDialog',
       'main.CEGridPanel',
       'main.AddObviousElDialog',
       'main.AddAmbiguousElDialog',
       'main.EditDialog',
       'main.AmbiguousCard',
       'main.ObviousCard',
       'main.ChangeToAmDialog',
       'main.DeleteDialog',
       'main.ChangeToObDialog',
       'main.CEPanel',          
       'main.Main'      
    ],

    models: [
        'Source',
        'Movement',
        'Page',
        'Hairpins',
        'Hairpin',
        'HairpinStart',
        'User',
        'Task',
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
    hairpinStart: null,
    facsimilePath: null,
    saveStore: null,
    
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
   /* root: {
        name: 'People',
        expanded: true
    },*/
    extraParams: {path: ''},
             proxy:{
        type: 'ajax',
      url: 'resources/xql/getControlEvents.xql'
       
       // url: 'resources/data/tree/treegrid_1.json'
      
    },
    autoLoad: false
});



   /*      saveStore = Ext.create('Ext.data.Store', {
            model: 'pmdCE.model.Hairpin',
      //  extraParams: {path: ''},
             proxy:{
        type: 'ajax',
        method: 'POST'
        //  url: 'resources/xql/saveMEI.xql'
    },
    autoLoad: false
});*/
//      new Ext.data.proxy.Ajax({
//    url: 'users.json',
//    model: 'User',
//    reader: 'json'
//}); 
     
     /*    hairpinDataStore = Ext.create('Ext.data.TreeStore', {
         storeId:'hairpinDataStore',
            model: 'pmdCE.model.Hairpin',
             root: {
        name: 'People',
        expanded: true
    },
            
             proxy: {
            
                 type: 'ajax',
                 extraParams: {path: ''},
                 url: 'resources/data/tree/treegrid_1.json'
                 // url: 'resources/xql/getControlEvents.xql'
             },
             autoLoad: false
         }),*/
         
 /* Ext.Ajax.request({
    url: 'resources/xql/pmd_ce_getFacsimilePage.xql',
    async: false,
    method: 'GET',
    params: {
        path: "A_surface101"
    },
    success: function(response){
       facsimilePath = response;
       console.log(facsimilePath);
       
    }
});
    */
       
         sourcesStore.load();
         
        
        
    },
    
  /*  getFacsimilePath: function(){
    //console.log(this.facsimilePath);
    return this.facsimilePath;
    },*/
    
    getSourcesStore: function(){
    return sourcesStore;
    },
    
   
    
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
    }
    

});
