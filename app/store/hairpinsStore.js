Ext.define('pmdCE.model.hairpinsStore', {
extend: 'Ext.data.Store',
    storeId:'hairpinsStore',
    fields:['staff', 'start', 'end', 'place', 'form'],
    data:{'hairpins':[
        { 'staff': '2',  "start":"stTest",  "end":"endTest", "place": "above" }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'hairpins'
        }
    }
});