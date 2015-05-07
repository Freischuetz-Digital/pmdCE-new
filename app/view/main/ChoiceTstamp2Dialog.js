Ext.define('pmdCE.view.main.ChoiceTstamp2Dialog', {
   extend: 'Ext.window.Window',
   title: 'Add Choice Element',
   flex: 1,
   //height: 200,
   //width: 500, 
  // modal: true,
  // bodyPadding: 10,
  border:false,
  
   
 
  ambiguousCard: null,
 
    initComponent: function() {
        ambiguousCard = new pmdCE.view.main.ChoiceTstamp2Card();
   
   // ambiguousCard = new pmdCE.view.main.AmbiguousCard(),
    
     this.items =  [
               ambiguousCard
            ] ; 
   
   
this.callParent();
 
    }
    

    

});

    
    
    
     
    