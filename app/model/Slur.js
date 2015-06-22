Ext.define('pmdCE.model.Slur', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name',   type: 'string'},
        {name: 'id',   type: 'string'},
        {name: 'operation',   type: 'string'},
        {name: 'type',   type: 'string'},
        {name: 'staff',   type: 'string'},
        {name: 'measureid',   type: 'string'},
        {name: 'measurenr',   type: 'string'},
        {name: 'tstamp',   type: 'string'},
        {name: 'tstamp2',   type: 'string'},
        {name: 'startid',   type: 'string'},
        {name: 'endid',   type: 'string'},
        {name: 'place',   type: 'string'},
        {name: 'form',   type: 'string'},
        {name: 'obvious',   type: 'boolean'},
         {name: 'curvedir',   type: 'string'},
        {name: 'ambiguous',   type: 'boolean'}        
    ]
});