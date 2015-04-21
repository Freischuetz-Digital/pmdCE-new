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
      title: "Page NR",
       autoScroll: true,
     image:null,
     facsimilePath: null,
       
    
initComponent: function() {

 /*new jQuery.ajax('resources/xql/getExtendedStaff.xql', {
            method: 'get',
            data: {path: sourcePath, staffID: staffID, id_prefix: prefix, endPageName: endPageName},
            success: function(result) {*/
            
 
/*Ext.Ajax.request({
	binary: true,
	url: 'resources/xql/pmd_ce_getFacsimilePage.xql',
	 params: {
        path: "A_surface101"
    },
	success: function(response)
	{
		var blob = new Blob([response.responseBytes], {type: 'image/png'}),
			url = window.URL.createObjectURL(blob),
			img = document.createElement('img');
		
		img.src = url;
 
		Ext.getBody().appendChild(img);
	}
});*/


/*Ext.Ajax.request({
    binary: true,  //set binary to true
    url: 'resources/xql/getFacsimilePage.xql',
    success: function(response) {
        var blob = new Blob([response.responseBytes], {type: 'image/png'}),
        url = window.URL.createObjectURL(blob),
        img = document.createElement('img');
        img.src = url;

        //do something with img
    }
});*/

/*Ext.Ajax .request{

url: URL2Use,
params: {...},
method: 'GET',
success: function (result, request) {

divElement.innerHTML = <img src=??? />

}*/

/*facsimilePath = pmdCE.getApplication().getFacsimilePath();
console.log(facsimilePath);
var image = Ext.create('Ext.Img', {
    src: pmdCE.getApplication().getFacsimilePath(),
    renderTo: Ext.getBody()
});
image.on("load", function() {
    console.log("loaded");
});
*/


/*var image = Ext.create('Ext.Img', {
    src: "http://www.freischuetz-digital.de/digilib/Scaler/freidi/sources/A/00000111.jpg?dw=1200&amp;wx=0&amp;wy=0&amp;ww=1&amp;wh=1",
    renderTo: Ext.getBody()
});
image.on("load", function() {
    console.log("loaded");
});


this.items = [
image
  
 
  
 
    
    ]*/
        this.callParent()

}

    });
    
    
   
//});
