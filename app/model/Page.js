Ext.define('pmdCE.model.Page', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'path',   type: 'string'},
        {name: 'movement_id', reference: 'pmdCE.model.Movement'}
    ]
});
