/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('pmdCE.Application', {
    extend: 'Ext.app.Application',
   
    name: 'pmdCE',
    
    views: [    
       'main.CEPanelTable',
       'main.CEToolbar',
       'main.FacsimileView',
       'main.XMLEditorView',
       'main.CETabEditor',
       'main.SlursItem',
       'main.HairpinsItem',
       'main.DynamsItem',
       'main.DirsItem',
       'main.CEEditor',
       'main.CECenterPanel',
       'main.VerovioView',
       'main.ControllsEditor', 
       'main.VerovioImageStart',
       'main.VerovioImageEnd',
       'main.AddDialog',
       'main.EditDialog',
       'main.ChoiceDialog',
       'main.ControlComponentsTree',
       'main.CenterTabEditor',
       'main.Main'      
    ],

    models: [
        'Source',
        'Movement',
        'Page',
        'Hairpins',
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
    hairpinsDataStore: null,
    
    launch: function () {
    
    renderer = new verovio.toolkit(),
    
        sourcesStore = Ext.create('Ext.data.Store', {
            model: 'pmdCE.model.Source',
             proxy: {
                 type: 'ajax',
                // url: 'data/pmd_ce_getNavigation.xql',
                 url: 'data/pmd_ce_getSources.xql',
                 reader: {
                     type: 'json',
                     rootProperty: 'sources'
                 }
             },
             autoLoad: true
         });
         
         movementsStore = Ext.create('Ext.data.Store', {
            model: 'pmdCE.model.Movement',
             proxy: {
                 type: 'ajax',
                 url: 'data/pmd_ce_getMovements.xql',
                 reader: {
                     type: 'json',
                     rootProperty: 'movements'
                 }
             },
             autoLoad: true
         });


        pagesStore = Ext.create('Ext.data.Store', {
            model: 'pmdCE.model.Page',
             proxy: {
                 type: 'ajax',
                 url: 'data/pmd_ce_getPages.xql',
                 reader: {
                     type: 'json',
                     rootProperty: 'pages'
                 }
             },
             autoLoad: true
         });
         
        slursStore = Ext.create('Ext.data.Store', {
         storeId:'hairpinsStore',
            model: 'pmdCE.model.Hairpins',
             proxy: {
                 type: 'ajax',
                 url: 'data/pmd_ce_getHairpins.xql',
                 //url: 'http://localhost:8080/exist/apps/proofMEIdata/pmdCE/resources/xql/getControlEvents.xql',
                 reader: {
                     type: 'json',
                     rootProperty: 'hairpins'
                 }
             },
             autoLoad: false
         }),
         
                 
         hairpinsDataStore = Ext.create('Ext.data.TreeStore', {
         storeId:'hairpinsDataStore',
            model: 'pmdCE.model.Task',
             proxy: {
                    type: 'ajax',
                    url: 'resources/data/tree/treegrid.json'
                  //  mode: 'id'
                },
                // For Save
       /* listeners : {
        write: function(store, operation, opts){
            Ext.each(operation.records, function(record){
                if (record.dirty) {
                    record.commit();
                }
            });
        }
      },*/
                /*baseParams: {
        mode: 'id'
    },*/
                folderSort: true
         }),
       
         sourcesStore.load();
         movementsStore.load();
         pagesStore.load();
       //  slursStore.load();
       hairpinsDataStore.load();
     
        //console.log('+++++++STORE+++++++');
       // console.log(hairpinsDataStore);
        
    },
    
    getSourcesStore: function(){
    return sourcesStore;
    },
    
    getMovementsStore: function(){
    return movementsStore;
    },
    
    getPagesStore: function(){
    return pagesStore;
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
    
     getHairpinsDataStore: function(){
    return hairpinsDataStore;
    }
    
    
});
