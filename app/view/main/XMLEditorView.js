Ext.define('pmdCE.view.main.XMLEditorView', {
extend: 'Ext.form.Panel',

    layout: 'absolute',
   // xtype: 'textarea',
   // bwrapCfg: {tag: 'pre'},
    //bodyCfg: {tag: 'code'},
  //  width: 500,
   // height: 400,
   border: true,

       // layout:'absolute',
       id: 'xmleditorview',
      flex: 2,
    //  title: 'XML View',
      //region: 'center',
     // collapsible: true,
     // collapsed: true,
     // region:'east',
      
    //  width: 500,
   // height: 100,
    
   /* defaults: {
        //bodyPadding: 15,
       // width: 200,
        height: 100
       // frame: true
    },
        */
        
         defaults: {
        bodyPadding: 15,
       // width: 200,
        height: 100,
        frame: true
    },
    
        
        
initComponent: function() {

//test = $.get( '../../../resources/verovio/hairpin.xml', function( data ) {
//    test = Ext.DomQuery.selectNode('hairpin', data);
//    test2 = document.createElement("div");
//        //test.cloneNode();
//        test2.appendChild(test.cloneNode(true));
//        //console.log('test2.innerHTML', test2.innerHTML);
//        
//        $('#xmleditorview-body').html(Ext.String.htmlEncode(test2.innerHTML));
 


//}),

        this.callParent()

}

    });
