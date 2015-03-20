Ext.define('pmdCE.view.main.CETableEditor', {
    extend: 'Ext.panel.Panel',
        
       requires: [
        'Ext.layout.container.VBox'
    ],
    xtype: 'layout-vertical-box',
    width: 500,
    height: 400,
    
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    
    bodyPadding: 10,

    defaults: {
        frame: true,
        bodyPadding: 10
    },
 
     region: 'center',
     margin: '5 0 0 0',
 
    ceTabView: null,
    editorView: null,
    
    initComponent: function() {
    
    
    ceTabView = this.createCETabView(),
    editorView = this.createCEEditorView(),
    
    this.items = [
    
    ceTabView,
    editorView
/*{
            html: 'Cell C content'
        }*/
    
    
    ],
    
    
          this.callParent()

},
    
    
    
   /* initComponent: function() {
    
    ceTabView = this.createCETabView(),
    
    
     this.tbar =  [
        {
            title: 'Panel 1',
            flex: 1,
            margin: '0 0 10 0',
            html: 'flex : 1'
        },
        {
            title: 'Panel 2',
            height: 100,
            margin: '0 0 10 0',
            html: 'height: 100'
        },
        {
            title: 'Panel 3',
            flex: 2,
            html: 'flex : 2'
        }
    ],*/
    
    
    
/*this.tbar = [ceTabView,
{
            html: 'Cell C content'
        }


    ],*/
/*        this.callParent()

},*/
 

createCETabView: function(){

    slursItem = this.createCEItem();
    hairpinsItems= this.createCEItem();
    dynamsItems= this.createCEItem();
    dirsItems= this.createCEItem();

    var ceTabView = Ext.create('Ext.tab.Panel', {
    items: [  
        slursItem, 
        hairpinsItems,
        dynamsItems,
        dirsItems
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
}


});


