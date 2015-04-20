Ext.define('pmdCE.model.Hairpin', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name',   type: 'string'},
        {name: 'id',   type: 'string'},
        {name: 'type',   type: 'string'},
        {name: 'staff',   type: 'string'},
        {name: 'tstamp',   type: 'string'},
        {name: 'tstamp2',   type: 'string'},
        {name: 'place',   type: 'string'},
        {name: 'form',   type: 'string'},
        {name: 'obvious',   type: 'boolean'},
        {name: 'ambiguous',   type: 'boolean'}
    ]
});