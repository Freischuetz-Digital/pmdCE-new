Ext.define('pmdCE.model.slursStore', {
extend: 'Ext.data.Store',
    storeId:'slursStore',
    fields:['staff', 'start', 'end', 'curvedir'],
    data:{'slurs':[
        { 'staff': '2',  "start":"stTest",  "end":"endTest", "curvedir": "above" }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'slurs'
        }
    }
});