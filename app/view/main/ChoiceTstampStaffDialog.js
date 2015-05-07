Ext.define('pmdCE.view.main.ChoiceTstampStaffDialog', {
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
    
   // if(Ext.getCmp('verovioview').getCard() === 1){
        ambiguousCard = new pmdCE.view.main.ChoiceTstampStaffCard();
   /* }
    else if(Ext.getCmp('verovioview').getCard() === 2){
        ambiguousCard = new pmdCE.view.main.ChoiceTstamp2Card();
    }*/
        
    
   // ambiguousCard = new pmdCE.view.main.AmbiguousCard(),
    
     this.items =  [
               ambiguousCard
            ] ; 
   
   
this.callParent();
 
    }
    

    

});

    
    
    
     
    