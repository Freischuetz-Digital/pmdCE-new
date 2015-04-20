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
       'main.AmbiguousCard',
       'main.ObviousCard',
       'main.ChangeToAmDialog',
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
    
    storeT: null,
    
    
    launch: function () {
 
    renderer = new verovio.toolkit(),
    
        sourcesStore = Ext.create('Ext.data.Store', {
            model: 'pmdCE.model.Source',
             proxy: {
                 type: 'ajax',
                 //url: 'data/pmd_ce_getNavigation.xql',
                 url: 'resources/xql/pmd_ce_getNavigation.xql',
                 reader: {
                     type: 'json',
                     rootProperty: 'sigle'
                 }
             },
             autoLoad: true
         });
         
        /* movementsStore = Ext.create('Ext.data.Store', {
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
         });*/
         
      /*  slursStore = Ext.create('Ext.data.Store', {
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
         }),*/
         
         hairpinDataStore = Ext.create('Ext.data.TreeStore', {
         storeId:'hairpinDataStore',
            model: 'pmdCE.model.Hairpin',
             proxy: {
                 type: 'ajax',
                 extraParams: {path: 'A/A_mov6/A_surface100.xml'},
                 //url: 'resources/data/tree/treegrid.json'
                   url: 'resources/xql/getControlEvents.xql'
            /* reader: {
            type: 'json',
            typeProperty: 'name'
        }*/
        
             },
          /*   listeners: {
            beforeload: function (store, operation, eOpts) {
            console.log("Tree Store");
            console.log(store);
            console.log(operation);
            console.log(eOpts);
            
            var sourcePath = Ext.getCmp('source').getText();
            var movePath = Ext.getCmp('movement').getText();
            var pagePath = Ext.getCmp('pages').getText();
            console.log(sourcePath);
            console.log(movePath);
            console.log(pagePath);
            var path = sourcePath +"/"+movePath+"/"+pagePath+".xml";
            console.log(path);
            operation.params.node=path;*/
            
               /* if (operation.node.attributes.record.data) {
                    var nodeType = operation.node.attributes.record.data["ItemType"];
                    var nodeId = operation.node.attributes.record.data["ItemId"];
                    operation.params.ItemType = nodeType;
                    operation.params.node = nodeId;
                } else {
                    operation.params.node = "root";
                }*/
         //   }
       // },
          
             autoLoad: false
         }),
    /*     
         hairpinStart = Ext.create('Ext.data.Store', {
   // extend: 'Ext.data.Store',

   // alias: 'store.books',
    model: 'pmdCE.model.HairpinStart'
});*/
         
                 
       /*  hairpinsDataStore = Ext.create('Ext.data.TreeStore', {
         storeId:'hairpinsDataStore',
            model: 'pmdCE.model.Task',
             proxy: {
                    type: 'ajax',
                    url: 'resources/data/tree/treegrid.json'
                  //  mode: 'id'
                },
                // For Save
        listeners : {
        write: function(store, operation, opts){
            Ext.each(operation.records, function(record){
                if (record.dirty) {
                    record.commit();
                }
            });
        }
      },
                baseParams: {
        mode: 'id'
    },
                folderSort: true
         }),*/
       
         sourcesStore.load();
      //   movementsStore.load();
      //   pagesStore.load();
       //  hairpinStart.load();
       //  slursStore.load();
      // hairpinDataStore.load();
     
        console.log('+++++++STORE+++++++');
        //console.log(sourcesStore);
        
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
    
    getHairpinDataStore: function(){
    return hairpinDataStore;
    }
    
   
  /*   getHairpinsDataStore: function(){
    return hairpinsDataStore;
    }
    */
    
});
