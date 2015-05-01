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

    var selectedPage = Ext.getCmp('pages').getText(); 

   var pageMeasuresMap = Ext.getCmp('cetoolbar').pageMeasuresMap; 
   var test = pageMeasuresMap[selectedPage];  
   var value = test[0];
   var endValue = test[test.length-1];
   
   var pageStaffMap = Ext.getCmp('cetoolbar').staffNr;
   var test = pageStaffMap[selectedPage];
   var staffNr = test[test.length-1];
 
    this.title = selectedPage + ' (measures: '+ value + ' - ' + endValue + '; staffNr: ' + staffNr + ')';

 me = this;
 
  Ext.Ajax.request({
    url: 'resources/xql/pmd_ce_getFacsimilePage.xql',
    async: false,
    method: 'GET',
    params: {
        path: selectedPage
    },
    success: function(response){
       
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
