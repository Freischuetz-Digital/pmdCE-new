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

    stores: [
        // TODO: add global / shared stores here
    ],
    
    
    launch: function () {
        
    }
});
