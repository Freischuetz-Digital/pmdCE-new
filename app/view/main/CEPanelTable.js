Ext.define('pmdCE.view.main.CEPanelTable', {
    extend: 'Ext.panel.Panel',
    
    xtype: 'layout-border',
    requires: [
        'Ext.layout.container.Border'
       // 'pmdCE.view.main.FacsimileView'
    ],
    
    layout: 'border',
    width: 1360,
    height: 570,

    bodyBorder: false,
    
    defaults: {
       // collapsible: true,
        split: true,
        bodyPadding: 10
    },
    
    
    facsimilieView: null,
    xmlView: null,
    editorView: null,
    ceTabView: null,
    
    slursItem: null,
    hairpinsItem: null,
    dynamsItems: null,
    dirsItems: null,
    
/*     initComponent: function() {
  facsimilieView = this.createCEView()
  
 // this.callParent()
    },*/
    
    initComponent: function() {
    
    facsimilieView = new pmdCE.view.main.FacsimileView(),
    xmlView = new pmdCE.view.main.XMLEditorView(),
    ceTabView = new pmdCE.view.main.CETableEditor(),
    //this.createCEView();
    
    this.items = [
    
    //facsimilieView = new pmdCE.view.main.FacsimileView(),
    facsimilieView,
    ceTabView,
       
     /*  {
            title: 'Navigation',
            region:'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 700,
            minWidth: 600,
            maxWidth: 900,
            html: '<p>Secondary content like navigation links could go here</p>'
        },*/
        /*{
            title: 'Main Content',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            html: '<h2>Main Page</h2><p>This is where the main content would go</p>'
        },*/
        xmlView
        /* {
            title: 'Footer',
            region: 'south',
            height: 100,
            minHeight: 75,
            maxHeight: 150,
            html: '<p>Footer content</p>'
        }*/
    ],
     this.callParent();
   },
  
 

    
    
   /*  layout: {
            type: 'table',
            columns: 2       
        },
        defaults: {        
            border: true,
            width : 650,
            height : 300    
        },   */  
   
    
       
 /*   initComponent: function () {
    
    
    this.tbar = [
        {
            title: 'Footer',
            region: 'south',
            height: 100,
            minHeight: 75,
            maxHeight: 150,
            html: '<p>Footer content</p>'
        },
        {
            title: 'Navigation',
            region:'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 125,
            minWidth: 100,
            maxWidth: 250,
            html: '<p>Secondary content like navigation links could go here</p>'
        },
        {
            title: 'Main Content',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            html: '<h2>Main Page</h2><p>This is where the main content would go</p>'
        }
    ];
    
    
   
        facsimilieView = this.createCEView();
        ceTabView = this.createCETabView();
        xmlView = this.createCEView();
        editorView = this.createCEEditorView();
        
        this.tbar = [
            facsimilieView,
            ceTabView,
            xmlView,
            editorView
        ];
        this.callParent();
   
      
},*/
    

createCEView: function(){
    var ceView = Ext.create('Ext.form.Panel', {
        layout:'absolute',
      //  layoutConfig: { 
       region:'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 700,
            minWidth: 600,
            maxWidth: 900,
     //   },
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
}


});