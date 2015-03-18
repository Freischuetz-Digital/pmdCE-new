Ext.define('pmdCE.model.Movement', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'name',   type: 'string'},
        {name: 'source_id', reference: 'pmdCE.model.Source'}
    ]
});

