Ext.define('pmdCE.view.main.CEPanelTable', {
    extend: 'Ext.panel.Panel',
   
    facsimilieView: null,
    xmlView: null,
    editorView: null,
    ceTabView: null,
    
    slursItem: null,
    hairpinsItem: null,
    dynamsItems: null,
    dirsItems: null,
       
    initComponent: function () {
   
        facsimilieView = this.createCEView();
        ceTabView = this.createCETabView();
        xmlView = this.createCEView();
        editorView = this.createCEEditorView();
   
        Ext.create('Ext.panel.Panel', {   
            renderTo : document.body,
            layout: {
            type: 'table',
            columns: 2       
        },
        defaults: {        
            border: true,
            width : 650,
            height : 300    
        },     
    
        items: [
            facsimilieView,
            ceTabView,
            xmlView,
            editorView
        ]
     });   
},
    

createCEView: function(){
    var ceView = Ext.create('Ext.form.Panel', {
        layout:'absolute',
        layoutConfig: {      
        },
        defaultType: 'textfield',
        items: [{
            xtype:'label',
            text: 'Panel Absolute'
        }]         
    });
    return ceView;
},

createCEEditorView: function(){
    var ceView = Ext.create('Ext.panel.Panel', {
        layout: {
            type: 'table',
            columns: 2
        },
        defaults: {
            width : 500,
            height : 150      
        },
       items: [
            {
            html: 'Cell B content',
            width: 350
        },

         Ext.create('Ext.form.Panel', {
            width: 300,
            bodyPadding: 15,
        items: [{
            xtype: 'numberfield',
            //anchor: '100%',
            width: 250,
            name: 'timestamp',
            fieldLabel: 'start timestamp',
            //value: 99,
            maxValue: 99,
            minValue: 0
        },
        {
            xtype: 'numberfield',
            //anchor: '100%',
             width: 250,
            name: 'duration',
            fieldLabel: 'duration',
            //value: 99,
            maxValue: 99,
            minValue: 0
    },
    {
        xtype: 'combobox',
         width: 250,
            name: 'curvedir',
            fieldLabel: 'curvedir'           
        }  
 ]  
}),   
     {  
            html: 'Cell B content',
            width: 350      
        }
      ]        
});
return ceView;
},

createCETabView: function(){

    slursItem = this.createCEItem();
   // hairpinsItems
    //dynamsItems;
   // dirsItems;

    var ceTabView = Ext.create('Ext.tab.Panel', {
    items: [  
        slursItem,  
        {
        title: 'hairpins',
        tabConfig: {
            title: 'hairpins',
            tooltip: 'A button tooltip'
        } 
        }, {
        title: 'dynams'
        }, { title: 'dirs'}   
    ]
});
return ceTabView;
},

createCEItem: function(){
 var ceItem =  Ext.create('Ext.grid.Panel', {    
        title: 'slurs',
        xtype: 'array-grid',
        // store: 'Companies',      
        stateId: 'stateGrid',
        viewConfig: {
            enableTextSelection: true
        },
       columns: [
        { header: 'Staff',  dataIndex: 'staff'},
        { header: 'Curvedir', dataIndex: 'curvedir' },
        { header: 'Bounds', dataIndex: 'bounds' }
    ]
    });

return ceItem;
},

getFacsimilieView: function(){
 return facsimilieView;
},

getXMLView: function(){
 return xmlView;
},

getEditorView: function(){
 return editorView;
},

getCETabView: function(){
 return ceTabView;
},


getCEItem: function(){
 return testItem;
},


});