Ext.define('pmdCE.view.main.AddAmbiguousElDialog', {
   extend: 'Ext.window.Window',
   title: 'Add Ambiguous Element',
   flex: 1,
   //height: 200,
   //width: 500, 
   modal: true,
  // bodyPadding: 10,
   
   staffField: null,  
    tstampField: null,
 placeField: null,
  formField: null,
  tstampField2: null,
  
  ambiguousCard: null,
 
    initComponent: function() {
    
    ambiguousCard = new pmdCE.view.main.AmbiguousCard(),
    
     this.items =  [
               ambiguousCard
            ] , 
   
   
this.callParent()
 
    }
    

});

    
    
    
     
    