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
       'main.Main'      
    ],

    models: [
        'Source',
        'Movement',
        'Page'
    ],
    
    stores: [
        // TODO: add global / shared stores here
    ],
    
    
    launch: function () {
        var sourcesStore = Ext.create('Ext.data.Store', {
            model: 'pmdCE.model.Source',
             proxy: {
                 type: 'ajax',
                 url: 'data/pmd_ce_getSources.xql',
                 reader: {
                     type: 'json',
                     rootProperty: 'sources'
                 }
             },
             autoLoad: true
         });
         
         var movementsStore = Ext.create('Ext.data.Store', {
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


        var pagesStore = Ext.create('Ext.data.Store', {
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

         
         sourcesStore.load();
         movementsStore.load();
         pagesStore.load();
         
         console.log(pagesStore);
    }
});
