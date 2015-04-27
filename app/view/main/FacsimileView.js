Ext.define('pmdCE.view.main.FacsimileView', {
extend: 'Ext.form.Panel',
        layout:'absolute',
        region:'south',
           // floatable: false,
        //    margin: '5 0 0 0',
         /*   height: 100,
            minHeight: 75,
            maxHeight: 150,*/
      
      //  defaultType: 'textfield',
      flex: 1,
     // title: "Page NR",
       autoScroll: true,
    // image:null,
    // facsimilePath: null,
    me: null,
    id: 'facsimileview',
       
    
initComponent: function() {

var pageNr = Ext.getCmp('pages').getText(); 

this.title = pageNr;

 me = this;
 
  Ext.Ajax.request({
    url: 'resources/xql/pmd_ce_getFacsimilePage.xql',
    async: false,
    method: 'GET',
    params: {
        path: pageNr
    },
    success: function(response){
        console.log(response);
                console.log(typeof response);
       me.createImage(response.responseText);
       
    }
});

        this.callParent()

},

    createImage: function(path){
           var image = Ext.create('Ext.Img', {
    src: path,
    renderTo: Ext.getBody()
});
image.on("load", function() {
    console.log("loaded");
});


this.items = [
image
    ]    
    }

    });
