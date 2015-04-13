Ext.define('pmdCE.view.main.AddObviousElDialog', {
   extend: 'Ext.window.Window',
   title: 'Add Obvious Element',
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
  
  obviousCard: null,
 
    initComponent: function() {
    
    obviousCard = new pmdCE.view.main.ObviousCard(),
    
     this.items =  [
               obviousCard
            ] , 
   
   
this.callParent()
 
    }
    

});

    
    
    
     
    