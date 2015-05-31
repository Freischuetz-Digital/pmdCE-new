Ext.define('pmdCE.model.Dynam', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name',   type: 'string'},
        {name: 'id',   type: 'string'},
        {name: 'operation',   type: 'string'},
         {name: 'type',   type: 'string'},
        {name: 'staff',   type: 'string'},
         {name: 'staff2',   type: 'string'},
         {name: 'measureid',   type: 'string'},
         {name: 'measurenr',   type: 'string'},
        {name: 'tstamp',   type: 'string'},
        {name: 'tstamp2',   type: 'string'},
        {name: 'place',   type: 'string'},
        {name: 'rend',   type: 'string'},
        {name: 'form',   type: 'string'},
        {name: 'obvious',   type: 'boolean'},
        {name: 'ambiguous',   type: 'boolean'}        
    ]
});